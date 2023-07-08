-- CreateTable
CREATE TABLE "Champion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sound" TEXT NOT NULL,

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counter" (
    "id" TEXT NOT NULL,
    "counterChampionId" TEXT NOT NULL,
    "matchupDescription" TEXT NOT NULL,

    CONSTRAINT "Counter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Counter" ADD CONSTRAINT "Counter_counterChampionId_fkey" FOREIGN KEY ("counterChampionId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
