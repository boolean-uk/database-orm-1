const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
      data: {
        name: 'Alice'
      }
    })
  
    console.log('Customer created', createdCustomer)
  
    const createdContact = await prisma.contact.create({
      data: {
        phone: '+31041145962',
        email: 'test@test.com',
        customerId: createdCustomer.id
      }
    })
  
    console.log('Contact created', createdContact)
  
    const createCustomerWithContact = await prisma.customer.create({
      data: {
        name: 'Jack',
        contact: {
          create: {
            phone: '+5445525',
            email: 'test@test.com'
          }
        }
      },
      include: {
        contact: true
      }
    })
  
    console.log('New Customer created', createCustomerWithContact)
  
    const createMovie = await prisma.movie.create({
      data: {
        title: 'Teeth',
        runtimeMins: 110
      }
    })
  
    console.log('New Movie created', createMovie)
  
    const startTime = new Date()
  
    const createScreen = await prisma.screen.create({
      data: {
        number: 1
      }
    })
  
    console.log('New screen created', createScreen)
  
    const createScreening = await prisma.screening.create({
      data: {
        startsAt: startTime,
        movieId: createMovie.id,
        screenId: createScreen.id
      }
    })
  
    console.log('New screening created', createScreening)
  
    const createMovieWithScreening = await prisma.movie.create({
      data: {
        title: 'Teeth',
        runtimeMins: 111,
        screenings: {
          create: [
            {
              startsAt: startTime,
              screenId: createScreen.id
            }
          ]
        }
      },
      include: {
        screenings: true
      }
    })
  
    console.log('New movie created with screening', createMovieWithScreening)
  
    const createdTicket = await prisma.ticket.create({
      data: {
        customerId: createdCustomer.id,
        screeningId: createScreening.id
      }
    })
  
    console.log('New ticket', createdTicket)
    // Don't edit any of the code below this line
    process.exit(0);
}}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
