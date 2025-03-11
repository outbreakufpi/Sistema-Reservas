import mongoose from 'mongoose'

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    }catch {
        console.log('Erro ao conectar ao MongoDB: ', err);
    process.exit(1);
    }
}