var mx, my, timer;
var z = 2;
$(document).on('click', function (e) {
  mx = e.pageX;
  my = e.pageY;
  z = z + 1;
  _wave(mx, my, z);
});

function _wave(i, j, k) {
  $('.ui-content').prepend(
    '<div class="wave-position water' + k + '" style="z-index:' + k + ';top:' + (j - 150) + 'px;left:' + (i - 150) + 'px;">' +
    '<div class="wave-body">' +
    '<div class="wave wave5"></div>' +
    '<div class="wave wave4"></div>' +
    '<div class="wave wave3"></div>' +
    '<div class="wave wave2"></div>' +
    '<div class="wave wave1"></div>' +
    '<div class="wave wave0"></div>' +
    '</div>' +
    '</div>'
  );
  setTimeout(function () {
    $('.water' + k).remove();
  }, 3000);
}
