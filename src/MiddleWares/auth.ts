import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

function checkAuth(req: Request, res: Response, next: NextFunction) {
  const Bearertoken = req.headers.authorization;

  if (!Bearertoken) {
    return res.status(401).json({
      errorCode: "token invalid"
    })
  }

  const [, token] = Bearertoken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as { sub: string };

    req.user_id = parseInt(sub);

    return next();
  }catch(err) {
    return res.status(400).json({ errorCode: "token expired"});
  }
}

export { checkAuth };