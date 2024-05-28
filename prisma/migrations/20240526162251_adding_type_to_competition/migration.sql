-- CreateEnum
CREATE TYPE "CompetitionType" AS ENUM ('SPORTS', 'E_SPORTS', 'CASINO');

-- AlterTable
ALTER TABLE "Competition" ADD COLUMN     "type" "CompetitionType" NOT NULL DEFAULT 'SPORTS';
