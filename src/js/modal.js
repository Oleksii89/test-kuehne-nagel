const borderModal = document.querySelector('.backdrop');
const btnShowShipment = document.querySelectorAll('.details');
const shipmentTable = document.querySelector('.shipments-table');

btnShowShipment.forEach(function (item) {
  item.addEventListener('click', openModal);
});

borderModal.addEventListener('click', evt => {
  if (evt.target === borderModal) {
    closeModal();
  }
});

function openModal() {
  borderModal.classList.remove('is-hidden');
}
function closeModal() {
  borderModal.classList.add('is-hidden');
}
