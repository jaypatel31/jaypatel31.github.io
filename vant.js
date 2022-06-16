
function vantaeffect(){
    return VANTA.WAVES({
      el: "#skillinfo_container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x1e1e1e,
      zoom: 0.72
    })
  }

function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
  let paths = document.querySelectorAll("path");
  let mode=repeat?'infinite':'forwards'
  for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
  }
}
setTextAnimation(0.1,3.2,2,'linear','#ffffff',false);

$(function() {
  $("#loader").hide();
});


function mouseEffect(){
  var a_link = document.querySelectorAll(".mouse-effect");
  var cursor = document.getElementById("cursor");
  let stopflag = false;
// Handle mouse over/out event on links
a_link.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
a_link.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
window.addEventListener('mousemove', handleMouseMove);
// Move the cursor in dom/window
function handleMouseMove(event) {
  if(!stopflag){
    var top = event.pageY - (cursor.clientHeight / 2);
    var left = event.pageX - (cursor.clientWidth / 2);
    cursor.style.top = top + 'px';
    cursor.style.left = left + 'px';
  }
}
// event: mouse enter on link
function handleMouseEnter(event) {
  stopflag=true;
  
  cursor.style.transition =
          "transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s";
  var elementPos = event.currentTarget.getBoundingClientRect();
  var top = elementPos.top;
  var left = elementPos.left;
  cursor.style.top = top + 'px';
  cursor.style.left = left + 'px';
  cursor.style.width = elementPos.width+"px";
  cursor.style.height = elementPos.height+"px";
  cursor.classList.add('hovered');
}
// event: mouse leave on link
function handleMouseLeave() {
  stopflag=false;
  cursor.style.width = "40px";
  cursor.style.height = "40px";
  cursor.classList.remove('hovered');
}
}
