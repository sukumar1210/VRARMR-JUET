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
line_1.style.width=((line_right-card1_right)-6)+"px";


//Line 2
const card2 = document.getElementById("card2-container");
const card2_rect = card2.getBoundingClientRect();
const card2_left = card2_rect.left;

const line_2 =document.getElementById('card-2-line')
line_2.style.width=((card2_left-line_right)-6)+"px";

//Line 3
const card3 = document.getElementById("card3-container");
const card3_rect = card3.getBoundingClientRect();
const card3_right = card3_rect.right;

const line_3 =document.getElementById('card-3-line')
line_3.style.width=((line_right-card3_right)-6)+"px";

//Line 4
const card4 = document.getElementById("card4-container");
const card4_rect = card4.getBoundingClientRect();
const card4_left = card4_rect.left;

const line_4 =document.getElementById('card-4-line')
line_4.style.width=((card4_left-line_right)-4)+"px";

//Line 5
const card5 = document.getElementById("card5-container");
const card5_rect = card5.getBoundingClientRect();
const card5_right = card5_rect.right;

const line_5 =document.getElementById('card-5-line')
line_5.style.width=((line_right-card5_right)-7)+"px";

//Line 6
const card6 = document.getElementById("card6-container");
const card6_rect = card6.getBoundingClientRect();
const card6_left = card6_rect.left;

const line_6 =document.getElementById('card-6-line')
line_6.style.width=((card6_left-line_right)-4)+"px";

// //Line 7
// const card7 = document.getElementById("card7-container");
// const card7_rect = card7.getBoundingClientRect();
// const card7_left = card7_rect.right;

// const line_7 =document.getElementById('card-7-line')
// line_7.style.width=((line_right-card7_left)-7)+"px";

//Dividing Line
const card_container = document.getElementById("event-grid");
const card_cont_rect=card_container.getBoundingClientRect();
// const card_cont_height=card_cont_rect.top;
// const card_cont_bot=card_cont_rect.bottom;

const dividing_line=document.getElementById("dividing-line");
dividing_line.style.height=((card_cont_rect.height)-75)+"px";
