const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


function reloadPage() {
    window.location.reload()
}

const loginLink = $('#login-link');
const loginContainer = $('#login-container');
const overlay = $('#overlay');
const tabLinks = $$('.tab-link');
const tabContents = $$('.tab-content');
const ex_tabs = $$('.ex-tab')
const exercises = $$('.exercise')
const startBtn = $$('.start-btn')
const input_area = $('.input-area')
const submitAns = $('.submit-answer')
const submitBtn = $('#submitBtn')
const closeAnsBtn = $('#close-ans')

closeAnsBtn.addEventListener('click', ()=>
{
    submitAns.classList.remove('active')
    input_area.classList.add('active')
})




ex_tabs.forEach((tab, index) => {
    const ex = exercises[index];

    tab.addEventListener('click', function () {

        if($('.exercise.active'))
        {
            $('.exercise.active').classList.remove('active')
        }
        if($('.input-area.active'))
        {
            $('.input-area.active').classList.remove('active')
        }
        if( $('.ex-tab.active'))
        {
            $('.ex-tab.active').classList.remove('active')
        }
        ex.classList.add('active')
       
        this.classList.add('active')
    });

    startBtn[index].addEventListener('click', function()
    {
        input_area.classList.add('active')
        if($('.exercise.active'))
        {
            $('.exercise.active').classList.remove('active')
        }
    })

    submitBtn.addEventListener('click', function(){

        submitAns.classList.add('active')
        input_area.classList.remove('active')
    })

});











// When the login link is clicked, show the login box
loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginContainer.classList.add('show');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
    loginContainer.classList.remove('show');
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 300); 
});

tabLinks.forEach((tab, index)=>
{
    const content = tabContents[index]

    tab.addEventListener('click', function()
    {
        $('.tab-link.active').classList.remove('active')
        $('.tab-content.active').classList.remove('active')

        content.classList.add('active')
        this.classList.add('active')
    })
})
