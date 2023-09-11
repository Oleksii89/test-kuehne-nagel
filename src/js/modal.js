import { support } from './support';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

const shipmentTable = document.querySelector('.shipments-table');

shipmentTable.addEventListener('click', openModal);

function openModal(evt) {
  if (!evt.target.classList.contains('js-target')) {
    return;
  }

  const shipmentId = evt.target.dataset.shipmentId;
  const currentShipment = findShipment(shipmentId);

  const instance = basicLightbox.create(`
   <ul class="input-list">
             <li class="input-style"><span class="modal-form-text">orderNo</span><input class="form-input" type="text" placeholder="${currentShipment.orderNo}"></li>
             <li class="input-style"><span class="modal-form-text">date</span><input class="form-input" type="text" placeholder="${currentShipment.date}"></li>
             <li class="input-style"><span class="modal-form-text">customer</span><input class="form-input" type="text" placeholder="${currentShipment.customer}"></li>
             <li class="input-style"><span class="modal-form-text">trackingNo</span><input class="form-input" type="text" placeholder="${currentShipment.trackingNo}"></li>
             <li class="input-style"><span class="modal-form-text">consignee</span><input class="form-input" type="text" placeholder="${currentShipment.consignee}"></li>
             <li class="input-style"><span class="modal-form-text">status</span><input class="form-input" type="text" placeholder="${currentShipment.status}"></li>
             </ul>
  `);
  instance.show();
}

function findShipment(shipmentId) {
  return support.find(({ orderNo }) => orderNo === shipmentId);
}
