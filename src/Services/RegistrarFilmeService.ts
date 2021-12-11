import prismaClient from "../Prisma";


interface IFilme {
  titulo: string,
  diretor: string,
  descricao: string,
  duracao: string,
}

class RegistrarFilmeService {
  async execute(data: IFilme) {
    let filme = await prismaClient.filme.findFirst({
      where: {
        titulo: data.titulo
      }
    })

    if (filme) throw new Error("Filme already created");

    filme = await prismaClient.filme.create({
      data: {
        titulo: data.titulo,
        diretor: data.diretor,
        descricao: data.descricao,
        duracao: data.duracao
      }
    });

    return filme;
  }
}

export { RegistrarFilmeService };