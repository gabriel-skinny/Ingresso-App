import { Request, Response, NextFunction } from "express";
import prismaClient from "../Prisma";

async function checkAdmin(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req;

  const admin = await prismaClient.cliente.findUnique({
    where: {
      id: user_id
    }
  })

  if (!admin.isAdmin) return res.status(400).json({ ErrorCode: "Only admin can register filmes"});

  return next();
}

export { checkAdmin };