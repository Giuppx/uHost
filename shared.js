// modal

const chosePalnBtns = document.querySelectorAll('.plan button');
const backdrop = document.getElementsByClassName('backdrop')[0];
const modal = document.getElementsByClassName('modal')[0];
const modalCloseButton = document.getElementsByClassName('modal__action--negative')[0]


// display modal
for (let i = 0; i < chosePalnBtns.length; i++) {
    chosePalnBtns[i].addEventListener('click', () => {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        // modal.class = 'open';  overwrite all class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    })

}

// hide modal
if (modal) {
    modalCloseButton.addEventListener('click', () => {
        // backdrop.style.display = 'none';
        // modal.style.display = 'none';
        modal.classList.remove('open');
        backdrop.classList.remove('open');
    })

}

backdrop.addEventListener('click', () => {
    if (modal) {
        modal.classList.remove('open');
    }
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');


})

// toggle nav 

const toggle = document.getElementsByClassName('toggle-button')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];

toggle.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

})

