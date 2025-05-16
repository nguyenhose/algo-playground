import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("Log:", req.body);
    res.status(200).json({message: "Logged"});
  } else {
    res.status(405).end();
  }
}