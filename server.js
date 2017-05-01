var express = require('express');//to create the web server
var morgan = require('morgan');// to output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
articleOne : {
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
    `
},
articleTwo : {
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
    `
}};
function createTemplate (data){
var title=data.title;
var Heading=data.Heading;
var date=data.date;
var content=data.content;
var htmltemplate = 
   ` <html>
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
    </div>
</body>
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-3',function(req,res) { res.send('Article 3 will be served here')});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
