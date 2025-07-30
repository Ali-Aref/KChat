import { FastifyInstance } from "fastify";
import { registerUserController } from "./auth.controller";
import { zodToJsonSchema } from "zod-to-json-schema";
import { RegisterUserForm } from "@shared/schema/auth.schema";

const authRoutes = (server: FastifyInstance) => {
  server.post("/register", {
    schema: {
      body: zodToJsonSchema(RegisterUserForm)
    }
  }, registerUserController);
};
export default authRoutes;
