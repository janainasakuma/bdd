const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    
    const musics = await prisma.music.findMany();
    console.log(music);
}

main();