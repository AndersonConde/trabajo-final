//Jeison Guerrero

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addCitaServicio = async (req, res) => {
  const { cliente, tipoServicio, comentarios } = req.body;

  try {
    const result = await prisma.citaServicio.create({
      data: {
        cliente,
        tipoServicio,
        comentarios,
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding cita de servicio:', error);
    res.status(500).json({ error: 'Error adding cita de servicio' });
  }
};

const showCitasServicio = async (req, res) => {
  try {
    const citasServicio = await prisma.citaServicio.findMany();
    res.status(200).json({ citasServicio });
  } catch (error) {
    console.error('Error fetching citas de servicio:', error);
    res.status(500).json({ error: 'Error fetching citas de servicio' });
  }
};

const showCitaServicio = async (req, res) => {
  const { id } = req.params;

  try {
    const citaServicio = await prisma.citaServicio.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!citaServicio) {
      res.status(404).json({ error: 'Cita de servicio not found' });
      return;
    }

    res.status(200).json({ citaServicio });
  } catch (error) {
    console.error('Error fetching cita de servicio:', error);
    res.status(500).json({ error: 'Error fetching cita de servicio' });
  }
};

const updateCitaServicio = async (req, res) => {
  const { id } = req.params;
  const { cliente, tipoServicio, comentarios } = req.body;

  try {
    const updatedCitaServicio = await prisma.citaServicio.update({
      where: {
        id: parseInt(id),
      },
      data: {
        cliente,
        tipoServicio,
        comentarios,
      },
    });

    res.status(200).json({ citaServicio: updatedCitaServicio });
  } catch (error) {
    console.error('Error updating cita de servicio:', error);
    res.status(500).json({ error: 'Error updating cita de servicio' });
  }
};

const deleteCitaServicio = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.citaServicio.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting cita de servicio:', error);
    res.status(500).json({ error: 'Error deleting cita de servicio' });
  }
};

module.exports = {
  addCitaServicio,
  showCitasServicio,
  showCitaServicio,
  updateCitaServicio,
  deleteCitaServicio,
};
