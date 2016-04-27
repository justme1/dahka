'use strict';
const express = require('express');

// Constants
const PORT = 8085;

// App
const app = express();


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);


console.log('boo');




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
    TableName : "Image",
    KeySchema: [       
        { AttributeName: "Id", KeyType: "HASH"}  //Partition key
    ],
    AttributeDefinitions: [       
        { AttributeName: "Id", AttributeType: "S" }
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
    Key: 'image1.jpeg',
    Bucket: 'Bucket',
    Body: fs.createReadStream('./image1.jpeg')
}

var docClient = new AWS.DynamoDB.DocumentClient();

client.upload(params, function uploadCallback (err, data) {
     console.log(err, data);
    if (!err && data) {
        var params = {
            TableName: 'Image',
            Item: {
                Id: data.Location
            }
        };
        console.log("Calling PutItem ");
        docClient.put(params, function(err, data2) {
            if (err) {
                // an error occured!
                console.log(err);
            }
            else {
              console.log("PutItem returned successfully");
                var params = {
                    TableName: 'Image',
                    Key: {
                        Id: data.Location
                    }
                };
 
                docClient.get(params, function(err, data3) {
                    if (err) {
                        // an error occured!
                        console.log(err);
                    }
                    else {
                        console.log("get returned successfully");
                        console.log(data3);
                    }
                });

            } 
        });

    }
})

var params = {
    TableName: 'Image'
};


app.get ('/', function (req,res) {
   res.end('Welcome!');
});

app.get('/getAllImages', function (req, res) {
    

docClient.scan(params, function(err, data) {
       if (err) {
            res.send('error occured while getting images; Please retry.')     
        } else {
            res.json(data.Items);
        }
    });
    
    
});
