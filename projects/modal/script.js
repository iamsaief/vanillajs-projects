const openModalBtns = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-closemodal-btn]');
const modalOverlay = document.querySelector('.modal-overlay');

// Opening modal when clicked open btn
openModalBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const modal = document.querySelector(btn.dataset.modalTarget);
		openModal(modal);
	});
});

// Closing modal when clicked close btn
closeModalBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const modal = btn.closest('.modal-window');
		closeModal(modal);
	});
});

// Closing modal when clicked outside
modalOverlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal-window.is-active');
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

// Closing modal with esc key
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const modals = document.querySelectorAll('.modal-window.is-active');
		modals.forEach((modal) => {
			closeModal(modal);
		});
	}
});

const openModal = (modal) => modal.classList.add('is-active');
const closeModal = (modal) => modal.classList.remove('is-active');
