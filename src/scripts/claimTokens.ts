import * as anchor from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import fs from "fs-extra";
import { getAnchorProgram, MINER_SECRET_KEY, PROGRAM_IDS } from "../constants";
import { QuarryMineJSON } from "../idls/quarry_mine";

const {
  instruction: programInstruction,
  provider: { connection: SOLANA_CONNECTION },
} = getAnchorProgram(QuarryMineJSON, "mine");

(async function () {
  const minerAuthWallet = new anchor.Wallet(
    Keypair.fromSecretKey(MINER_SECRET_KEY)
  );

  console.log("Miner Authority:", minerAuthWallet.publicKey.toString());

  const mintRaw = fs.readJSONSync(`${__dirname}/../pubkeys/mint.json`);
  const minerPDARaw = fs.readJSONSync(`${__dirname}/../pubkeys/minerPDA.json`);

  if (!mintRaw || !minerPDARaw) {
    throw new Error("Required accounts not present");
  }

  const mint = new PublicKey(mintRaw);
  const minerPDA = new PublicKey(minerPDARaw);

  const transaction = new Transaction();
  transaction.feePayer = minerAuthWallet.publicKey;
  transaction.recentBlockhash = (
    await SOLANA_CONNECTION.getRecentBlockhash()
  ).blockhash;

  const minerAuthTokenAcc = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    mint,
    minerAuthWallet.publicKey,
    false
  );

  if (!(await SOLANA_CONNECTION.getAccountInfo(minerAuthTokenAcc))) {
    console.log(
      "Creating Token Associated Token account for Miner Authority:",
      minerAuthTokenAcc.toString()
    );

    const createRewardsAssocTokenIx =
      Token.createAssociatedTokenAccountInstruction(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        mint,
        minerAuthTokenAcc,
        minerAuthWallet.publicKey,
        minerAuthWallet.publicKey
      );

    transaction.add(createRewardsAssocTokenIx);
  }

  const minerTokenAccount = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    mint,
    minerPDA,
    true
  );

  console.log(
    "Claiming Tokens from staking and depositing to:",
    minerAuthTokenAcc.toString()
  );

  const claimTokensIx = programInstruction.claimTokens({
    accounts: {
      authority: minerAuthWallet.publicKey,
      miner: minerPDA,
      mint,
      authorityTokenAccount: minerAuthTokenAcc,
      minerTokenAccount,
      tokenProgram: TOKEN_PROGRAM_ID,
    },
  });

  transaction.add(claimTokensIx);

  const signedTransaction = await minerAuthWallet.signTransaction(transaction);
  await SOLANA_CONNECTION.sendRawTransaction(signedTransaction.serialize());
})();
