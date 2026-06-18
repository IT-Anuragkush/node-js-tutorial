const fs = require('fs');
const { Transform } = require('stream');

// read file (readable stream)
const readStream = fs.createReadStream("inputFile.txt");

// write file (writable stream)
const writeStream = fs.createWriteStream("outputFile.txt");

// readStream.pipe(writeStream);

// readStream.on('end', ()=>{
//   console.log('finished reading');
// });

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback){
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

readStream.pipe(upperCaseTransform).pipe(writeStream);


writeStream.on('finish', () => {
  console.log('File transformed successfully');
});

readStream.on('error', console.error);
writeStream.on('error', console.error);
