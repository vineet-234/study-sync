let button=document.querySelector('.button');
let side =document.getElementById("sidebar");
button.addEventListener('click',function()
{
    side.classList.add('side_bar_active');
});

document.addEventListener('click', function(event) {
    if ( !button.contains(event.target) && !side.contains(event.target)) {
        sidebar.classList.remove('side_bar_active'); 
    }
});