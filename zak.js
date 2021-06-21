const toTopButton = document.querySelector('.tt');

window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        toTopButton.classList.remove('hide');
    } else {
        toTopButton.classList.add('hide');
    }
})