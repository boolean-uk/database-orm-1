/*
  Warnings:

  - You are about to drop the column `movieId` on the `Screening` table. All the data in the column will be lost.
  - Added the required column `screenId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Screening" DROP CONSTRAINT "Screening_movieId_fkey";

-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "movieId",
ADD COLUMN     "screenId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Screen" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
