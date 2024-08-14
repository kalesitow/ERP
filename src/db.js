import mongoose from "mongoose"; // Importa mongoose para la conexión con MongoDB

export const connectDB = async() => { // Función para conectar a la base de datos
    try {
        await mongoose.connect("mongodb://localhost/cruddb"); // Conecta a la base de datos MongoDB local
        console.log(">>>> DB is connected") // Imprime un mensaje si la conexión es exitosa
    } catch (error) {
        console.log(error); // Imprime el error si la conexión falla
    }
};
