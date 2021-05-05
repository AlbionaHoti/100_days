// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create params for S3.deleteBucket
var bucketParams = {
  // here you'll provide the name of the bucket you want to delete
  Bucket: 'webiny-s3-bucket-testing',
};

async function emptyS3Bucket(bucket) {
  const listParams = {
    Bucket: bucket,
    // Prefix: dir,
  };

  const listedObjects = await s3.listObjectsV2(listParams).promise();

  if (listedObjects.Contents.length === 0) return;

  const deleteParams = {
    Bucket: bucket,
    Delete: { Objects: [] },
  };

  listedObjects.Contents.forEach(({ Key }) => {
    deleteParams.Delete.Objects.push({ Key });
  });

  await s3.deleteObjects(deleteParams).promise();

  if (listedObjects.IsTruncated) await emptyS3Bucket(bucket);
}

emptyS3Directory(bucketParams.Bucket);

// Call S3 to delete the bucket
s3.deleteBucket(bucketParams, function (err, data) {
  err ? console.log('Error', err) : console.log('Success', data);
});
