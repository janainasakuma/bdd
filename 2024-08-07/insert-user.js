// insert-user.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = [
    
    { name: 'Fulano', user: 'fulano', email: 'fulano@gmail.com', type: 'Admin', dateBorn: '20-01-2001', dateRegister: '12-02-2010T10:40:34' },
    { name: 'Beltrano', user: 'beltrano01', email: 'beltrano10@gmail.com', type: 'Usuario', dateBorn: '11-10-2005', dateRegister: '15-03-2015T15:20:39' },
    { name: 'Ciclano', user: 'ciclano3', email: 'ciclano3@gmail.com', type: 'Usuario', dateBorn: '31-06-1999', dateRegister: '13-12-2009T20:53:23' },
    { name: 'Ana Maria', user: 'anamaria', email: 'anamaria@gmail.com', type: 'Usuario', dateBorn: '27-07-1997', dateRegister: '23-04-2003T09:43:23' },
    { name: 'Matheus', user: 'matheus', email: 'matheus2@gmail.com', type: 'Usuario', dateBorn: '22-04-2002', dateRegister: '31-02-2007T08:36:43' }
    ];
    
    await prisma.user.createMany({ data })
    console.log("Cadastro realizado com sucesso!");
}

main();