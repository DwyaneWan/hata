function draw(university, number) {
    
    grades = [];
    // ensure the format of the grades
    university.forEach(function(d){
        grades.push({"name": d.University, "attr": "athletics", "grade": d.athletics});
        grades.push({"name": d.University, "attr": "dorms", "grade": d.dorms});
        grades.push({"name": d.University, "attr": "student life", "grade": d.student_life});
        grades.push({"name": d.University, "attr": "campus", "grade": d.campus});
        grades.push({"name": d.University, "attr": "party", "grade": d.party});
        grades.push({"name": d.University, "attr": "location", "grade": d.location});
        grades.push({"name": d.University, "attr": "food", "grade": d.food});
        grades.push({"name": d.University, "attr": "safety", "grade": d.safety});
    });

    // clear preview svg
    // d3.selectAll("svg").transition()
    //       .style("opacity","0.4")
    //       .duration(600).each("end", removesvg)
    d3.select('svg').remove();

    svg = d3.select(".mainview").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", svg_height + margin.top + margin.bottom)
    // .style("opacity","1")
    .append("g")
    // .attr("transform", "translate(0," + margin.top + ")");

    

    if(number == 0) {
      p.rangePoints([120,width*1/7+120],1);
      q.rangePoints([120, width+120], 1);  
    } else {
      p.rangePoints([120,width*(number+2)/7+120],1);
      q.rangePoints([width*(number+1)/7+120, width+120], 1);
    }
    
  
    
    // count++;
    // draw_back(university, count)

    universities = []
    university.forEach(function(d){
      var s = {}
      s["University"] = d.University,
      s["Campus Life"] = +d["Campus Life"],
      s["Cost"] = +d.Cost,
      s.Academic = +d.QS_overall,
      s.Students = +d.Students,
      s.Admissions = +d.Admissions,
      s["After College"] = +d["employment"]
      universities.push(s)
    })
    
    
    university1 = [];
    universities.forEach(function(d){
      var tmp = {};
      for(var v in d){
        if(number ==0) {
          if(v == "University")
          tmp[v] = d[v]
        } else if (number == 1) {
          if(v == "University" || v == "Campus Life" || v == "Cost")
          tmp[v] = d[v]
        }else if (number == 2) {
          if(v != "Students" && v != "Admissions" && v != "After College")
          tmp[v] = d[v]
        }else if (number == 3) {
          if( v != "Admissions" && v != "After College")
          tmp[v] = d[v]
        }else if (number == 4) {
          if( v != "After College")
          tmp[v] = d[v]
        }else if (number == 5) {
          tmp[v] = d[v]
        }
        
      }
      university1.push(tmp);
    })

    // university2 = all - university
    university2 = [];
    universities.forEach(function(d,i){
      var tmp = {};
      for(var v in d){
        if(number == 0){
          tmp[v] = d[v]
        } else if(number == 1){
          if(v!="University" && v != "Campus Life")
          tmp[v] = d[v]
        }
        else if(number == 2){
          if(v!="University" && v != "Campus Life" && v!= "Cost")
          tmp[v] = d[v]
        }
        else if(number == 3){
          if(v =="Students" || v == "Admissions" || v == "After College")
          tmp[v] = d[v]
        }
        else if(number == 4){
          if(v == "Admissions" || v == "After College")
          tmp[v] = d[v]
        }
        else if(number == 5){
          if(v == "After College")
          tmp[v] = d[v]
        }
        
      }
      university2.push(tmp)
    })

    // domain for first part of axis
    p.domain(p_dimensions = d3.keys(university1[0]).filter(function(d) {
      if(d == "University")
        return y[d] = d3.scale.ordinal()
          .domain(university1.map(function(p) { return p[d]; }))
          .rangePoints([90, height]);
      else if(d == "Academic"){
        return (y[d] = d3.scale.linear()
          .domain([0,100])
          .range([height,90]));
      }
      else if(d == "Admissions"){
        return (y[d] = d3.scale.linear()
          .domain([0,80])
          .range([height,90]));
      }
       else if(d == "After College"){
        return (y[d] = d3.scale.linear()
          .domain([70,100])
          .range([height,90]));
      }
       else if(d == "Cost"){
        return (y[d] = d3.scale.linear()
          .domain([9000,42000])
          .range([height,90]));
      }
      else if(d == "Campus Life"){
        return (y[d] = d3.scale.linear()
          .domain([3,10])
          .range([height,90]));
      }else if(d == "Students"){
        return (y[d] = d3.scale.linear()
          .domain([700,45000])
          .range([height,90]));
      }

    }))

    //domain for the rest part
    q.domain(q_dimensions = d3.keys(university2[0]).filter(function(d) {
      if(d == "University")
        return y[d] = d3.scale.ordinal()
          .domain(university2.map(function(p) { return p[d]; }))
          .rangePoints([90, height]);
      else if(d == "Academic"){
        return (y[d] = d3.scale.linear()
          .domain([0,100])
          .range([height,90]));
      }
      else if(d == "Admissions"){
        return (y[d] = d3.scale.linear()
          .domain([0,80])
          .range([height,90]));
      }
       else if(d == "After College"){
        return (y[d] = d3.scale.linear()
          .domain([70,100])
          .range([height,90]));
      }
       else if(d == "Cost"){
        return (y[d] = d3.scale.linear()
          .domain([9000,42000])
          .range([height,90]));
      }
      else if(d == "Campus Life"){
        return (y[d] = d3.scale.linear()
          .domain([3,10])
          .range([height,90]));
      }
      else if(d == "Students"){
        return (y[d] = d3.scale.linear()
          .domain([700,45000])
          .range([height,90]));
      }
    }))


    // record all the dimensions
    dimension = d3.keys(universities[0]);



    z.domain(university1.map(function(d){
      return d["University"]
    }))
    z_highlight.domain(university1.map(function(d){
      return d["University"]
    }))

    var current_title = q_dimensions[0]
  
    
    
    // Add grey background lines for context.
    line1 = svg.append("g")
        .attr("class", "background")
        .selectAll("path")
        .data(university1)
        .enter().append("path")
        .attr("d", path1).style('display','none');


    // Add blue foreground lines for focus.
    line2 = svg.append("g")
        .attr("class", "foreground")
        .selectAll("path")
        .data(university1)
        .enter().append("path")
        .attr("d", path1)
        .attr("stroke", function(d){
          return z(d["University"])})



    // Add grey background lines for context.
    line3 = svg.append("g")
        .attr("class", "background right")
        .selectAll("path")
        .data(university2)
        .enter().append("path")
        .attr("d", path2).style('display','none');

    // Add blue foreground lines for focus.
    line4 = svg.append("g")
        .attr("class", "foreground right")
        .selectAll("path")
        .data(university2)
        .enter().append("path")
        .attr("d", path2)
        .attr("stroke", function(d,i){
          return z(universities[i]["University"])});

    // draw circles
    circle1 = [];
    p_dimensions.map(function(s){

      var tmp = svg.append("g")
        .attr("class", "circles")
        .selectAll("circle")
        .data(university1)
        .enter()
        .append("circle")
        .attr("cx", function(d){
          return p(s)
        })
        .attr("cy", function(d) {
            return y[s](d[s]);
        })
        .attr("r", "5px")
        .style("fill", "#ddd")
      circle1.push(tmp)
    })

    circle2 = [];
    p_dimensions.map(function(s){

      var tmp = svg.append("g")
        .attr("class", "circles")
        .selectAll("circle")
        .data(university1)
        .enter()
        .append("circle")
        .attr("cx", function(d){
          return p(s)
        })
        .attr("cy", function(d) {
            return y[s](d[s]);
        })
        .attr("r", "5px")
        .style("fill", function(d){
          return z(d["University"])})
      circle2.push(tmp)
    })
    circle3 = []
    q_dimensions.map(function(s){

      var tmp  = svg.append("g")
        .attr("class", "circles")
        .selectAll("circle")
        .data(university2)
        .enter()
        .append("circle")
        .attr("cx", function(d){
          return q(s)
        })
        .attr("cy", function(d) {
            return y[s](d[s]);
        })
        .attr("r", "5px")
        .style("fill", "#ddd")
      circle3.push(tmp)
    })
    circle4 = []
    q_dimensions.map(function(s){

      var tmp  = svg.append("g")
        .attr("class", "circles")
        .selectAll("circle")
        .data(university2)
        .enter()
        .append("circle")
        .attr("cx", function(d){
          return q(s)
        })
        .attr("cy", function(d) {
            return y[s](d[s]);
        })
        .attr("r", "5px")
        .style("fill", function(d,i){
          return z(universities[i]["University"])})
      circle4.push(tmp)
    })

    circle1.forEach(function(e){
        e.style("display", "none")
    })
    circle2.forEach(function(e){
        e.style("display", "none")
    })
    circle3.forEach(function(e){
        e.style("display", "none")
    })
    circle4.forEach(function(e){
        e.style("display", "none")
    })
    
    g1 = svg.selectAll(".dimension1")
      .data(p_dimensions)
      .enter().append("g")
      .attr("class", "dimension1")
      .attr("transform", function(d) { return "translate(" + p(d) + ")"; })
      .style("fill","white")

    g1.append("g")
        .attr("id", "u_name")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d]).ticks(8)); })
        .append("text")
        .style("fill","white")
        .style("text-anchor", "middle")
        .attr("x", 0)
        .attr("y", -200)
        // .text(function(d) { return d; });

     g1.append("g")
      .attr("class", "brush")
      
      .each(function(d) {
        d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
      })
    .selectAll("rect")
      .attr("x", -10)
      .attr("width", 20)
      .attr("rx",10)
      .attr("ry",10);



    g2 = svg.selectAll(".dimension2")
      .data(q_dimensions)
      .enter().append("g")
      .attr("class", "dimension2")
      .attr("transform", function(d) { return "translate(" + q(d) + ")"; })
      .style("fill","white")
      // .style("font-size","11px")


    g2.append("g")
        .attr("id", "r_name")
        // .attr("class", "axis")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d]).ticks(8)); })
        .append("text")
        .style("text-anchor", "middle")
        .style("fill","white")
        .attr("x", 0)
        .attr("y", -200)
        .attr("class", "topic")
        // .text(function(d,i) { 
        //   if(i!= 0) return d; });
    if(number == 0){
      var i = 0;
      g1.selectAll('text').filter(function(d){
        var no = university.length
        if(i++>no && i<no+8) return d;
      }).remove()
    }
    g2.append("g")
      .attr("class", "brush")
      .each(function(d) {
        d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
      })
    .selectAll("rect")
      .attr("x", -10)
      .attr("width", 20)
      .attr("rx",10)
      .attr("ry",10);
    var count_text = 0;
    svg.selectAll('text').attr('y',function(d){
      count_text++;
      if(count_text>20) return 8;
    })
    svg.selectAll("#u_name")
        .selectAll('.tick')
        .on('click',select_university)

    var count = 0;
    // var fo1 =g1.append('foreignObject')
    //       .attr({
    //             'x': "-15px",
    //             'y': "-40px",
    //             'width': "10px"
    //         });
    // var button1 = fo1.filter(function(d,i){
    //                 if(i!=0) return d;
    //               })
    //             .append('xhtml:button')
    //             .attr('class','expand_button')
    //             .append('text')
    //             .text("+")

    // var fo2 =g2.append('foreignObject')
    //       .attr({
    //             'x': "-15px",
    //             'y': "-40px",
    //             'width': "10px"
    //         });
    // var button2 = fo2.filter(function(d,i){
    //                 if(i!=0) return d;
    //               })
    //             .append('xhtml:button')
    //             .attr('class','expand_button')
    //             .append('text')
    //             .text("+")                   

    d3.selectAll('.expand_button').on('click',function(d,i){
      return clickMe(i)
    })
    if(number == 0){
      var i = 0;
      g2.selectAll('text').filter(function(d){
        if(i++<=20) return d;
      }).remove()
    }
    if(selected.length != 0) {
      circle2.forEach(function(e){
        e.style("display", function(s,index){
          return selected.every(function(p,i){
            return s["University"] != p;
          })? "none" : null;
        })
      })
      circle4.forEach(function(e){
          e.style("display", function(s,index){
            return selected.every(function(p,i){
              return universities[index]["University"] != p;
            })? "none" : null;
          })
      })
      line1.style("display",function(s,index){
        return selected.every(function(p,i){
          return s["University"] != p;
        })? null : "none";
      });
      line2.style("display",function(s,index){
        return selected.every(function(p,i){
          return s["University"] != p;
        })? "none" : null;
      });
      line3.style("display",function(s,index){
        return selected.every(function(p,i){
          return university[index]["University"] != p;
        })? null : "none";
      });
      line4.style("display",function(s,index){
        return selected.every(function(p,i){
          return university[index]["University"] != p;
        })? "none" : null;
      });
      
    }
    var uNames = d3.selectAll("#u_name>.tick");
    if(selected.length!=0)
      for(var i in selected) {
        uNames.forEach(function (e) {
            e.forEach(function (f) {
                if (f.textContent === selected[i]) {
                    d3.select(f).style("fill", "#FE938C");
                } 
            })
        });
      }
      

  
    
    // d3.select('svg').transition().style("opacity","1").duration(600)
  }

  // function draw_back(university,index){
  //   if(index > 1) return; 
  //   // draw the heatmap for campus life
  //   var width_heatmap = 240,
  //       unitSize = Math.floor(width_heatmap/8),
  //       radius = unitSize / 2 - 3,
  //       xScale = d3.scale.ordinal().rangeBands([0, width_heatmap]),
  //       yScale = d3.scale.ordinal().rangeBands([0, height+42]),
  //       colors = ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a",
  //           "#e31a1c", "#bd0026", "#800026"],
  //       colorDomain = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-"],
  //       colorScale = d3.scale.ordinal().range(colors).domain(colorDomain);

  //   var svg_heat = d3.select("#son1").append("svg")
  //       .attr("width", width_heatmap)
  //       .attr("class", "svg_heat")
  //       .attr("height", height+2*radius+60)
  //       .append("g")
  //       .attr("transform", "translate(25,120)")

  //   // // create tooltip
  //   // var tip = d3.tip()
  //   //     .attr('class', 'd3-tip')
  //   //     .html(function(d) {return d.name + " " + d.attr + " " + d.grade; });
  //   // svg_heat.call(tip);


    
       

  //       // initialize the domains of the scales
  //       var attrs = ["athletics", "dorms", "student life",
  //           "campus", "party", "location", "food", "safety"];
  //       xScale.domain(attrs);
  //       yScale.domain(d3.set(university.map(function(d) {return d.University; })).values());

  //       // create background stripes
  //       var stripes = svg_heat.selectAll(".stripe")
  //           .data(attrs)
  //           .enter()
  //           .append("rect")
  //           .attr("x", function(d) {return xScale(d)-10; })
  //           .attr("y", 0)
  //           .attr("rx", 20)
  //           .attr("ry", 20)
  //           .attr("width", unitSize)
  //           .attr("height", height+2*radius+20)
  //           .attr("transform", "translate(-" + (radius+3) + ", -" + (radius+3) + ")")
  //           .attr("class", "stripe")
  //           .style("fill", "#E6E6E6");

  //       // create strings
  //       var strings = svg_heat.selectAll(".string")
  //           .data(university)
  //           .enter()
  //           .append("rect")
  //           .attr("x", 0)
  //           .attr("y", function(d) {return yScale(d.University);})
  //           .attr("rx", 20)
  //           .attr("ry", 20)
  //           .attr("width", width_heatmap+20)
  //           .attr("height", 1)
  //           .attr("transform", "translate(-" + (radius+30) + ", 0)")
  //           .attr("class", "string")
  //           .style("fill", "black");

  //       // create boxes
  //       var circles = svg_heat.selectAll(".bigcircle")
  //           .data(grades);

  //       circles.enter()
  //           .append("circle")
  //           .attr("cx", function(d) {return xScale(d.attr)-10; })
  //           .attr("cy", function(d) {return yScale(d.name); })
  //           .attr("r", radius)
  //           .attr("class", "bigcircle")
  //           .style("fill", function(d) { return colorScale(d.grade);})
  //           // .on("mouseover", tip.show)
  //           // .on("mouseout", tip.hide);

  //       // create labels
  //       var xAxis = d3.svg.axis()
  //           .scale(xScale)
  //           .ticks(0)
  //           .orient("top");

  //       svg_heat.append("g")
  //           .attr("class", "axis_heat")
  //           .call(xAxis)
  //           .selectAll('text')
  //           .style("text-anchor", "start")
  //           .attr("dx", "-2em")
  //           .attr("dy", "-1.5em")
  //           .attr("transform", function (d) {
  //               return "rotate(-30)";
        
  //   });
  // }
  function removesvg(){
    d3.select("svg").remove();
 }
