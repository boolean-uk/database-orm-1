-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lasttName" TEXT,
    "email" TEXT NOT NULL,
    "phone" INTEGER,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
