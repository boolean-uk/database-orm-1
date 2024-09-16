/*
  Warnings:

  - Added the required column `screen_id` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screen_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Screen" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screen_id_fkey" FOREIGN KEY ("screen_id") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
