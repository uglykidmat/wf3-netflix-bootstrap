const hoverable=document.getElementsByClassName("hoverable");
console.log(hoverable);

hoverable.addEventListener('mouseover',
    function(e){
      a.className = 'hovered';

    });