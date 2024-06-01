// JOSE MANUEL MENESES 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addRutaEntrega = async (req, res) => {
  const { descripcionRuta, vehiculoAsignado, conductor } = req.body;

  try {
    const result = await prisma.rutaEntrega.create({
      data: {
        descripcionRuta,
        vehiculoAsignado,
        conductor
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding ruta de entrega:', error);
    res.status(500).json({ error: 'Error adding ruta de entrega' });
  }
};

const showRutasEntrega = async (req, res) => {
  try {
    const rutasEntrega = await prisma.rutaEntrega.findMany();
    res.status(200).json({ rutasEntrega });
  } catch (error) {
    console.error('Error fetching rutas de entrega:', error);
    res.status(500).json({ error: 'Error fetching rutas de entrega' });
  }
};

const showRutaEntrega = async (req, res) => {
  const { id } = req.params;

  try {
    const rutaEntrega = await prisma.rutaEntrega.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!rutaEntrega) {
      res.status(404).json({ error: 'Ruta de entrega not found' });
      return;
    }

    res.status(200).json({ rutaEntrega });
  } catch (error) {
    console.error('Error fetching ruta de entrega:', error);
    res.status(500).json({ error: 'Error fetching ruta de entrega' });
  }
};

const updateRutaEntrega = async (req, res) => {
  const { id } = req.params;
  const { descripcionRuta, vehiculoAsignado, conductor} = req.body;

  try {
    const updatedRutaEntrega = await prisma.rutaEntrega.update({
      where: {
        id: parseInt(id),
      },
      data: {
        descripcionRuta,
        vehiculoAsignado,
        conductor
      },
    });

    res.status(200).json({ rutaEntrega: updatedRutaEntrega });
  } catch (error) {
    console.error('Error updating ruta de entrega:', error);
    res.status(500).json({ error: 'Error updating ruta de entrega' });
  }
};

const deleteRutaEntrega = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.rutaEntrega.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting ruta de entrega:', error);
    res.status(500).json({ error: 'Error deleting ruta de entrega' });
  }
};

module.exports = {
  addRutaEntrega,
  showRutasEntrega,
  showRutaEntrega,
  updateRutaEntrega,
  deleteRutaEntrega,
};
