/*
  Warnings:

  - You are about to drop the `screening` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "screening";

-- CreateTable
CREATE TABLE "Screening" (
    "id" SERIAL NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screening_pkey" PRIMARY KEY ("id")
);
