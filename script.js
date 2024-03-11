let scrolcont= document.querySelector('.slider');
let backbtn=document.getElementById('lbtn');
let nextbtn= document.getElementById('rbtn');


scrolcont.addEventListener('wheel', (evt) =>{
    evt.preventDefault();
    scrolcont.scrollLeft += evt.deltaY;
    scrolcont.style.scrollBehavior="auto";
});

nextbtn.addEventListener('click', () =>{
    scrolcont.style.scrollBehavior="smooth";
    scrolcont.scrollLeft += 900;
});

backbtn.addEventListener('click', () =>{
    scrolcont.style.scrollBehavior="smooth";
    scrolcont.scrollLeft -= 900;
});



// part 2

let menulist=document.getElementById("menu-bar")
menulist.style.maxHeight="0px";

function toggle(){
    if(menulist.style.maxHeight=="0px"){

        menulist.style.maxHeight="300px";
    }else{
        menulist.style.maxHeight="0px"
    }
}