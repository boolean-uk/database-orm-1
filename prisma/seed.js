const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      contact: {
        create: { phone: "01237", email: "alice@email.net" },
      },
    },
    include: {
      contact: true,
    },
  });

  console.log("Customer created", createdCustomer);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "The Matrix",
      runtimeMins: 99,
      screenings: {
        create: {
          startsAt: "2024-08-09T17:00:00.000Z",
          screen: {
            create: { number: 1 },
          },
        },
      },
    },
    include: {
      screenings: true,
    },
  });

  console.log("Movie created", createdMovie);

  const createdTicket = await prisma.ticket.create({
    data: {
      customer: {
        connect: { id: createdCustomer.id },
      },
      screening: {
        connect: { id: createdMovie.screenings[0].id },
      },
    },
  });

  console.log("Customer created", createdTicket);

  //   const createdScreening = await prisma.screening.create({
  //     data: {
  //       startsAt: "2024-08-09T17:00:00.000Z",
  //     },
  //   });

  //   console.log("Screening created", createdScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
