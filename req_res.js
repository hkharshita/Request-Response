const http =require('http');

const server=http.createServer((req,res)=>{

    

//     console.log(req.url);

//    console.log(req.method);

//   console.log(req.header);



  res.setHeader('Content-Type','text/html');

  res.write('<html>');

  res.write('<head>');

  res.write('<title>my page of node js</title>');

  res.write('</head>');

  res.write('<body>');

  res.write('<h1>Welcome to my Node Js project</h1>');

  if(req.url==='/home')

    res.write('<h3>Welcome Home</h3>');

  else if(req.url==='/about')

    res.write('<h3>Welcome to About JS page</h3>');

else if(req.url==='/node')

    res.write('<h3>Welcome to my Node Js project</h3>');







  

  res.write('</body>');

  res.write('</html>');  

res.end();



 

});

server.listen(4000);