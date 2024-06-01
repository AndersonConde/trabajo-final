/*
  Warnings:

  - You are about to drop the `Repuesto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Repuesto";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Venta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "vehiculo" TEXT NOT NULL,
    "fecha_venta" DATETIME NOT NULL,
    "precio_venta" REAL NOT NULL,
    "vendedor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Venta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cotizacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "vehiculo" TEXT NOT NULL,
    "fecha_cotizacion" DATETIME NOT NULL,
    "precio_cotizado" REAL NOT NULL,
    "vendedor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Cotizacion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "anio" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "estado" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Vehiculo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pieza" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_pieza" TEXT NOT NULL,
    "vehiculo_compatible" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" REAL NOT NULL,
    "proveedor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Pieza_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CitaServicio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "fecha_cita" DATETIME NOT NULL,
    "tipo_servicio" TEXT NOT NULL,
    "comentarios" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "CitaServicio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Garantia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehiculo" TEXT NOT NULL,
    "fecha_inicio" DATETIME NOT NULL,
    "fecha_fin" DATETIME NOT NULL,
    "cobertura" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Garantia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Proveedor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Proveedor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RutaEntrega" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion_ruta" TEXT NOT NULL,
    "vehiculo_asignado" TEXT NOT NULL,
    "conductor" TEXT NOT NULL,
    "fecha_salida" DATETIME NOT NULL,
    "fecha_llegada" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "RutaEntrega_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
