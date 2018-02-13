$(function(){
    let divs = [];
    $(document).mousemove(function(e) {
        let marginLeft = e.pageX;
        let marginTop = e.pageY;

        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);

        if(divs.length >= 10){
               document.body.removeChild(divs[0]);
               divs.shift();           
               let div =  document.createElement('div');
               div.classList.add("dynamicDiv");
               div.style.left = marginLeft + "px";
               div.style.top = marginTop+ "px";
               div.style.background = 'rgb('+ red + ',' + green + ',' + blue + ')';
               document.body.appendChild(div);
               divs.push(div);
        }
        else if(divs.length < 10){         
               let div =  document.createElement('div');
               div.classList.add("dynamicDiv");
               div.style.left = marginLeft + "px";
               div.style.top = marginTop+ "px";
               div.style.background = 'rgb('+ red + ',' + green + ',' + blue + ')';
               document.body.appendChild(div);
               divs.push(div);   
        }
    });
})