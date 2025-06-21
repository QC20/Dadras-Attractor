var dots = 10000;
var x = new Array(dots);
var y = new Array(dots);
var z = new Array(dots);
var nx = new Array(dots);
var ny = new Array(dots);
var nz = new Array(dots);
var px = new Array(dots);
var py = new Array(dots);
var pz = new Array(dots);
var dt = 0.002;
var r = 20;
var l = 0;
var s = 1;
var per = "xz";
var p = 3;
var o = 2.7;
var q = 1.7;
var c = 2;
var e = 9;

function setup() {
	createCanvas(920, 690);
	colorMode(HSB);
	background(255);
	
	for (i = 0; i < dots; i++) {
		x[i] = (random(-10, 10));
		y[i] = (random(-10, 10));
		z[i] = (random(-10, 10));
	}
}

function draw() {	
	if (l === 0) {
		background(255);
	}
	
	if (s === 0) {
		strokeWeight(1);
	}
	
	for (i = 0; i < dots; i++) {

		px[i] = x[i];
		py[i] = y[i];
		pz[i] = z[i];
		stroke(i%360, 100, 100);
    nx[i] = y[i] - p*x[i] + o*y[i]*z[i];
    ny[i] = q*y[i] - x[i]*z[i] + z[i];
    nz[i] = c*x[i]*y[i] - e*z[i];
		
		x[i] += nx[i]*dt;
		y[i] += ny[i]*dt;
		z[i] += nz[i]*dt;
		
		if (s === 1) {
			if (per === "xy") {
				strokeWeight(map(z[i], -r/3, r/3, 2, 3));
			} else if (per === "xz") {
				strokeWeight(map(y[i], -r/3, r/3, 3, 2));
			} else {
				strokeWeight(map(x[i], -r/3, r/3, 2, 3));
			}
		}
		
		if (l === 0) {
			
			if (per === "xy") {

				point(map(x[i], -r, r, 0, width), map(y[i], -r, r, height, 0));
			} else if (per === "xz") {
				point(map(x[i], -r, r, 0, width), map(z[i], -r, r, height, 0));
			} else {
				point(map(y[i], -r, r, 0, width), map(z[i], -r, r, height, 0));
			}
		} else {
			
			if (per === "xy") {
				line(map(px[i], -r, r, 0, width), map(py[i], -r, r, height, 0), map(x[i], -r, r, 0, width), map(y[i], -r, r, height, 0));
			} else if (per === "xz") {
				line(map(px[i], -r, r, 0, width), map(pz[i], -r, r, height, 0), map(x[i], -r, r, 0, width), map(z[i], -r, r, height, 0));
			} else {
				line(map(py[i], -r, r, 0, width), map(pz[i], -r, r, height, 0), map(y[i], -r, r, 0, width), map(z[i], -r, r, height, 0));
			}
		}
	}
}

function mouseClicked(){
  save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
}