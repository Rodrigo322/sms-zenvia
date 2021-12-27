import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      name: "Pessoa teste",
      phone: "seu numero de celular",
      content: "Olá voce possui uma promoção",
    },
  });

  // await prisma.user.deleteMany()
};

main().catch((e) => console.error(e));
