//Anyerson Arvey Tumbaco
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addMarca = async (req, res) => {
  const { nombre, modelo, precio, userId } = req.body;

  try {
    const result = await prisma.marca.create({
      data: {
        nombre,
        modelo,
        precio,
        userId
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding marca:', error);
    res.status(500).json({ error: 'Error adding marca' });
  }
};

const showMarcas = async (req, res) => {
  try {
    const marcas = await prisma.marca.findMany();
    res.status(200).json({ marcas });
  } catch (error) {
    console.error('Error fetching marcas:', error);
    res.status(500).json({ error: 'Error fetching marcas' });
  }
};

const showMarca = async (req, res) => {
  const { id } = req.params;

  try {
    const marca = await prisma.marca.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!marca) {
      res.status(404).json({ error: 'Marca not found' });
      return;
    }

    res.status(200).json({ marca });
  } catch (error) {
    console.error('Error fetching marca:', error);
    res.status(500).json({ error: 'Error fetching marca' });
  }
};

const updateMarca = async (req, res) => {
  const { id } = req.params;
  const { nombre, modelo, precio, userId } = req.body;

  try {
    const updatedMarca = await prisma.marca.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nombre,
        modelo,
        precio,
        userId
      },
    });

    res.status(200).json({ marca: updatedMarca });
  } catch (error) {
    console.error('Error updating marca:', error);
    res.status(500).json({ error: 'Error updating marca' });
  }
};

const deleteMarca = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.marca.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting marca:', error);
    res.status(500).json({ error: 'Error deleting marca' });
  }
};

module.exports = {
  addMarca,
  showMarcas,
  showMarca,
  updateMarca,
  deleteMarca,
};
