const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

const upObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('upshow');
        }else{
            entry.target.classList.remove('upshow');
        }
    })
})


const lefthiddenElements = document.querySelectorAll('.leftHover');
const uphiddenElements = document.querySelectorAll('.upHover');

uphiddenElements.forEach((el) => upObserve.observe(el));
lefthiddenElements.forEach((el) => observer.observe(el));

console.log("Made by ur dad max");