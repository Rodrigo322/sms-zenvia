import { PrismaClient } from "@prisma/client";
import { api } from "../services/api";

const prisma = new PrismaClient();

export default {
  async handle(req, res) {
    try {
      const users = await prisma.user.findMany();
       users.forEach((user) => {
        api.post("/channels/sms/messages", {
              from: `${process.env.KEYWORD}`,
              to: user.phone,
              contents: [{
                  type: "text",
                  text: user.content,
                },],
            }, {
              headers: {
                "X-API-TOKEN": `${process.env.API_TOKEN}`,
              },
            }
          ).then((res) => console.log("\nSucesso\n", res.data))
          .cacth((error) => console.log("\nFalha\n", error.response.data));
      });

      return res.status(200).json({ message: "OK" });
    } catch (error) {
      res.json(error);
    }
  },
};
