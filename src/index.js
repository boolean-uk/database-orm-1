const prisma = require("./db");

async function main() {
    const titles = ["The Matrix", "Glass Onion"];
    const createMovie = titles.forEach(
      async (title) =>
        await prisma.movie.create({
          data: { title: title, runtimeMins: 124 },
        })
    );
    const deleteMovie = titles.forEach(
      async (title) => await prisma.movie.deleteMany({ where: { title } })
    );
  const getAllCustomerData = await prisma.customer.findMany();
  const screeningWithMovie = await prisma.screening.findMany({
    include: { movie: true, screen: true },
  });
  const ticketWithScreeningAndCustomer = await prisma.ticket.findUnique({
    where: { id: 1 },
    include: {
      customer: true,
      screening: {
        include: { movie: { select: {title: true} }, screen: { select: {number: true} } },
      },
    },
  });
  console.log("Alice's ticket", ticketWithScreeningAndCustomer);
}

main();
