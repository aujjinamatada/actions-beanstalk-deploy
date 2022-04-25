
const aws = require('aws-sdk');

function awsSdkCall(options, retryAttempt = 0) {
    return new Promise((resolve, reject) => {
        console.log(options.VersionLabel);
        var elasticbeanstalk = new aws.ElasticBeanstalk({ apiVersion: '2010-12-01' });
        var params = {
            EnvironmentName: options.EnvironmentName,
            VersionLabel: options.VersionLabel,
            ApplicationName: options.ApplicationName
        };
        elasticbeanstalk.updateEnvironment(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
        });
    })
};

module.exports = awsSdkCall;