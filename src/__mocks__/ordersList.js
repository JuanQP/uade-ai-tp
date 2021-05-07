import { v4 as uuid } from 'uuid';

const ordersList = [
  {
    id: uuid(),
    cod: '1000',
    nombreYapellido: 'Juan Ignacio Quinteros Parada',
    email: 'juanquinteros@uade.edu.ar',
    cantidad: '2',
    fechacompra: '04/04/2021',
    fechaentrega: '06/04/2021',
    total: '$200'
  },
  {
    id: uuid(),
    cod: '1001',
    nombreYapellido: 'Martín Fiordilino',
    email: 'mfiordilino@uade.edu.ar',
    cantidad: '2',
    fechacompra: '08/04/2021',
    fechaentrega: '10/04/2021',
    total: '$200'
  },

];
export default ordersList;
