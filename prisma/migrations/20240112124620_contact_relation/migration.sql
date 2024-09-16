/*
  Warnings:

  - A unique constraint covering the columns `[customer_id]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_id` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "customer_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_customer_id_key" ON "Contact"("customer_id");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
