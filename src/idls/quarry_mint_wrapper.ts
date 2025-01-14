export type QuarryMintWrapperIDL =
{
  "version": "1.10.0",
  "name": "quarry_mint_wrapper",
  "instructions": [
    {
      "name": "newWrapper",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "hardCap",
          "type": "u64"
        }
      ]
    },
    {
      "name": "transferAdmin",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nextAdmin",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "acceptAdmin",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingAdmin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "newMinter",
      "accounts": [
        {
          "name": "auth",
          "accounts": [
            {
              "name": "mintWrapper",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "admin",
              "isMut": false,
              "isSigner": true
            }
          ]
        },
        {
          "name": "minterAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "minterUpdate",
      "accounts": [
        {
          "name": "auth",
          "accounts": [
            {
              "name": "mintWrapper",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "admin",
              "isMut": false,
              "isSigner": true
            }
          ]
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "allowance",
          "type": "u64"
        }
      ]
    },
    {
      "name": "performMint",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "minterAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "MintWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "hardCap",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "pendingAdmin",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "numMinters",
            "type": "u64"
          },
          {
            "name": "totalAllowance",
            "type": "u64"
          },
          {
            "name": "totalMinted",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Minter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintWrapper",
            "type": "publicKey"
          },
          {
            "name": "minterAuthority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "allowance",
            "type": "u64"
          },
          {
            "name": "totalMinted",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewMintWrapperEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "hardCap",
          "type": "u64",
          "index": false
        },
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MintWrapperAdminProposeEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "currentAdmin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "pendingAdmin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MintWrapperAdminUpdateEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "previousAdmin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "NewMinterEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "index",
          "type": "u64",
          "index": false
        },
        {
          "name": "minterAuthority",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MinterAllowanceUpdateEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "previousAllowance",
          "type": "u64",
          "index": false
        },
        {
          "name": "allowance",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "MinterMintEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "destination",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 301,
      "name": "HardcapExceeded",
      "msg": "Cannot mint over hard cap."
    },
    {
      "code": 302,
      "name": "MinterAllowanceExceeded",
      "msg": "Minter allowance exceeded."
    }
  ]
}
;
export const QuarryMintWrapperJSON: QuarryMintWrapperIDL =
{
  "version": "1.10.0",
  "name": "quarry_mint_wrapper",
  "instructions": [
    {
      "name": "newWrapper",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "hardCap",
          "type": "u64"
        }
      ]
    },
    {
      "name": "transferAdmin",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nextAdmin",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "acceptAdmin",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingAdmin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "newMinter",
      "accounts": [
        {
          "name": "auth",
          "accounts": [
            {
              "name": "mintWrapper",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "admin",
              "isMut": false,
              "isSigner": true
            }
          ]
        },
        {
          "name": "minterAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "minterUpdate",
      "accounts": [
        {
          "name": "auth",
          "accounts": [
            {
              "name": "mintWrapper",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "admin",
              "isMut": false,
              "isSigner": true
            }
          ]
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "allowance",
          "type": "u64"
        }
      ]
    },
    {
      "name": "performMint",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "minterAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "MintWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "hardCap",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "pendingAdmin",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "numMinters",
            "type": "u64"
          },
          {
            "name": "totalAllowance",
            "type": "u64"
          },
          {
            "name": "totalMinted",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Minter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintWrapper",
            "type": "publicKey"
          },
          {
            "name": "minterAuthority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "allowance",
            "type": "u64"
          },
          {
            "name": "totalMinted",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewMintWrapperEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "hardCap",
          "type": "u64",
          "index": false
        },
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MintWrapperAdminProposeEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "currentAdmin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "pendingAdmin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MintWrapperAdminUpdateEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "previousAdmin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "NewMinterEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "index",
          "type": "u64",
          "index": false
        },
        {
          "name": "minterAuthority",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MinterAllowanceUpdateEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "previousAllowance",
          "type": "u64",
          "index": false
        },
        {
          "name": "allowance",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "MinterMintEvent",
      "fields": [
        {
          "name": "mintWrapper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "destination",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 301,
      "name": "HardcapExceeded",
      "msg": "Cannot mint over hard cap."
    },
    {
      "code": 302,
      "name": "MinterAllowanceExceeded",
      "msg": "Minter allowance exceeded."
    }
  ]
}
;
import { generateErrorMap } from '@saberhq/anchor-contrib';
export const QuarryMintWrapperErrors = generateErrorMap(QuarryMintWrapperJSON);
