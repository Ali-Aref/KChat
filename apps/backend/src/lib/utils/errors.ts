import { HttpCodes } from "fastify/types/utils";

export class AppError extends Error {
  statusCode: HttpCodes;

  constructor(statusCode: HttpCodes = 500, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

