let bgColor = document.getElementById('bgColorChange');

let click = 0;

function bgColorChange() {
    if (click === 0) {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';

        click++;


    } else {
        document.querySelector('body').style.backgroundColor = '';
        document.querySelector('body').style.color = '';
        click--;

    }
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

