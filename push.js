var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BA4Z4T-cdB0Ub97Cooh439tTPdJoWGzcRQ2FEesC5-G-Lx5Vi3dOWDPO-Jzqb2WL1XDYN5vsne0RaBVMI-g7o40",
   "privateKey": "8b_lcLUdc4pnDHlK7Ji-8Tl5y_1tv0xd8Nab6tEAjTg"
};
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/eOJJvLwa4hI:APA91bEgo4YZn-BqGD_bX4y9BEE6G1tGSilg0w7TmJAyPR5cAHOxXS2q19M-V--Gy7D3ouE3JBOdWTvEqwcC587yaKuI7iPBO0MR8ITuWV2l8H2ckNHCycEbvubr3KfO4ALjLFa2LPjj",
   "keys": {
       "p256dh": "BJO4CNnTQR6CP/mK8UUAJwS2dUkpggnp3miJesZq3QS4HUGIAWTarpZbPRGm1RrJDdnImjXsMfu0S2Cbo90SkaE=",
       "auth": "kB/MN1pwzGGh19tynT21EA=="
   }
};
var payload = 'Pesan notifikasi berhasil masuk2';
 
var options = {
   gcmAPIKey: '462221845040',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options,
).catch(function(err){
   console.log(err);
   });