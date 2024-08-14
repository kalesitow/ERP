import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre es requerido",
  }),
  email: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "El correo no es valido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(8, {
      message: "La contraseña debe contener al menos 8 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
  .string({
    required_error: "El correo es requerido",
  })
  .email({
    message: "El correo no es valido",
  }),
  password: z
  .string({
    required_error: "La contraseña es requerida",
  })
  .min(8, {
    message: "La contraseña debe contener al menos 8 caracteres",
  }),
});