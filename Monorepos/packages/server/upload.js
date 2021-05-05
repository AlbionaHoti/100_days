// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Call S3 to retrieve upload file to specified bucket
var uploadParams = { Bucket: process.argv[2], Key: '', Body: '' };
var file = process.argv[3];

// Configure the file stream and obtain the upload parameters
// The node.js file system module allows you to work (read, create, update, delete, rename files)
// with the file system on your computer.
var fs = require('fs');
var readingFile = fs.createReadStream(file);
readingFile.on('error', function (err) {
  console.log('File Error', err);
});

uploadParams.Body = readingFile;
// The path module provides utilities for working with file and directory paths.
// We can access by using this:
var path = require('path');
uploadParams.Key = path.basename(file);

// Call S3 to retrieve upload file to specified bucket
s3.upload(uploadParams, function (err, data) {
  err
    ? console.log('Error', err)
    : console.log('Upload Success!', data.Location);
});
