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

// ===================slider-left-top=============================
const imgnum =document.querySelectorAll('.slider-content-left-top img')
let index = 0
const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener("click" ,function(){
    index = index + 1
    removeactive()
    if(index > imgnum.length-1)
    {
        index = 0 
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
    imgNumLi[index].classList.add('active')
})
const leftbtn = document.querySelector('.fa-chevron-left')
leftbtn.addEventListener("click" ,function(){
    index = index - 1
    removeactive()
    if(index < 0)
        {
            index = imgnum.length -1
        }
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
    imgNumLi[index].classList.add('active')
})

//==================slider-left-bottom=============
const imgNumLi = document.querySelectorAll('.slider-content-left-bottom li')
//console.log (imgNumLi)
let active = document.querySelector('.active')
imgNumLi.forEach(function(image,index){
    image.addEventListener("click", function(){ 
        removeactive()
        document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
        image.classList.add('active')
    })
})
function removeactive(){
    let active = document.querySelector('.active')
        active.classList.remove("active")

}
//===============slider-settime============
function imgAuto(){
    index = index + 1
    removeactive()
    if(index> imgnum.length-1){
        index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
    imgNumLi[index].classList.add('active')
}
setInterval(imgAuto,4500)

// ------------- baner-----------
let indexBaner = 0
const rightbtnbaner = document.querySelector('.fa-chevron-right-baner')
const leftbtnbaner = document.querySelector('.fa-chevron-left-baner')
const imgnumbaner =document.querySelectorAll('.slider-product-one-content-items')
rightbtnbaner.addEventListener("click" ,function(){
    indexBaner = indexBaner + 1
    if(indexBaner > imgnumbaner.length-1)
    {
        indexBaner = 0 
    }
    document.querySelector('.slider-product-one-content-items-container').style.right = indexBaner * 100+"%"
})
leftbtnbaner.addEventListener("click" ,function(){
    indexBaner = indexBaner - 1
    if(indexBaner < 0)
        {
            indexBaner = imgnumbaner.length -1
        }
    document.querySelector('.slider-product-one-content-items-container').style.right = indexBaner * 100+"%"
})