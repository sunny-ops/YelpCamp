const allImages = document.getElementsByTagName('img');
// for (let img of allImages) {
//     console.log(img.src);
//     // img.src = 'sdfssdf';
// }

const squareImages = document.getElementsByClassName("square");
const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
