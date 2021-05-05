// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// CALL S3 to list the buckets
s3.listBuckets(function (err, data) {
  err ? console.log('Error', err) : console.log('Success', data.Buckets);
});
