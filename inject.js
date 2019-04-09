function doit() {
  setInterval(function() {
    var title = document.title;
    document.title = title.slice(1, title.length) + title[0];
  }, 800);
}

doit();

window.onload = function() {
  doit();
};
