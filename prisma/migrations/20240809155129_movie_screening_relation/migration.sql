/*
  Warnings:

  - A unique constraint covering the columns `[movieId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Screening_movieId_key" ON "Screening"("movieId");
