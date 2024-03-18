const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here

    const createdContact = await prisma.contact.create({
        data: {
            phone: '9-08930-3456',
            email: 'Alice@Alice.com',
            customer: {
                create: {
                    name: 'Alice'
                }
            }
        }
    });

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Toy Story',
            runtimeMins: 360,
        }
    })

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date(),
            movie: {
                create: {
                    title: 'Toy Story 2',
                    runtimeMins: 720
                }
            }
        }
    })

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
