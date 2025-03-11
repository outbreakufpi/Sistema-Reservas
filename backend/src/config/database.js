import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI is not defined");
    process.exit(1);
  }
  try {
    await mongoose
      .connect(uri, {})
      .then(() => {
        console.log("Conectado ao MongoDB");
      })
      .catch((err) => {
        console.error("Erro ao conectar ao MongoDB: ", err);
        process.exit(1);
      });
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB: ", err);
    process.exit(1);
  }
};
