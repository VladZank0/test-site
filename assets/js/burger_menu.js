(function(){
    let btn = document.querySelector('.burger-btn');
    let menu = document.querySelector('.burger-menu');
    let body = document.querySelector('body');
    btn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        if(body.style.overflow === "hidden"){
            body.style.overflow = 'auto';
        }else body.style.overflow = 'hidden';
        
    })
    
}())
