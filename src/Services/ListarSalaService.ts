import prismaClient from "../Prisma";


class ListarSalaService {
  async execute(numero: string) {
    const sala = await prismaClient.sala.findFirst({
      where:{
        numero
      },
      include: {
        filme: true,
        assentos: true
      }
    });

    if (!sala) throw new Error("Sala not found");


    return sala;
  }
}

export { ListarSalaService };