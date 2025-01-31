document.addEventListener("click", (e)=>{
    let el = e.target;
    if(el.classList.contains("brand-list__item--all")){
        if(el.classList.contains('brand-list__item--choosing')){
            el.classList.remove('brand-list__item--choosing')
        }else{
            el.classList.add('brand-list__item--choosing')
        }
    }
})