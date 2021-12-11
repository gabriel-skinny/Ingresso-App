import { Request, Response } from "express";
import { RegistrarSalaService } from "../Services/RegistrarSalaService";

class RegistrarSalaController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const service = new RegistrarSalaService;

    try {
      const result = await service.execute(data);

      return res.json(result);
    }catch(err) {

      return res.status(400).json({Error: err.message});
    }
  }
}

export { RegistrarSalaController };