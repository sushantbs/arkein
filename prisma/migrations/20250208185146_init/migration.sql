/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Email` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Email_token_key" ON "Email"("token");
