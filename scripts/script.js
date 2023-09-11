function active(value){
    switch(value){
        case 1:
            document.querySelector('.dropdown1').classList.toggle('active')
            document.querySelector('.box1').classList.toggle('active-box')
        break;

        case 2:
            document.querySelector('.dropdown2').classList.toggle('active')
            document.querySelector('.box2').classList.toggle('active-box')
        break;

        case 3:
            document.querySelector('.dropdown3').classList.toggle('active')
            document.querySelector('.box3').classList.toggle('active-box')
        break;

        case 4:
            document.querySelector('.dropdown4').classList.toggle('active')
            document.querySelector('.box4').classList.toggle('active-box')
        break;
        
    }
}

setInterval(()=>{
    document.querySelector('.img1').classList.toggle('hide')
    document.querySelector('.img2').classList.toggle('hide')
}, 6000)