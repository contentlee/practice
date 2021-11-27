function slide1(){
  const back = document.querySelector('.arrow1>.back');
  const forward = document.querySelector('.arrow1>.forward');
  const img = document.querySelectorAll('.slide1>img');
  let count = 0;
  img[count].style.opacity = '1';
  forward.addEventListener('click',()=>{
    ++count;
    if(count<img.length){
      img[count].style.opacity = '1';
      img[count-1].style.opacity = '0';
    } else if(count==img.length){
      img[count-1].style.opacity = '0';
      count = 0;
      img[count].style.opacity = '1';
    }
  })
  back.addEventListener('click',()=>{
    --count;
    if(count<0){
      count = img.length-1
      img[0].style.opacity = '0';
      img[count].style.opacity = '1';
    } else if(count>=0){
      img[count+1].style.opacity = '0';
      img[count].style.opacity = '1';
    }
  })
}
slide1()

let imgData = ['https://cdn.pixabay.com/photo/2016/09/08/21/09/piano-1655558_1280.jpg', 'https://cdn.pixabay.com/photo/2014/06/04/17/53/piano-362251_1280.jpg', 'https://cdn.pixabay.com/photo/2016/11/18/15/54/apartment-1835482_1280.jpg','https://cdn.pixabay.com/photo/2021/04/17/16/01/book-6186166_1280.jpg','https://cdn.pixabay.com/photo/2016/09/16/15/56/manhattan-1674404_1280.jpg','https://cdn.pixabay.com/photo/2016/07/16/22/32/piano-1522855_1280.jpg', 'https://cdn.pixabay.com/photo/2015/09/15/11/21/victorian-940805_1280.jpg']

function slide2(){
  let imgBox = document.querySelector('.slide2>.img-box')
  let totalImg = [];
  for(i=0; i<imgData.length;i++){
    let img = document.createElement('img');
    img.setAttribute('src', imgData[i])
    totalImg.push(img)
  }
  for(i=0; i<totalImg.length;i++){
    imgBox.appendChild(totalImg[i])
    imgBox.children[i].style.transform = 'rotateY(180deg)'
  }
  let left = 0
  let center = 1
  let right = 2
  

    imgBox.children[left].style.transform = 'translateX(-100%) rotateY(-15deg) scale(0.8)'
    imgBox.children[center].style.transform = 'translateX(0) rotateY(0) scale(1)'
    imgBox.children[right].style.transform = 'translateX(100%) rotateY(15deg) scale(0.8)'

 

  const back = document.querySelector('.arrow2>.back');
  const forward = document.querySelector('.arrow2>.forward');

  forward.addEventListener('click', ()=>{
    left++;
    center++;
    right++;
    if(center==imgBox.children.length){
      center=0;
      imgBox.children[left].style.transform = 'translateX(-100%) rotateY(-15deg) scale(0.8)'
      imgBox.children[center].style.transform = 'translateX(0) rotateY(0) scale(1)'
      imgBox.children[right].style.transform = 'translateX(100%) rotateY(15deg) scale(0.8)'
      imgBox.children[left-1].style.transform = 'rotateY(180deg)'
   
    } else if(right==imgBox.children.length){
      right=0;
      imgBox.children[left].style.transform = 'translateX(-100%) rotateY(-15deg) scale(0.8)'
      imgBox.children[center].style.transform = 'translateX(0) rotateY(0) scale(1)'
      imgBox.children[right].style.transform = 'translateX(100%) rotateY(15deg) scale(0.8)'
      imgBox.children[left-1].style.transform = 'rotateY(180deg)'
   
    } else if(left==imgBox.children.length){
      left=0;
      imgBox.children[left].style.transform = 'translateX(-100%) rotateY(-15deg) scale(0.8)'
      imgBox.children[center].style.transform = 'translateX(0) rotateY(0) scale(1)'
      imgBox.children[right].style.transform = 'translateX(100%) rotateY(15deg) scale(0.8)'
      imgBox.children[imgBox.children.length-1].style.transform = 'rotateY(180deg)'
   
    } else if(right<imgBox.children.length){
      imgBox.children[left].style.transform = 'translateX(-100%) rotateY(-15deg) scale(0.8)'
      imgBox.children[center].style.transform = 'translateX(0) rotateY(0) scale(1)'
      imgBox.children[right].style.transform = 'translateX(100%) rotateY(15deg) scale(0.8)'
      imgBox.children[left-1].style.transform = 'rotateY(180deg)'
   
    }
    
  })  
}
slide2()
