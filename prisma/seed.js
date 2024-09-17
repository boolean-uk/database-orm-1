const { PrismaClient } = require("@prisma/client");
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
      phone: "0736509060",
      email: "alice.sth@gmail.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });

  console.log("Created contact with customer:", createdContact);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "The Fellowship of The Ring",
      runtimeMins: 178,
    },
  });

  console.log(createdMovie);

  const createdScreen = await prisma.screen.create({
    data: {
      number: 5,
    },
  });
  console.log("Created screen", createdScreen);
  const createdScreen2 = await prisma.screen.create({
    data: {
      number: 2,
    },
  });
  console.log("Created screen", createdScreen2);

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: "2001-12-10T20:00:00Z",
      movie: {
        connect: {
          id: 1,
        },
      },
      screen: {
        connect: {
          id: 1,
        },
      },
    },
  });

  console.log(createdScreening);

  const createdScreening2 = await prisma.screening.create({
    data: {
      startsAt: "2001-12-12T20:00:00Z",
      movie: {
        connect: {
          id: 1,
        },
      },
      screen: {
        connect: {
          id: 2,
        },
      },
    },
  });

  console.log(createdScreening2);

  const createdScreening3 = await prisma.screening.create({
    data: {
      startsAt: "2001-12-12T20:00:00Z",
      movie: {
        connect: {
          id: 1,
        },
      },
      screen: {
        connect: {
          id: 2,
        },
      },
    },
  });

  console.log(createdScreening3);

  const ticket =  await prisma.ticket.create({
    data:{
      screening:{
        connect: {
          id:3
        }
      },
      customer: {
        connect:{
          id: 1
        }
      }
    }
  })

  console.log(ticket)

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
