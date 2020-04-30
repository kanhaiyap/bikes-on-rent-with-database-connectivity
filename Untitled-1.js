<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title >Insert title here</title>
 <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
 <style type=text/stylesheet>
 body {
 background-color:yellow;
}

.axis {
    font: 15px Arial, sans-serif;
}
.graph-svg-component {
  background-color:white;
  display: block;
  margin: auto;
}
.axis path, .axis line {
    fill: none;
    stroke: #3A3A3A;
}



 </style>
</head>




<body>
<div class="graph" id="barGraph">
  



    
     
			</div>
	




  <script >
  

  function DrawBar(dataset){
        var margin  = {top: 50, right: 20, bottom: 50, left: 100},
         width   = 800,
         height  = 400

     
     
     var minDate = dataset[0][0].substr(0,4);
         minDate = new Date(minDate);
     var maxDate = dataset[dataset.length - 1][0].substr(0,4);
         maxDate = new Date(maxDate);
    
    
    var xAxisScale = d3.time.scale()
         .domain([minDate, maxDate])
         .range([0, width]);
    
     var yAxisScale = d3.scale.linear()
          .domain([0, d3.max(dataset, function(d) { 
            
             return d[1]; 
           })
          ])
          .range([height, 0]);
    
    
     var xAxis = d3.svg.axis().scale(xAxisScale).orient("bottom"); 
  
     var yAxis = d3.svg.axis().scale(yAxisScale).orient("left");
     
    var tooltip = d3.select('body').append('div')
       .style({
         'position' : 'absolute',
         'padding' : '4px',
         'background' : 'green',
         'border': '1px solid red',
         'color':'blue'
         });

 function mouseoverHandler(d) {
    tooltip.transition().style('opacity', .8)
    tooltip.style({
             'left' : (d3.event.pageX + 10) + 'px',
             'top' : (d3.event.pageY + 15) + 'px'
             })
           .html('<p> Date: ' + d[0] + '</p>'
                   + '<p> ' + d[1] + '</p>')
     
    d3.select(this)
       .style('opacity', .1);
 }

 function mouseoutHandler(d) {
     tooltip.transition().style('opacity', 0)  
     d3.select(this)
       .style('opacity', 1);
 }

 function mouseMoving (d) {
     tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
     d3.select(this)
       .style('opacity', 0.8);
 }
 var svg= d3.select("#barGraph")
         .append("svg")
         .attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
         .attr("class", "graph-svg-component")
         .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   svg.selectAll("bar")
        .data(dataset)
        .enter()
        .append("rect")
        .style("fill", "blue")
        .attr({
              x: function(d, i) { return (i * (width / dataset.length)); },
              y: function(d) { return yAxisScale(d[1]); },
              width: (width / dataset.length),
              height: function(d) { return height - yAxisScale(d[1]); },
     })
         .on('mouseover', mouseoverHandler)
       	.on("mousemove",mouseMoving)
       	.on("mouseout", mouseoutHandler);
       
  
        svg.append("g")
             .attr("class", "x axis")
             .attr("transform", "translate(0, " + height + ")")
             .call(xAxis)
             .selectAll("text")
             .style("text-anchor", "end")
             .attr("dx", "-0.5em")
             .attr("dy", "-.55em")
             .attr("y", 30)
             .attr("transform", "rotate(-45)" )
    
         svg.append("g")
             .attr("class", "y axis")
             .call(yAxis)
             .append("text")
             .attr("transform", "rotate(-90)")
             .attr("y", -85)
             .attr("dy", "0.8em")
             .attr("text-anchor", "end")
             .text("Value");
     } 

 d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data) {
  var dataset = data.data;
   DrawBar(dataset);
  });
  </script>
</body>





</body>
</html>