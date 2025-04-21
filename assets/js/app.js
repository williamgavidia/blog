let toggle=document.getElementById('toggle');
let label_toogle=document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=> {
        let checked=event.target.checked;
        document.body.classList.toggle('dark');
        if (checked==true){
         label_toogle.innerHTML = '<i class="fa-solid fa-sun"></i>';
         label_toogle.style.color = "yellow";
        } else {
            label_toogle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            label_toogle.style.color = "rebeccapurple";
        }
    })