function makingPopUp(titleText, contentsText, buttonText, buttonClass){
  this.body = document.querySelector('body');
  this.container = document.createElement('div');
  this.popup = document.createElement('div');
  this.title = document.createElement('h1');
  this.contents = document.createElement('span');
  this.button = document.createElement('button');
  this.icon = document.createElement('span');

  this.container.className = 'container';
  this.popup.className = 'popup';
  this.contents.className = 'contents'
  this.icon.className = 'material-icons closed';
  this.button.className = buttonClass;

  this.title.innerText = titleText;
  this.contents.innerText = contentsText;
  this.button.innerText = buttonText;
  this.icon.innerText = 'highlight_off';


  this.body.append(this.container);
  this.container.append(this.popup);
  this.popup.append(this.title, this.contents, this.button, this.icon);
}

let mainPopupClose = (main)=>{
  const close = main.icon;
  const enter = main.button;
  const container = main.container;

  close.addEventListener('click', ()=>{
    container.style.display = 'none';
  });
  enter.addEventListener('click', ()=>{
    container.style.display = 'none';
  });
}
window.onload = ()=>{
  let main = new makingPopUp('Fun POPUP', 'I want to be a professional programmer', 'ENTER', 'btn-black enter');
  mainPopupClose(main);
};


let Popup1 = ()=>{
  let popup = new makingPopUp('Fun POPUP', 'I want to be a professional programmer', 'Click but notiong', 'btn-black');

  const btn = document.querySelector('.btn1');
  let container = popup.container
  let close = popup.icon

  container.style.backgroundColor = 'transparent';
  container.style.transform = 'translateY(-100%)';
  btn.addEventListener('click', ()=>{
    container.style.transform = 'translateY(0)';
  })
  close.addEventListener('click', ()=>{
    container.style.transform = 'translateY(-100%)';
  })
}
Popup1();


let Popup2 = ()=>{
  let popup = new makingPopUp('Fun POPUP', 'I want to be a professional programmer', 'Click but notiong', 'btn-wht');
  const btn = document.querySelector('.btn2');
  let container = popup.container
  let close = popup.icon

  container.style.backgroundColor = 'transparent';
  container.style.display = 'none';
  container.style.opacity = '0'
  btn.addEventListener('click', ()=>{
    container.style.display = 'flex';
    setTimeout(()=>{container.style.opacity = '1'},20);
  })
  close.addEventListener('click', ()=>{
    container.style.opacity = '0';
    setTimeout(()=>{container.style.display = 'none'},500);
  })
}

Popup2();


function logKey(e) {
}

let Btn = ()=>{
  const btn = document.querySelector('.btn3');
  

  btn.addEventListener('mousemove', (e)=>{
    let clientRect = btn.getBoundingClientRect();
    let btnWidth = clientRect.width;
    let btnHeight = clientRect.height
    let startX = clientRect.x;
    let startY = clientRect.y;
    let currentX = e.clientX;
    let currentY = e.clientY;


    let rotateX = ((30/btnWidth)*currentX)-15-((30*startX)/btnWidth);
    let rotateY = (-(30/btnHeight)*currentY)+15+((30*startY)/btnHeight);

    btn.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`
  });
  btn.addEventListener('mouseleave', ()=>{
    btn.style.transform = 'rotateX(0) rotateY(0)'
  })
  
}
Btn()


let Popup3 = ()=>{
  let popup = new makingPopUp('Fun POPUP', 'I want to be a professional programmer', 'Click but notiong', 'btn-yellow');
}