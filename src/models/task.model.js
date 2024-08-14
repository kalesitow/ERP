import mongoose from "mongoose"; // Importa mongoose para el manejo de esquemas y modelos

const taskSchema = new mongoose.Schema({ // Define el esquema para la colección de tareas
    title:{ // Campo para el título de la tarea
        type: String, // Tipo de dato String
        required: true, // Campo obligatorio
    },
    description:{ // Campo para la descripción de la tarea
        type: String, // Tipo de dato String
        required: true, // Campo obligatorio
    },
    date:{ // Campo para la fecha de la tarea
        type: Date, // Tipo de dato Date
        default: Date.now, // Valor por defecto es la fecha actual
    },
    user:{ // Campo para referenciar al usuario que creó la tarea
        type: mongoose.Schema.Types.ObjectId, // Tipo de dato ObjectId
        ref: 'User', // Referencia al modelo User
        required: true, // Campo obligatorio
    }
}, {
    timestamps: true // Agrega campos de timestamps (createdAt y updatedAt)
});

export default mongoose.model('Task', taskSchema); // Exporta el modelo de tarea
