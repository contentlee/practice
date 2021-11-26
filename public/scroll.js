function paletteToggle(){
  const palette = document.querySelector('.palette')
  const aside = document.querySelector('aside')
  let counter = 0;
  palette.addEventListener('click', ()=>{
    if(counter==0){
      aside.style.transform = 'translateX(0)';
      counter = 1;
    } else if (counter == 1){
      aside.style.transform = 'translateX(700px)';
      counter = 0;
    }
    
  })
}
paletteToggle()


function colorChange(){
  const input = document.querySelector('.color');
  const colorBtn = document.querySelector('.color-btn');
  const box = document.querySelector('.box');
  const button = document.querySelector('.box>button');

  colorBtn.addEventListener('click', ()=>{
    box.style.color = `${input.value}`;
    button.style.border = `1px solid ${input.value}`;
    button.style.color = `${input.value}`;
  });
}
colorChange();

function imgChange(){
  const input = document.querySelector('.img');
  const imgBtn = document.querySelector('.img-btn');
  const section = document.querySelector('.section1');

  imgBtn.addEventListener('click', ()=>{
    section.style.backgroundImage = `url(${input.value})`;
  })
}

imgChange();