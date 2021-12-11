import { Request, Response } from "express";
import { RegistrarAssentoService } from "../Services/RegistrarAssentoService";


class RegistrarAssentoController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const service = new RegistrarAssentoService;

    try {
      const result = await service.execute(data);

      return res.json(result);
    }catch(err) {

      return res.status(400).json({Error: err.message});
    }
  }
}

export { RegistrarAssentoController };