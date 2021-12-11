import prismaClient from "../Prisma";
import { hash } from "bcryptjs";

interface IUser {
  nome: string,
  email: string,
  password: string
  isAdmin: boolean
}

class CadastroUsuarioService {
  async execute(data: IUser) {
    let user = await prismaClient.cliente.findFirst({
      where:{
        email: data.email
      }
    });

    if (user) {
      throw new Error();
    };

   const hash_password = await hash(data.password, 8);
    
    user = await prismaClient.cliente.create({
    data: {
      nome: data.nome,
      email: data.email,
      password: hash_password,
      isAdmin: data.isAdmin
    }
   })


    return { user };
  }
}

export { CadastroUsuarioService };