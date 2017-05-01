// Counter part
var button=document.getElementById('counter');
var c=0;
button.onclick = function(){
    c=c+1;
    var count = document.getElementById('count');
    count.innerHTML=c.toString();
}