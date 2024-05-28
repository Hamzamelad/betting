/*
  Warnings:

  - The primary key for the `CompetitorsInEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `competitorId` on the `CompetitorsInEvent` table. All the data in the column will be lost.
  - You are about to drop the column `evenId` on the `CompetitorsInEvent` table. All the data in the column will be lost.
  - Added the required column `competitor_id` to the `CompetitorsInEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_id` to the `CompetitorsInEvent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompetitorsInEvent" DROP CONSTRAINT "CompetitorsInEvent_competitorId_fkey";

-- DropForeignKey
ALTER TABLE "CompetitorsInEvent" DROP CONSTRAINT "CompetitorsInEvent_evenId_fkey";

-- AlterTable
ALTER TABLE "CompetitorsInEvent" DROP CONSTRAINT "CompetitorsInEvent_pkey",
DROP COLUMN "competitorId",
DROP COLUMN "evenId",
ADD COLUMN     "competitor_id" TEXT NOT NULL,
ADD COLUMN     "event_id" TEXT NOT NULL,
ADD CONSTRAINT "CompetitorsInEvent_pkey" PRIMARY KEY ("event_id", "competitor_id");

-- AddForeignKey
ALTER TABLE "CompetitorsInEvent" ADD CONSTRAINT "CompetitorsInEvent_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitorsInEvent" ADD CONSTRAINT "CompetitorsInEvent_competitor_id_fkey" FOREIGN KEY ("competitor_id") REFERENCES "Competitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
