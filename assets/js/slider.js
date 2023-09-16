(function(){
    let prevBtn = document.querySelector('.swiper-button-prev');
    let nextBtn = document.querySelector('.swiper-button-next');

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        observer: true, 
        observeParents: true,
        spaceBetween: 10,
        parallax: true,
        slidesPerView: "auto",
        centeredSlides: true,
        centeredSlidesBounds:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
       
      });

      prevBtn.addEventListener('click', () => {
        swiper.slidePrev();
      })
      nextBtn.addEventListener('click', () => {
        swiper.slideNext();
      })
      
}())