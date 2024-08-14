import app from './app.js' // Importa la aplicación Express desde el archivo app.js
import { connectDB } from "./db.js"; // Importa la función para conectar a la base de datos

connectDB(); // Conecta a la base de datos

app.listen(3000) // Hace que la aplicación del servidor escuche en el puerto 3000
console.log('Server on port', 3000) // Muestra un mensaje en la consola cuando el servidor esté en ejecución
