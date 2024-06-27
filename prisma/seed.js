const { PrismaClient } = require('@prisma/client');
const { connect } = require('http2');
const { title } = require('process');
const prisma = new PrismaClient();

async function seed() {
    // const createdCustomer = await prisma.customer.create({
    //     data: {
    //         name: 'Alice'
    //     }
    // });

    // console.log('Customer created', createdCustomer);

    // // Add your code here
    // const createdContact = await prisma.contact.create({
    //     data: {
    //         phone: '+447097851752',
    //         email: 'alice_cooper@rocknroll.org',
    //         customer: {
    //             create: {
    //                 name: createdCustomer.name
    //             }
    //         }
    //     }
    // })

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Eyes Wide Shut',
            runtimeMins: 159
        }
    })
    

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date('June 25, 2024 22:00:00'),
            movie:  {
                connect: {
                    title: createdMovie.title,
                    runtimeMins: createdMovie.runtimeMins
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
