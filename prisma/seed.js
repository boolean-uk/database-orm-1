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
            phone: "12506839040",
            email: "email@email.com",
            customer: {
                connect: {
                    id: 1,
                },
            },
        },
    });

    console.log("Contact created", createdContact);

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date("2024-01-12 13:09:07.000"),
            movie: {
                create: {
                    title: "John Wick",
                    runtimeMins: 120,
                },
            },
            screen: {
                create: {
                    number: 1,
                },
            },
        },
    });

    console.log("created screening", createdScreening);

    const createdTicket = await prisma.ticket.create({
        data: {
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
        },
    });

    console.log("created Ticket", createdTicket);

    // Don't edit any of the code below this line
    process.exit(0);
}

seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
