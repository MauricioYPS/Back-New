import mongoose, { mongo } from "mongoose";

const url = process.env.URI_MONGO
console.log(url);

// mongoose.connect(url)
// .then(()=> console.log("Base de datos conectada"))
// .catch((error) => console.log(error))

async function coneccionBaseDeDatos() {
   try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Base de datos On trycatch");
    
   } catch (error) {
    console.log(error);
    
   } 
}
coneccionBaseDeDatos()