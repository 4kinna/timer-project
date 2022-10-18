-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "note" TEXT,
    "time" TEXT NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
