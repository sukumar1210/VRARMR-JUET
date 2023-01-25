const left_btn=document.querySelector('#l_button');
const right_btn=document.querySelector('r_button');

left_btn.addEventListener("click", function(event) {
    const conent = document.querySelector('#content');
    conent.scrollLeft -= 300;
    event.preventDefault();
  });

right_btn.addEventListener("click", function(event) {
    const conent = document.querySelector('#content');
    conent.scrollLeft += 300;
    event.preventDefault();
});