const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: 'Alice'
    }
  })

  console.log('Customer created', createdCustomer)

  // Add your code here

  const createContact = await prisma.contact.create({
    data: {
      phone: '07712452671',
      email: 'email@gmail.com',
      customer: {
        connect: {
          id: 1
        }
      }
    }
  })

  console.log('Contact created', createContact)

  // Movie and Screening
  const createMovie = await prisma.movie.create({
    data: {
      title: 'Movie 1',
      runtimeMins: 90
    }
  })

  console.log('Movie created', createMovie)

  const createScreen = await prisma.screen.create({
    data: {
      number: 1
    }
  })

  console.log('Screen created', createScreen)

  const createScreening = await prisma.screening.create({
    data: {
      startsAt: new Date(),
      movieId: 1,
      screenId: 1
    }
  })

  console.log('Screening created', createScreening)

  // Movie screening relation
  const createMovieScreeningRelation = await prisma.movie.create({
    data: {
      title: 'Movie with relation',
      runtimeMins: 109,
      screenings: {
        create: [
          { startsAt: new Date(), screenId: 1 },
          { startsAt: new Date(), screenId: 1 }
        ]
      }
    }
  })

  console.log('MovieScreeningRelation created', createMovieScreeningRelation)

  // Screening_screen
  const createScreeningScreen = await prisma.screen.create({
    data: {
      number: 1,
      screenings: {
        create: [
          { startsAt: new Date(), movieId: 1 },
          { startsAt: new Date(), movieId: 1 }
        ]
      }
    }
  })

  console.log('ScreeningScreen created', createScreeningScreen)

  // Tickets
  const createTicket = await prisma.ticket.create({
    data: {
      customerId: 1,
      screeningId: 1
    }
  })

  console.log('Ticket created', createTicket)

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
