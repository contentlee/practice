let nav=()=>{
  let open = document.querySelector('.nav-btn')
  let close = document.querySelector('.close')
  let container = document.querySelector('nav');
  open.addEventListener('click', ()=>{
    container.style.transform = 'translateX(0%)'
  })
  close.addEventListener('click', ()=>{
    container.style.transform = 'translateX(-150%)'
  })
}

nav();