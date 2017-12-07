
function reset() {
  selected = [];
  d3.selectAll("#u_name").selectAll(".tick").style("fill","white");
  circle2.forEach(function(e){
        e.style("display", "none")
  })
   circle4.forEach(function(e){
        e.style("display", "none")
  })
  line2.style("display",null);
  line4.style("display",null);
  svg.selectAll(".brush").each(function(d){
    d3.select(this).call(y[d].brush.clear(),null)
  })

}
  function clickMe(index){
    
    

    var select_column = "select_column"+index;
   
    var e = document.getElementById(select_column)
    if(e!=null) {

      if(index == 0 ){
        $('#campus_life').animate({ top: "+=30px"}, 300)
        $('#button0').toggleClass("main_attributes")
        $('#button0').toggleClass("main_attributes_active")
        svg.selectAll('.svg_heat').transition().attr('width','0px').duration(400).ease('linear')
      }
      if(index == 2){
        $('#academic').animate({ top: "+=30px"}, 300)
        $('#button2').toggleClass("main_attributes")
        $('#button2').toggleClass("main_attributes_active")
        g1_academic.transition().duration(400).ease('linear')
              .attr("transform", function(d) { 
                return "translate(100)"; })
      line1_academic.transition().duration(400).ease('linear').attr('d', path_academic1)
      line2_academic.transition().duration(400).ease('linear').attr('d', path_academic1)
      }
      if(index == 5){
        $('#button5').toggleClass("main_attributes")
        $('#button5').toggleClass("main_attributes_active")
        $('.controlgroup').animate({ right: "+=60px"}, 400)
        // $('.gradient_color').animate({width: "-=80px"},400)
        $('#gradient_color').toggleClass("gradient_color_longer")
        $('#employment').animate({ top: "+=30px"}, 300)
        g1_employment.transition().duration(400).ease('linear')
              .attr("transform", function(d) { 
                return "translate(106.67)"; })
      line1_employment.transition().duration(400).ease('linear').attr('d', path_employment1)
      line2_employment.transition().duration(400).ease('linear').attr('d', path_employment1)
      }
      if(index == 1){
        $('#button1').toggleClass("main_attributes")
        $('#button1').toggleClass("main_attributes_active")
        $('#cost').animate({ top: "+=30px"}, 300)
        g1_cost.transition().duration(400).ease('linear')
              .attr("transform", function(d) { 
                return "translate(106.67)"; })
      line1_cost.transition().duration(400).ease('linear').attr('d', path_cost1)
      line2_cost.transition().duration(400).ease('linear').attr('d', path_cost1)
      }
      if(index == 3) {
        $('#button3').toggleClass("main_attributes")
        $('#button3').toggleClass("main_attributes_active")
        $('#students').animate({ top: "+=30px"}, 300)
        $('#container_student').animate({left : '+=80px', width : '-=160px'},{duration:400,queue:false},"linear" );
        $('#vis_student').animate({left : '-=80px'},{duration:400,queue:false},"linear" );
      }
      
        // var div1 = svg.selectAll('#cover_academic').append('xhtml:div')
        //             .attr('class','expand')
        //             .style('background-color','red')
        //             .style('height','280px')
        //             .transition()
        //               .style('width','80px')
        //             .duration(400)
        //             .ease("linear")
      svg.selectAll(".expand")
          .transition()
          .duration(400)
          .ease('linear')
          .style('width','0px')
          .each("end", remove)
      
      // var right = "#right"+index+" .splat"
      // var left = "#left"+index
      // // d3.select(right).transition().style("width",80).duration(400)
      // $(right).animate({width:"80"},800);
      // $(left).animate({width:"160"},800);

      g1.transition()
          .duration(400)
          .ease("linear")
          .attr("transform", function(d){
            var s = p(d)
            return "translate("+s+")"
          })
      g2.transition()
            .duration(400)
            .ease("linear")
            .attr("transform", function(d){
              return "translate("+q(d)+")"})

      line1.style("display","none")
          .transition()
          .duration(400)
          .ease("linear")
          .attr("d", path1)
          .attr("transform","translate(0,0)")

      line2.style("display",null)
          .transition()
          .duration(400)
          .ease("linear")
          .attr("d", path1)
          .attr("transform","translate(0,0)")
      line3.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path2)
          .attr("transform","translate(0,0)")
      line4.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path2)
          .attr("transform","translate(0,0)")

      circle1.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform","translate(0,0)")
      })
      circle2.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform","translate(0,0)")
      })

      circle3.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform","translate(0,0)")
      })
      circle4.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform","translate(0,0)")
      })
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
        line2_cost.style("display",function(s,index){
          return selected.every(function(p,i){
            return s["University"] != p;
          })? "none" : null;
        });
    }
      


  } else {
    for(var i in column_id){
      var ele = document.getElementById(column_id[i])
      if(ele!=null) {
        if(i == 0) {
          $('#campus_life').animate({ top: "+=30px"}, 300)
          $('#button0').toggleClass("main_attributes")
          $('#button0').toggleClass("main_attributes_active")
        } else if(i == 1){
          $('#cost').animate({ top: "+=30px"}, 300)
          $('#button1').toggleClass("main_attributes")
          $('#button1').toggleClass("main_attributes_active")
        } else if(i == 2) {
          $('#academic').animate({ top: "+=30px"}, 300)
          $('#button2').toggleClass("main_attributes")
          $('#button2').toggleClass("main_attributes_active")
        } else if(i == 3) {
          $('#students').animate({ top: "+=30px"}, 300)
          $('#button3').toggleClass("main_attributes")
          $('#button3').toggleClass("main_attributes_active")
        } else if(i == 4) {
          $('#admissions').animate({ top: "+=30px"}, 300)
          $('#button4').toggleClass("main_attributes")
          $('#button4').toggleClass("main_attributes_active")
        } else {
          $('#employment').animate({ top: "+=30px"}, 300)
          // $('.gradient_color').animate({width: "-=80px"},400)
          $('#gradient_color').toggleClass("gradient_color_longer")
          $('.controlgroup').animate({width: "+=60px"},400)
          $('#button5').toggleClass("main_attributes")
          $('#button5').toggleClass("main_attributes_active")
        }
      }
    }





    // for(var i in column_id){
    //   var ele = document.getElementById(column_id[i])
    //   if(ele!=null) {

        
    //     svg.selectAll('.svg_heat').transition().attr('width','0px').duration(400).ease('linear')
    //   if(i == 2){
    //     g1_academic.transition().duration(400).ease('linear')
    //           .attr("transform", function(d) { 
    //             return "translate(100)"; })
    //   line1_academic.transition().duration(400).ease('linear').attr('d', path_academic1)
    //   line2_academic.transition().duration(400).ease('linear').attr('d', path_academic1)
    //   }
    //   if(i == 5){
    //     g1_employment.transition().duration(400).ease('linear')
    //           .attr("transform", function(d) { 
    //             return "translate(106.67)"; })
    //   line1_employment.transition().duration(400).ease('linear').attr('d', path_employment1)
    //   line2_employment.transition().duration(400).ease('linear').attr('d', path_employment1)
    //   }
    //   if(i == 1){
    //     g1_cost.transition().duration(400).ease('linear')
    //           .attr("transform", function(d) { 
    //             return "translate(106.67)"; })
    //   line1_cost.transition().duration(400).ease('linear').attr('d', path_cost1)
    //   line2_cost.transition().duration(400).ease('linear').attr('d', path_cost1)
    //   }
    //   if(i == 3) {
    //     $('#container_student').animate({left : '+=80px', width : '-=160px'},{duration:400,queue:false},"linear" );
    //     $('#vis_student').animate({left : '-=80px'},{duration:400,queue:false},"linear" );
    //   }
      
    //     // var div1 = svg.selectAll('#cover_academic').append('xhtml:div')
    //     //             .attr('class','expand')
    //     //             .style('background-color','red')
    //     //             .style('height','280px')
    //     //             .transition()
    //     //               .style('width','80px')
    //     //             .duration(400)
    //     //             .ease("linear")
    //   svg.selectAll(".expand")
    //       .transition()
    //       .duration(400)
    //       .ease('linear')
    //       .style('width','0px')
    //       .each("end", remove)
      
    //   // var right = "#right"+index+" .splat"
    //   // var left = "#left"+index
    //   // // d3.select(right).transition().style("width",80).duration(400)
    //   // $(right).animate({width:"80"},800);
    //   // $(left).animate({width:"160"},800);



    //     g1.transition()
    //       .duration(400)
    //       .ease("linear")
    //       .attr("transform", function(d){

    //         var s = p(d)
    //         return "translate("+s+")"
    //       })
    //     g2.transition()
    //           .duration(400)
    //           .ease("linear")
    //           .attr("transform", function(d){
    //             return "translate("+q(d)+")"})
    //           .each("end",function(d){
    //             return resume(index,select_column)
    //           })

    //     line1.style("display",null)
    //         .transition()
    //         .duration(400)
    //         .ease("linear")
    //         .attr("d", path1)
    //         .attr("transform","translate(0,0)")
    //     line2.style("display",null)
    //         .transition()
    //         .duration(400)
    //         .ease("linear")
    //         .attr("d", path1)
    //         .attr("transform","translate(0,0)")
    //     line3.transition()
    //         .duration(400)
    //         .ease("linear")
    //         .attr("d", path2)
    //         .attr("transform","translate(0,0)")
    //     line4.transition()
    //         .duration(400)
    //         .attr("d", path2)
    //         .ease("linear")
    //         .attr("transform","translate(0,0)")

    //     circle1.forEach(function(d){
    //       d.style("display",null).transition()
    //         .duration(400)
    //         .ease("linear")
    //         .attr("transform","translate(0,0)")
    //     })
    //     circle2.forEach(function(d){
    //       d.style("display",null).transition()
    //         .duration(400)
    //         .ease("linear")
    //         .attr("transform","translate(0,0)")
    //     })

    //     circle3.forEach(function(d){
    //       d.transition()
    //         .duration(400)
    //         .ease("linear")
    //         .attr("transform","translate(0,0)")
    //     })
    //     circle4.forEach(function(d){
    //       d.transition()
    //         .duration(400)
    //         .ease("linear")
    //         .attr("transform","translate(0,0)")
    //     })
    //     return

    //   }
    // }
      var tmp = (current_page-1)*20;
      var toDraw = university.filter(function(d){return d});
      toDraw = toDraw.splice(tmp,20)
      draw(toDraw,index)

      // var right = "#right"+index+" .splat"
      // var left = "#left"+index
      // $(right).animate({width:"0"},800);
      // $(left).animate({width:"0"},800);

      g1.transition()
          .duration(400)
          .ease("linear")
          .attr("transform", function(d){
            if(d == q_dimensions[0]){
              if(index == 0) {
                var s = p(d)
                return "translate("+s+")"
              }
              var s = p(d) - width/14
              return "translate("+s+")"
            }
            var s = p(d)
            return "translate("+s+")"
          })

      g2.transition()
          .duration(400)
          .ease("linear")
          .attr("transform", function(d,i){
            if(index == 0) {
              var s = q(d)+width/14+15;
              var t = q(d)+width/7+30;
              if(i == 0) return "translate("+t+")";
              if(i == 1) return "translate("+s+")";
              else return "translate("+q(d)+")"
            }
            var s = q(d)+width/14;
            if(i == 0) return "translate("+s+")"
            return "translate("+q(d)+")"})

      line1.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress1)
          .attr("transform", "translate(0,0)")

      line2.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress1)
          .attr("transform","translate(0,0)")
      
      line3.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress)
          .attr("transform","translate(0,0)")
            
      line4.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress)
          .attr("transform","translate(0,0)")
      
      var t = 0;
      circle1.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform",function(s,i){
            t = t+1
            o = (index+1)*20
            var tmp_width = -width/14
            if(t>o&&t<=o+20&&index!=0) return "translate("+tmp_width+",0)"
            if(t>o&&t<=o+20) return "translate("+tmp_width*2+",0)"
            return "translate(0,0)"})
      })
      t = 0
      circle2.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform",function(s,i){
            t = t+1
            o = (index+1)*20
            var tmp_width = -width/14
            if(t>o&&t<=o+20&&index!=0) return "translate("+tmp_width+",0)"
            if(t>o&&t<=o+20) return "translate("+tmp_width*2+",0)"
            return "translate(0,0)"})
      })
      // if(index == 0) {
      //   line1.transition()
      //         .style("display","none")
      //         .delay(700)
      //   line2.transition()
      //         .style("display","none")
      //         .delay(700)
      //   circle1.forEach(function(d,i){ 
      //     if(i == 1)
      //     d.transition()
      //         .style("display","none")
      //         .delay(700)
      //   })
      //   circle2.forEach(function(d,i){ 
      //     if(i == 1)
      //     d.transition()
      //         .style("display","none")
      //         .delay(700)
      //   })
      // }
      t = 0
      circle3.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform",function(s,i){
            t = t+1
            if(index==0){
              var s = width/7+30;
              var l = width/14+15;
              if(t>=1 && t<=20) return "translate("+s+",0)"
              if(t>=21 && t<=40) return "translate("+l+",0)"
              else return "translate(0,0)"
            }
            if(t>=1 && t<=20) return "translate("+width/14+",0)"
              else return "translate(0,0)"
        })
      })
      t = 0
      circle4.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform",function(s,i){
            t = t+1
            if(index==0){
              var s = width/7+30;
              var l = width/14+15;
              if(t>=1 && t<=20) return "translate("+s+",0)"
              if(t>=21 && t<=40) return "translate("+l+",0)"
              else return "translate(0,0)"
            }
            if(t>=1 && t<=20) return "translate("+width/14+",0)"
              else return "translate(0,0)"
            })
      })

      if(index == 0){
        $('#campus_life').animate({ top: "-=30px"}, 300)
        $('#button0').toggleClass("main_attributes")
        $('#button0').toggleClass("main_attributes_active")
        var fo =svg.append('foreignObject')
          .attr({
                'x': width*1/14+120,
                'y': "0px",
                'width':"0px",
                'height':height+30
            });
        var div = fo.append('xhtml:div')
                    .attr('class','expand')
                    .attr('id',select_column)
                    .transition()
                      .style('width','190px')
                    .duration(400)
                    .ease("linear") 
        var width_heatmap = 190,
        unitSize = Math.floor(width_heatmap/8),
        colors = ["rgb(226,111,85)", "rgb(204,102,81)","rgb(183,93,78)", "rgb(162,84,75)", "rgb(139,74,69)", "rgb(119,67,67)", "rgb(97,57,61)", "rgb(76,51,68)", "rgb(58,42,65)","rgb(48,39,65)"],
        grays = ["rgb(243,243,244)","rgb(196,196,203)","rgb(151,151,165)","rgb(151,151,165)","rgb(105,106,123)","rgb(84,84,105)",
        "rgb(61,62,91)","rgb(54,55,83)","rgb(44,45,73)","rgb(37,38,60)"],
        colorDomain = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-"];
        grayScale = d3.scale.ordinal().range(grays).domain(colorDomain);
        colorScale = d3.scale.ordinal().range(colors).domain(colorDomain);
        xScale = d3.scale.ordinal().rangeBands([0, width_heatmap-20]);
        yScale = d3.scale.ordinal().rangeBands([10, height-55]);
        radius = unitSize / 2 - 3;

        var svg_heat = svg.select("#select_column0").append("svg")
        .attr("width", 0)
        .attr("class", "svg_heat")
        .attr("height", height+2*radius+60)
        .append("g")
        .attr("transform", "translate(30,130)")

    /// create tooltip
        var tip = d3.tip()
          .attr('class', 'd3-tip')
          .html(function(d) {return d.name + "<br>" + d.attr})
          .style("text-align", "center");
        svg_heat.call(tip);

        // initialize the domains of the scales
        var attrs = ["athletics", "dorms", "student life",
            "campus", "party", "location", "food", "safety"];
        xScale.domain(attrs);
        yScale.domain(d3.set(toDraw.map(function(d) {return d.University; })).values());

        // create strings
        var strings = svg_heat.selectAll(".string")
            .data(toDraw)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", function(d) {return yScale(d.University);})
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("width", width_heatmap+20)
            .attr("height", 1)
            .attr("transform", "translate(-" + (radius+30) + ", 0)")
            .attr("class", "string")
            .style("fill", "white");

        // create circles
        heatcircles = svg_heat.selectAll(".bigcircle")
            .data(grades);

        heatcircles.enter()
            .append("circle")
            .attr("cx", function(d) {return xScale(d.attr)-10; })
            .attr("cy", function(d) {return yScale(d.name); })
            .attr("r", radius)
            .attr("class", "bigcircle")
            .style("fill", function(d) { return grayScale(d.grade);})
            .on("click", function(d) {
                select_university(d.name);
            })
            .on("mouseover", function(d) {
            tip.show(d);
            //curColor = d3.select(this).style("fill");
            d3.select(this)
                .style("fill", function(d) {return colorScale(d.grade);})
                .attr("r", radius * 1.2);
            svg_heat.append("text")
                .attr("x", function() {return xScale(d.attr)-10; })
                .attr("y", function() {return yScale(d.name); })
                .attr("fill", "white")
                .attr("class", "grade")
                .attr("text-anchor", "middle")
                .style("pointer-events", "none")
                .text(d.grade);
        })
            .on("mouseout", function(d) {
                tip.hide();
                if (selected.indexOf(d.name) === -1) {
                    d3.select(this)
                        .style("fill", function(d) {return grayScale(d.grade);})
                        .attr("r", radius);
                    d3.selectAll(".grade").remove()
                }
            });

        // create labels
          var heatxAxis = d3.svg.axis()
              .scale(xScale)
              .orient("top");

          svg_heat.append("g")
              .attr("class", "axis_heat")
              .call(heatxAxis)
              .selectAll('text')
              .style("text-anchor", "start")
              .attr("dx", "-2em")
              .attr("dy", "-2.5em")
              .attr("fill", "white")
              .attr("transform", "rotate(-30)");

          // create tooltip for sub attributes on heatmap
          var heatAttrTip = d3.select("#select_column0")
              .append("div")
              .attr("class", "heatAttrTip")
              .style("position", "absolute")
              .style("z-index", "10")
              .style("visibility", "hidden")
              .style("width", "150px");

          var heatAttrs = d3.selectAll(".axis_heat text");

          heatAttrs.on("mouseover", function () {
              var text = d3.select(this).text();
              if (text === "athletics") {
                  text = "Based on student reviews and statistics for number of national championships, athletic department revenue, strength of conference, and athletic participation rates.";
              } else if (text === "dorms") {
                  text = " Based on housing cost, capacity, student reviews and additional factors.";
              } else if (text === "student life") {
                  text = "Based on student reviews and statistics from the U.S. Department of Education. Top-ranked colleges have a positive, fun, and friendly student culture and a vibrant campus community.";
              } else if (text === "campus") {
                  text = "Based on key statistics and student reviews using data from the U.S. Department of Education. Top-ranked colleges offer outstanding campus resources across classrooms, labs, performance venues, housing, food, and recreational facilities.";
              } else if (text === "party") {
                  text = "Based on access to bars and student reviews on the party scene.";
              } else if (text === "location") {
                  text = "Based on key statistics and student reviews using data from the U.S. Census. Top-ranked areas offer excellent nightlife, dining, recreational opportunities, and cultural attractions.";
              } else if (text === "food") {
                  text = "Based on meal plan cost and student reviews on the food.";
              } else if (text === "safety") {
                  text = "Based on crimes on campus, local area crime rates, and student reviews.";
              }
              heatAttrTip.style("top", "150px").style("left", "200px");
              heatAttrTip.style("visibility", "visible");
              heatAttrTip.text(text);
          })
              .on("mouseout", function () {
                  heatAttrTip.style("visibility", "hidden");
              });

      svg.selectAll('.svg_heat').transition().attr('width','190px').duration(400).ease('linear')

      }




      else if(index == 2){
        $('#button2').toggleClass("main_attributes")
        $('#button2').toggleClass("main_attributes_active")
        $('#academic').animate({ top: "-=30px"}, 300)
        var fo =svg.append('foreignObject')
          .attr({
                'x': width*6/14+120,
                'y': "0px",
                'width':"0px",
                'height':height+30
            });
        var div = fo.append('xhtml:div')
                    .attr('class','expand')
                    .attr('id',select_column)
                    
        
        var width_academic = 200;
        y_academic = {};
        var svg_academic = svg.select("#select_column2").append("svg")
            .attr("class", "svg_academic")
            .attr("width", width_academic)
            .attr("height", height+100)
            .append("g")
            .attr("transform", "translate(-20,130)");
        x_academic= d3.scale.ordinal().rangePoints([0, width_academic], 1);
            
            todraw = []
            toDraw.forEach(function(d){
              var s = {}
              s["University"] = d.University,
              s.Academic = +d.QS_overall,
              s["Academic Reputation"] = +d["academic reputation"],
              s["Citation Per Faculty"] = +d['citation_per_faculty'],
              s["Employer Reputation"] = +d['employer_reputation'],
              s.academic = +d.QS_overall,
              todraw.push(s)
            })
            
            // domain for first two axis
            x_academic.domain(x_dimensions = d3.keys(todraw[0]).filter(function(d) {
              if(d != "University" && d!= "Academic" && d!= "academic"){
                return (y_academic[d] = d3.scale.linear()
                  .domain([20,100])
                  .range([height-100, 60]));
              } else if(d != "University") {
                return (y_academic[d] = d3.scale.linear()
                  .domain([0,100])
                  .range([height-80, 10]));
              }
            }))
            // Add grey background lines for context.
            line1_academic = svg_academic.append("g")
                .attr("class", "background")
                .selectAll("path")
                .data(todraw)
                .enter().append("path")
                .attr("d", path_academic1);

            // Add blue foreground lines for focus.
            line2_academic = svg_academic.append("g")
                .attr("class", "foreground")
                .selectAll("path")
                .data(todraw)
                .enter().append("path")
                .attr("d", path_academic1)
                .attr("stroke", function(d){
                  return z(d["University"])})
            line1_academic.transition().duration(400).ease('linear').attr('d', path_academic)
            line2_academic.transition().duration(400).ease('linear').attr('d', path_academic)
            circle1_academic = [];
            x_dimensions.map(function(s){

              var tmp = svg_academic.append("g")
                .attr("class", "circles")
                .selectAll("circle")
                .data(todraw)
                .enter()
                .append("circle")
                .attr("cx", function(d){
                  return x_academic(s)
                })
                .attr("cy", function(d) {
                    return y_academic[s](d[s]);
                })
                .attr("r", "5px")
                .style("fill", "#ddd")
              circle1_academic.push(tmp)
            })

            circle2_academic = [];
            x_dimensions.map(function(s){

              var tmp = svg_academic.append("g")
                .attr("class", "circles")
                .selectAll("circle")
                .data(todraw)
                .enter()
                .append("circle")
                .attr("cx", function(d){
                  return x_academic(s)
                })
                .attr("cy", function(d) {
                    return y_academic[s](d[s]);
                })
                .attr("r", "5px")
                .style("fill", function(d){
                  return z(d["University"])})
              circle2_academic.push(tmp)
            })
            circle1_academic.forEach(function(e){
                e.style("display", "none")
            })
            circle2_academic.forEach(function(e){
                e.style("display", "none")
            })
            g1_academic = svg_academic.selectAll(".dimension_academic")
              .data(x_dimensions)
              .enter().append("g")
              .attr("class", "dimension_academic")
              .attr("transform", function(d) { 
                return "translate(100)"; })

            g1_academic.append("g")
                .attr("id", "academic")
                .attr("class", "academic_axis")
                .style('fill','white')
                .each(function(d) { d3.select(this).call(axis.scale(y_academic[d]).ticks(3)); })
                .append("text")
                .style("text-anchor", "middle")
                .attr("dx", "0.1em")
                .attr("dy", "1.2em")
                .style('fill','white')
                .attr("transform", function (d) {
                    return "rotate(-40)"})
                .text(function(d,i) {
                    if(i!=0 && i!=4) return d
                  });
            g1_academic.transition().duration(400).ease('linear')
                        .attr('transform',function(d){
                          return "translate(" + x_academic(d) + ")";
                        })
             // g1_academic.append("g")
             //  .attr("class", "brush")
             //  .each(function(d) {
             //    d3.select(this).call(y_academic[d].brush = d3.svg.brush().y_academic(y_academic[d]).on("brushstart", brushstart).on("brush", brush));
             //  })
             //  .selectAll("rect")
             //  .attr("x", -20)
             //  .attr("width", 40);

            
            // svg.selectAll('.svg_academic').transition().attr('width','160px').delay(400).ease('linear')
      } else if(index == 3) {
        $('#button3').toggleClass("main_attributes")
        $('#button3').toggleClass("main_attributes_active")
        $('#students').animate({ top: "-=30px"}, 300)
        var fo =svg.append('foreignObject')
                  .attr({
                      'x': width*8/14+120,
                      'y': 100
                  });
        var div = fo.append('xhtml:div')
                    .attr('class','expand')
                    .attr('id',select_column)
        var div2 = div.append('div')
                      .attr('id','container_student')
        var div3 = div2.append('div')
                    .attr('id','vis_student')

        toDraw.forEach(function(d){
          d.student_population = +d.student_population
        })
        var width_mf = 160;
        var y_mf = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .08);

        var x_mf = d3.scale.linear()
            .range([0, width_mf]);

        var z_mf = d3.scale.linear()
            .range([height,100]);

        y_mf.domain(toDraw.map(function(d) { 
          return d.University; }));
        z_mf.domain([700,45000]);
        //x.domain([d3.min(data,function(d){return d.from;}), d3.max(data,function(d){return d.to;})]);

        
        x_mf.domain([0, 100]);


        var xAxis = d3.svg.axis()
            .scale(x_mf)
            .orient("bottom")
            .ticks(15);

        var yAxis = d3.svg.axis()
            .scale(y_mf)
            .orient("left");
            //.innerTickSize(-width)
            //.outerTickSize(0)
            //.tickPadding(10);

        var line = d3.svg.line()
        .y(function(d) { return scale(z); });

        var svg_mf = svg.select("#vis_student").append("svg")
            .attr("class","svg_mf")
            .attr("width", width_mf)
            .attr("height", height+260)
            .append("g")
            .attr("transform", "translate(0,-58)");

          svg_mf.append("g")
              .attr("class", "x axis_mf")
              .attr("transform", "translate(0," + height + ")")
              // .call(xAxis)
              // .append("text")
              // .attr("x", width_mf-75)
              // .attr("dx", ".71em")
              // .attr("dy", "-.71em")
              // .text("Student Population %");

          // svg_mf.append("g")
          //     .attr("class", "y axis_mf")
          //     .call(yAxis);

          svg_mf.selectAll(".line")
              .data(toDraw)
              .enter().append("line")
              .attr("x1", 0)
              //.attr("y1", 100)
              .attr("y1", function(d) { return z_mf(d.student_population)+y_mf.rangeBand()/6; })
              .attr("x2", width_mf)
              //.attr("y2", 100)
              .attr("y2", function(d) { return z_mf(d.student_population)+y_mf.rangeBand()/6; })
              .attr("stroke-width", 2)
              .attr("stroke", "black");


          // add bar and sat range on the bar
          var bar = svg_mf.selectAll(".g")
                        .data(toDraw)
                        .enter()
                        .append("g")



          bar.append("rect")
          .attr("class", "bar1")
          //.attr("y", function(d) { return y(d.University); })
          .attr("y", function(d) { 
            return z_mf(d.student_population); })
          //.attr("height", y.rangeBand())
          .attr("height", y_mf.rangeBand()/3)
          //.attr("x", function(d) { return x(d.from); })
          .attr("width", function(d) { return x_mf(d.male) });

          bar.append("rect")
          .attr("class", "bar2")
          //.attr("y", function(d) { return y(d.University); })
          .attr("y", function(d) { return z_mf(d.student_population); })
          //.attr("height", y.rangeBand())
          .attr("height", y_mf.rangeBand()/3)
          .attr("x", function(d) { return x_mf(d.male); })
          .attr("width", function(d) { return x_mf(100)-x_mf(d.male) });

          bar.append("text")
              .attr("class", "value")
              //.attr("x",function(d) { return x(d.from); })
              .attr("x",function(d) { return x_mf(0); })
              .attr("y", function(d) { return z_mf(d.student_population)+y_mf.rangeBand()/6; })
              .attr("text-anchor", "begin")
              .attr("dy", "0.5em")
              .attr("dx", "0.5em")
              .style("fill", "white")
              .style("font" ,"8px sans-serif")
              .text(function(d) { return (d.male + "%"); });

          bar.append("text")
              .attr("class", "value")
              .attr("x",function(d) { return x_mf(100); })
              .attr("y", function(d) { return z_mf(d.student_population)+y_mf.rangeBand()/6; })
              .attr("text-anchor", "end")
              .attr("dy", "0.5em")
              .attr("dx", "-0.5em")
              .style("fill", "white")
              .style("font" ,"8px sans-serif")
              .text(function(d) { return (100 - d.male + "%"); },);

            var tooltip = d3.select("body")
            .append('div')
            .attr('class', 'tooltip');

            tooltip.append('div')
            .attr('class', 'university');
            tooltip.append('div')
            .attr('class', 'malefemale');
            tooltip.append('div')
            .attr('class', 'studentpop');

            svg_mf.selectAll(".bar1")
            .on('mouseover', function(d) {

                tooltip.select('.university').html("<b>" + d.University + "</b>");
                tooltip.select('.malefemale').html("<b>Male: " + d.male + "% and Female: " + (100-d.male) + "%</b>" );
                tooltip.select('.studentpop').html("<b>Student size: " + d.student_population + "</b>" );
                tooltip.style('display', 'block');
                tooltip.style('opacity',2);

            })
            .on('mousemove', function(d) {
                tooltip.style('top', (d3.event.layerY + 10) + 'px')
                .style('left', (d3.event.layerX - 25) + 'px');
            })
            .on('mouseout', function() {
                tooltip.style('display', 'none');
                tooltip.style('opacity',0);
            });

            svg_mf.selectAll(".bar2")
            .on('mouseover', function(d) {

                tooltip.select('.university').html("<b>" + d.University + "</b>");
                tooltip.select('.malefemale').html("<b>Male: " + d.male + "% and Female: " + (100-d.male) + "%</b>" );
                tooltip.select('.studentpop').html("<b>Student size: " + d.student_population + "</b>" );
                tooltip.style('display', 'block');
                tooltip.style('opacity',2);

            })
            .on('mousemove', function(d) {
                tooltip.style('top', (d3.event.layerY + 10) + 'px')
                .style('left', (d3.event.layerX - 25) + 'px');
            })
            .on('mouseout', function() {
                tooltip.style('display', 'none');
                tooltip.style('opacity',0);
            });
      
        $('#container_student').animate({left : '-=80px', width : '+=160px'},{duration:400,queue:false},"linear" );
        $('#vis_student').animate({left : '+=80px'},{duration:400,queue:false},"linear" );
      
      } 
      // MH Add here 12/06/17 4:22pm
      else if (index ==4) {

        $('#admissions').animate({ top: "-=30px"}, 300)
        var fo =svg.append('foreignObject')
          .attr({
                'x': width*10/14+120,
                'y': "0px",
                'width':"0px",
                'height':height+30
            });
          //console.log(select_column);
        var div = fo.append('xhtml:div')
                    .attr('class','expand')
                    .attr('id',select_column)

        var div2 = div.append('div')
                      .attr('id','container_admissions')
        var div3 = div2.append('div')
                    .attr('id','vis_admissions')

        var width_sat =160;

          //console.log(index);
              toDraw.forEach(function(d){
              d.Admissions = +d.Admissions;
              d.to =+ d.to;
              d.from =+ d.from;
            })

            //console.log(toDraw);

            var x_sat = d3.scale.linear().range([0,width_sat]);
            var z_sat = d3.scale.linear().range([height,100]);
            var y_sat = d3.scale.ordinal().rangeRoundBands([height, 0], .08);

            // y_sat.domain(toDraw.map(function(d) {return d.University; }));
            // z_sat.domain([d3.min(toDraw,function(p){return p.Admissions})-0.05*d3.mean(toDraw,function(p){return p.Admissions}),d3.max(toDraw,function(p){return p.Admissions})+0.05*d3.mean(toDraw,function(p){return p.Admissions})]);
            y_sat.domain(toDraw.map(function(d) {return d.University; }));
            z_sat.domain([0,80]);
            x_sat.domain([980, 1600]);

            var yAxis = d3.svg.axis()
                .scale(y_sat)
                .orient("left");
                //.innerTickSize(-width)
                //.outerTickSize(0)
                //.tickPadding(10);

            var line = d3.svg.line()
            .y(function(d) { return scale(z); });

            var svg_sat = svg.select("#vis_admissions").append("svg")
                .attr("class","svg_sat")
                .attr("width", width_sat)
                .attr("height", height+260)
                .append("g")
                .attr("transform", "translate(0,44)");

              svg_sat.append("g")
                  .attr("class", "x axis_sat")
                  .attr("transform", "translate(0," + height + ")")
                  //.call(xAxis)
                  // .append("text")
                  // .attr("x", width-75)
                  // .attr("dx", ".71em")
                  // .attr("dy", "-.71em")
                  // .text("SAT Score");

              svg_sat.append("g")
                  .attr("class", "y axis_sat")
                  .call(yAxis);

              svg_sat.selectAll(".line")
                  .data(toDraw)
                  .enter().append("line")
                  .attr("x1", 0)
                  //.attr("y1", 100)
                  .attr("y1", function(d) { return z_sat(d.Admissions)+y_sat.rangeBand()/6; })
                  .attr("x2", width_sat)
                  //.attr("y2", 100)
                  .attr("y2", function(d) { return z_sat(d.Admissions)+y_sat.rangeBand()/6; })
                  .attr("stroke-width", 1)
                  .attr("stroke", "grey");
                 

              // add bar and sat range on the bar
              var bar = svg_sat.selectAll(".rect")
                            .data(toDraw)
                            .enter()
                            .append("rect")


              bar.attr("class", "bar_sat")
              //.attr("y", function(d) { return y(d.university); })
              .attr("y", function(d) { return z_sat(d.Admissions); })
              //.attr("height", y.rangeBand())
              .attr("height", y_sat.rangeBand()/4)
              .attr("x", function(d) { return x_sat(d.from); })
              .attr("width", function(d) { return x_sat(d.to)-x_sat(d.from)})
              .attr("fill", "#ED7457");

              

              bar.append("text")
                  .attr("class", "value")
                  .attr("x",function(d) { return x_sat(d.from); })
                  .attr("y", function(d) { return z_sat(d.Admissions)+y_sat.rangeBand()/6; })
                  .attr("text-anchor", "begin")
                  .attr("dy", "0.5em")
                  .attr("dx", "0.5em")
                  .style("fill", "white")
                  .style("font" ,"5px sans-serif")
                  .text(function(d) { return d.from; });

              bar.append("text")
                  .attr("class", "value")
                  .attr("x",function(d) { return x_sat(d.to); })
                  .attr("y", function(d) { return z_sat(d.Admissions)+y_sat.rangeBand()/6; })
                  .attr("text-anchor", "end")
                  .attr("dy", "0.5em")
                  .attr("dx", "-0.5em")
                  .style("fill", "white")
                  .style("font" ,"5px sans-serif")
                  .text(function(d) { return d.to; });

              var tooltip = d3.select("body")
              .append('div')
              .attr('class', 'tooltip');

              tooltip.append('div')
              .attr('class', 'university');
              tooltip.append('div')
              .attr('class', 'satRange');
              tooltip.append('div')
              .attr('class', 'adRate');

              svg_sat.selectAll(".bar_sat")
              .on('mouseover', function(d) {

                  tooltip.select('.university').html("<b>" + d.University + "</b>");
                  tooltip.select('.satRange').html("<b>SAT Range: " + d.from + " to " + d.to + "</b>" );
                  tooltip.select('.adRate').html("<b>Admissions Rate: " + d.Admissions + "%</b>" );
                  tooltip.style('display', 'block');
                  tooltip.style('opacity',2);

              })
              .on('mousemove', function(d) {
                  tooltip.style('top', (d3.event.layerY + 10) + 'px')
                  .style('left', (d3.event.layerX - 25) + 'px');
              })
              .on('mouseout', function() {
                  tooltip.style('display', 'none');
                  tooltip.style('opacity',0);
              });

              //svg.selectAll('.svg_sat').transition().attr('width','248px').duration(800)
              $('#container_admissions').animate({left : '-=80px', width : '+=160px'},{duration:400,queue:false},"linear" );
              $('#vis_admissions').animate({left : '+=80px'},{duration:400,queue:false},"linear" );

      }
      else if (index == 5) {
        $('#button5').toggleClass("main_attributes")
        $('#button5').toggleClass("main_attributes_active")
        $('.controlgroup').animate({ right: "-=60px"}, 400)
        // $('.gradient_color').animate({width: "+=80px"},400)
        $('#gradient_color').toggleClass("gradient_color_longer")
        $('#employment').animate({ top: "-=30px"}, 300)
        var fo =svg.append('foreignObject')
          .attr({
                'x': width*12/14+120,
                'y': "0px",
                'width':"0px",
                'height':height+30
            });
        var div = fo.append('xhtml:div')
                    .attr('class','expand')
                    .attr('id',select_column)

        var width_employment = 160;
        y_employment = {};
        var svg_employment = svg.select("#select_column5").append("svg")
            .attr("class", "svg_employment")
            .attr("width", width_employment)
            .attr("height", height+100)
            .append("g")
            .attr("transform", "translate(-26.67,130)");
        x_employment= d3.scale.ordinal().rangePoints([0, width_employment+53.33], 1);
            
            todraw = []
            toDraw.forEach(function(d){
              var s = {}
              s["University"] = d.University,
              s.employment = +d.employment,
              s["Two Years Earning"] = +d.earning_two_years,
              s["Six Years Earning"] = +d.earning_six_years,
              s.Employment = +d.employment,
              todraw.push(s)
            })
            
            // domain for first two axis
            x_employment.domain(employment_dimensions = d3.keys(todraw[0]).filter(function(d) {
              if(d != "University" && d!= "employment" && d!= "Employment"){
                return (y_employment[d] = d3.scale.linear()
                  .domain([20000,90000])
                  .range([height-100, 60]));}
              else if(d != "University"){
                return (y_employment[d] = d3.scale.linear()
                  .domain([70,100])
                  .range([height-80,10]));
              }
            }))
            // Add grey background lines for context.
            line1_employment = svg_employment.append("g")
                .attr("class", "background")
                .selectAll("path")
                .data(todraw)
                .enter().append("path")
                .attr("d", path_employment1);

            // Add blue foreground lines for focus.
            line2_employment = svg_employment.append("g")
                .attr("class", "foreground")
                .selectAll("path")
                .data(todraw)
                .enter().append("path")
                .attr("d", path_employment1)
                .attr("stroke", function(d){
                  return z(d["University"])})

            line1_employment.transition().duration(400).ease('linear').attr('d', path_employment)
            line2_employment.transition().duration(400).ease('linear').attr('d', path_employment)

            circle1_employment = [];
            employment_dimensions.map(function(s){

              var tmp = svg_employment.append("g")
                .attr("class", "circles")
                .selectAll("circle")
                .data(todraw)
                .enter()
                .append("circle")
                .attr("cx", function(d){
                  return x_employment(s)
                })
                .attr("cy", function(d) {
                    return y_employment[s](d[s]);
                })
                .attr("r", "5px")
                .style("fill", "#ddd")
              circle1_employment.push(tmp)
            })

            circle2_employment = [];
            employment_dimensions.map(function(s){

              var tmp = svg_employment.append("g")
                .attr("class", "circles")
                .selectAll("circle")
                .data(todraw)
                .enter()
                .append("circle")
                .attr("cx", function(d){
                  return x_employment(s)
                })
                .attr("cy", function(d) {
                    return y_employment[s](d[s]);
                })
                .attr("r", "5px")
                .style("fill", function(d){
                  return z(d["University"])})
              circle2_employment.push(tmp)
            })
            circle1_employment.forEach(function(e){
                e.style("display", "none")
            })
            circle2_employment.forEach(function(e){
                e.style("display", "none")
            })
            circle1_employment.forEach(function(e){
                e.style("display", "none")
            })
            circle2_employment.forEach(function(e){
                e.style("display", "none")
            })
            g1_employment = svg_employment.selectAll(".dimension_employment")
              .data(employment_dimensions)
              .enter().append("g")
              .attr("class", "dimension_employment")
              .attr("transform", function(d) { return "translate(106.67)"; })

            g1_employment.append("g")
                .attr("id", "employment")
                .attr("class", "employment_axis")
                .style('fill','white')
                .each(function(d) { d3.select(this).call(axis.scale(y_employment[d]).ticks(5)); })
                .append("text")
                .style("text-anchor", "start")
                .attr("dx", "-5.0em")
                .attr("dy", "1.5em")
                .style('fill','white')
                .attr("transform", function (d) {
                    return "rotate(-30)"})
                .text(function(d,i) {
                    if(i!=0 && i!= 3) return d
                  });

             // g1_employment.append("g")
             //  .attr("class", "brush")
             //  .each(function(d) {
             //    d3.select(this).call(y_employment[d].brush = d3.svg.brush().y_employment(y_employment[d]).on("brushstart", brushstart).on("brush", brush));
             //  })
             //  .selectAll("rect")
             //  .attr("x", -20)
             //  .attr("width", 40);
             g1_employment.transition().duration(400).ease('linear')
                        .attr('transform',function(d){
                          return "translate(" + x_employment(d) + ")";
                        })
            
            
      } else if(index == 1) {
        $('#button1').toggleClass("main_attributes")
        $('#button1').toggleClass("main_attributes_active")
        $('#cost').animate({ top: "-=30px"}, 300)
        var fo =svg.append('foreignObject')
          .attr({
                'x': width*4/14+120,
                'y': "0px",
                'width':"0px",
                'height':height+30
            });
        var div = fo.append('xhtml:div')
                    .attr('class','expand')
                    .attr('id',select_column)

        var width_cost = 160;
        y_cost = {};
        var svg_cost = svg.select("#select_column1").append("svg")
            .attr("class", "svg_cost")
            .attr("width", width_cost)
            .attr("height", height+100)
            .append("g")
            .attr("transform", "translate(-26.67,130)");
        x_cost= d3.scale.ordinal().rangePoints([0, width_cost+53.33], 1);
            
            todraw = []
            toDraw.forEach(function(d){
              var s = {}
              s["University"] = d.University,
              s.cost = +d.Cost,
              s["In State"] = +d.in_state_tuition,
              s["Out State"] = +d.out_state_tuition,
              s.Cost = +d.Cost,
              todraw.push(s)
            })
            
            // domain for first two axis
            x_cost.domain(cost_dimensions = d3.keys(todraw[0]).filter(function(d) {
              if(d != "University" && d!= "cost" && d!= "Cost"){
                return (y_cost[d] = d3.scale.linear()
                  .domain([5000,56000])
                  .range([height-100, 60]));}
              else if(d != "University"){
                return (y_cost[d] = d3.scale.linear()
                  .domain([9000,42000])
                  .range([height-80, 10]));
              }
            }))
            // Add grey background lines for context.
            line1_cost = svg_cost.append("g")
                .attr("class", "background")
                .selectAll("path")
                .data(todraw)
                .enter().append("path")
                .attr("d", path_cost1);

            // Add blue foreground lines for focus.
            line2_cost = svg_cost.append("g")
                .attr("class", "foreground")
                .selectAll("path")
                .data(todraw)
                .enter().append("path")
                .attr("d", path_cost1)
                .attr("stroke", function(d){
                  return z(d["University"])})

            line1_cost.transition().duration(400).ease('linear').attr('d', path_cost)
            line2_cost.transition().duration(400).ease('linear').attr('d', path_cost)

            circle1_cost = [];
            cost_dimensions.map(function(s){

              var tmp = svg_cost.append("g")
                .attr("class", "circles")
                .selectAll("circle")
                .data(todraw)
                .enter()
                .append("circle")
                .attr("cx", function(d){
                  return x_cost(s)
                })
                .attr("cy", function(d) {
                    return y_cost[s](d[s]);
                })
                .attr("r", "5px")
                .style("fill", "#ddd")
              circle1_cost.push(tmp)
            })

            circle2_cost = [];
            cost_dimensions.map(function(s){

              var tmp = svg_cost.append("g")
                .attr("class", "circles")
                .selectAll("circle")
                .data(todraw)
                .enter()
                .append("circle")
                .attr("cx", function(d){
                  return x_cost(s)
                })
                .attr("cy", function(d) {
                    return y_cost[s](d[s]);
                })
                .attr("r", "5px")
                .style("fill", function(d){
                  return z(d["University"])})
              circle2_cost.push(tmp)
            })
            circle1_cost.forEach(function(e){
                e.style("display", "none")
            })
            circle2_cost.forEach(function(e){
                e.style("display", "none")
            })
            circle1_cost.forEach(function(e){
                e.style("display", "none")
            })
            circle2_cost.forEach(function(e){
                e.style("display", "none")
            })
            g1_cost = svg_cost.selectAll(".dimension_cost")
              .data(cost_dimensions)
              .enter().append("g")
              .attr("class", "dimension_cost")
              .attr("transform", function(d) { return "translate(106.67)"; })

            g1_cost.append("g")
                .attr("id", "cost")
                .attr("class", "cost_axis")
                .style('fill','white')
                .each(function(d) { d3.select(this).call(axis.scale(y_cost[d]).ticks(5)); })
                .append("text")
                .style("text-anchor", "middle")
                .attr("dx", "0.1em")
                .attr("dy", "2.5em")
                .style('fill','white')
                .attr("transform", function (d) {
                    return "rotate(-30)"})
                .text(function(d,i) {
                    if(i!=0 && i!= 3) return d
                  });

             // g1_cost.append("g")
             //  .attr("class", "brush")
             //  .each(function(d) {
             //    d3.select(this).call(y_cost[d].brush = d3.svg.brush().y_cost(y_cost[d]).on("brushstart", brushstart).on("brush", brush));
             //  })
             //  .selectAll("rect")
             //  .attr("x", -20)
             //  .attr("width", 40);
             g1_cost.transition().duration(400).ease('linear')
                        .attr('transform',function(d){
                          return "translate(" + x_cost(d) + ")";
                        })
      }
      var count_text = 0
      svg.selectAll('text').attr('y',function(d){
        count_text++;
        if(count_text>20) return 8;
      })
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
        line2_cost.style("display",function(s,index){
          return selected.every(function(p,i){
            return s["University"] != p;
          })? "none" : null;
        });
    }
         
    }

 


 }




 function prevPage(){

    if(current_page == 1) return;
    from = current_page * 20 + 1;
     to = current_page * 20 + 20;
     document.getElementById("from").innerHTML = from.toString();
     document.getElementById("to").innerHTML = to.toString();
    current_page--;
    var index = (current_page-1)*20;
    var toDraw = university.filter(function(d){return d});
    toDraw = toDraw.splice(index,20)
    draw(toDraw,0);
 }

 function nextPage(){
    
    var index = current_page*20;
    var toDraw = university.filter(function(d){return d});
    toDraw = toDraw.splice(index,20)
    if(toDraw.length == 0) return;
    from = current_page * 20 + 1;
     to = current_page * 20 + 20;
     document.getElementById("from").innerHTML = from.toString();
     document.getElementById("to").innerHTML = to.toString();
    current_page++;
    draw(toDraw,0);
 }

 function remove(){
    svg.selectAll(".expand").remove();
 }
 
 function select_university(d){
  // clear all the brushes when selecting university
  svg.selectAll(".brush").each(function(d){
    d3.select(this).call(y[d].brush.clear(),null)
  })

  var uNames = d3.selectAll("#u_name>.tick");


  if(selected.includes(d)) {
    // d3.select(this).style("fill", "white");
    var index = selected.indexOf(d);
    selected.splice(index,1);


    var e = document.getElementById("select_column0")
    if(e!=null){
      heatcircles.style('fill', function (e) {
            return selected.every(function (p) {
                return e.name !== p;
            }) ? grayScale(e.grade) : colorScale(e.grade);
        })
          .attr('r', function (e) {
            return selected.every(function (p) {
                return e.name !== p;
            }) ? radius : radius * 1.2;
        });

      // heatcircles.forEach(function(e) {
      //     if (d3.select(e).data().name === d) {
      //         svg_heat.append("text")
      //             .attr("x", function() {return xScale(d3.select(e).data().attr)-10; })
      //             .attr("y", function() {return yScale(d3.select(e).data().name); })
      //             .attr("fill", "white")
      //             .attr("class", "grade")
      //             .attr("text-anchor", "middle")
      //             .style("pointer-events", "none")
      //             .text("");
      //     }
      // });
      uNames.forEach(function (e) {
            e.forEach(function (f) {
                if (f.textContent === d) {
                    d3.select(f).style("fill", "white");
                }
            })
        });

    }
    

    circle2.forEach(function(e){
        e.style("display", function(s,index){
          if(selected.length == 0) return "none";
          return selected.every(function(p,i){
            return s["University"] != p;
          })? "none" : null;
        })
    })
    circle4.forEach(function(e){
        e.style("display", function(s,index){
          if(selected.length == 0) return "none";
          return selected.every(function(p,i){
            return universities[index]["University"] != p;
          })? "none" : null;
        })
    })
    line1.style("display",function(s,index){
      if(selected.length == 0) return "none";
      return selected.every(function(p,i){
        return s["University"] != p;
      })? null : "none";
    });
    line2.style("display",function(s,index){
      if(selected.length == 0) return null;
      return selected.every(function(p,i){
        return s["University"] != p;
      })? "none" : null;
    });
    line3.style("display",function(s,index){
      if(selected.length == 0) return "none";
      return selected.every(function(p,i){
        return universities[index]["University"] != p;
      })? null : "none";
    });
    line4.style("display",function(s,index){
      if(selected.length == 0) return null;
      return selected.every(function(p,i){
        return universities[index]["University"] != p;
      })? "none" : null;
    });


  } else{
    selected.push(d);
    // d3.select(this).style("fill", function(d){return z(d)});

    var e = document.getElementById("select_column0")
    if(e!=null){
      uNames.forEach(function (e) {
            e.forEach(function (f) {
                if (f.textContent === d) {
                    d3.select(f).style("fill", "#FE938C");
                }
            })
        });
        heatcircles.style('fill', function (e) {
            return selected.every(function (p) {
                return e.name !== p;
            }) ? grayScale(e.grade) : colorScale(e.grade);
        })
            .attr('r', function (e) {
                return selected.every(function (p) {
                    return e.name !== p;
                }) ? radius : radius * 1.2;
            });
        // heatcircles.forEach(function(e) {
        //     e.forEach(function(p){
        //         console.log(d3.select(p).data().name);
        //         if (d3.select(p).data().name === d) {
        //             svg_heat.append("text")
        //                 .attr("x", function() {return xScale(d3.select(p).data().attr)-10; })
        //                 .attr("y", function() {return yScale(d3.select(p).data().name); }).attr("x", function() {return xScale(e.attr)-10; })
        //                 .attr("y", function() {return yScale(e.name); })
        //                 .attr("fill", "white")
        //                 .attr("class", "grade")
        //                 .attr("text-anchor", "middle")
        //                 .style("pointer-events", "none")
        //                 .text(d3.select(p).data().grade);
        //         }
        //     });
        // });

    }

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
        return universities[index]["University"] != p;
      })? null : "none";
    });
    line4.style("display",function(s,index){
      return selected.every(function(p,i){
        return universities[index]["University"] != p;
      })? "none" : null;
    });

  }

}

 
function resume(index,select_column){

      var tmp = (current_page-1)*20;
      var toDraw = university.filter(function(d){return d});
      toDraw = toDraw.splice(tmp,20)
      draw(toDraw,index)

      // var right = "#right"+index+" .splat"
      // var left = "#left"+index
      // $(right).animate({width:"0"},800);
      // $(left).animate({width:"0"},800);

      g1.transition()
          .duration(400)
          .ease("linear")
          .attr("transform", function(d){
          
            if(d == q_dimensions[0]){
              if(index == 0) {
                var s = p(d) - width/7
                return "translate("+s+")"
              }
              var s = p(d) - width/14
              return "translate("+s+")"
            }
            var s = p(d)
            return "translate("+s+")"
          })

      g2.transition()
          .duration(400)
          .ease("linear")
          .attr("transform", function(d,i){
            var s = q(d)+width/14;
            if(i == 0) return "translate("+s+")"
            return "translate("+q(d)+")"})

      line1.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress1)
          .attr("transform", "translate(0,0)")

      line2.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress1)
          .attr("transform","translate(0,0)")
      
      line3.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress)
          .attr("transform","translate(0,0)")
            
      line4.transition()
          .duration(400)
          .ease("linear")
          .attr("d", path_compress)
          .attr("transform","translate(0,0)")
      
      var t = 0;
      circle1.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .ease("linear")
          .attr("transform",function(s,i){
            t = t+1
            o = (index+1)*20
            var tmp_width = -width/14
            if(t>o&&t<=o+20&&index!=0) return "translate("+tmp_width+",0)"
            if(t>o&&t<=o+20) return "translate("+tmp_width*2+",0)"
            return "translate(0,0)"})
      })
      t = 0
      circle2.forEach(function(d){
        d.transition()
          .duration(400)
          .ease("linear")
          .attr("transform",function(s,i){
            t = t+1
            o = (index+1)*20
            var tmp_width = -width/14
            if(t>o&&t<=o+20&&index!=0) return "translate("+tmp_width+",0)"
            if(t>o&&t<=o+20) return "translate("+tmp_width*2+",0)"
            return "translate(0,0)"})
      })
      // if(index == 0) {
      //   line1.transition()
      //         .style("display","none")
      //         .delay(700)
      //   line2.transition()
      //         .style("display","none")
      //         .delay(700)
      //   circle1.forEach(function(d,i){ 
      //     if(i == 1)
      //     d.transition()
      //         .style("display","none")
      //         .delay(700)
      //   })
      //   circle2.forEach(function(d,i){ 
      //     if(i == 1)
      //     d.transition()
      //         .style("display","none")
      //         .delay(700)
      //   })
      // }
      // t = 0
      // circle3.forEach(function(d){
      //   d.transition()
      //     .duration(400)
      //     .ease("linear")
      //     .attr("transform",function(s,i){
      //       t = t+1
      //       if(t>=1 && t<=20) return "translate("+width/14+",0)"
      //         else return "translate(0,0)"
      //   })
      // })
      // t = 0
      // circle4.forEach(function(d){
      //   d.transition()
      //     .duration(400)
      //     .ease("linear")
      //     .attr("transform",function(s,i){
      //       t = t+1
      //       if(t>=1 && t<=20) return "translate("+width/14+",0)"
      //         else return "translate(0,0)"
      //       })
      // })

     
       // var fo =svg.append('foreignObject')
       //    .attr({
       //          'x': width/7,
       //          'y': "0px",
       //          'width':"0px",
       //          'height':height+30
       //      });
       //  var div = fo.append('xhtml:div')
       //              .attr('class','expand')
       //              .attr('id',select_column)
       //              .transition()
       //                .style('width','248px')
       //              .duration(700)
       //              .ease("linear")

}
