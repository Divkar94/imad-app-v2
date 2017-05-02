// Counter part
var button=document.getElementById('counter');
button.onclick = function(){
    var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status ===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    request.open('GET','http://divkar94.imad.hasura-app.io/counter',true);
    request.send(null);
}
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
var nameInput = document.getElementById('Name');
var Name =nameInput.value;
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
  if(request.readyState===XMLHttpRequest.DONE){
      if(request.status===200){
      var names= request.responseText;
      names=JSON.parse(names);
      var list='';
  for (var i=0;i<names.length;i++)
  {
      list+='<li>'+names[i]+'</li>';
  }
  var ul= document.getElementById('namelist');
  ul.innerHTML=list;
      }
   }
  }
  request.open('GET','http://divkar94.imad.hasura-app.io/submit-name?name='+ Name,true);
  request.send(null);
  };
  

  var subOne=document.getElementById('subOne');
subOne.onclick=function(){
    alert('Im in');
var com1input = document.getElementById('com1');
var comment1=com1input.value;
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
  if(request.readyState===XMLHttpRequest.DONE){
      if(request.status===200){
      var comments1= request.responseText;
      comments1=JSON.parse(comments1);
      var list='';
  for (var i=0;i<comments1.length;i++)
  {
      list+='<li>'+comments1[i]+'</li>';
  }
  var ul= document.getElementById('art1comments');
  ul.innerHTML=list;
      }
   }
  }
  request.open('GET','http://divkar94.imad.hasura-app.io/artOne-comment1?comment1='+ comment1,true);
  request.send(null);
  };