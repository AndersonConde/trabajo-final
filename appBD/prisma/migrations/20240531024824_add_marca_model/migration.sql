-- CreateTable
CREATE TABLE "Marca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Marca_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
