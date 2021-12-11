import prismaClient from "../Prisma";

interface IUser {
  nome: string,
  email: string,
  password: string
}

class ListarUsuarioService {
  async execute(data: IUser) {
    let user = await prismaClient.cliente.findMany({
      where:{
        email: data.email
      }
    });

    if (!user) {
      throw new Error();
    };


    return user;
  }
}

export { ListarUsuarioService };