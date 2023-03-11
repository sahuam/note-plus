// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
  });
  const { username, password } = req.body;
  if (username === "admin" && password === "admin")
    res.status(200).json({ authentication: true });
  else res.status(401).json({ authentication: false });
}
