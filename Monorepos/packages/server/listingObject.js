// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create the parameters for calling listObjects method
var bucketParams = {
  // in here we'll provide the bucket name we created earlier
  Bucket: 'webiny-s3-bucket-testing',
};

// Call S3 to obtain a list of the objects in the bucket

s3.listObjects(bucketParams, function (err, data) {
  err ? console.log('Error', err) : console.log('Success', data);
});
