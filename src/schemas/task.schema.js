import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Requiere un titulo",
  }),
  description: z.string({
    required_error: "Requiere una descripcion",
  }),
  date: z.string().datetime().optional(),
});