import { FastifyInstance } from "fastify";
import { loginController, registerUserController } from "./auth.controller";
import { LoginUserForm, RegisterUserForm } from "@shared/schema/auth.schema";
import z, { toJSONSchema } from "zod";

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

  server.post(
    "/login",
    {
      schema: {
        body: toJSONSchema(LoginUserForm, { target: "draft-7" }),
        response: {
          // API: fix the response schema
          201: toJSONSchema(z.any(), { target: "draft-7" }),
        }
      }
    }, 
    loginController,
  )
};
export default authRoutes;
