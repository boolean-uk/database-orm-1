const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here
    const createdContact = await prisma.contact.create({
        data: {
            phone: '0746352477',
            email: 'alice2@gmail.com',
            customer: {
                connect: {
                    id: 1
                }
            }
        }
    });

    console.log('contact created',createdContact)

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Gladiator',
            runtimeMins: 155
        }
    })

    console.log(createdMovie)

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1
        }
    }) 
    console.log(createdScreen)

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: '2024-01-14T11:19:59Z',
            movie: {
                connect: {
                    id: createdMovie.id
                }
            }, 
            screen: {
                connect: {
                    id:createdScreen.id
                }
            }
        }
    })
    console.log(createdScreening)


    const createdTicket = await prisma.ticket.create({
        data: {
            customerId: 1,
            screeningId: 1
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
