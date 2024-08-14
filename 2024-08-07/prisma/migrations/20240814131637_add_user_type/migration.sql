/*
  Warnings:

  - You are about to alter the column `assessment` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - The values [ADMIN,USUARIO] on the enum `User_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `assessment` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('Admin', 'Usuario') NOT NULL;
