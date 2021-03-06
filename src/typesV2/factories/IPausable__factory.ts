/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPausable, IPausableInterface } from "../IPausable";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPausable__factory {
  static readonly abi = _abi;
  static createInterface(): IPausableInterface {
    return new utils.Interface(_abi) as IPausableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPausable {
    return new Contract(address, _abi, signerOrProvider) as IPausable;
  }
}
