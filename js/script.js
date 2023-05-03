document.addEventListener('DOMContentLoaded',function(){

    const popularItemWrap =  document.querySelector('.popular_item_wrapper')
    popularItemWrap.addEventListener('click',(e)=>{
        // console.log(e.target)
        if(e.target.classList.contains('active-btn__blue')){
            window.location.replace('cart.html');
        }
        // console.log(e.target.classList)
        if(e.target.classList.contains('btn__blue')){
            e.target.classList.remove('btn__blue');
            e.target.classList.add('active-btn__blue');
            // console.log(e.target.parentElement)
            console.log(e.target)

            // const link = document.createElement('a')
            // link.setAttribute('href','cart.html')
            // e.target.append(link);
            
            // console.log('containes')
        }
       
        // active-btn__blue
        // btn__blue
    })
    

})