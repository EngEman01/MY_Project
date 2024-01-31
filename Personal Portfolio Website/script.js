//  $(document).ready(function() {
    
//     $('.lines').click(function(){
//         $(this).toggleClass('.no_lines');
//         $('.navbar').toggleClass('.nav-toggle');

//     });
//  });

///////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll('.active').forEach(btn => {
    btn.onclick = () => { 
        document.querySelector('.design').style.display = 'inline'; 
        document.querySelector('.graphic').style.display = 'inline'; 
        document.querySelector('.code').style.display = 'inline'; 
    }
});
document.querySelectorAll('.btn-design').forEach(btn => {
    btn.onclick = () => { 
        document.querySelector('.graphic').style.display = 'none'; 
        document.querySelector('.design').style.display = 'inline'; 
        document.querySelector('.code').style.display = 'none'; 
    }
});
document.querySelectorAll('.btn-graphic').forEach(btn => {
    btn.onclick = () => { 
        document.querySelector('.graphic').style.display = 'inline'; 
        document.querySelector('.design').style.display = 'none'; 
        document.querySelector('.code').style.display = 'none';
    }
});
document.querySelectorAll('.btn-code').forEach(btn => {
    btn.onclick = () => { 
        document.querySelector('.graphic').style.display = 'none'; 
        document.querySelector('.design').style.display = 'none'; 
        document.querySelector('.code').style.display = 'inline'; 
    }
});

// panels.forEach((panel)=>{
//     panel.addEventListener('click', ()=>{
//         removActiveClasses()
//         panel.classList.add('active')
//     })
// })

///////////////////////////////////////////////////////////////////////////////////////

