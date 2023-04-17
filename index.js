const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3200 // 设置端口号
const PUBLIC_DIR = './' // 设置公共目录路径

// 创建 HTTP 服务器对象
const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url
  filePath = path.join(PUBLIC_DIR, filePath) // 拼接文件路径
  const extname = path.extname(filePath).toLowerCase() // 获取文件后缀名

  // 根据文件后缀名设置 Content-Type
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  }
  const contentType = mimeTypes[extname] || 'application/octet-stream'

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') { // 文件不存在
        res.writeHead(404)
        res.end('File not found.')
      }
      else { // 其他错误
        res.writeHead(500)
        res.end(`Server error: ${err.code}`)
      }
    }
    else { // 文件存在
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })
})

// 启动服务器
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
