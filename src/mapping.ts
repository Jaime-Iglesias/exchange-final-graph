import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  OrderCanceled,
  OrderCreated,
  OrderFilled,
  OwnershipTransferred,
  TokenAdded,
  TokenRemoved,
  TokensDeposited,
  TokensWithdrawed
} from "../generated/Contract/Contract"

import { ERC20 } from "../generated/Contract/ERC20";

import {
    Token,
    User,
    UserTokenBalance
} from '../../ExchangeFinal/generated/schema';

export function handleOrderCanceled(event: OrderCanceled): void {}

export function handleOrderCreated(event: OrderCreated): void {}

export function handleOrderFilled(event: OrderFilled): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTokenAdded(event: TokenAdded): void {
    let tokenId = event.params.token.toHex();

    let token = Token.load(tokenId);

    // if the token was not previously added...
    if (token == null) {
        token = new Token(tokenId);
        token.name = "Unnamed ERC20";
        token.symbol = 'ERC20';
        token.decimals = BigInt.fromI32(18);

        // try to fetch optional fields
        let tokenContract = ERC20.bind(event.params.token);

        let decimalsCall = tokenContract.try_decimals();
        let symbolCall = tokenContract.try_name();
        let nameCall = tokenContract.try_symbol();

        if (!decimalsCall.reverted) {
            token.decimals = BigInt.fromI32(decimalsCall.value);
        }
        if (!symbolCall.reverted) {
            token.symbol = symbolCall.value;
        }
        if (!nameCall.reverted) {
            token.name = nameCall.value;
        }
    }

    token.admitted = true;
    token.save();
}

export function handleTokenRemoved(event: TokenRemoved): void {
    let tokenId = event.params.token.toHex();
    let token = Token.load(tokenId);
    token.admitted = false;
    token.save();
}

export function handleTokensDeposited(event: TokensDeposited): void {
    let userId = event.params.depositer.toHex();
    let user = User.load(userId);

    // first time user deposits
    if (user == null) {
        user = new User(userId);
    }

    let depositId = event.params.depositer.toHex() + '-' + event.params.token;
    let deposit = UserTokenBalance.load(depositId);

    // first time user deposits this token
    if (deposit == null) {
        deposit = new UserTokenBalance(depositId);
        deposit.user = userId;
    }

    deposit.amountAvailable = (deposit.amountAvailable).plus(event.params.amount);
    user.save();
    deposit.save();
}

export function handleTokensWithdrawed(event: TokensWithdrawed): void {
    let depositId = event.params.withdrawer.toHex() + '-' + event.params.token;
    let deposit = UserTokenBalance.load(depositId);
    deposit.amountAvailable = (deposit.amountAvailable).minus(event.params.amount);
    deposit.save();
}
