var dataArray = [5,11,18];

//create a variable to refer to the svg
//How to select an SVG element and set attr attributes for svg

var svg = d3.select("body").append("svg")
        .attr("height","100%")
        .attr("width","100%");

svg.selectAll("rect")
        .data(dataArray)
        .enter().append("rect")
                .attr("height",function(d,i){return d*15;})
                //add some color to these charts bro,
                .attr("fill","blue")
                .attr("width","50")
                //need to make X coordinate dynamic, so we add this function
                .attr("x",function(d,i){return 60*i; })

                //need to invert the y position(use 300 minus height)
                .attr("y", function(d,i){ return 300-(d*15);})

var newX = 300;
svg.selectAll("circle")
        .data(dataArray)
        .enter().append("circle")
        //3 mandatory attributes
        // update function cx so that it is not on top of one another
                .attr("cx",function(d,i){ newX +=(d*6) + (i*20); return newX;})
                .attr("fill","pink")
                .attr("cy","100")
                .attr("r",function(d){ return d*3;});
