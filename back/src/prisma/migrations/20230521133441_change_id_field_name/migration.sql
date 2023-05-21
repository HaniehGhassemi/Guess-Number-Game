/*
  Warnings:

  - The primary key for the `Game` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gid` on the `Game` table. All the data in the column will be lost.
  - The primary key for the `Play` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pid` on the `Play` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Play" DROP CONSTRAINT "Play_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Play" DROP CONSTRAINT "Play_userId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP CONSTRAINT "Game_pkey",
DROP COLUMN "gid",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Game_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Play" DROP CONSTRAINT "Play_pkey",
DROP COLUMN "pid",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Play_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Play" ADD CONSTRAINT "Play_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Play" ADD CONSTRAINT "Play_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
