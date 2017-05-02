var express = require('express');//to create the web server
var morgan = require('morgan');// to output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
'article-one' : {
    title : 'Article one | Div',
    Heading : 'Article One',
    date : 'Sept 5 2016',
    content : ` 
    <p>
            This is the contect of my first article. How is it? This is the contect of my first article. How is it? This is the contect of my first article. How is it?. This is the contect of my first article. How is it?. This is the contect of my first article. How is it?This is the contect of my first article. How is it?
    </p>
    <p>
            This is the contect of my first article. How is it? This is the contect of my first article. How is it? This is the contect of my first article. How is it?. This is the contect of my first article. How is it?. This is the contect of my first article. How is it?This is the contect of my first article. How is it?
    </p>
    `,
    comment_section : `<input type="text" id="com1" placeholder="Type your comments here"></input>
                       <input type="submit" id="sub1" value="Submit"></input>
                       <ul id="art1comments">
                       </ul>
                       `
    
},
'article-two' : {
    title : 'Article Two | Div',
    Heading : 'Article Two',
    date : 'Nov 23 2016',
    content : ` 
    <p>
            This is the contect of my first article. How is it? This is the contect of my first article. How is it? This is the contect of my first article. How is it?. This is the contect of my first article. How is it?. This is the contect of my first article. How is it?This is the contect of my first article. How is it?
        </p>
        <p>
            This is the contect of my first article. How is it? This is the contect of my first article. How is it? This is the contect of my first article. How is it?. This is the contect of my first article. How is it?. This is the contect of my first article. How is it?This is the contect of my first article. How is it?
        </p>
    `,
    comment_section : `<input type="text" id="com2" placeholder="Type your comments here"></input>
                       <input type="submit" id="sub2" value="Submit"></input>
                       <ul id="art2comments">
                       </ul>`
}};
function createTemplate (data){
var title=data.title;
var Heading=data.Heading;
var date=data.date;
var content=data.content;
var comment_section=data.comment_section;
var htmltemplate = 
   `<html>
<head>
    <title>
        ${title}
    </title>
    <meta name= "viewport" content="width=device-width,initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
        <a href ='/'>Home</a>
    </div>
    <hr/>
    <h3>
        ${Heading}
    </h3>
    <div>
        ${date}
    </div>
    <div>
       ${content}
    </div>
    <hr/>
    <h5>Comment below!</h5>
    </div>
    ${comment_section}
</body>
</html>`
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var names=[];
app.get('/submit-name',function(req,res){//URL /submit-name?name=xxx
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});
var comments1=[];
app.get('/artOne-comment1',function(req,res){//URL /submit-name?name=xxx
   var comment1=req.query.comment1;
   comments1.push(comment1);
   res.send(JSON.stringify(comments1));
});
var comments2=[];
app.get('/artTwo-comment2',function(req,res){//URL /submit-name?name=xxx
   var comment2=req.query.comment2;
   comments2.push(comment2);
   res.send(JSON.stringify(comments2));
});
var counter =0;
app.get('/counter', function (req, res) {
  counter = counter +1;
  res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
    //articlename = article-one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
