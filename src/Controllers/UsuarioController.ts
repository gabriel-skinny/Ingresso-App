import { Request, Response } from "express";
import { CadastroUsuarioService } from "../Services/CadastroUsuarioService";
import { ListarUsuarioService } from "../Services/ListarUsuarioService";

class UsuarioController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const service = new CadastroUsuarioService;

    try {
      const result = await service.execute(data);

      return res.json(result);
    }catch(err) {

      return res.status(400).json({Error: "Cant create user"});
    }
  }

  async list(req: Request, res: Response) {
    const data = req.body

    const service = new ListarUsuarioService;

    try {
      const result = await service.execute(data);

      return res.json(result);
    }catch(err) {
      return res.status(400).json({ Error: "Cant list user"});
    }
  }
}

export { UsuarioController };