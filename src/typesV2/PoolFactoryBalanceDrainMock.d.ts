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

interface PoolFactoryBalanceDrainMockInterface extends ethers.utils.Interface {
  functions: {
    "autoClaim()": FunctionFragment;
    "burningFee()": FunctionFragment;
    "deployPool(tuple)": FunctionFragment;
    "fee()": FunctionFragment;
    "feeReceiver()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "isValidPool(address)": FunctionFragment;
    "isValidPoolCommitter(address)": FunctionFragment;
    "maxLeverage()": FunctionFragment;
    "mintingFee()": FunctionFragment;
    "numPools()": FunctionFragment;
    "owner()": FunctionFragment;
    "pairTokenBase()": FunctionFragment;
    "pairTokenBaseAddress()": FunctionFragment;
    "poolBase()": FunctionFragment;
    "poolBaseAddress()": FunctionFragment;
    "poolCommitterBase()": FunctionFragment;
    "poolCommitterBaseAddress()": FunctionFragment;
    "poolKeeper()": FunctionFragment;
    "pools(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "secondaryFeeSplitPercent()": FunctionFragment;
    "setAutoClaim(address)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setFeeReceiver(address)": FunctionFragment;
    "setMaxLeverage(uint16)": FunctionFragment;
    "setMintAndBurnFee(uint256,uint256)": FunctionFragment;
    "setPoolKeeper(address)": FunctionFragment;
    "setSecondaryFeeSplitPercent(uint256)": FunctionFragment;
    "setValidPoolCommitter(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "autoClaim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burningFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployPool",
    values: [
      {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        invariantCheckContract: string;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isValidPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isValidPoolCommitter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxLeverage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintingFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "numPools", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pairTokenBase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pairTokenBaseAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolBase", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolBaseAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolCommitterBase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolCommitterBaseAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolKeeper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "secondaryFeeSplitPercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAutoClaim",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxLeverage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintAndBurnFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolKeeper",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSecondaryFeeSplitPercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setValidPoolCommitter",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "autoClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burningFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deployPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidPoolCommitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintingFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numPools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pairTokenBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairTokenBaseAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolBase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolBaseAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolCommitterBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolCommitterBaseAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolKeeper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "secondaryFeeSplitPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAutoClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMintAndBurnFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolKeeper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSecondaryFeeSplitPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValidPoolCommitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "DeployPool(address,address,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PoolKeeperChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolKeeperChanged"): EventFragment;
}

export class PoolFactoryBalanceDrainMock extends BaseContract {
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

  interface: PoolFactoryBalanceDrainMockInterface;

  functions: {
    autoClaim(overrides?: CallOverrides): Promise<[string]>;

    burningFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        invariantCheckContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeReceiver(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    isValidPool(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    isValidPoolCommitter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxLeverage(overrides?: CallOverrides): Promise<[number]>;

    mintingFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    numPools(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pairTokenBase(overrides?: CallOverrides): Promise<[string]>;

    pairTokenBaseAddress(overrides?: CallOverrides): Promise<[string]>;

    poolBase(overrides?: CallOverrides): Promise<[string]>;

    poolBaseAddress(overrides?: CallOverrides): Promise<[string]>;

    poolCommitterBase(overrides?: CallOverrides): Promise<[string]>;

    poolCommitterBaseAddress(overrides?: CallOverrides): Promise<[string]>;

    poolKeeper(overrides?: CallOverrides): Promise<[string]>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    secondaryFeeSplitPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAutoClaim(
      _autoClaim: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMintAndBurnFee(
      _mintingFee: BigNumberish,
      _burningFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValidPoolCommitter(
      _address: string,
      _validity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  autoClaim(overrides?: CallOverrides): Promise<string>;

  burningFee(overrides?: CallOverrides): Promise<BigNumber>;

  deployPool(
    deploymentParameters: {
      poolName: string;
      frontRunningInterval: BigNumberish;
      updateInterval: BigNumberish;
      leverageAmount: BigNumberish;
      quoteToken: string;
      oracleWrapper: string;
      settlementEthOracle: string;
      invariantCheckContract: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  feeReceiver(overrides?: CallOverrides): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  isValidPool(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  isValidPoolCommitter(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxLeverage(overrides?: CallOverrides): Promise<number>;

  mintingFee(overrides?: CallOverrides): Promise<BigNumber>;

  numPools(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pairTokenBase(overrides?: CallOverrides): Promise<string>;

  pairTokenBaseAddress(overrides?: CallOverrides): Promise<string>;

  poolBase(overrides?: CallOverrides): Promise<string>;

  poolBaseAddress(overrides?: CallOverrides): Promise<string>;

  poolCommitterBase(overrides?: CallOverrides): Promise<string>;

  poolCommitterBaseAddress(overrides?: CallOverrides): Promise<string>;

  poolKeeper(overrides?: CallOverrides): Promise<string>;

  pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  secondaryFeeSplitPercent(overrides?: CallOverrides): Promise<BigNumber>;

  setAutoClaim(
    _autoClaim: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeReceiver(
    _feeReceiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxLeverage(
    newMaxLeverage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMintAndBurnFee(
    _mintingFee: BigNumberish,
    _burningFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPoolKeeper(
    _poolKeeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSecondaryFeeSplitPercent(
    newFeePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValidPoolCommitter(
    _address: string,
    _validity: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    autoClaim(overrides?: CallOverrides): Promise<string>;

    burningFee(overrides?: CallOverrides): Promise<BigNumber>;

    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        invariantCheckContract: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    isValidPool(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    isValidPoolCommitter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxLeverage(overrides?: CallOverrides): Promise<number>;

    mintingFee(overrides?: CallOverrides): Promise<BigNumber>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pairTokenBase(overrides?: CallOverrides): Promise<string>;

    pairTokenBaseAddress(overrides?: CallOverrides): Promise<string>;

    poolBase(overrides?: CallOverrides): Promise<string>;

    poolBaseAddress(overrides?: CallOverrides): Promise<string>;

    poolCommitterBase(overrides?: CallOverrides): Promise<string>;

    poolCommitterBaseAddress(overrides?: CallOverrides): Promise<string>;

    poolKeeper(overrides?: CallOverrides): Promise<string>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    secondaryFeeSplitPercent(overrides?: CallOverrides): Promise<BigNumber>;

    setAutoClaim(_autoClaim: string, overrides?: CallOverrides): Promise<void>;

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMintAndBurnFee(
      _mintingFee: BigNumberish,
      _burningFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setValidPoolCommitter(
      _address: string,
      _validity: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    DeployPool(
      pool?: string | null,
      poolCommitter?: null,
      ticker?: null
    ): TypedEventFilter<
      [string, string, string],
      { pool: string; poolCommitter: string; ticker: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    PoolKeeperChanged(
      _poolKeeper?: null
    ): TypedEventFilter<[string], { _poolKeeper: string }>;
  };

  estimateGas: {
    autoClaim(overrides?: CallOverrides): Promise<BigNumber>;

    burningFee(overrides?: CallOverrides): Promise<BigNumber>;

    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        invariantCheckContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    isValidPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidPoolCommitter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxLeverage(overrides?: CallOverrides): Promise<BigNumber>;

    mintingFee(overrides?: CallOverrides): Promise<BigNumber>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pairTokenBase(overrides?: CallOverrides): Promise<BigNumber>;

    pairTokenBaseAddress(overrides?: CallOverrides): Promise<BigNumber>;

    poolBase(overrides?: CallOverrides): Promise<BigNumber>;

    poolBaseAddress(overrides?: CallOverrides): Promise<BigNumber>;

    poolCommitterBase(overrides?: CallOverrides): Promise<BigNumber>;

    poolCommitterBaseAddress(overrides?: CallOverrides): Promise<BigNumber>;

    poolKeeper(overrides?: CallOverrides): Promise<BigNumber>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    secondaryFeeSplitPercent(overrides?: CallOverrides): Promise<BigNumber>;

    setAutoClaim(
      _autoClaim: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMintAndBurnFee(
      _mintingFee: BigNumberish,
      _burningFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValidPoolCommitter(
      _address: string,
      _validity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    autoClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burningFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        invariantCheckContract: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isValidPool(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidPoolCommitter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxLeverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintingFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairTokenBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairTokenBaseAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolBaseAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolCommitterBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolCommitterBaseAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    secondaryFeeSplitPercent(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAutoClaim(
      _autoClaim: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMintAndBurnFee(
      _mintingFee: BigNumberish,
      _burningFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValidPoolCommitter(
      _address: string,
      _validity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
