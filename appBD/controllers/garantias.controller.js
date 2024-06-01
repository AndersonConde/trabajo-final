//Jose Alirio Vaca

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addGarantia = async (req, res) => {
  const { vehiculo, cobertura } = req.body;

  try {
    const result = await prisma.garantia.create({
      data: {
        vehiculo,
        cobertura,
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding garantia:', error);
    res.status(500).json({ error: 'Error adding garantia' });
  }
};

const showGarantias = async (req, res) => {
  try {
    const garantias = await prisma.garantia.findMany();
    res.status(200).json({ garantias });
  } catch (error) {
    console.error('Error fetching garantias:', error);
    res.status(500).json({ error: 'Error fetching garantias' });
  }
};

const showGarantia = async (req, res) => {
  const { id } = req.params;

  try {
    const garantia = await prisma.garantia.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!garantia) {
      res.status(404).json({ error: 'Garantia not found' });
      return;
    }

    res.status(200).json({ garantia });
  } catch (error) {
    console.error('Error fetching garantia:', error);
    res.status(500).json({ error: 'Error fetching garantia' });
  }
};

const updateGarantia = async (req, res) => {
  const { id } = req.params;
  const { vehiculo, cobertura } = req.body;

  try {
    const updatedGarantia = await prisma.garantia.update({
      where: {
        id: parseInt(id),
      },
      data: {
        vehiculo,
        cobertura,
      },
    });

    res.status(200).json({ garantia: updatedGarantia });
  } catch (error) {
    console.error('Error updating garantia:', error);
    res.status(500).json({ error: 'Error updating garantia' });
  }
};

const deleteGarantia = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.garantia.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting garantia:', error);
    res.status(500).json({ error: 'Error deleting garantia' });
  }
};

module.exports = {
  addGarantia,
  showGarantias,
  showGarantia,
  updateGarantia,
  deleteGarantia,
};
