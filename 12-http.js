const http = require('http')

const server = http.createServer((req, res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Our short history')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you aremlooking for</p>
        <a href="/">Back Home</a>
        `)
    }
    
})

server.listen(5000)