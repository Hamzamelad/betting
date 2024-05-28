/*
  Warnings:

  - You are about to drop the `CompetitorsInEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompetitorsInEvent" DROP CONSTRAINT "CompetitorsInEvent_competitor_id_fkey";

-- DropForeignKey
ALTER TABLE "CompetitorsInEvent" DROP CONSTRAINT "CompetitorsInEvent_event_id_fkey";

-- DropTable
DROP TABLE "CompetitorsInEvent";

-- CreateTable
CREATE TABLE "_CompetitorToEvent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompetitorToEvent_AB_unique" ON "_CompetitorToEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_CompetitorToEvent_B_index" ON "_CompetitorToEvent"("B");

-- AddForeignKey
ALTER TABLE "_CompetitorToEvent" ADD CONSTRAINT "_CompetitorToEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "Competitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompetitorToEvent" ADD CONSTRAINT "_CompetitorToEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
