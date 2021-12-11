import { Request, Response } from "express";
import { SessaoUsuarioService } from "../Services/SessaoUsuarioService";


class SessaoUsuarioController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const service = new SessaoUsuarioService;

    try {
      const result = await service.execute(data);

      return res.json(result);
    }catch(err) {

      return res.status(400).json({Error: err.message});
    }
  }
}

export { SessaoUsuarioController }