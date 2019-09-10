const fastify = require('fastify')({
    ignoreTrailingSlash: true
  })

const https = require('https')
const fs = require('fs')
const options = {
    key:fs.readFileSync()
}
  


fastify.get('/', (request, reply) => {
  console.log(request.raw.ip)
  console.log(request.raw.ips)
  console.log(request.raw.hostname)
  request.raw.log('Hello')
  reply.res.log('World')
})

