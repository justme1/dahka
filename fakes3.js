var fs = require('fs')
var AWS = require('aws-sdk')

var config = {
  s3ForcePathStyle: true,
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY',
  endpoint: new AWS.Endpoint('http://192.168.99.100:4569')
}

var client = new AWS.S3(config)

var params = {
  Key: 'Key',
  Bucket: 'Bucket',
  Body: fs.createReadStream('./image1.jpeg')
}

client.upload(params, function uploadCallback (err, data) {
  console.log(err, data)
})
