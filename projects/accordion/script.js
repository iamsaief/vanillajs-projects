/**
 * Accrodion
 */
const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
accordionItemHeaders.forEach((accordionItemHeader) => {
	accordionItemHeader.addEventListener('click', () => {
		accordionItemHeader.classList.toggle('is-active');
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if (accordionItemHeader.classList.contains('is-active')) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
		} else {
			accordionItemBody.style.maxHeight = 0;
		}
	});
});
