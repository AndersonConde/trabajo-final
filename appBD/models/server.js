const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', require('../routes/users.routes'));
    this.app.use('/persons', require('../routes/persons.routes'));
    this.app.use('/marcas', require('../routes/marcas.routes'));
    this.app.use('/ventas', require('../routes/ventas.routes'));
    this.app.use('/cotizaciones', require('../routes/cotizaciones.routes'));
    this.app.use('/vehiculos', require('../routes/vehiculos.routes'));
    this.app.use('/citas_servicio', require('../routes/citas_servicio.routes'));
    this.app.use('/garantias', require('../routes/garantias.routes'));
    this.app.use('/proveedores', require('../routes/proveedores.routes'));
    this.app.use('/rutas_entrega', require('../routes/rutas_entrega.routes'));

    // Ruta para la raíz
    this.app.get('/', (req, res) => {
      res.send('¡Bienvenido a la página de inicio!');
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto: ${this.port}`);
    });
  }
}

module.exports = Server;
