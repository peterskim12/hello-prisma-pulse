import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
      data: {
        name: 'peter',
        email: 'peter@example.com'
      },
    })

    // await prisma.pet.create({
    //   data: {
    //     name: 'springsteen',
    //     type: 'dog'
    //   },
    // })
  
    const allUsers = await prisma.user.findMany({
    })
    // const allUsers = await prisma.pet.findMany({
    // })
    console.dir(allUsers, { depth: null })
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
