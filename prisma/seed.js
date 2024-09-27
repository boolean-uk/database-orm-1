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
    const createContact = await prisma.contact.create({
        data: {
            firstName: 'Sara',
            email: 'hello@gmail.com',
            //customerId : createdCustomer.id
            customer: {
                connect: {
                    id: 1
                }
            }
        }

    })
    console.log('Customer created', createContact)


    const createMovie = await prisma.movie.create({
        data: {
            title: "Object Relational Mapper",
            runtimeMins: 111,

        }
    });

    console.log('createMovie', createMovie);

    const createScreen = await prisma.screen.create({
        data: {
            number: 4
        }
    })

    console.log('screen created', createScreen)



    const createScreening = await prisma.screening.create({
        data: {
            startsAt: new Date(),
            movie: {
                connect: {
                    id: 1
                }
            },
            screen: {
                connect: {
                    id: 1
                }
            }
        }

    })

    console.log('createScreening', createScreening)

    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                connect: {
                    id: 1
                }
            },
            screening: {
                connect: {
                    id: 1
                }
            }
        }
    })


    console.log('ticket created' , createdTicket)



    // Don't edit any of the code below this line
    process.exit(0);



}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
