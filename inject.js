function doit() {
  setInterval(function() {
    var title = document.title;
    document.title = title.slice(1, title.length) + title[0];
  }, 1000);
}

window.onload = function() {
  doit();
};
