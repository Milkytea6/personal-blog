const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', function(event){
    event.preventDefault;
    window.history.back;
})