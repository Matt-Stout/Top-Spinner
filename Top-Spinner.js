function setup() {
    "use strict";
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var m4 = twgl.m4;
    
    var slider1 = document.getElementById('slider1');
    slider1.value = 25;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;
    var slider3 = document.getElementById('slider3');
    slider3.value = 15;

    function moveToTx(x, y, z, Tx) {
        var loc = [x, y, z];
        var locTx = m4.transformPoint(Tx, loc);
        context.moveTo(locTx[0], locTx[1]);
    }

    function lineToTx(x, y, z, Tx) {
        var loc = [x, y, z];
        var locTx = m4.transformPoint(Tx, loc);
        context.lineTo(locTx[0], locTx[1]);
    }

    function drawAxes(Tx) {
        moveToTx(0, 0, 0, Tx); lineToTx(200, 0, 0, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(0, 350, 0, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(0, 0, 200, Tx); context.stroke();
    }

    function drawTopSpinner(Tx) {
        //create bottom of top-spinner
        moveToTx(0, 0, 0, Tx); lineToTx(-75, 150, -75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(75, 150, 75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(75, 150, -75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-75, 150, 75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-106.07, 150, 0, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(106.07, 150, 0, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(0, 150, -106.07, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(0, 150, 106.07, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-18.75, 150, 104.4, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(18.75, 150, 104.4, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-18.75, 150, -104.4, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(18.75, 150, -104.4, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(104.4, 150, -18.75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(104.4, 150, 18.75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-104.4, 150, -18.75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-104.4, 150, 18.75, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-89.93, 150, 56.25, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(89.93, 150, 56.25, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-89.93, 150, -56.25, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(89.93, 150, -56.25, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(56.25, 150, -89.93, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(56.25, 150, 89.93, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-56.25, 150, -89.93, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-56.25, 150, 89.93, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-37.5, 150, 99.22, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(37.5, 150, 99.22, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-37.5, 150, -99.22, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(37.5, 150, -99.22, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(99.22, 150, -37.5, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(99.22, 150, 37.5, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-99.22, 150, -37.5, Tx); context.stroke();
        moveToTx(0, 0, 0, Tx); lineToTx(-99.22, 150, 37.5, Tx); context.stroke();

        // "circle"
        moveToTx(106.07, 150, 0, Tx); lineToTx(104.4, 150, 18.75, Tx); lineToTx(99.22, 150, 37.5, Tx);
        lineToTx(89.93, 150, 56.25, Tx); lineToTx(75, 150, 75, Tx); lineToTx(56.25, 150, 89.93, Tx);
        lineToTx(37.5, 150, 99.22, Tx); lineToTx(18.75, 150, 104.4, Tx); lineToTx(0, 150, 106.07, Tx);
        lineToTx(0, 150, 106.07, Tx); lineToTx(-18.75, 150, 104.4, Tx); lineToTx(-37.5, 150, 99.22, Tx);
        lineToTx(-56.25, 150, 89.93, Tx); lineToTx(-75, 150, 75, Tx); lineToTx(-89.93, 150, 56.25, Tx);
        lineToTx(-99.22, 150, 37.5, Tx); lineToTx(-104.4, 150, 18.75, Tx); lineToTx(-106.07, 150, 0, Tx);
        lineToTx(-106.07, 150, 0, Tx); lineToTx(-104.4, 150, -18.75, Tx); lineToTx(-99.22, 150, -37.5, Tx);
        lineToTx(-89.93, 150, -56.25, Tx); lineToTx(-75, 150, -75, Tx); lineToTx(-56.25, 150, -89.93, Tx);
        lineToTx(-37.5, 150, -99.22, Tx); lineToTx(-18.75, 150, -104.4, Tx); lineToTx(0, 150, -106.07, Tx);
        lineToTx(0, 150, -106.07, Tx); lineToTx(18.75, 150, -104.4, Tx); lineToTx(37.5, 150, -99.22, Tx);
        lineToTx(56.25, 150, -89.93, Tx); lineToTx(75, 150, -75, Tx); lineToTx(89.93, 150, -56.25, Tx); 
        lineToTx(99.22, 150, -37.5, Tx); lineToTx(104.4, 150, -18.75, Tx); lineToTx(106.07, 150, 0, Tx);
        context.closePath();
        context.fill();

        //create handle
        moveToTx(20, 150, 20, Tx); lineToTx(24.49, 150, 14.14, Tx); lineToTx(26.45, 150, 10, Tx);
        lineToTx(27.67, 150, 5.86, Tx); lineToTx(28.28, 150, 0, Tx); lineToTx(27.67, 150, -5.86, Tx);
        lineToTx(26.45, 150, -10, Tx); lineToTx(24.49, 150, -14.14, Tx); lineToTx(20, 150, -20, Tx);
        lineToTx(14.14, 150, -24.49, Tx); lineToTx(10, 150, -26.45, Tx); lineToTx(5.86, 150, -27.67, Tx);
        lineToTx(0, 150, -28.28, Tx); lineToTx(-5.86, 150, -27.67, Tx); lineToTx(-10, 150, -26.45, Tx);
        lineToTx(-14.14, 150, -24.49, Tx); lineToTx(-20, 150, -20, Tx); lineToTx(-24.49, 150, -14.14, Tx);
        lineToTx(-26.45, 150, -10, Tx); lineToTx(-27.67, 150, -5.86, Tx); lineToTx(-28.28, 150, 0, Tx);
        lineToTx(-27.67, 150, 5.86, Tx); lineToTx(-26.45, 150, 10, Tx); lineToTx(-24.49, 150, 14.14, Tx);
        lineToTx(-20, 150, 20, Tx); lineToTx(-14.14, 150, 24.49, Tx); lineToTx(-10, 150, 26.45, Tx);
        lineToTx(-5.86, 150, 27.67, Tx); lineToTx(0, 150, 28.28, Tx); lineToTx(5.86, 150, 27.67, Tx);
        lineToTx(10, 150, 26.45, Tx); lineToTx(14.14, 150, 24.49, Tx);
        context.closePath();
        context.fill();

        moveToTx(20, 250, 20, Tx); lineToTx(24.49, 250, 14.14, Tx); lineToTx(26.45, 250, 10, Tx);
        lineToTx(27.67, 250, 5.86, Tx); lineToTx(28.28, 250, 0, Tx); lineToTx(27.67, 250, -5.86, Tx);
        lineToTx(26.45, 250, -10, Tx); lineToTx(24.49, 250, -14.14, Tx); lineToTx(20, 250, -20, Tx);
        lineToTx(14.14, 250, -24.49, Tx); lineToTx(10, 250, -26.45, Tx);lineToTx(5.86, 250, -27.67, Tx);
        lineToTx(0, 250, -28.28, Tx); lineToTx(-5.86, 250, -27.67, Tx); lineToTx(-10, 250, -26.45, Tx);
        lineToTx(-14.14, 250, -24.49, Tx); lineToTx(-20, 250, -20, Tx); lineToTx(-24.49, 250, -14.14, Tx);
        lineToTx(-26.45, 250, -10, Tx); lineToTx(-27.67, 250, -5.86, Tx); lineToTx(-28.28, 250, 0, Tx);
        lineToTx(-27.67, 250, 5.86, Tx); lineToTx(-26.45, 250, 10, Tx); lineToTx(-24.49, 250, 14.14, Tx);
        lineToTx(-20, 250, 20, Tx); lineToTx(-14.14, 250, 24.49, Tx); lineToTx(-10, 250, 26.45, Tx);
        lineToTx(-5.86, 250, 27.67, Tx); lineToTx(0, 250, 28.28, Tx); lineToTx(5.86, 250, 27.67, Tx);
        lineToTx(10, 250, 26.45, Tx); lineToTx(14.14, 250, 24.49, Tx); lineToTx(20, 250, 20, Tx);
        context.stroke();

        moveToTx(20, 150, 20, Tx); lineToTx(20, 250, 20, Tx); context.stroke();
        moveToTx(20, 150, -20, Tx); lineToTx(20, 250, -20, Tx); context.stroke();
        moveToTx(-20, 150, 20, Tx); lineToTx(-20, 250, 20, Tx); context.stroke();
        moveToTx(-20, 150, -20, Tx); lineToTx(-20, 250, -20, Tx); context.stroke();
        moveToTx(0, 150, 28.28, Tx); lineToTx(0, 250, 28.28, Tx); context.stroke();
        moveToTx(0, 150, -28.28, Tx); lineToTx(0, 250, -28.28, Tx); context.stroke();
        moveToTx(28.28, 150, 0, Tx); lineToTx(28.28, 250, 0, Tx); context.stroke();
        moveToTx(-28.28, 150, 0, Tx); lineToTx(-28.28, 250, 0, Tx); context.stroke();
        moveToTx(14.14, 150, 24.49, Tx); lineToTx(14.14, 250, 24.49, Tx); context.stroke();
        moveToTx(14.14, 150, -24.49, Tx); lineToTx(14.14, 250, -24.49, Tx); context.stroke();
        moveToTx(-14.14, 150, -24.49, Tx); lineToTx(-14.14, 250, -24.49, Tx); context.stroke();
        moveToTx(-14.14, 150, 24.49, Tx); lineToTx(-14.14, 250, 24.49, Tx); context.stroke();
        moveToTx(24.49, 150, 14.14, Tx); lineToTx(24.49, 250, 14.14, Tx); context.stroke();
        moveToTx(24.49, 150, -14.14, Tx); lineToTx(24.49, 250, -14.14, Tx); context.stroke();
        moveToTx(-24.49, 150, -14.14, Tx); lineToTx(-24.49, 250, -14.14, Tx); context.stroke();
        moveToTx(-24.49, 150, 14.14, Tx); lineToTx(-24.49, 250, 14.14, Tx); context.stroke();
        moveToTx(27.67, 150, 5.86, Tx); lineToTx(27.67, 250, 5.86, Tx); context.stroke();
        moveToTx(27.67, 150, -5.86, Tx); lineToTx(27.67, 250, -5.86, Tx); context.stroke();
        moveToTx(-27.67, 150, -5.86, Tx); lineToTx(-27.67, 250, -5.86, Tx); context.stroke();
        moveToTx(-27.67, 150, 5.86, Tx); lineToTx(-27.67, 250, 5.86, Tx); context.stroke();
        moveToTx(5.86, 150, 27.67, Tx); lineToTx(5.86, 250, 27.67, Tx); context.stroke();
        moveToTx(5.86, 150, -27.67, Tx); lineToTx(5.86, 250, -27.67, Tx); context.stroke();
        moveToTx(-5.86, 150, -27.67, Tx); lineToTx(-5.86, 250, -27.67, Tx); context.stroke();
        moveToTx(-5.86, 150, 27.67, Tx); lineToTx(-5.86, 250, 27.67, Tx); context.stroke();
        moveToTx(10, 150, 26.45, Tx); lineToTx(10, 250, 26.45, Tx); context.stroke();
        moveToTx(10, 150, -26.45, Tx); lineToTx(10, 250, -26.45, Tx); context.stroke();
        moveToTx(-10, 150, -26.45, Tx); lineToTx(-10, 250, -26.45, Tx); context.stroke();
        moveToTx(-10, 150, 26.45, Tx); lineToTx(-10, 250, 26.45, Tx); context.stroke();
        moveToTx(26.45, 150, 10, Tx); lineToTx(26.45, 250, 10, Tx); context.stroke();
        moveToTx(26.45, 150, -10, Tx); lineToTx(26.45, 250, -10, Tx); context.stroke();
        moveToTx(-26.45, 150, -10, Tx); lineToTx(-26.45, 250, -10, Tx); context.stroke();
        moveToTx(-26.45, 150, 10, Tx); lineToTx(-26.45, 250, 10, Tx); context.stroke();
        

        //connect handle to "circle"
        moveToTx(20, 150, 20, Tx); lineToTx(75, 150, 75, Tx); context.stroke();
        moveToTx(20, 150, -20, Tx); lineToTx(75, 150, -75, Tx); context.stroke();
        moveToTx(-20, 150, -20, Tx); lineToTx(-75, 150, -75, Tx); context.stroke();
        moveToTx(-20, 150, 20, Tx); lineToTx(-75, 150, 75, Tx); context.stroke();
        moveToTx(28.28, 150, 0, Tx); lineToTx(106.07, 150, 0, Tx); context.stroke();
        moveToTx(0, 150, 28.28, Tx); lineToTx(0, 150, 106.07, Tx); context.stroke();
        moveToTx(-28.28, 150, 0, Tx); lineToTx(-106.07, 150, 0, Tx); context.stroke();
        moveToTx(0, 150, -28.28, Tx); lineToTx(0, 150, -106.07, Tx); context.stroke();
    }

    function drawPropeller(Tx) {
        //draw middle of propeller
        moveToTx(30, 250, 30, Tx); lineToTx(30, 250, -30, Tx); lineToTx(-30, 250, -30, Tx);
        lineToTx(-30, 250, 30, Tx); context.closePath(); context.fill();
        lineToTx(30, 275, 30, Tx); lineToTx(30, 275, -30, Tx); lineToTx(-30, 275, -30, Tx);
        lineToTx(-30, 275, 30, Tx); context.closePath(); context.fill();
        moveToTx(30, 250, -30, Tx); lineToTx(30, 275, -30, Tx); lineToTx(30, 275, 30, Tx);
        lineToTx(30, 250, 30, Tx); context.closePath(); context.fill();
        moveToTx(30, 250, 30, Tx); lineToTx(30, 275, 30, Tx); lineToTx(-30, 275, 30, Tx);
        lineToTx(-30, 250, 30, Tx); context.closePath(); context.fill();
        moveToTx(30, 250, -30, Tx); lineToTx(30, 275, -30, Tx); lineToTx(-30, 275, -30, Tx);
        lineToTx(-30, 250, -30, Tx); context.closePath(); context.fill();
        moveToTx(-30, 250, -30, Tx); lineToTx(-30, 275, -30, Tx); lineToTx(-30, 275, 30, Tx);
        lineToTx(-30, 250, 30, Tx); context.closePath(); context.fill();

        drawWing(15, 255, 30, Tx, true); //draw wing 1
        drawWing(15, 255, -180, Tx, true); //draw wing 2
        drawWing(30, 255, 15, Tx, false); //draw wing 3
        drawWing(-180, 255, 15, Tx, false); //draw wing 4
    }

    function drawWing(x, y, z, Tx, holder) {
        context.fillStyle = "blue";
        if (holder) {
            moveToTx(x, y, z, Tx); lineToTx(x, y, z + 150, Tx); lineToTx(x + 2, y + 10, z + 150, Tx);
            lineToTx(x + 2, y + 10, z, Tx); context.closePath(); context.fill();
            moveToTx(x + 2, y + 10, z, Tx); lineToTx(x + 2, y + 10, z + 150, Tx); lineToTx(-x, y + 15, z + 150, Tx);
            lineToTx(-x, y + 15, z, Tx); context.closePath(); context.fill();
            moveToTx(-x, y + 15, z, Tx); lineToTx(-x, y + 15, z + 150, Tx); lineToTx(-(x + 2), y + 5, z + 150, Tx);
            lineToTx(-(x + 2), y + 5, z, Tx); context.closePath(); context.fill();
            moveToTx(-(x + 2), y + 5, z, Tx); lineToTx(-(x + 2), y + 5, z + 150, Tx); lineToTx(x, y, z + 150, Tx);
            lineToTx(x, y, z, Tx); context.closePath(); context.fill();
        }
        else {
            moveToTx(x, y, z, Tx); lineToTx(x + 150, y, z, Tx); lineToTx(x + 150, y + 10, z + 2, Tx);
            lineToTx(x, y + 10, z + 2, Tx); context.closePath(); context.fill();
            moveToTx(x, y + 10, z + 2, Tx); lineToTx(x + 150, y + 10, z + 2, Tx); lineToTx(x + 150, y + 15, -z, Tx);
            lineToTx(x, y + 15, -z, Tx); context.closePath(); context.fill();
            moveToTx(x, y + 15, -z, Tx); lineToTx(x + 150, y + 15, -z, Tx); lineToTx(x + 150, y + 5, -(z + 2), Tx);
            lineToTx(x, y + 5, -(z + 2), Tx); context.closePath(); context.fill();
            moveToTx(x, y + 5, -(z + 2), Tx); lineToTx(x + 150, y + 5, -(z + 2), Tx); lineToTx(x + 150, y, z, Tx);
            lineToTx(x, y, z, Tx); context.closePath(); context.fill();
        }
        
    }

    function draw() {
        canvas.width = canvas.width;

        var angle1 = slider1.value * 0.01 * Math.PI;
        var angle2 = slider2.value * 0.01 * Math.PI;
        var angle3 = slider2.value * -0.01 * Math.PI;
        var zoom = 200 * (slider3.value/20);
        
        var axis = [0, 1, 0];
        var model1 = m4.axisRotation(axis, angle2);
        var model2 = m4.axisRotation(axis, angle3);

        var eye = [700 * Math.cos(angle1), 400, 700 * Math.sin(angle1)];
        var target = [0, 150, 0];
        var up = [0, 1, 0];
        var camera = m4.inverse(m4.lookAt(eye, target, up));
        var projection = m4.perspective(Math.PI / 3, 1, 5, 400);
        var viewPort = m4.multiply(m4.scaling([200 + zoom, -200 - zoom, 200 + zoom]), m4.translation([200, 200, 0]));

        var cpv = m4.multiply(m4.multiply(camera, projection), viewPort);
        var mcpv1 = m4.multiply(model1, cpv);
        var mcpv2 = m4.multiply(model2, cpv);

        drawTopSpinner(mcpv1);
        drawPropeller(mcpv2);
        drawAxes(cpv);
    }

    slider1.addEventListener("input", draw);
    slider2.addEventListener("input", draw);
    slider3.addEventListener("input", draw);
    draw();

}
window.onload = setup;
