const marginSlider = document.getElementById('marginSlider');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

marginSlider.addEventListener('input', function() {
  const marginValue = this.value + 'px';
  image1.style.marginRight = marginValue;
  image2.style.marginLeft = marginValue;
});


function myFunction(){
    document.getElementById("image2").style.transform ="scale(1)";
}