import { Request, Response } from "express";
import { ListarSalaService } from "../Services/ListarSalaService";


class ListarSalaController {
  async handle(req: Request, res: Response) {
    const { numero } = req.params;

    const service = new ListarSalaService;

    try {
      const result = await service.execute(numero);

      return res.json(result);
    }catch(err) {

      return res.status(400).json({Error: err.message});
    }
  }
}

export { ListarSalaController };