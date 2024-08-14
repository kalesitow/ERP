import mongoose from "mongoose"; // Importa mongoose para el manejo de esquemas y modelos

const userSchema = new mongoose.Schema({ // Define el esquema para la colección de usuarios
    username:{ // Campo para el nombre de usuario
        type: String, // Tipo de dato String
        required: true, // Campo obligatorio (Nota: debería ser `required`)
        trim: true, // Elimina espacios en blanco al principio y al final
        unique: true // Valor único en la colección
    },
    email:{ // Campo para el correo electrónico del usuario
        type: String, // Tipo de dato String
        required: true, // Campo obligatorio (Nota: debería ser `required`)
        trim: true, // Elimina espacios en blanco al principio y al final
        unique: true // Valor único en la colección
    },
    password:{ // Campo para la contraseña del usuario
        type: String, // Tipo de dato String
        required: true, // Campo obligatorio (Nota: debería ser `required`)
    } 
}, {
    timestamps: true // Agrega campos de timestamps (createdAt y updatedAt)
})

export default mongoose.model('User', userSchema) // Exporta el modelo de usuario
