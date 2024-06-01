// SEBASTIAN CAMILO AGREDA

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addVenta = async (req, res) => {
  const { cliente, vehiculo, precioVenta, vendedor } = req.body;

  try {
    const result = await prisma.venta.create({
      data: {
        cliente,
        vehiculo,
        precio_venta: precioVenta,
        vendedor,
       
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding venta:', error);
    res.status(500).json({ error: 'Error adding venta' });
  }
};

const showVentas = async (req, res) => {
  try {
    const ventas = await prisma.venta.findMany();
    res.status(200).json({ ventas });
  } catch (error) {
    console.error('Error fetching ventas:', error);
    res.status(500).json({ error: 'Error fetching ventas' });
  }
};

const showVenta = async (req, res) => {
  const { id } = req.params;

  try {
    const venta = await prisma.venta.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!venta) {
      res.status(404).json({ error: 'Venta not found' });
      return;
    }

    res.status(200).json({ venta });
  } catch (error) {
    console.error('Error fetching venta:', error);
    res.status(500).json({ error: 'Error fetching venta' });
  }
};

const updateVenta = async (req, res) => {
  const { id } = req.params;
  const { cliente, vehiculo, precioVenta, vendedor } = req.body;

  try {
    const updatedVenta = await prisma.venta.update({
      where: {
        id: parseInt(id),
      },
      data: {
        cliente,
        vehiculo,
        precio_venta: precioVenta,
        vendedor,
        
      },
    });

    res.status(200).json({ venta: updatedVenta });
  } catch (error) {
    console.error('Error updating venta:', error);
    res.status(500).json({ error: 'Error updating venta' });
  }
};

const deleteVenta = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.venta.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting venta:', error);
    res.status(500).json({ error: 'Error deleting venta' });
  }
};

module.exports = {
  addVenta,
  showVentas,
  showVenta,
  updateVenta,
  deleteVenta,
};
