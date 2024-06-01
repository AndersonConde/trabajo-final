/*
  Warnings:

  - You are about to drop the column `fecha_cita` on the `CitaServicio` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_fin` on the `Garantia` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_inicio` on the `Garantia` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_venta` on the `Venta` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_llegada` on the `RutaEntrega` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_salida` on the `RutaEntrega` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_cotizacion` on the `Cotizacion` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CitaServicio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "tipo_servicio" TEXT NOT NULL,
    "comentarios" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "CitaServicio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CitaServicio" ("cliente", "comentarios", "id", "tipo_servicio", "userId") SELECT "cliente", "comentarios", "id", "tipo_servicio", "userId" FROM "CitaServicio";
DROP TABLE "CitaServicio";
ALTER TABLE "new_CitaServicio" RENAME TO "CitaServicio";
CREATE TABLE "new_Garantia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehiculo" TEXT NOT NULL,
    "cobertura" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Garantia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Garantia" ("cobertura", "id", "userId", "vehiculo") SELECT "cobertura", "id", "userId", "vehiculo" FROM "Garantia";
DROP TABLE "Garantia";
ALTER TABLE "new_Garantia" RENAME TO "Garantia";
CREATE TABLE "new_Venta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "vehiculo" TEXT NOT NULL,
    "precio_venta" REAL NOT NULL,
    "vendedor" TEXT NOT NULL
);
INSERT INTO "new_Venta" ("cliente", "id", "precio_venta", "vehiculo", "vendedor") SELECT "cliente", "id", "precio_venta", "vehiculo", "vendedor" FROM "Venta";
DROP TABLE "Venta";
ALTER TABLE "new_Venta" RENAME TO "Venta";
CREATE TABLE "new_RutaEntrega" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion_ruta" TEXT NOT NULL,
    "vehiculo_asignado" TEXT NOT NULL,
    "conductor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "RutaEntrega_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RutaEntrega" ("conductor", "descripcion_ruta", "id", "userId", "vehiculo_asignado") SELECT "conductor", "descripcion_ruta", "id", "userId", "vehiculo_asignado" FROM "RutaEntrega";
DROP TABLE "RutaEntrega";
ALTER TABLE "new_RutaEntrega" RENAME TO "RutaEntrega";
CREATE TABLE "new_Cotizacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "vehiculo" TEXT NOT NULL,
    "precio_cotizado" REAL NOT NULL,
    "vendedor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Cotizacion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cotizacion" ("cliente", "id", "precio_cotizado", "userId", "vehiculo", "vendedor") SELECT "cliente", "id", "precio_cotizado", "userId", "vehiculo", "vendedor" FROM "Cotizacion";
DROP TABLE "Cotizacion";
ALTER TABLE "new_Cotizacion" RENAME TO "Cotizacion";
PRAGMA foreign_key_check("CitaServicio");
PRAGMA foreign_key_check("Garantia");
PRAGMA foreign_key_check("Venta");
PRAGMA foreign_key_check("RutaEntrega");
PRAGMA foreign_key_check("Cotizacion");
PRAGMA foreign_keys=ON;
