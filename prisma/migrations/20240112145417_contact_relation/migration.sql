/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contactId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactId` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "customerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "contactId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_customerId_key" ON "Contact"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_contactId_key" ON "Customer"("contactId");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
