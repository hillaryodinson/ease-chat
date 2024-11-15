/*
  Warnings:

  - You are about to drop the `Authenticator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Authenticator" DROP CONSTRAINT "Authenticator_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "designation" TEXT,
ADD COLUMN     "office" TEXT,
ADD COLUMN     "phone" TEXT;

-- DropTable
DROP TABLE "Authenticator";
