var svg = document.getElementById("svg");
var clearbutton = document.getElementById("clear");


var clear = function(e){
    svg.innerHTML = "";
};


var addCircle = function(e){
    var circ = newCircle(e.offsetX,e.offsetY);
    circ.spawn();
    console.log(circ);
};


var newCircle = function(x,y){
    var circle = {
	cx: x,
	cy: y,
	r : 25,
	red: 255,
	green: 0,
	blue: 0,
	stroke: "rgb(0,0,0)",
	clicked: 0,
	namespace: document.createElementNS("http://www.w3.org/2000/svg","circle"),

	setrandomcolor: function(){
	    this.red = Math.floor((255*Math.random()));
	    this.green = Math.floor((255*Math.random()));
	    this.blue = Math.floor((255*Math.random()));
	},

	die: function(){
	    svg.removeChild(this);
	},

	spawn: function(){
	    this.namespace.setAttribute("r",this.r);
	    this.namespace.setAttribute("cx",this.cx);
	    this.namespace.setAttribute("cy",this.cy);
	    this.namespace.setAttribute("fill","rgb(" + this.red + "," + this.green + "," + this.blue + ")");
	    this.namespace.setAttribute("stroke", this.stroke);
	    this.namespace.setAttribute("clicked", this.clicked);
	    this.namespace.addEventListener("click", function(){
		circleClick(this);
	    });
	    svg.appendChild(this.namespace);
	}

	
	

    }

    return circle;
}

var circleClick =  function(caller){
	    e.stopPropagation();
	    console.log(this.clicked);
	    if(caller.clicked == 0){
		caller.setrandomcolor();
		caller.clicked = 1;
	    }
	    else{
		var created = newCircle(Math.floor(500*Math.random()), Math.floor(500*Math.random()));
		caller.die();
	    }
	}



clearbutton.addEventListener("click",clear);
svg.addEventListener("click",addCircle);
