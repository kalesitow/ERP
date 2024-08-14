import jwt from 'jsonwebtoken' // Importa jsonwebtoken para la gestión de tokens
import {TOKEN_SECRET} from "../config.js"; // Importa el secreto del token desde la configuración

export function createAccesToken(payload){ // Función para crear un token de acceso
    return new Promise((resolve, reject) =>{ // Devuelve una promesa
        jwt.sign( // Firma un nuevo token
            payload, // Datos del payload para incluir en el token
            TOKEN_SECRET, // Secreto para firmar el token
        {
            expiresIn: "1d", // Tiempo de expiración del token (1 día)
        },
        (err, token) => { // Callback que maneja el resultado de la firma
            if (err) reject(err) // Rechaza la promesa si hay un error
                resolve(token) // Resuelve la promesa con el token firmado
        }
    );
    });
}
