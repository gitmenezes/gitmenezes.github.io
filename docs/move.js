document.addEventListener('mousemove', function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    let x = document.getElementById('x');
    let y = document.getElementById('y');
    // chrome.runtime.sendMessage({x: mouseX, y: mouseY});
    x.textContent = mouseX
    y.textContent = mouseY
  });