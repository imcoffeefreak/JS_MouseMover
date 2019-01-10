
// .ONMOUSEMOVE  is a attribute method of javascript that initiates the function animateCircle
document.onmousemove = coffeeLove; 
      var colors = ['#ccc','#6cf','#eba13a']; 
      function coffeeLove (event) {

        //So this part dynamically creates the circle  
        var circle = document.createElement("div"); 
        circle.setAttribute("class", "circle"); 
        document.body.appendChild(circle); 

        // Assigns the position to where cursor goes if this is not assigned the object will not move with cursor
        circle.style.left = event.clientX + 'px'; 
        circle.style.top = event.clientY + 'px'; 

        // this property is optional if needed with any color combinations
        var color = colors[Math.floor(Math.random()* colors.length)];  
        // this assigns the border color 
        circle.style.borderColor = color;   

        // this helps the cursor moving function and where ever the cursor goes the circle is created 
        circle.style.left = circle.offsetLeft - 20 + 'px'; 
        circle.style.top = circle.offsetTop - 20 + 'px'; 

        // once the cursor stops how the object would look like (optional)
        circle.style.width="100px";
        circle.style.height="100px";
        circle.style.borderWidth="30px";
        // opacity is used to make the thing goes faded once its done
        circle.style.opacity = 0;
      }