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
      phone: "07893543555",
      email: "woopwoop@looploop.com",
      customerId: createdCustomer.id,
    },
  });

  console.log("Contact created", createdContact);

  const createCustomerWithContact = await prisma.customer.create({
    data: {
      name: "callum",
      contact: {
        create: {
          phone: "07936466374",
          email: "test2@test2.com",
        },
      },
    },
    include: {
      contact: true,
    },
  });

  console.log("New Customer created", createCustomerWithContact);

  // Add your code here
  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date("2024-09-22 15:10:00"),
      movieId: createdMovie.id, // Ensure that createdMovie is defined and created
      screenId: screen.id // Ensure that screen is defined and created
    },
  });
  
  console.log("Screening created", createdScreening);

  const createMovieWithScreenings = await prisma.movie.create({
    data: {
      title: "Another Movie",
      runtimeMins: 120,
      screenings: {
        create: [
          {
            startsAt: new Date("2025-11-12 21:15:00"),
          },
        ],
      },
    },
  });

  console.log("Movie with screenings created", createMovieWithScreenings);

  const screen = await prisma.screen.create({
    data: {
      number: 1,
    },
  });
  console.log(screen);


  const createdTicket = await prisma.ticket.create({
    data: {
      screeningId: createdScreening.id,
      customerId: createdCustomer.id,
    },
    include: {
      customer: true,
      screening: true
    }
  });
  
  console.log("Ticket created", createdTicket);
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
