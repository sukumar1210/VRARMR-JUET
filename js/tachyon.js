const left_btn=document.querySelector('#l-button');
const right_btn=document.querySelector('#r-button');

left_btn.onclick = function(event) {
    const content = document.getElementById('#content');
    content.scrollLeft -= 300;
    event.preventDefault();
};

right_btn.onclick= function(event) {
    const content = document.getElementById('#content');
    content.scrollLeft += 300;
    event.preventDefault();
};

// Dynamic Line Width determination

const central_line = document.getElementById("dividing-line");
const line_rect = central_line.getBoundingClientRect();
const line_right = line_rect.right;

// Line 1
const card1 = document.getElementById("card1-container");
const card1_rect = card1.getBoundingClientRect();
const card1_right = card1_rect.right;

const line_1 =document.getElementById('card-1-line')
line_1.style.width=((line_right-card1_right)-7)+"px";


//Line 2
const card2 = document.getElementById("card2-container");
const card2_rect = card2.getBoundingClientRect();
const card2_left = card2_rect.left;

const line_2 =document.getElementById('card-2-line')
line_2.style.width=((card2_left-line_right)-4)+"px";

//Line 3
const card3 = document.getElementById("card3-container");
const card3_rect = card3.getBoundingClientRect();
const card3_right = card3_rect.right;

const line_3 =document.getElementById('card-3-line')
line_3.style.width=((line_right-card3_right)-7)+"px";

//Line 4
const card4 = document.getElementById("card4-container");
const card4_rect = card4.getBoundingClientRect();
const card4_left = card4_rect.left;

const line_4 =document.getElementById('card-4-line')
line_4.style.width=((card4_left-line_right)-4)+"px";