const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const testTicket = await prisma.ticket.create({
    data: {
      screening: {
        create: {
          startsAt: new Date("2024-01-20 13:09:00"),
          screen: {
            create: {
              number: 4,
            },
          },
          movie: {
            create: {
              title: "Ballerina",
              runtimeMins: 170,
            },
          },
        },
      },
      customer: {
        create: {
          name: "Moss",
          contact: {
            create: {
              phone: "0118 999 881 999 119 725 3",
              email: "moss@reynholm.co.uk",
            },
          },
        },
      },
    },
    include: {
      screening: {
        include: {
          movie: true,
        },
      },
      customer: {
        include: {
          contact: true,
        },
      },
    },
  });

  console.log("created testTicket", testTicket);
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
