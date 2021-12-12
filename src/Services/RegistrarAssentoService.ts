import prismaClient from "../Prisma";


interface IAssento {
  coluna: string,
  numeroSala: string
}

class RegistrarAssentoService {
  async execute(data: IAssento) {
    
    const sala = await prismaClient.sala.findFirst({
      where: {
        numero: data.numeroSala
      }
    })

    if (!sala) throw new Error("Sala does not exists");

    let assento = await prismaClient.assento.findFirst({
      where: {
        coluna: data.coluna,
        sala_id: sala.id
      }
    })

    if (assento) throw new Error("Assento already created");

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