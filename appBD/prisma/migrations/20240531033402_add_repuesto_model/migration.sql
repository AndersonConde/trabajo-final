-- CreateTable
CREATE TABLE "Repuesto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "precio" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Repuesto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
