
function Toggle(button, contents, after, before){
  const btn = document.querySelector(button)
  const nav = document.querySelector(contents)
  let counter = 0;
  btn.addEventListener('click', ()=>{
    if(counter==0){
      nav.style.transform = `translateX(${after})`;
      counter = 1;
    } else if (counter == 1){
      nav.style.transform = `translateX(${before}px)`;
      counter = 0;
    }
    
  })
}
let palettebtn = new Toggle('.palette', 'aside', 0, 700)






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