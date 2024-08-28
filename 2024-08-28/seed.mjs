import { PrismaClient } from "@prisma/client";
import { Faker, fa, faker, pt_BR } from "@faker-js/faker"

const prisma = new PrismaClient();

async function seed () {

    const faker = new Faker({ locale/; [pt_BR] });
    faker.seed(1);

    const users = [];

    for (let i = 0; i < 100; i++) {
        users.push({
            status: faker.helpers.arrayElement(["Online", "Offline"]),
            userName: faker.internet.userName(),
            birthDate: faker.date.past(),
            city: faker.location.city(),
            region: faker.location.state(),
            phone: faker.phone.number(),
            avatar: faker.image.avatar(),
            bio: faker.lorem.paragraph({ max: 2 }),
            createdAt: faker.date.recent(),
        });
    }
    
    await prisma.user.deleteMany();
    await prisma.user.createMany({ data: userts });
    await prisma.$disconnect();

}

