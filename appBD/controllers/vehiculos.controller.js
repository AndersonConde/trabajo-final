// JAMES MICHAEL ORDOÑEZ ZAMBRANO

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addVehiculo = async (req, res) => {
  const { marca, modelo, ano, color, precio, estado } = req.body;

  try {
    const result = await prisma.vehiculo.create({
      data: {
        marca,
        modelo,
        ano,
        color,
        precio,
        estado,
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding vehiculo:', error);
    res.status(500).json({ error: 'Error adding vehiculo' });
  }
};

const showVehiculos = async (req, res) => {
  try {
    const vehiculos = await prisma.vehiculo.findMany();
    res.status(200).json({ vehiculos });
  } catch (error) {
    console.error('Error fetching vehiculos:', error);
    res.status(500).json({ error: 'Error fetching vehiculos' });
  }
};

const showVehiculo = async (req, res) => {
  const { id } = req.params;

  try {
    const vehiculo = await prisma.vehiculo.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!vehiculo) {
      res.status(404).json({ error: 'Vehiculo not found' });
      return;
    }

    res.status(200).json({ vehiculo });
  } catch (error) {
    console.error('Error fetching vehiculo:', error);
    res.status(500).json({ error: 'Error fetching vehiculo' });
  }
};

const updateVehiculo = async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, ano, color, precio, estado } = req.body;

  try {
    const updatedVehiculo = await prisma.vehiculo.update({
      where: {
        id: parseInt(id),
      },
      data: {
        marca,
        modelo,
        ano,
        color,
        precio,
        estado,
      },
    });

    res.status(200).json({ vehiculo: updatedVehiculo });
  } catch (error) {
    console.error('Error updating vehiculo:', error);
    res.status(500).json({ error: 'Error updating vehiculo' });
  }
};

const deleteVehiculo = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.vehiculo.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting vehiculo:', error);
    res.status(500).json({ error: 'Error deleting vehiculo' });
  }
};

module.exports = {
  addVehiculo,
  showVehiculos,
  showVehiculo,
  updateVehiculo,
  deleteVehiculo,
};
