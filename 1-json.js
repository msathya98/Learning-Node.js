const fs = require('fs');

const book = {
	title: 'Shri Ramayanadarshanam',
	author: 'kuvempu'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author)

//fs.writeFileSync('1-json.json', bookJSON);
  
  const dataBuffer = fs.readFileSync('1-json.json');
  const dataJSON = dataBuffer.toString();
  const data = JSON.parse(dataJSON)
 // console.log(book.title);

  const data1 = fs.readFileSync('package1.json');
//console.log(data1)
