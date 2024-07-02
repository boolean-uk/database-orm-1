const { PrismaClient } = require('@prisma/client');
const { empty } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Farshad',
            contact: {
                create: {
                email: 'f.bagdeli',
                phone: '123456'
                }
            }
        },
        include : {
            contact : true
        } 
    })

    const createMovie = await prisma.movie.create({
        data :{
            title : 'The Matrix',
            runtimeMins : 120,
            screening : {
                create : {
                    startsAt : new Date('2024-07-10T10:00:00Z')
                }
            }
        },
        include : {
            screening : true
        }
    })

    
    

    console.log('Customer created', createdCustomer)
    console.log('movie created', createMovie)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
