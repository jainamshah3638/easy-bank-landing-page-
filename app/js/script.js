const btnHandburgur= document.querySelector("#btnHandburgur")
const overlay = document.querySelector(".overlay")
const header= document.querySelector(".header")
const body=document.querySelector('body')
const fadeElems=document.querySelectorAll('.has-fade')





btnHandburgur.addEventListener("click", function(){

   if (header.classList.contains('open')){ // close menu 
    body.classList.remove('noscroll')
       header.classList.remove('open')
 fadeElems.forEach( function (element) {
     element.classList.remove('fade-in')
     element.classList.add('fade-out')
 })

   }
   else  { // open menu 
    body.classList.add('noscroll')
       header.classList.add('open');
       fadeElems.forEach( function (element) {
        element.classList.add('fade-in')
        element.classList.remove('fade-out')
    })
}
});