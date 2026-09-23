const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT || process.argv[2] || '3012', 10);
const DIST_DIR = path.resolve(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.mp4': 'video/mp4',
  '.mp3': 'audio/mpeg'
};

const server = http.createServer((req, res) => {
  // CORS & dev headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');

  // Strip query string and hash
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  let safePath = path.normalize(path.join(DIST_DIR, pathname));

  // Security check: ensure path is within DIST_DIR
  if (!safePath.startsWith(DIST_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  // If path is a directory, look for index.html
  if (fs.existsSync(safePath) && fs.statSync(safePath).isDirectory()) {
    safePath = path.join(safePath, 'index.html');
  } else if (!fs.existsSync(safePath) && fs.existsSync(safePath + '.html')) {
    safePath = safePath + '.html';
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If not found and not requesting a file extension, fallback to index.html (SPA)
      if (!path.extname(pathname)) {
        const fallback = path.join(DIST_DIR, 'index.html');
        if (fs.existsSync(fallback)) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          fs.createReadStream(fallback).pipe(res);
          return;
        }
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size
    });

    const stream = fs.createReadStream(safePath);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      }
      res.end('500 Internal Server Error');
    });
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Deep Blue Aqua website deployed!`);
  console.log(`> Local:   http://localhost:${PORT}`);
  console.log(`> Network: http://127.0.0.1:${PORT}`);
});
