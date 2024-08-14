import User from "../models/user.model.js"; // Importa el modelo de usuario
import bcrypt from 'bcryptjs' // Importa bcrypt para el manejo de contraseñas
import jwt from "jsonwebtoken"; // Importa jsonwebtoken para la gestión de tokens
import {createAccesToken} from "../libs/jwt.js"; // Importa la función para crear tokens

export const register = async(req, res) => { // Controlador para registrar un nuevo usuario
    const {email,password, username} = req.body; // Extrae datos del cuerpo de la solicitud

    try {

        const passwordHash = await bcrypt.hash(password, 10) // Cifra la contraseña

        const newUser = new User({ // Crea una nueva instancia de usuario
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save(); // Guarda el usuario en la base de datos
        const token = await createAccesToken({id: userSaved._id}) // Crea un token de acceso
        res.cookie('token', token); // Envía el token en una cookie
        res.json({ // Envía la respuesta con los detalles del usuario
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })

    } catch (error) {
        res.status(500).json({message: error.message}); // Manejo de errores
    } 
};

export const login = async(req, res) => { // Controlador para el inicio de sesión
    const {password, username} = req.body; // Extrae datos del cuerpo de la solicitud

    try {

        const userFound = await User.findOne({username}); // Busca el usuario por nombre de usuario
        if(!userFound) return res.status(400).json({mesagge: "Usuario no encontrado"}); // Manejo de usuario no encontrado

        const isMatch = await bcrypt.compare(password, userFound.password); // Compara la contraseña proporcionada con la almacenada
        if (!isMatch) return res.status(400).json({message: "Contraseña inconrrecta"}) // Manejo de contraseña incorrecta

        const token = await createAccesToken({id: userFound._id}); // Crea un token de acceso

        res.cookie('token', token); // Envía el token en una cookie
        res.json({ // Envía la respuesta con los detalles del usuario
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })

    } catch (error) {
        res.status(500).json({message: error.message}); // Manejo de errores
    } 
};

export const logout = (req, res) => { // Controlador para cerrar sesión
    res.cookie('token', "", { // Borra la cookie del token
        expires: new Date(0) // Establece una fecha de expiración pasada
    })
    return res.sendStatus(200) // Envía un estado de éxito
}

export const profile = async (req, res) => { // Controlador para obtener el perfil del usuario
    const userFound = await User.findById(req.user.id) // Busca el usuario por ID

    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"}); // Manejo de usuario no encontrado

    return res.json({ // Envía la respuesta con los detalles del usuario
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })

    res.send(profile) // Esto no se ejecutará debido al return anterior
}