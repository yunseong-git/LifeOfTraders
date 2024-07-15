import mongoose from "mongoose";

const { Schema } = mongoose;

const estateTransactionSchema = new Schema({
    userId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    action: { type: String, enum: ["buy", "sell"], required: true },
    transactionPrice: { type: Number, required: true },
    transactionAmount: { type: Number, required: true },
  });
  
  const CarTransaction = mongoose.model("CarTransaction",estateTransactionSchema);
  const RealEstateTransaction = mongoose.model("RealEstateTransaction",estateTransactionSchema);
  const CoinTransaction = mongoose.model("CoinTransaction",estateTransactionSchema);
  
  const transaction = {
    CarTransaction,
    RealEstateTransaction,
    CoinTransaction,
  };

  export default transaction;