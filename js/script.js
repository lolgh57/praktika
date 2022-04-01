let modalauth = document.querySelector(".auth");
let modalreg = document.querySelector(".reg");

let authbtn = document.querySelector(".authbtn");
let regbtn = document.querySelector(".registration");

let closemodal = document.querySelectorAll(".close");


authbtn.addEventListener('click', function(){
    modalauth.classList.remove("closed")
    modalauth.classList.add("opened")
    modalreg.classList.add("closed")
    modalreg.classList.remove("opened")
    console.log(1);
});

regbtn.addEventListener('click', function(){
    modalreg.classList.remove("closed")
    modalreg.classList.add("opened")
    modalauth.classList.add("closed")
    modalauth.classList.remove("opened")
    console.log(1);
});


closemodal.forEach((elem) => {
    elem.addEventListener("click", () => {
        modalauth.classList.add("closed")
        modalreg.classList.add("closed")
        modalauth.classList.remove("opened")
        modalreg.classList.remove("opened")
    })
})

window.addEventListener('click', function(event){
    if (event.target === modalauth || event.target === modalreg) {
            modalauth.classList.add("closed")
            modalreg.classList.add("closed")
            modalauth.classList.remove("opened")
            modalreg.classList.remove("opened")
    }
});