const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  // Add your code here
  const createdContact = await prisma.contact.create({
    data: {
      phone: "+447745757561",
      email: "example@gmail.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const movie = await prisma.movie.createMany({
    data: [
      {
        title: "King Kong",
        runtimeMins: 190,
      },
      {
        title: "Inception",
        runtimeMins: 150,
      },
    ],
  });

  // const movieCount = createMovie.length;

  // const screenings = await prisma.screening.createMany({
  //   data: Array.from({ length: movieCount }, (_, index) => ({
  //     startsAt: { select: { now: true } },
  //     movie: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   })),
  // });

  const screenings = await prisma.screening.create({
    data: {
      createdAt: { select: { now: true } },
      movie: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const screen = await prisma.screen.create({
    data: {
      number: 1,
      screenings: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const ticket = await prisma.ticket.create({
    customer: {
      connect: {
        id: 1,
      },
    },
    screening: {
      connect: {
        id: 1,
      },
    },
  });
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
