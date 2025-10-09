
const faqBtn = document.querySelector('.faq-btn');
const aNswer = document.querySelector('.answer');

faqBtn.addEventListener('click', ()=>{
   if (aNswer.classList.contains('answer')){
        aNswer.classList.remove('answer');
        faqBtn.innerHTML = '<i class="bi up bi-chevron-up"></i>'
    }else {
        aNswer.classList.toggle('answer')
        faqBtn.innerHTML = '<i class="bi up bi-chevron-down"></i>'
    }
})


