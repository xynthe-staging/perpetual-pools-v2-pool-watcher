/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IHistoricalOracleWrapperInterface extends ethers.utils.Interface {
  functions: {
    "fromWad(int256)": FunctionFragment;
    "getPrice(uint256)": FunctionFragment;
    "getPriceAndMetadata()": FunctionFragment;
    "oracle()": FunctionFragment;
    "setOracle(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "fromWad",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceAndMetadata",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;

  decodeFunctionResult(functionFragment: "fromWad", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceAndMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;

  events: {};
}

export class IHistoricalOracleWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IHistoricalOracleWrapperInterface;

  functions: {
    fromWad(wad: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    getPrice(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriceAndMetadata(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { _price: BigNumber; _data: string }>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  fromWad(wad: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getPriceAndMetadata(
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { _price: BigNumber; _data: string }>;

  oracle(overrides?: CallOverrides): Promise<string>;

  setOracle(
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fromWad(wad: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceAndMetadata(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { _price: BigNumber; _data: string }>;

    oracle(overrides?: CallOverrides): Promise<string>;

    setOracle(_oracle: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    fromWad(wad: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceAndMetadata(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fromWad(
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceAndMetadata(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
