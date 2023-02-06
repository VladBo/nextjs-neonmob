import { PrismaClient } from "@prisma/client";
import { data } from "./data";

const prisma = new PrismaClient();

const seed = async () => {
  // const terms = await prisma.category.createMany({
  //   data: categories,
  // });
  // const products = await prisma.product.createMany({
  //   data: data,
  // });
  // console.log(products);
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
