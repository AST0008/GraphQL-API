import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});


  await prisma.user.create({
    data: {
      name: "John",
      body: "This is John's body", 
      messages: {
        create: [
          {
            body: "A message for John",
          },
          {
            body: "Another new message for John",
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Ashwajit",
      body: "This is Ashwajit's body", 
      messages: {
        create: [
          {
            body: "A message for Ashwajit",
          },
          {
            body: "Another new message for Ashwajit",
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Lucky",
      body: "This is Lucky's body", // Add body field
      messages: {
        create: [
          {
            body: "A message for Lucky",
          },
          {
            body: "Another new message for Lucky",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
