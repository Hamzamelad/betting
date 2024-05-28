-- CreateTable
CREATE TABLE "Competition" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "competitionId" TEXT NOT NULL,
    "odds" INTEGER[],

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competitor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "Competitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitorsInEvent" (
    "evenId" TEXT NOT NULL,
    "competitorId" TEXT NOT NULL,

    CONSTRAINT "CompetitorsInEvent_pkey" PRIMARY KEY ("evenId","competitorId")
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" TEXT NOT NULL,
    "bettorId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "money" INTEGER NOT NULL,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitorsInEvent" ADD CONSTRAINT "CompetitorsInEvent_evenId_fkey" FOREIGN KEY ("evenId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitorsInEvent" ADD CONSTRAINT "CompetitorsInEvent_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "Competitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_bettorId_fkey" FOREIGN KEY ("bettorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
