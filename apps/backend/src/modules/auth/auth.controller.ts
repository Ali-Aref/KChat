import { FastifyReply, FastifyRequest } from "fastify";
import { IRegisterUserForm } from "@shared/schema/auth.schema"
import { registerUserService } from "./auth.service";

export const registerUserController = async (
  req: FastifyRequest<{ Body: IRegisterUserForm }>,
  rep: FastifyReply,
) => {
  const user = await registerUserService(req.body)
  rep.code(201).send(user);
};

export const loginController = async() => {

}
