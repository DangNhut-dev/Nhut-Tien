const adressbtn = document.querySelector('#adress-form')

adressbtn.addEventListener("click" ,function(){
    document.querySelector('.adress-form').style.display="flex"
})
const adressclose = document.querySelector('#adress-close')
adressclose.addEventListener("click" ,function(){
    document.querySelector('.adress-form').style.display="none"
})

// const userbtn = document.querySelector('#user-form')
// userbtn.addEventListener("click" ,function(){
//     document.querySelector('.user-form').style.display="flex"
// })
// const userclose = document.querySelector('#user-close')
// userclose.addEventListener("click" ,function(){
//     document.querySelector('.user-form').style.display="none"
// })

// ===================slider==================
const imgnum =document.querySelectorAll('.slider-content-left-top img')
let index = 0
const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener("click" ,function(){
    index = index + 1
    if(index > imgnum.length-1)
    {
        index = 0 
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
})
const leftbtn = document.querySelector('.fa-chevron-left')
leftbtn.addEventListener("click" ,function(){
    index = index - 1
    if(index < 0)
        {
            index = imgnum.length -1
        }
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
})