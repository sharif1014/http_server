const http = require('http');
const server =http.createServer();
server.listen(4000,(req,res)=>{
console.log("Server is running on port 4000");
})
