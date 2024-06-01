//WILLIAN MAURICIO DIAZ
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addCotizacion = async (req, res) => {
  const { cliente, vehiculo, precioCotizado, vendedor } = req.body;

  try {
    const result = await prisma.cotizacion.create({
      data: {
        cliente,
        vehiculo,
        precioCotizado,
        vendedor,
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding cotizacion:', error);
    res.status(500).json({ error: 'Error adding cotizacion' });
  }
};

const showCotizaciones = async (req, res) => {
  try {
    const cotizaciones = await prisma.cotizacion.findMany();
    res.status(200).json({ cotizaciones });
  } catch (error) {
    console.error('Error fetching cotizaciones:', error);
    res.status(500).json({ error: 'Error fetching cotizaciones' });
  }
};

const showCotizacion = async (req, res) => {
  const { id } = req.params;

  try {
    const cotizacion = await prisma.cotizacion.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!cotizacion) {
      res.status(404).json({ error: 'Cotizacion not found' });
      return;
    }

    res.status(200).json({ cotizacion });
  } catch (error) {
    console.error('Error fetching cotizacion:', error);
    res.status(500).json({ error: 'Error fetching cotizacion' });
  }
};

const updateCotizacion = async (req, res) => {
  const { id } = req.params;
  const { cliente, vehiculo, precioCotizado, vendedor } = req.body;

  try {
    const updatedCotizacion = await prisma.cotizacion.update({
      where: {
        id: parseInt(id),
      },
      data: {
        cliente,
        vehiculo,
        precioCotizado,
        vendedor,
      },
    });

    res.status(200).json({ cotizacion: updatedCotizacion });
  } catch (error) {
    console.error('Error updating cotizacion:', error);
    res.status(500).json({ error: 'Error updating cotizacion' });
  }
};

const deleteCotizacion = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.cotizacion.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting cotizacion:', error);
    res.status(500).json({ error: 'Error deleting cotizacion' });
  }
};

module.exports = {
  addCotizacion,
  showCotizaciones,
  showCotizacion,
  updateCotizacion,
  deleteCotizacion,
};
