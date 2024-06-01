//ESTEBAN ALEJANDRO ACOSTA

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addPerson = async (req, res) => {
  const { name, lastName, published, userId } = req.body;

  try {
    const result = await prisma.person.create({
      data: {
        name,
        lastName,
        published,
        userId
      },
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error('Error adding person:', error);
    res.status(500).json({ error: 'Error adding person' });
  }
};

const showPersons = async (req, res) => {
  try {
    const persons = await prisma.person.findMany();
    res.status(200).json({ persons });
  } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Error fetching persons' });
  }
};

const showPerson = async (req, res) => {
  const { id } = req.params;

  try {
    const person = await prisma.person.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
      return;
    }

    res.status(200).json({ person });
  } catch (error) {
    console.error('Error fetching person:', error);
    res.status(500).json({ error: 'Error fetching person' });
  }
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, published, userId } = req.body;

  try {
    const updatedPerson = await prisma.person.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        lastName,
        published,
        userId
      },
    });

    res.status(200).json({ person: updatedPerson });
  } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Error updating person' });
  }
};

const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.person.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json();
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ error: 'Error deleting person' });
  }
};

module.exports = {
  addPerson,
  showPersons,
  showPerson,
  updatePerson,
  deletePerson,
};
