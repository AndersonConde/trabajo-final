/*
  Warnings:

  - You are about to alter the column `fecha_cita` on the `CitaServicio` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `fecha_venta` on the `Venta` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `fecha_llegada` on the `RutaEntrega` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `fecha_salida` on the `RutaEntrega` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `fecha_fin` on the `Garantia` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `fecha_inicio` on the `Garantia` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CitaServicio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "fecha_cita" DATETIME NOT NULL,
    "tipo_servicio" TEXT NOT NULL,
    "comentarios" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "CitaServicio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CitaServicio" ("cliente", "comentarios", "fecha_cita", "id", "tipo_servicio", "userId") SELECT "cliente", "comentarios", "fecha_cita", "id", "tipo_servicio", "userId" FROM "CitaServicio";
DROP TABLE "CitaServicio";
ALTER TABLE "new_CitaServicio" RENAME TO "CitaServicio";
CREATE TABLE "new_Venta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "vehiculo" TEXT NOT NULL,
    "fecha_venta" DATETIME NOT NULL,
    "precio_venta" REAL NOT NULL,
    "vendedor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Venta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Venta" ("cliente", "fecha_venta", "id", "precio_venta", "userId", "vehiculo", "vendedor") SELECT "cliente", "fecha_venta", "id", "precio_venta", "userId", "vehiculo", "vendedor" FROM "Venta";
DROP TABLE "Venta";
ALTER TABLE "new_Venta" RENAME TO "Venta";
CREATE TABLE "new_RutaEntrega" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion_ruta" TEXT NOT NULL,
    "vehiculo_asignado" TEXT NOT NULL,
    "conductor" TEXT NOT NULL,
    "fecha_salida" DATETIME NOT NULL,
    "fecha_llegada" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "RutaEntrega_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RutaEntrega" ("conductor", "descripcion_ruta", "fecha_llegada", "fecha_salida", "id", "userId", "vehiculo_asignado") SELECT "conductor", "descripcion_ruta", "fecha_llegada", "fecha_salida", "id", "userId", "vehiculo_asignado" FROM "RutaEntrega";
DROP TABLE "RutaEntrega";
ALTER TABLE "new_RutaEntrega" RENAME TO "RutaEntrega";
CREATE TABLE "new_Garantia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehiculo" TEXT NOT NULL,
    "fecha_inicio" DATETIME NOT NULL,
    "fecha_fin" DATETIME NOT NULL,
    "cobertura" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Garantia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Garantia" ("cobertura", "fecha_fin", "fecha_inicio", "id", "userId", "vehiculo") SELECT "cobertura", "fecha_fin", "fecha_inicio", "id", "userId", "vehiculo" FROM "Garantia";
DROP TABLE "Garantia";
ALTER TABLE "new_Garantia" RENAME TO "Garantia";
PRAGMA foreign_key_check("CitaServicio");
PRAGMA foreign_key_check("Venta");
PRAGMA foreign_key_check("RutaEntrega");
PRAGMA foreign_key_check("Garantia");
PRAGMA foreign_keys=ON;