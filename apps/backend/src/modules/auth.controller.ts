import { FastifyReply, FastifyRequest } from "fastify";
import { IRegisterUserForm } from "@shared/schema/auth.schema"
import { registerUserService } from "./auth.service";

export const registerUserController = (
  req: FastifyRequest<{ Body: IRegisterUserForm }>,
  rep: FastifyReply,
) => {
  console.log("now register a new user")
  const user = registerUserService(req.body)
  rep.code(201).send({ message: "Registered successfully" });
};
