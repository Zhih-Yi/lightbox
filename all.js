window.onload=function(){
let pictures =document.querySelectorAll('.box-image-wrapper a');
let total=pictures.length;
let current=1;
var CarouselEl = document.getElementById('carouselControls');
var carousel = bootstrap.Carousel.getInstance(CarouselEl);
pictures.forEach(function(value,index){
value.addEventListener('click',function(){
   current=Number(this.dataset.num);
   document.querySelector('.num-title-strong').innerText=current;
   document.querySelector('.num-title-total').innerText=total;
   carousel.to(current-1); 
})
});
}