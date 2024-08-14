import Task from "../models/task.model.js"; // Importa el modelo de tarea

export const getTasks = async (req,res) => { // Controlador para obtener todas las tareas
    const tasks = await Task.find() // Obtiene todas las tareas de la base de datos
    res.json(tasks) // Envía las tareas como respuesta en formato JSON
};

export const createTask = async (req,res) => { // Controlador para crear una nueva tarea
    const {title, description, date } = req.body // Extrae datos del cuerpo de la solicitud
    const newTask = new Task ({ // Crea una nueva instancia de tarea
        title,
        description,
        date,
        user: req.user.id // Asocia la tarea con el usuario autenticado
    });
    const savedTask = await newTask.save(); // Guarda la tarea en la base de datos
    res.json(savedTask); // Envía la tarea guardada como respuesta en formato JSON
};

export const getTask = async (req,res) => { // Controlador para obtener una tarea por ID
    const task = await Task.findById(req.params.id).populate('user'); // Busca la tarea por ID y popula el campo del usuario
    if (!task) return res.status(404).json({message: 'tarea no encontrada'}); // Manejo de tarea no encontrada
    res.json(task) // Envía la tarea como respuesta en formato JSON
};

export const deleteTask = async (req,res) => { // Controlador para eliminar una tarea por ID
    const task = await Task.findByIdAndDelete(req.params.id); // Busca y elimina la tarea por ID
    if (!task) return res.status(404).json({message: 'tarea no encontrada'}); // Manejo de tarea no encontrada
    return res.sendStatus(204) // Envía un estado de éxito sin contenido
};

export const updateTask = async (req,res) => { // Controlador para actualizar una tarea por ID
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { // Busca y actualiza la tarea por ID
        new: true // Retorna el documento actualizado
    });
    if (!task) return res.status(404).json({message: 'tarea no encontrada'}); // Manejo de tarea no encontrada
    res.json(task) // Envía la tarea actualizada como respuesta en formato JSON
};
