import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { encodeJWT } from "../../helpers/jwt.helpers";

export const login: RequestHandler = async (req, res) => {
  const user = req.body;
  const token = await encodeJWT(user);

  res
    .status(200)
    .cookie("auth-token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 86400,
    })
    .json();
};

export const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.auth = jwt.verify(token, process.env.APP_SECRET as string) as MyPayload;

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
