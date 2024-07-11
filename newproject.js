let bgColor = document.getElementById('bgColorChange');

let click = 0;

function bgColorChange() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.getElementsByClassName('fa-solid')[0].style.display = 'none';
    document.querySelector('body').style.color = 'black';
    document.getElementsByClassName('fa-solid')[1].style.display = 'inline';


}
function bgChangeFunction(){
    document.querySelector('body').style.backgroundColor = '';
    document.getElementsByClassName('fa-solid')[0].style.display = '';
    document.querySelector('body').style.color = '';
    document.getElementsByClassName('fa-solid')[1].style.display = '';




}



// }

// const button = document.getElementById('bgColorChange');
// let isClicked = false;

// button.addEventListener('click', () => {
//     if (isClicked) {
//         document.body.style.color = 'initial'; // Change to your original text color
//     } else {
//         document.body.style.color = 'green'; // Change to your desired text color
//     }
//     isClicked = !isClicked;
// }
// );

