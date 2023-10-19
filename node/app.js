const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
 console.log(req.url,req.method)
 res.setHeader('Content-Type','text/html')
 res.write("hello prasan")
 res.write('<h1>hiiii</h1>')
 res.end()

fs.readFile('./register/src/components/regiester/index.html',(err,data )=>{
  if(err){
    console.log(err)
    res.end()
  }else{
    res.write(data)
    res.end()
  }
})

})
server.listen(3000,'localhost',()=>{
  console.log(
    "servering running..."
  )
})


// const {people,age} = require('./routes')
// // console.log("runing");
// //  console.log([people,age]);
// const os = require('os')
// console.log(os.homedir(),os.platform())