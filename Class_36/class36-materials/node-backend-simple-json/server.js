const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  const readWrite = (file, contentType) => {
    fs.readFile(file, function(err, data) {
      if (contentType != null){
        res.writeHead(200, {'Content-Type': contentType});
      }
      res.write(data);
      res.end();
    });
  }
  switch (page){
    case '/':
      readWrite('index.html', 'text/html');
      break;
    case '/otherpage':
      readWrite('otherpage.html', 'text/html');
      break;
    case '/otherotherpage':
      readWrite('otherotherpage.html', 'text/html');
      break;
    case '/api':
      let personName = 'unknown',
      personOccupation = 'unknown',
      personStatus = 'unknown'

      if(params['student']== 'leon'){
        personName = 'Leon',
        personOccupation = 'Boss Man',
        personStatus = 'Baller'
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        name: personName,
        status: personStatus,
        currentOccupation: personOccupation
      }
      res.end(JSON.stringify(objToJson));
      break;
    case '/css/style.css':
      readWrite('css/style.css');
      break;
    case '/js/main.js':
      readWrite('js/main.js', 'text/javascript');
      break;
    default:
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
    }
});

server.listen(8000);
