import prismaClient from "../Prisma";

interface ISala {
  numero: string,
  nomeFilme: string
}

class RegistrarSalaService {
  async execute(data: ISala) {
    let sala = await prismaClient.sala.findFirst({
      where: {
        numero: data.numero
      }
    })

    if (sala) throw new Error("Sala already created");

    const filme = await prismaClient.filme.findFirst({
      where: {
        titulo: data.nomeFilme
      }
    })

    if (!filme) throw new Error("Filme does not exists");

    sala = await prismaClient.sala.create({
      data: {
        numero: data.numero,
        filme_id: filme.id
      },
      include: {
        filme: true
      }
    });

    return sala;
  }
}

export { RegistrarSalaService };