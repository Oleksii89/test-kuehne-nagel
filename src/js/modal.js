import { support } from './support';
const borderModal = document.querySelector('.backdrop');
// const btnShowShipment = document.querySelector('.details');
const shipmentTable = document.querySelector('.shipments-table');

// btnShowShipment.forEach(function (item) {
//   item.addEventListener('click', openModal);
// });

borderModal.addEventListener('click', evt => {
  if (evt.target === borderModal) {
    closeModal();
  }
});

shipmentTable.addEventListener('click', openModal);

function openModal(evt) {
  if (!evt.target.classList.contains('js-target')) {
    return;
  }

  const shipmentId = evt.target.dataset.shipmentId;
  console.log(shipmentId);
  const currentShipment = support.find(({ orderNo }) => orderNo === shipmentId);
  console.log(currentShipment);
  borderModal.classList.remove('is-hidden');

  return `<div class="modal">
        <p class="modal-form-text">SHIPMENT DETAILS</p>
        <form class="modal-form"></form>
        <ul class="input-list">
          <li class="input-style"><span>orderNo</span><input class="form-input" type="text" placeholder=""></li>
          <li class="input-style"><span>date</span><input class="form-input" type="text" placeholder=""></li>
          <li class="input-style"><span>customer</span><input class="form-input" type="text" placeholder=""></li>
          <li class="input-style"><span>trackingNo</span><input class="form-input" type="text" placeholder=""></li>
          <li class="input-style"><span>consignee</span><input class="form-input" type="text" placeholder=""></li>
          <li class="input-style"><span>status</span><input class="form-input" type="text" placeholder=""></li>
        </ul>
        </form>
      </div>`;
}

function closeModal() {
  borderModal.classList.add('is-hidden');
}
