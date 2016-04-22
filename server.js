'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);







// DYANMO DB SECTION

var endpoint = "http://" + process.env.DYNAMODB_HOST + ':8000';
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  accessKeyId : "aaa",
  secretAccessKey: "aa",
  endpoint:  endpoint
});


var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "Movies3",
    KeySchema: [       
        { AttributeName: "year", KeyType: "HASH"},  //Partition key
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

// S3 SECTION

var fs = require('fs')

var endpointS3 = "http://" + process.env.S3_HOST + ':4569';
console.log(endpointS3);

var config = {
    s3ForcePathStyle: true,
    accessKeyId: 'ACCESS_KEY_ID',
    secretAccessKey: 'SECRET_ACCESS_KEY',
    endpoint: new AWS.Endpoint(endpointS3)
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
