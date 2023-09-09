const borderModal = document.querySelector('.backdrop');
const btnShowShipment = document.querySelector('.shipments');
console.dir(btnShowShipment);
console.dir(borderModal);

// window.addEventListener('click', evt => {
//   console.log(evt.target);
// });

btnShowShipment.addEventListener('click', evt => {
  console.log(evt.target);
});

// function openModal(evt) {
//   console.log(evt.currentTarget);
//   borderModal.classList.remove('is-hidden');
// }
