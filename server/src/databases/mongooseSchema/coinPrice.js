import mongoose from "mongoose";

const { Schema } = mongoose;

const coinPriceSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  price: { type: Number, required: true },
});

const BlackCowCoinPrice = mongoose.model("BlackCowCoinPrice", coinPriceSchema);
const CarPoorccinoPrice = mongoose.model("CarPoorccinoPrice", coinPriceSchema);
const WalnutFinancePrice = mongoose.model("WalnutFinancePrice",coinPriceSchema);
const LightningRatNetworkPrice = mongoose.model("LightningRatNetworkPrice",coinPriceSchema);
const HalfChainPrice = mongoose.model("HalfChainPrice", coinPriceSchema);
const PeanutAirPrice = mongoose.model("PeanutAirPrice", coinPriceSchema);

const coinPrice = {
    BlackCowCoinPrice,
    CarPoorccinoPrice,
    WalnutFinancePrice,
    LightningRatNetworkPrice,
    HalfChainPrice,
    PeanutAirPrice
};

export default coinPrice;