const fs = require('fs');

// read file (readable stream)
const readStream = fs.createReadStream("inputFile.txt");

// write file (writable stream)
const writeStream = fs.createWriteStream("outputFile.txt");

// readStream.pipe(writeStream);

const { Transform } = require('stream');
// fsmodule, blocking and nonblocking module

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback){
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}) ;

readStream.pipe(upperCaseTransform).pipe(writeStream);

readStream.on('end', ()=>{
  console.log('finished reading');
});
