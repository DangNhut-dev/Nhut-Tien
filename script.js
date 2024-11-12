const adressbtn = document.querySelector('#adress-form')
//console.log (adressbtn)
adressbtn.addEventListener("click" ,function(){
    document.querySelector('.adress-form').style.display="flex"
})
const adressclose = document.querySelector('#adress-close')
adressclose.addEventListener("click" ,function(){
    document.querySelector('.adress-form').style.display="none"
})
