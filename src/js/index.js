import Notiflix from 'notiflix';

import { fetchShipments } from './shipments-api';
import { support } from './support';

const table = document.querySelector('.shipments-table');

// ------ Server is overloaded always so I made code below as a comment  -----------

// fetchShipments()
//   .then(response => {
//     table.insertAdjacentHTML('beforeend', createMarkup(response));
//   })
//   .catch(error => {
//     console.log(error);
//   });

// function createMarkup() {
//   return support
//     .map(({ consignee, customer, date, orderNo, status, trackingNo }) => {
//       return `<tbody><tr><td>${orderNo}</td>
//     <td>${date}</td>
//     <td>${customer}</td>
//     <td>${trackingNo}</td>
//     <td>${status}</td>
//     <td>${consignee}</td></tr></tbody>`;
//     })
//     .join('');
// }

// ------------------------

function createMarkup() {
  return support.map(
    ({ consignee, customer, date, orderNo, status, trackingNo }) => {
      const shipmentItem = `<tbody><tr><td>${orderNo}</td>
    <td>${date}</td>
    <td>${customer}</td>
    <td>${trackingNo}</td>
    <td>${status}</td>
    <td>${consignee}</td>
    <td><button class="details js-target" type="button" data-shipment-id="${orderNo}"></button></td>
    <td><button class="delete" type="button"></button></td></tr>
    </tbody>`;
      table.insertAdjacentHTML('beforeend', shipmentItem);
    }
  );
}
createMarkup();
