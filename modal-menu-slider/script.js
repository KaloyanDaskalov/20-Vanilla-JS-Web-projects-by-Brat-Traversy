const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const openModal = document.getElementById('open');
const modal = document.getElementById('modal');

// toggle navbar
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);

// show modal
openModal.addEventListener('click', () =>
    modal.classList.add('show-modal')
);

// hide modal
close.addEventListener('click', () =>
    modal.classList.remove('show-modal')
);

// hide modal on outside click (window.addEventListener)
document.body.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);