
function Rectangle(w, h) {
	this.width = w;
	this.height = h;
}

Rectangle.prototype.area = function() { return this.width * this.height; }

function RectEx(w, h, x, y) {
	Rectangle.call(this, w, h);
	this.x = x;
	this.y = y;
}

RectEx.prototype = new Rectangle();

var test1 = new RectEx(1,2,3,4);

console.log(test1.area());
