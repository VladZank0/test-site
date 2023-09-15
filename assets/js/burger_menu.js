(function(){
    let btn = document.querySelector('.burger-btn');
    let menu = document.querySelector('.burger-menu');
    btn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
    })

}())