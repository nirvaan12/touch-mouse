var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    width =canvas.width;
    newwidth =canvas.width-90;
    newheight =canvas.height-300;

    if (width<992 ){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);

    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        //Addictonal Activity ends

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
  current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
       

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

var mouse_event ="empty" ;
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color ="blue";
width_of_line =3;
canvas.addEventListener("mousedown",mymousedown);
 function mymousedown(e){
color=document.getElementById("color").value;
width_of_line = document.getElementById("width").value;
mouse_event="mouseDown";


 }
 canvas.addEventListener("mousemove",mymousemove);

 function mymousemove(e){
current_position_of_x =e.clientX-canvas.offsetLeft;
current_position_of_y =e.clientY-canvas.offsetTop;

if (mouse_event =="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth =width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();

}  
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
 }
 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e){
     mouse_event="mouseUp";
 }
 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
     mouse_event="mouseLeave";
 }