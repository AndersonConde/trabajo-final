//ANDERSON FERNANDO CONDE RIVERA

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addProveedor = async (req, res) => {
  const { nombre, contacto, telefono, email, direccion } = req.body;

  try {
    const result = await prisma.proveedor.create({
      data: {
        nombre,
        contacto,
        telefono,
        email,
        direccion,
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding proveedor:', error);
    res.status(500).json({ error: 'Error adding proveedor' });
  }
};

const showProveedores = async (req, res) => {
  try {
    const proveedores = await prisma.proveedor.findMany();
    res.status(200).json({ proveedores });
  } catch (error) {
    console.error('Error fetching proveedores:', error);
    res.status(500).json({ error: 'Error fetching proveedores' });
  }
};

const showProveedor = async (req, res) => {
  const { id } = req.params;

  try {
    const proveedor = await prisma.proveedor.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!proveedor) {
      res.status(404).json({ error: 'Proveedor not found' });
      return;
    }

    res.status(200).json({ proveedor });
  } catch (error) {
    console.error('Error fetching proveedor:', error);
    res.status(500).json({ error: 'Error fetching proveedor' });
  }
};

const updateProveedor = async (req, res) => {
  const { id } = req.params;
  const { nombre, contacto, telefono, email, direccion } = req.body;

  try {
    const updatedProveedor = await prisma.proveedor.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nombre,
        contacto,
        telefono,
        email,
        direccion,
      },
    });

    res.status(200).json({ proveedor: updatedProveedor });
  } catch (error) {
    console.error('Error updating proveedor:', error);
    res.status(500).json({ error: 'Error updating proveedor' });
  }
};

const deleteProveedor = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.proveedor.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting proveedor:', error);
    res.status(500).json({ error: 'Error deleting proveedor' });
  }
};

module.exports = {
  addProveedor,
  showProveedores,
  showProveedor,
  updateProveedor,
  deleteProveedor,
};
