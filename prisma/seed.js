const { PrismaClient } = require("@prisma/client");
const { timeStamp } = require("console");
const { title } = require("process");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here
  const createdContact = await prisma.contact.create({
    data: {
      customerId: 1,
      phone: "522224731",
      email: "atakan@atakan.ninja",
    },
  });

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Bruh Moment",
      runtimeMins: 183,
    },
  });

  const createdScreen = await prisma.screen.create({
    data: {
      number: 1,
      screeningId: 1,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      movie: { connect: { id: 1 } },
      screen: { connect: { id: 1 } },
      startsAt: new Date(Date.now()),
    },
  });

  const createdTicket = await prisma.ticket.create({
    data: {
      customerId: 1,
      screeningId: 1,
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
