var cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});
console.log('running every minute 1, 2, 4 and 5');