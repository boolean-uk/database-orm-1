/*
  Warnings:

  - You are about to drop the column `screenId` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `screeningId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_screenId_fkey";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "screenId",
ADD COLUMN     "screeningId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_screeningId_fkey" FOREIGN KEY ("screeningId") REFERENCES "Screening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
