// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class OrderCanceled extends EthereumEvent {
  get params(): OrderCanceled__Params {
    return new OrderCanceled__Params(this);
  }
}

export class OrderCanceled__Params {
  _event: OrderCanceled;

  constructor(event: OrderCanceled) {
    this._event = event;
  }

  get orderHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class OrderCreated extends EthereumEvent {
  get params(): OrderCreated__Params {
    return new OrderCreated__Params(this);
  }
}

export class OrderCreated__Params {
  _event: OrderCreated;

  constructor(event: OrderCreated) {
    this._event = event;
  }

  get haveToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get haveAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get wantToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get wantAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get nonce(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get expirationBlock(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class OrderFilled extends EthereumEvent {
  get params(): OrderFilled__Params {
    return new OrderFilled__Params(this);
  }
}

export class OrderFilled__Params {
  _event: OrderFilled;

  constructor(event: OrderFilled) {
    this._event = event;
  }

  get orderHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenAdded extends EthereumEvent {
  get params(): TokenAdded__Params {
    return new TokenAdded__Params(this);
  }
}

export class TokenAdded__Params {
  _event: TokenAdded;

  constructor(event: TokenAdded) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TokenRemoved extends EthereumEvent {
  get params(): TokenRemoved__Params {
    return new TokenRemoved__Params(this);
  }
}

export class TokenRemoved__Params {
  _event: TokenRemoved;

  constructor(event: TokenRemoved) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TokensDeposited extends EthereumEvent {
  get params(): TokensDeposited__Params {
    return new TokensDeposited__Params(this);
  }
}

export class TokensDeposited__Params {
  _event: TokensDeposited;

  constructor(event: TokensDeposited) {
    this._event = event;
  }

  get depositer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokensWithdrawed extends EthereumEvent {
  get params(): TokensWithdrawed__Params {
    return new TokensWithdrawed__Params(this);
  }
}

export class TokensWithdrawed__Params {
  _event: TokensWithdrawed;

  constructor(event: TokensWithdrawed) {
    this._event = event;
  }

  get withdrawer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract__userBalanceForTokenResultValue0Struct extends EthereumTuple {
  get available(): BigInt {
    return this[0].toBigInt();
  }

  get locked(): BigInt {
    return this[1].toBigInt();
  }
}

export class Contract__getOrderInfoResultValue0Struct extends EthereumTuple {
  get canceled(): boolean {
    return this[0].toBoolean();
  }

  get haveToken(): Address {
    return this[1].toAddress();
  }

  get haveAmount(): BigInt {
    return this[2].toBigInt();
  }

  get wantToken(): Address {
    return this[3].toAddress();
  }

  get wantAmount(): BigInt {
    return this[4].toBigInt();
  }

  get creator(): Address {
    return this[5].toAddress();
  }

  get nonce(): BigInt {
    return this[6].toBigInt();
  }

  get expirationBlock(): BigInt {
    return this[7].toBigInt();
  }

  get filledAmount(): BigInt {
    return this[8].toBigInt();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);

    return result[0].toBoolean();
  }

  try_isOwner(): CallResult<boolean> {
    let result = super.tryCall("isOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  userBalanceForToken(
    token: Address
  ): Contract__userBalanceForTokenResultValue0Struct {
    let result = super.call("userBalanceForToken", [
      EthereumValue.fromAddress(token)
    ]);

    return result[0].toTuple() as Contract__userBalanceForTokenResultValue0Struct;
  }

  try_userBalanceForToken(
    token: Address
  ): CallResult<Contract__userBalanceForTokenResultValue0Struct> {
    let result = super.tryCall("userBalanceForToken", [
      EthereumValue.fromAddress(token)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      value[0].toTuple() as Contract__userBalanceForTokenResultValue0Struct
    );
  }

  isValidToken(token: Address): boolean {
    let result = super.call("isValidToken", [EthereumValue.fromAddress(token)]);

    return result[0].toBoolean();
  }

  try_isValidToken(token: Address): CallResult<boolean> {
    let result = super.tryCall("isValidToken", [
      EthereumValue.fromAddress(token)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getValidTokens(): Array<Address> {
    let result = super.call("getValidTokens", []);

    return result[0].toAddressArray();
  }

  try_getValidTokens(): CallResult<Array<Address>> {
    let result = super.tryCall("getValidTokens", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }

  orderExists(orderHash: Bytes): boolean {
    let result = super.call("orderExists", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);

    return result[0].toBoolean();
  }

  try_orderExists(orderHash: Bytes): CallResult<boolean> {
    let result = super.tryCall("orderExists", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  orderIsCanceled(orderHash: Bytes): boolean {
    let result = super.call("orderIsCanceled", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);

    return result[0].toBoolean();
  }

  try_orderIsCanceled(orderHash: Bytes): CallResult<boolean> {
    let result = super.tryCall("orderIsCanceled", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  orderIsFilled(orderHash: Bytes): boolean {
    let result = super.call("orderIsFilled", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);

    return result[0].toBoolean();
  }

  try_orderIsFilled(orderHash: Bytes): CallResult<boolean> {
    let result = super.tryCall("orderIsFilled", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  orderIsExpired(orderHash: Bytes): boolean {
    let result = super.call("orderIsExpired", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);

    return result[0].toBoolean();
  }

  try_orderIsExpired(orderHash: Bytes): CallResult<boolean> {
    let result = super.tryCall("orderIsExpired", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getOrderFill(orderHash: Bytes): BigInt {
    let result = super.call("getOrderFill", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);

    return result[0].toBigInt();
  }

  try_getOrderFill(orderHash: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getOrderFill", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getOrderInfo(orderHash: Bytes): Contract__getOrderInfoResultValue0Struct {
    let result = super.call("getOrderInfo", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);

    return result[0].toTuple() as Contract__getOrderInfoResultValue0Struct;
  }

  try_getOrderInfo(
    orderHash: Bytes
  ): CallResult<Contract__getOrderInfoResultValue0Struct> {
    let result = super.tryCall("getOrderInfo", [
      EthereumValue.fromFixedBytes(orderHash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      value[0].toTuple() as Contract__getOrderInfoResultValue0Struct
    );
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class DepositCall extends EthereumCall {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositTokenCall extends EthereumCall {
  get inputs(): DepositTokenCall__Inputs {
    return new DepositTokenCall__Inputs(this);
  }

  get outputs(): DepositTokenCall__Outputs {
    return new DepositTokenCall__Outputs(this);
  }
}

export class DepositTokenCall__Inputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositTokenCall__Outputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }
}

export class WithdrawCall extends EthereumCall {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall extends EthereumCall {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}

export class AddTokenCall extends EthereumCall {
  get inputs(): AddTokenCall__Inputs {
    return new AddTokenCall__Inputs(this);
  }

  get outputs(): AddTokenCall__Outputs {
    return new AddTokenCall__Outputs(this);
  }
}

export class AddTokenCall__Inputs {
  _call: AddTokenCall;

  constructor(call: AddTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddTokenCall__Outputs {
  _call: AddTokenCall;

  constructor(call: AddTokenCall) {
    this._call = call;
  }
}

export class RemoveTokenCall extends EthereumCall {
  get inputs(): RemoveTokenCall__Inputs {
    return new RemoveTokenCall__Inputs(this);
  }

  get outputs(): RemoveTokenCall__Outputs {
    return new RemoveTokenCall__Outputs(this);
  }
}

export class RemoveTokenCall__Inputs {
  _call: RemoveTokenCall;

  constructor(call: RemoveTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveTokenCall__Outputs {
  _call: RemoveTokenCall;

  constructor(call: RemoveTokenCall) {
    this._call = call;
  }
}

export class CreateOrderCall extends EthereumCall {
  get inputs(): CreateOrderCall__Inputs {
    return new CreateOrderCall__Inputs(this);
  }

  get outputs(): CreateOrderCall__Outputs {
    return new CreateOrderCall__Outputs(this);
  }
}

export class CreateOrderCall__Inputs {
  _call: CreateOrderCall;

  constructor(call: CreateOrderCall) {
    this._call = call;
  }

  get haveToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get haveAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get wantToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get wantAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateOrderCall__Outputs {
  _call: CreateOrderCall;

  constructor(call: CreateOrderCall) {
    this._call = call;
  }
}

export class CancelOrderCall extends EthereumCall {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }

  get orderHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class FillOrderCall extends EthereumCall {
  get inputs(): FillOrderCall__Inputs {
    return new FillOrderCall__Inputs(this);
  }

  get outputs(): FillOrderCall__Outputs {
    return new FillOrderCall__Outputs(this);
  }
}

export class FillOrderCall__Inputs {
  _call: FillOrderCall;

  constructor(call: FillOrderCall) {
    this._call = call;
  }

  get orderHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get amountToFill(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FillOrderCall__Outputs {
  _call: FillOrderCall;

  constructor(call: FillOrderCall) {
    this._call = call;
  }
}
