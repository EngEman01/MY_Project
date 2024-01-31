document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.prupos-image').style.display = 'block'; 
        document.querySelector('.prupos-image img').src = image.getAttribute('src')
    }
});

document.querySelector('.prupos-image span').onclick = () => {
    document.querySelector('.prupos-image').style.display = 'none';
}