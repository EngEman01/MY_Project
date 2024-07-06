// function close() {
//     // document.querySelectorAll('.text').style.color = "red";
//     console.log("hello");
// }

const btnClick = document.querySelector('#btn');

function test(){
    document.querySelector('.container').style.display = "none";
    // document.querySelector('.text').style.color = "red";
    // console.log("hello");
}

btnClick.addEventListener('click' , test);
