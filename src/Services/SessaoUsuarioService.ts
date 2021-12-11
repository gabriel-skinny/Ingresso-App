import prismaClient from "../Prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IUser {
  email: string,
  password: string
}

class SessaoUsuarioService {
  async execute(data: IUser) {
    const user = await prismaClient.cliente.findFirst({
      where:{
        email: data.email
      }
    });

    if (!user) {
      throw new Error("User not found");
    };

    if (!compare(data.password, user.password)) throw new Error("Wrong password");

   const token = sign({
     user: {
       name: user.nome,
       id: user.id,
       email: user.email
     }
   },
   process.env.JWT_SECRET,
   {
     subject: `${user.id}`,
     expiresIn: '1d'
   }
   );

    return  {token} ;
  }
}

export { SessaoUsuarioService };