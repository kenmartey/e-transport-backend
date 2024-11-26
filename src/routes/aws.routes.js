import { Router } from 'express'
import AWS from 'aws-sdk';

const router = Router()


AWS.config.update({
  region: 'us-east-1', // e.g., 'us-east-1'
  accessKeyId: '###', // replace with your access key id
  secretAccessKey: '###' // replace with your secret access key
});

const sns = new AWS.SNS();

router.post('/send', (req, res) => {
  const { phoneNumber, message } = req.body;

  const params = {
    Message: message,
    PhoneNumber: phoneNumber,
  };

  sns.publish(params, (err, data) => {
    if (err) {
      console.error('Error sending SMS:', err);
      res.status(500).send(err);
    } else {
      console.log('SMS sent successfully:', data);
      res.status(200).send(data);
    }
  });
});

export default router
