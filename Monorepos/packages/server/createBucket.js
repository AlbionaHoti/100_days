// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create the parameters for calling createBucket -- with this part we'll take the bucket name we'll create
var bucketParams = {
  Bucket: process.argv[2],
};

// CALL S3 to create the buckets
s3.createBucket(bucketParams, function (err, data) {
  err ? console.log('Error', err) : console.log('Success', data.Location);
});
