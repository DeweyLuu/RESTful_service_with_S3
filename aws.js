var AWS = require('aws-sdk');

AWS.config.region = 'us-east-1';

var s3 = new AWS.S3({params: {Bucket: 'justinsrd'}});

s3.createBucket(function() {

  var params = {Key: 'myTest2', Body: 'Go Niners!'};

  s3.upload(params, function(err, data) {
      if (err)
        console.log("Error uploading data: ", err)
      else
        console.log("Successfully uploaded data to myBucket/myKey");
  });
});
