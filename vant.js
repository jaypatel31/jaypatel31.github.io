
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
  