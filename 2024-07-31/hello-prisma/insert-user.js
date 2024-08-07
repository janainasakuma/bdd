// hello-prisma/insert-user.js

const { PrimaClient } = require ('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Hello, Prisma!',
        }
    });
}

main();