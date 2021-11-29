import {imgURL} from './slideImg.js'


function slide1(){
  const imgContainer = document.querySelector('.slide1');
  imgURL.map((URL)=>{
    let img = document.createElement('img');
    img.setAttribute('src', URL);
    imgContainer.appendChild(img);
  })

  const back = document.querySelector('.arrow1>.back');
  const forward = document.querySelector('.arrow1>.forward');
  const img = document.querySelectorAll('.slide1>img');
  let imgAmount = img.length;
  let presentImg = 0;
  let opacity = (selectImg, value)=>{
    img[selectImg].style.opacity = `${value}`;
  }

  opacity(presentImg, 1)

  forward.addEventListener('click',()=>{
    ++presentImg;
    if(presentImg<imgAmount){
      opacity(presentImg, 1);
      opacity(presentImg-1, 0);
    } else if(presentImg==imgAmount){
      opacity(presentImg-1, 0);
      presentImg = 0;
      opacity(presentImg, 1);
    }
  })
  back.addEventListener('click',()=>{
    --presentImg;
    if(presentImg<0){
      opacity(0, 0);
      presentImg = imgAmount-1;
      opacity(presentImg, 1);
    } else if(presentImg>=0){
      opacity(presentImg+1, 0);
      opacity(presentImg, 1);
    }
  })
}
slide1();




function slide2(){
  const imgContainer = document.querySelector('.slide2>.img-box');
  imgURL.map((URL)=>{
    let img = document.createElement('img');
    img.setAttribute('src', URL);
    imgContainer.appendChild(img);
    img.style.transform = 'rotateY(180deg)';
  })

  let centerImg = 0;
  let lastImg = imgURL.length-1;

  let slide = (left, center, right)=>{
    imgContainer.children[left].style.transform = 'translateX(-100%) rotateY(-20deg) scale(0.8)';
    imgContainer.children[center].style.transform = 'translateX(0) rotateY(0) scale(1)';
    imgContainer.children[right].style.transform = 'translateX(100%) rotateY(20deg) scale(0.8)';
  }
  slide(lastImg,centerImg,centerImg+1);

  let turnLeftSlide = (slide)=>{
    imgContainer.children[slide].style.transform = 'rotateY(180deg)';
  };
  let turnRightSlide = (slide)=>{
    imgContainer.children[slide].style.transform = 'rotateY(-180deg)';
  };


  const back = document.querySelector('.arrow2>.back');
  const forward = document.querySelector('.arrow2>.forward');

  forward.addEventListener('click', ()=>{
    centerImg++;
    if(centerImg==lastImg){
      slide(centerImg-1, centerImg, 0);
      turnLeftSlide(centerImg-2); 
    } else if(centerImg==lastImg+1){
      centerImg=0;
      slide(lastImg,centerImg,centerImg+1);
      turnLeftSlide(lastImg-1);
    } else if(centerImg==1){
      slide(0,centerImg,centerImg+1);
      turnLeftSlide(lastImg)   
    } else if(centerImg>1){
      slide(centerImg-1,centerImg,centerImg+1);
      turnLeftSlide(centerImg-2);
    }
  });
  
  back.addEventListener('click', ()=>{
    centerImg--;
    if (centerImg==lastImg-1){
      slide(centerImg-1, centerImg, centerImg+1);
      turnRightSlide(0);
    } else if(centerImg==0){
      slide(lastImg,centerImg,centerImg+1);
      turnRightSlide(centerImg+2);
    } else if(centerImg<0){
      centerImg=lastImg;
      slide(centerImg-1, centerImg, 0);
      turnRightSlide(1);
    } else {
      slide(centerImg-1,centerImg, centerImg+1);
      turnRightSlide(centerImg+2);
    }
  })
  
};
slide2();


function slide3(){
  const imgContainer = document.querySelector('.slide3>.img-box');
  let imgSetting = (i, X, Y, R)=>{
    imgContainer.children[i].style.transform=`translateX(${X}%) translateY(${Y}%) rotate(${R}turn)`;
  }

  imgURL.map((URL, i)=>{
    let img = document.createElement('img');
    img.setAttribute('src', URL);
    imgContainer.appendChild(img);
    imgSetting(i, 150, 0, 0);
  })
  imgSetting(0, 0, 0, 0)

  const back = document.querySelector('.arrow3>.back');
  const forward = document.querySelector('.arrow3>.forward');
  let currentSlideIndex = 0;
  let allImgQuntity = imgContainer.children.length;

  forward.addEventListener('click', ()=>{
    currentSlideIndex++;
    if(currentSlideIndex<allImgQuntity){
      imgSetting(currentSlideIndex, 0, 0, 0)
      for(let i=0;i<currentSlideIndex;i++){
        imgSetting(i, -2*(currentSlideIndex-i), 1, 0.001*(i-currentSlideIndex))
      }
    }else if(currentSlideIndex==allImgQuntity){
      currentSlideIndex--;
    }
  })
  back.addEventListener('click', ()=>{
    currentSlideIndex--;
    if(currentSlideIndex>=0){
      imgSetting(currentSlideIndex+1, 150, 0, 0)
      imgSetting(currentSlideIndex, 0, 0, 0)
      for(let i=0;i<currentSlideIndex;i++){
        imgSetting(i, -2*(currentSlideIndex-i), 1, 0.001*(i-currentSlideIndex))
      }
    }else if(currentSlideIndex<0){
      currentSlideIndex++;
    }
  })
}
slide3();

function slide4(){
  const imgContainer = document.querySelector('.slide4>.img-box');
  imgURL.map((URL)=>{
    let img = document.createElement('img');
    img.setAttribute('src', URL);
    imgContainer.appendChild(img);
    img.className = 'hidden'
  })
  
  let imgChangeShowing = (i)=>{
    imgContainer.children[i].className = 'showing';
  } 
  let imgChangeHidden  = (i)=>{
    imgContainer.children[i].className = 'hidden';
  } 

  
  const back = document.querySelector('.arrow4>.back');
  const forward = document.querySelector('.arrow4>.forward');
  let allImgQuntity = imgContainer.children.length;
  let currentSlide = 0;
  imgChangeShowing(currentSlide);

  forward.addEventListener('click', ()=>{
    currentSlide++
    if(currentSlide<allImgQuntity){
      imgChangeHidden(currentSlide-1);
      imgChangeShowing(currentSlide);
    }else if(currentSlide==allImgQuntity){
      imgChangeHidden(currentSlide-1);
      currentSlide=0;
      imgChangeShowing(currentSlide);
    }
  })

  back.addEventListener('click', ()=>{
    currentSlide--
    if(currentSlide<0){
      imgChangeHidden(0);
      currentSlide=allImgQuntity-1;
      imgChangeShowing(currentSlide);
    } else if(currentSlide>=0){
      imgChangeHidden(currentSlide+1);
      imgChangeShowing(currentSlide);
    }
  })

  setInterval(()=>{
    currentSlide++
    if(currentSlide<allImgQuntity){
      imgChangeHidden(currentSlide-1);
      imgChangeShowing(currentSlide);
    }else if(currentSlide==allImgQuntity){
      imgChangeHidden(currentSlide-1);
      currentSlide=0;
      imgChangeShowing(currentSlide);
      
    }
  console.log(currentSlide)
  }, 3000)

}
slide4();
