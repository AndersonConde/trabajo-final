const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log('Users:', users);

  const persons = await prisma.person.findMany();
  console.log('Persons:', persons);

  const marcas = await prisma.marca.findMany();
  console.log('Marcas:', marcas);

  const ventas = await prisma.venta.findMany();
  console.log('Ventas:', ventas);

  const cotizaciones = await prisma.cotizacion.findMany();
  console.log('Cotizaciones:', cotizaciones);

  const vehiculos = await prisma.vehiculo.findMany();
  console.log('Vehículos:', vehiculos);

  const piezas = await prisma.pieza.findMany();
  console.log('Piezas:', piezas);

  const citasServicio = await prisma.citaServicio.findMany();
  console.log('Citas de Servicio:', citasServicio);

  const garantias = await prisma.garantia.findMany();
  console.log('Garantías:', garantias);

  const proveedores = await prisma.proveedor.findMany();
  console.log('Proveedores:', proveedores);

  const rutasEntrega = await prisma.rutaEntrega.findMany();
  console.log('Rutas de Entrega:', rutasEntrega);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
