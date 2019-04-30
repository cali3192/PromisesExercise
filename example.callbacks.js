const fs = require("fs");


function pluckFirstLineFromFile(filePath){
  return new Promise((resolve, reject)=>{
    fs.readFile(filePath, "utf8", (err, data)=>{
      if(err){
        reject(console.log(err))
      } else {
        // resolve(data.split("\n")[1]);
        resolve(data.split('\n').slice(0, 2))
        // resolve(data)
      }
    })
  })
}

pluckFirstLineFromFile("text.txt")
.then((data)=>{
  console.log('SUCESS!', data);
})
.catch(err => console.log(err))
