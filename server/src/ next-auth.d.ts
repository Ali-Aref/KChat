// extend authjs default session type
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    firstName: string;
    lastName: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    firstName: string;
    lastName: string;
  }
}
