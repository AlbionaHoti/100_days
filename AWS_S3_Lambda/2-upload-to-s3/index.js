const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const upload = async () => {
  const params = {
    ACL: 'public-read', // access control list - this will give the file access to be read from anyone
    Body: 'hello world',
    ContentType: 'text/html',
    Bucket: 'warnooffkeys',
    Key: 'file-from-lambda.txt',
  };

  return await new Promise((resolve, reject) => {
    s3.putObject(params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const main = async (event) => {
  console.log('Event: ', event);

  return upload();
};
exports.handler = main;
