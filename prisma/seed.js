const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    // Create a Customer
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'John Doe'
        }
    });

    // Create a Screening
    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date('2023-08-10T19:00:00Z'),
            screen: {
                create: { number: 1 }
            }
        }
    });

    // Create a Ticket
    const createdTicket = await prisma.ticket.create({
        data: {
            customerId: createdCustomer.id,
            screeningId: createdScreening.id
        }
    });

    console.log('Customer, Screening, and Ticket created:', {
        customer: createdCustomer,
        screening: createdScreening,
        ticket: createdTicket
    });

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });
