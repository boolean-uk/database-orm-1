/*
  Warnings:

  - You are about to drop the column `contactId` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the `Screen` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Customer_contactId_key";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "contactId";

-- DropTable
DROP TABLE "Screen";

-- CreateTable
CREATE TABLE "Screening" (
    "id" SERIAL NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screening_pkey" PRIMARY KEY ("id")
);
