window.addEventListener('scroll', ()=> {

    const scrolled = window.scrollY;
    const active = document.querySelector('.boxup1')
    const active2 = document.querySelector('.boxup2')
    const active3 = document.querySelector('.boxup3')
    const active4 = document.querySelector('.boxup4')


    if(scrolled >= 6) {
        active.style.animation = "slide-up 1s"
        active.style.color = "black"
        active2.style.animation = "slide-up 1.5s"
        active2.style.color = "black"
        active3.style.animation = "slide-up 2s"
        active3.style.color = "black"
        active4.style.animation = "slide-up 2.5s"
        active4.style.color = "black"  
       //document.documentElement.style.setProperty('animation: slide-up 1s,  active')
      // active.style.animation = "animation: slide-up 1s" 
      // alert('srcullup')
    }else if(scrolled < 6){
        
        active.style.animation = "slide-down 2.5s forwards"
        active2.style.animation = "slide-down 2s forwards"
        active3.style.animation = "slide-down 1.5s forwards"
        active4.style.animation = "slide-down 1s forwards"  
    }

    console.log(scrolled)
})