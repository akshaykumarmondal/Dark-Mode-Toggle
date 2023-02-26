const body=document.querySelector('body');

const inputEl= document.querySelector('.input');
const circleEl=document.querySelector('.circle');
const labelEl=document.querySelector('.label');

// // console.log(inputEl);
// console.log(inputEl.checked); --> by default the inputEl.checked is false , which means the background is white else if it is true i.e; checked the background is black. 

// inputEl.checked=false;

inputEl.checked=JSON.parse(localStorage.getItem('mode'));   //parse basically converts into bollean value;
updateBody();

function updateBody(){

    if(inputEl.checked){

        body.style.backgroundColor='black';
        labelEl.style.backgroundColor='white';
        circleEl.style.backgroundColor='lightgrey';
        circleEl.style.border='1px solid black';
    }
    else{

        body.style.backgroundColor='white';
        labelEl.style.backgroundColor='lightgrey';
        circleEl.style.backgroundColor='white';
    }
}

inputEl.addEventListener('input',()=>{

    updateBody();
    updateLocalStorage();
})

function updateLocalStorage(){

    //we need to store the input.checked in the local storage in the json format and we have named it as "mode"

    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}
