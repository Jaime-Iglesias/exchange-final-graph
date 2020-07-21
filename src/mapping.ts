import { BigInt } from "@graphprotocol/graph-ts"
import {
  Dex,
  OrderCanceled,
  OrderCreated,
  OrderFilled,
  TokenAdded,
  TokenRemoved,
  TokensDeposited,
  TokensWithdrawed
} from "../generated/Dex/Dex"

import { ERC20 } from "../generated/Dex/ERC20";

import {
    Token,
    User,
    UserTokenBalance,
    Order
} from '../generated/schema';

const zero_address = '0x0000000000000000000000000000000000000000';

export function handleOrderCanceled(event: OrderCanceled): void {
    let orderId = event.params.orderHash.toHex();

    let order = Order.load(orderId);
    order.canceled = true;
    order.save();
}

export function handleOrderCreated(event: OrderCreated): void {
    let orderId = event.params.orderHash.toHex();

    let order = new Order(orderId);

    // fill order data
    order.haveToken = event.params.haveToken.toHex();
    order.haveAmount = event.params.haveAmount;
    order.wantToken = event.params.wantToken.toHex();
    order.wantAmount = event.params.wantAmount;
    order.creator = event.params.creator.toHex();
    order.nonce = event.params.nonce;
    order.expirationBlock = event.params.expirationBlock;

    // update user balance
    let creatorTokenBalanceId = event.params.creator.toHex() + '-' + event.params.haveToken.toHex();
    let creatorTokenBalance = UserTokenBalance.load(creatorTokenBalanceId);

    creatorTokenBalance.amountAvailable = (creatorTokenBalance.amountAvailable).minus(event.params.haveAmount);
    creatorTokenBalance.amountLocked = (creatorTokenBalance.amountLocked).plus(event.params.haveAmount);

    creatorTokenBalance.save();
    order.save();
}

export function handleOrderFilled(event: OrderFilled): void {
    let orderId = event.params.orderHash.toHex();

    let order = Order.load(orderId);
    order.filledAmount = (order.filledAmount).plus(event.params.amount);

    // load order creator have and want token balances
    let creatorId = order.creator;

    // load order filler have and want token balances
    let fillerId = event.params.filler.toHex();

    // calculate the amount the filler gets
    let amountGet = ((order.haveAmount).times(event.params.amount)).div(order.wantAmount);

    // update token balance for creator
    // update token balance for filler

    // persist
}

export function handleTokenAdded(event: TokenAdded): void {
    let tokenId = event.params.token.toHex();

    let token = Token.load(tokenId);

    // if the token was not previously added...
    if (token == null) {
        token = new Token(tokenId);

        // the token is ETH
        if (tokenId == zero_address) {
            token.name = "Ether";
            token.symbol = 'ETH';
        }

        token.decimals = BigInt.fromI32(18);

        if (tokenId != zero_address) {
            token.name = "Unnamed ERC20";
            token.symbol = 'ERC20';

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

    let depositId = event.params.depositer.toHex() + '-' + event.params.token.toHex();
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
    let depositId = event.params.withdrawer.toHex() + '-' + event.params.token.toHex();
    let deposit = UserTokenBalance.load(depositId);
    deposit.amountAvailable = (deposit.amountAvailable).minus(event.params.amount);
    deposit.save();
}
