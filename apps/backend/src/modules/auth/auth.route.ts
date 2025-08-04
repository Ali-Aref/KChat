import { FastifyInstance } from "fastify";
import { registerUserController } from "./auth.controller";
import { RegisterUserForm } from "@shared/schema/auth.schema";
import { toJSONSchema } from "zod";

const authRoutes = (server: FastifyInstance) => {
  server.post(
    "/register",
    {
      schema: {
        body: toJSONSchema(RegisterUserForm, { target: "draft-7" }),
        response: {
          201: toJSONSchema(RegisterUserForm, { target: "draft-7" }),
        }
      },
    },
    registerUserController,
  );
};
export default authRoutes;
