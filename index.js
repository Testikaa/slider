const slides = document.getElementsByClassName('slide');

for (const slide of slides){
    slide.addEventListener('click', ()=>{
        removeActive();
        slide.classList.add('active');
    })
}
function removeActive(){
    for (const slide of slides){
        slide.classList.remove('active');
    }
}