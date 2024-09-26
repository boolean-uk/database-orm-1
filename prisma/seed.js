const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);

  const createdContact = await prisma.contact.create({
    data: {
      phone: "07893543555",
      email: "donkey@dumb.com",
      customerId: createdCustomer.id,
    },
  });

  console.log("Contact created", createdContact);

  const createCustomerWithContact = await prisma.customer.create({
    data: {
      name: "Donkeyboy",
      contact: {
        create: {
          phone: "07123235432",
          email: "random@email.com",
        },
      },
    },
    include: {
      contact: true,
    },
  });

  console.log(createCustomerWithContact);

  const createMovie = await prisma.movie.create({
    data: {
      title: "Javascript: A Sexy Documentary",
      runtimeMins: 129,
    },
  });

  console.log(createMovie);

  const createScreen = await prisma.screen.create({
    data: {
        number: 1,
    }
  })

  console.log(createScreen)
  
  const createScreening = await prisma.screening.create({
    data: {
      startsAt: new Date("2025-10-12 17:15:00"),
      movieId: createMovie.id,
      screenId: createScreen.id
    },
  });

  console.log(createScreening);

  const createMovieWithScreening = await prisma.movie.create({
    data: {
      title: "Typescript: Even Sexier",
      runtimeMins: 150,
      screenings: {
        create: [
          {
            startsAt: new Date("2025-11-12 21:15:00"),
            screenId: createScreen.id
          },
        ],
      },
    },
    include: {
        screenings: true
      }
  });

  console.log(createMovieWithScreening);

  const createdTicket = await prisma.ticket.create({
    data: {
      customerId: createdCustomer.id,
      screeningId: createScreening.id
    }
  })

  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
