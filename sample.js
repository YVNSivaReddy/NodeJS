// var http = require('http');
// var fs = require('fs')
// http.createServer((req,res)=>{
//   res.write(req.url)
//   res.end()
//   console.log('server running')
// }).listen(4000)

// http.createServer((req,res)=>{
//   fs.writeFile('test.txt',' overriding file',(err,data)=>{
//      res.write(data)
//      res.end()
//   })
//   console.log('server running')
// }).listen(4000)

// http.createServer((req,res)=>{
//   fs.unlink('test.txt',(err)=>{
//      if(err) throw err
//      console.log('deleted suceessfully')
//   })
//   console.log('server running')
// }).listen(4000)

const greetings = (name)=>{
      console.log(`Hello ${name}`)
}
greetings('Rahul')