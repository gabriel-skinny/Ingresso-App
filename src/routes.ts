import { Router } from "express";
import { ListarSalaController } from "./Controllers/ListarSalaController";
import { RegistrarAssentoController } from "./Controllers/RegistrarAssentoController";
import { RegistrarFilmeController } from "./Controllers/RegistrarFilmeController";
import { RegistrarSalaController } from "./Controllers/RegistrarSalaController";
import { SessaoUsuarioController } from "./Controllers/SessaoUsuarioController";
import { UsuarioController } from "./Controllers/UsuarioController";
import { checkAuth } from "./MiddleWares/auth";
import { checkAdmin } from "./MiddleWares/checkAdmin";

const router = Router();

router.post("/user", new UsuarioController().handle);
router.get("/user", new UsuarioController().list);

router.post("/login", new SessaoUsuarioController().handle);

router.get("/sala/:numero", new ListarSalaController().handle);

router.use(checkAuth);
router.use(checkAdmin);

router.post("/filme", new RegistrarFilmeController().handle);
router.post("/sala", new RegistrarSalaController().handle);
router.post("/assento", new RegistrarAssentoController().handle);

export { router };