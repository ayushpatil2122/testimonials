/*
  Warnings:

  - Made the column `spaceLogo` on table `TestimonialSpace` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TestimonialSpace" ALTER COLUMN "spaceLogo" SET NOT NULL,
ALTER COLUMN "questions" DROP NOT NULL;
