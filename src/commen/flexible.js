function refreshRem(){
  var width = docEl.getBoundingClientRect().width;
  if (width / dpr > 540) {
    width = width * dpr;
  }
  var rem = width / 10;
  docEl.style.fontSize = rem + 'px';
  flexible.rem = win.rem = rem;
}
