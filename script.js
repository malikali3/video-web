dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");

   
}

function hide() {
   
  
  let x = document.getElementById("mydiv");
  let y = document.getElementById("comment")
  if( x.style.display === "none"){
    x.style.display = "block";
    y.style.color= "yellow";
  }
  else {
    x.style.display = "none";
    y.style.color = "blue";
  }
}

function like() {
    let x = document.getElementById("like");
    if( x.style.color === "green"){
      x.style.color = "blue";
    }
    else {
      x.style.color = "green";
    }
  }

  function dislike() {
    let x = document.getElementById("dislike");
    if( x.style.color === "red"){
      x.style.color = "blue";
    }
    else {
      x.style.color = "red";
    }
  }

  function moon() {
    let x = document.getElementById("moon");
    if( x.style.color === "red"){
      x.style.color = "blue";
      x.style.background= "black";
    }
    else {
      x.style.color = "red";
      x.style.background= "purple"
    }
  }
  

