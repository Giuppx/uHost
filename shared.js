const chosePalnBtns = document.querySelectorAll('.plan button');
const backdrop = document.getElementsByClassName('backdrop')[0];
const modal = document.getElementsByClassName('modal')[0];
const modalCloseButton = document.getElementsByClassName('modal__action--negative')[0]


// display modal
for (let i = 0; i < chosePalnBtns.length; i++) {
    chosePalnBtns[i].addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    })

}

// hide modal
modalCloseButton.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';

})