// const CommonFunction = require('@Monorepos/common');

// CommonFunction();
// CommonFunction();
// CommonFunction();

// Load the SDK and UUID
// var AWS = require('aws-sdk');

// AWS.config.update({ region: 'REGION' });
// var uuid = require('uuid');

// // create unique bucket name
// var bucketName = 'webiny-node-sdk-sample-' + uuid.v4();

// // Create name for uploaded object key
// var keyName = 'hello_world.txt';

// // Create a promise on S3 service object
// var bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' })
//   .createBucket({ Bucket: bucketName })
//   .promise();

// // Handle a promise fulfilled/rejected states
// bucketPromise
//   .then(function (data) {
//     // create params for putObject call
//     var objectParams = {
//       Bucket: bucketName,
//       Key: keyName,
//       Body: 'Hello World!',
//     };

//     // create object upload promise
//     var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' })
//       .putObject(objectParams)
//       .promise();

//     uploadPromise.then(function (data) {
//       console.log(
//         'Successfully uploaded data to ' + bucketName + '/' + keyName
//       );
//     });
//   })
//   .catch(function (err) {
//     console.log(err, err.stack);
//   });

// another example

// Create S3 service object
// s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// var bucketParams = { Bucket: process.argv[2] };

// s3.getBucketAcl(bucketParams, function (err, data) {
//   if (err) {
//     console.log('Error', err);
//   } else if (data) {
//     console.log('Success', data.Grants);
//   }
// });

var AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.Buckets);
  }
});
