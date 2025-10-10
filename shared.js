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
        backdrop.style.display = 'block';
        modal.classList.add('open');
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10)
    })

}

// hide modal
if (modal) {
    modalCloseButton.addEventListener('click', () => {
        // backdrop.style.display = 'none';
        // modal.style.display = 'none';
        modal.classList.remove('open');
        backdrop.classList.remove('open');
        setTimeout(() => {
            backdrop.style.display = 'none';
        }, 10)
    })

}

backdrop.addEventListener('click', () => {
    if (modal) {
        modal.classList.remove('open');
    }

    if (isOpen) {
        isOpen = false;
        mobileNav.classList.remove('open');
        setTimeout(() => {
            mobileNav.style.display = 'none';
        }, 1000)

    }
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 10)

})

// toggle nav 

const toggle = document.getElementsByClassName('toggle-button')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];
let isOpen = false;

toggle.addEventListener('click', () => {
    isOpen = true;
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
    setTimeout(() => {
        mobileNav.classList.add('open');
        backdrop.classList.add('open');

    }, 10);
})

