const backBtn = document.getElementById('back-btn');
const modeSwitch = document.getElementById('mode-btn-blog');
const body = document.body;

backBtn.addEventListener('click', function(){
    window.history.backBtn;
})

modeSwitch.addEventListener('click', function(event){
    event.preventDefault;
    body.classList.toggle('dark-mode');
})


