import { Router} from "express"; // Importa Router de express para crear rutas
import { login, register, logout, profile} from "../controllers/auth.controller.js"; // Importa los controladores de autenticación
import { authRequired } from "../middlewares/validateToken.js"; // Importa el middleware de autenticación
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router(); // Crea una instancia de Router

router.post('/register', validateSchema(registerSchema), register); // Ruta para registrar un nuevo usuario
router.post('/login', validateSchema(loginSchema), login); // Ruta para iniciar sesión
router.post('/logout', logout); // Ruta para cerrar sesión
router.get("/profile", authRequired, profile) // Ruta para obtener el perfil del usuario, requiere autenticación

export default router; // Exporta el enrutador para su uso en otras partes de la aplicación
