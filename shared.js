console.log('loaded');


var selectPlanButtons = document.querySelectorAll('.plan button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const showBackdrop = () => {
    backdrop.style.display = 'block';
    backdrop.classList.add('open');
}

const hideBackdrop = () => {
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
}

const hideModal = () => {
    if (modal) {
        modal.style.display = 'none';
    }
}

const showModal = () => {
    modal.style.display = 'block';
}

const toggleMobileNav = () => {
    const currentVal = mobileNav.style.display;
    mobileNav.style.display = currentVal === 'none' ? 'block' : 'none';
    const funcToExecute = currentVal === 'none' ? showBackdrop : hideBackdrop;
    funcToExecute();
}

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => { showBackdrop(); showModal(); })
}
backdrop.addEventListener('click', () => { hideBackdrop(); hideModal(); });
if (modalNoButton) { modalNoButton.addEventListener('click', () => { hideBackdrop(); hideModal(); }); }

toggleButton.addEventListener('click', toggleMobileNav);






