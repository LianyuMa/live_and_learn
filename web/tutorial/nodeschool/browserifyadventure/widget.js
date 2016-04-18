// module 'domify' dosen't exist
const domify = require('domify');
const html = '<div>Hello <span class="name"></span>!</div>';

function Widget() {
  if (!(this instanceof Widget)) return new Widget;
  this.element = domify(html);
}

Widget.prototype.setName = (name) => {
  this.element.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = (target) => {
  target.appendChild(this.element);
};

module.exports = Widget;
