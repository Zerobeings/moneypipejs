module.exports = [
  {
    "inputs": [],
    "name": "TransferFailed",
    "type": "error"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "value",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "total",
            "type": "uint32"
          }
        ],
        "internalType": "struct Stream.Member[]",
        "name": "m",
        "type": "tuple[]"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "members",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "value",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "total",
            "type": "uint32"
          }
        ],
        "internalType": "struct Stream.Member[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]
