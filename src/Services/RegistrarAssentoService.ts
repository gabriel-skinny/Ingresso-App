import prismaClient from "../Prisma";


interface IAssento {
  coluna: string,
  numeroSala: string
}

class RegistrarAssentoService {
  async execute(data: IAssento) {
    let assento = await prismaClient.assento.findFirst({
      where: {
        coluna: data.coluna
      }
    })

    if (assento) throw new Error("Assento already created");

    const sala = await prismaClient.sala.findFirst({
      where: {
        numero: data.numeroSala
      }
    })

    if (!sala) throw new Error("Sala does not exists");

    assento = await prismaClient.assento.create({
      data: {
        coluna: data.coluna,
        sala_id: sala.id,
      }, 
      include: {
        sala: true
      }
    });

    return assento;
  }
}

export { RegistrarAssentoService };