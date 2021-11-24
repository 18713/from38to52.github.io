 function alex(){

    alert("hello world")
}
// question =2


function cover1(){
alert("Samsung S5")
}
function cover2(){
    alert("vivo S5")
}
function cover3(){
    alert("Samsung ipro")
}
function cover4(){
    alert("Samsung a3")
}

// question =3
function delet(){
    document.getElementById("name1").innerHTML=""
  
}
function delet1(){
    
    document.getElementById("name2").innerHTML=""
}
function delet2(){
    document.getElementById("name3").innerHTML=""
    
    
}
function delet3(){
      document.getElementById("name4").innerHTML=""
}


// question =5
var clicks = 0;
function incr(){
    
    clicks += 1;
   var a = document.getElementById("lol").innerHTML = clicks;

}
var clicker = 
function decr(){
    clicker -= 
    document.getElementById("lol").innerHTML = clicker;
}
//chap 49 -52
// question 1
function submit(){
    var a = document.getElementById("more")
    var b = document.getElementById("need")
    document.write("name  = " +" "+a.value +"<br>" +"password  = " +" "+ b.value)
}

//question 2\
function read(){
    var hmm = document.getElementById("readme")
hmm.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque placeat dolores eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque placeat dolores eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque placeat dolores eaque.<a href =''>hide<a/>"
}
// question 3
function delet(){
    document.getElementById("td1").innerHTML=""
}

function delet1(){
    document.getElementById("td2").innerHTML=""
}
function delet2(){
    document.getElementById("td3").innerHTML=""
}
function delet3(){
    document.getElementById("td4").innerHTML=""

}
function edit(){
var user =prompt("enter name")
var user1 =prompt("enter class")
var user2 =prompt("enter position")

    document.getElementById("name").innerHTML=user
    document.getElementById("good").innerHTML=user1
    document.getElementById("position").innerHTML=user2
    
}
function edit1(){
    var user =prompt("enter name")
    var user1 =prompt("enter class")
    var user2 =prompt("enter position")
    
        document.getElementById("name1").innerHTML=user
        document.getElementById("well").innerHTML=user1
        document.getElementById("about").innerHTML=user2
        
    }
    function edit2(){
        var user =prompt("enter name")
        var user1 =prompt("enter class")
        var user2 =prompt("enter position")
        
            document.getElementById("name2").innerHTML=user
            document.getElementById("well1").innerHTML=user1
            document.getElementById("lol1").innerHTML=user2
            
        }
