/*
  Warnings:

  - You are about to drop the column `userId` on the `Venta` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Venta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "vehiculo" TEXT NOT NULL,
    "fecha_venta" TEXT NOT NULL,
    "precio_venta" REAL NOT NULL,
    "vendedor" TEXT NOT NULL
);
INSERT INTO "new_Venta" ("cliente", "fecha_venta", "id", "precio_venta", "vehiculo", "vendedor") SELECT "cliente", "fecha_venta", "id", "precio_venta", "vehiculo", "vendedor" FROM "Venta";
DROP TABLE "Venta";
ALTER TABLE "new_Venta" RENAME TO "Venta";
PRAGMA foreign_key_check("Venta");
PRAGMA foreign_keys=ON;
