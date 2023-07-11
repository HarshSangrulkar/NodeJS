const { Console } = require('console')
const fs = require('fs')
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end('<h1>My name is Harsh Sangrulkar</h1> <p>Learning Node js is fun</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About</h1> <p>Learning Node js is fun</p>');
    }
    
    else{
        res.statusCode = 404;
        res.end('<h1>Not Foud</h1> <p>Page not found on server, hehe</p>');


    }
    

})


server.listen(port,()=>{
    console.log(`Server is listning on port ${port}`)
});