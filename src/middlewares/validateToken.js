import jwt from 'jsonwebtoken' // Importa jsonwebtoken para la verificación de tokens
import {TOKEN_SECRET} from "../config.js"; // Importa el secreto del token desde la configuración

export const authRequired = (req, res, next) =>{ // Middleware para autenticar usuarios
    const {token} = req.cookies; // Extrae el token de las cookies

    if(!token) // Si no hay token
        return res.status(401).json({message: "Este usuario no tiene permisos"}); // Responde con error de permisos
    
    jwt.verify(token, TOKEN_SECRET, (err, user) =>{ // Verifica el token
        if (err) return res.status(401).json({message: "Este usuario no tiene permisos"}); // Responde con error si la verificación falla
        
        req.user = user // Asocia el usuario decodificado al objeto de solicitud

        next() // Llama al siguiente middleware o controlador
    })
}
