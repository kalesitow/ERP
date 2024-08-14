import { Router } from "express"; // Importa Router de express para crear rutas
import { authRequired } from "../middlewares/validateToken.js"; // Importa el middleware de autenticación
import { getTask, getTasks, createTask, deleteTask, updateTask} from "../controllers/task.controller.js"; // Importa los controladores de tareas
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router() // Crea una instancia de Router

router.get('/tasks', authRequired, getTasks) // Ruta para obtener todas las tareas, requiere autenticación
router.get('/tasks/:id', authRequired, getTask) // Ruta para obtener una tarea por ID, requiere autenticación
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask) // Ruta para crear una nueva tarea, requiere autenticación
router.delete('/tasks/:id', authRequired, deleteTask) // Ruta para eliminar una tarea por ID, requiere autenticación
router.put('/tasks/:id', authRequired, updateTask) // Ruta para actualizar una tarea por ID, requiere autenticación

export default router // Exporta el enrutador para su uso en otras partes de la aplicación
