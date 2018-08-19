const co = require('co')
const fetch = require('node-fetch')
// const fs = require('fs')
import 'fs'

// co(function *(){
//   const res = yield fetch('https://api.douban.com/v2/movie/1291843')
//   const movie = yield res.json();
//   // console.log(movie);
// })

const util = require('util')


// const readFile = util.promisify(fs.readFile)
// co(function *(){
//   let data = yield util.promisify(fs.readFile)('./package.json')
//   data = JSON.parse(data);
//   console.log(data) 
// })

// async function init(params) {
//   let data = await util.promisify(fs.readFile)('./package.json')
//   console.log(JSON.parse(data))
// } 

// init();

fs.readFile('./package.json','utf-8',(err,res)=>{
  console.log(res)
})