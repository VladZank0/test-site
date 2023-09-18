(function(){

    let question_btns = document.querySelectorAll('.quiz__questions-item');
    let content_items = document.querySelectorAll('.quiz__contents-item');
    let continue_btns = document.querySelectorAll('.quiz__continue-btn');
    let prev_btns = document.querySelectorAll('.quiz__prev-btn');

    prev_btns.forEach((e, index) => {
        e.addEventListener('click', () => {
            let contentID = e.getAttribute('data-prevContent');
            let current_content = document.querySelector(contentID);
            content_items.forEach((content)=>{
                content.classList.remove('active');
            })
            current_content.classList.add('active');
            let prevBtn = document.querySelector(`[data-content="${contentID}"]`);
            question_btns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            prevBtn.classList.add("active");
        })
    })
    continue_btns.forEach((e, index) => {
        e.addEventListener('click', () => {
            let contentID = e.getAttribute('data-nextContent');
            let current_content = document.querySelector(contentID);
            content_items.forEach((content)=>{
                content.classList.remove('active');
            })
            current_content.classList.add('active');
            let nextBtn = document.querySelector(`[data-content="${contentID}"]`);
            question_btns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            nextBtn.classList.add('shown', "active");
        })
    })

    question_btns.forEach((e, index) => {
        e.addEventListener('click', () => {
            if(!e.classList.contains('active')){
                question_btns.forEach((btn)=>{
                    btn.classList.remove('active');
                })
                e.classList.add('active');
                let btnId = e.getAttribute('data-content');
                let current_content = document.querySelector(btnId);
                content_items.forEach((content)=>{
                    content.classList.remove('active');
                })
                current_content.classList.add('active');
            }
        })
    })


}())