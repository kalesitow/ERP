import express from 'express' // Importa Express, un framework web para Node.js
import morgan from 'morgan'; // Importa Morgan, un middleware para registro de solicitudes HTTP
import cookieParser from "cookie-parser"; // Importa cookie-parser para el manejo de cookies

import authRoutes from "./routes/auth.routes.js"; // Importa las rutas de autenticación
import taskRoutes from "./routes/task.routes.js"; // Importa las rutas de tareas

const app = express(); // Crea una instancia de la aplicación Express

app.use(morgan('dev')); // Usa Morgan para registrar las solicitudes HTTP en el modo de desarrollo
app.use(express.json()); // Usa el middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(cookieParser()); // Usa el middleware para analizar las cookies

app.use('/api', authRoutes); // Define la ruta base '/api' para las rutas de autenticación
app.use('/api', taskRoutes); // Define la ruta base '/api' para las rutas de tareas

export default app; // Exporta la aplicación para su uso en otras partes de la aplicación
