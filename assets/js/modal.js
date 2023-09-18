(function() {
    
    let modal_btn = document.querySelectorAll('.modal-btn');
    let modal = document.querySelector('.modal');
    let closeBtn = document.querySelector('.modal__close-btn');
    let burger_menu = document.querySelector('.burger-menu');
    let body = document.querySelector('body');
    modal_btn.forEach((e)=>{
        e.addEventListener('click', () => {
            modal.classList.add('active');
            document.querySelector('main').style.filter = 'blur(100px)' ;
            document.querySelector('footer').style.filter = 'blur(100px)' ;
            document.querySelector('main').style.pointerEvents = 'none' ;
            document.querySelector('footer').style.pointerEvents = 'none' ;
            document.querySelector('main').style.userSelect = 'none' ;
            document.querySelector('footer').style.userSelect = 'none' ;
            if(burger_menu.classList.contains('active')){
                burger_menu.classList.remove('active');
                if(body.style.overflow === "hidden"){
                    body.style.overflow = 'auto';
                }else body.style.overflow = 'hidden';
            }
           
        })
    })
    
    closeBtn.addEventListener('click',()=>{
        modal.classList.remove('active');
        document.querySelector('main').style.filter = 'blur(0)';
        document.querySelector('footer').style.filter = 'blur(0)';
        document.querySelector('main').style.pointerEvents = 'unset' ;
            document.querySelector('footer').style.pointerEvents = 'unset' ;
            document.querySelector('main').style.userSelect = 'unset' ;
            document.querySelector('footer').style.userSelect = 'unset' ;
    })

}())