
var m=0;

    function q1(){
        
     var a=document.getElementsByClassName("check1");
     if(a[0].checked){
         m=1;

     }
     

    }
    function q2(){
        var b=document.getElementsByClassName("check2");
        if(b[0].checked){
            m++;
        }
    }
    function q3(){
        var c=document.getElementsByClassName("check3");
        if(c[0].checked){
            m++;
        }
    }

    // function q2(){
    //     var b=document.createElement('div');
    //     b.className="check1";
    //     b.innerHTML="Q2:CSS stands For: \n\n\t "
    //    document.getElementById("btn").nextSibling(b);

    // }
 
//  $("#btn").click(function(){
// $("#Q2").insertAfter("#Q1")
//  });  

    
    function q4(){
        var d=document.getElementsByClassName("check4");
        if(d[2].checked){
            m++;
        }
    }
    function q5(){
        var e=document.getElementsByClassName("check5");
        if(e[2].checked){
            m++;
        }
    }
    function q6(){
        var f=document.getElementsByClassName("check6");
        if(f[1].checked){
            m++;
        }
    }
    function q7(){
        var g=document.getElementsByClassName("check7");
        if(g[1].checked){
            m++;
        }
    }
    function q8(){
        var h=document.getElementsByClassName("check8");
        if(h[0].checked){
            m++;
        }
    }
    function q9(){
        var i=document.getElementsByClassName("check9");
        if(i[0].checked){
            m++;
        }
    }
    function q10(){
        var j=document.getElementsByClassName("check10");
        if(j[0].checked){
            ++m;
        }
    }
    var modal=document.getElementById("myModal");
    var btn=document.getElementById("btn1");
    var span=document.getElementsByClassName("close")[0];

    function myfunction(){
       if(m==10){
                document.getElementById("result").innerHTML="Congratulations! You got :"+m+"/10";

       }
      else if(m<=5 && m>0){
          document.getElementById("result").innerHTML="Too Bad,You got just "+m+"/10";
       }
       else if(m>=6 ){
           document.getElementById("result").innerHTML="Congratulations! you got "+m+"/10";
       }
       else if(m==0){
           document.getElementById("result").innerHTML="Try Again :(";
       }
        
modal.style.display="block";
    }
   
span.onclick=function(){
    modal.style.display="none";
    document.getElementById("Container1").reset();
}
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
        document.getElementById("Container1").reset();

    }
    
}
function resetfun(){
    location.reload();
}
// function clocktimer(){
//     c=c-1;
//     if(c<20){
//         timer.innerHTML=c;

//     }
//     if(c<1){
//         window.clearInterval(update);


//     }
// }
// update=setInterval("clocktimer()",1000);
