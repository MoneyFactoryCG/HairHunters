const fs = require('fs');
const http = require('http');
const https = require('https');
const app = require("./app");
const port = process.env.PORT || 5000;

const privateKey = fs.readFileSync('/etc/letsencrypt/live/narashivanie-volos.club/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/narashivanie-volos.club/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/narashivanie-volos.club/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

// httpServer.listen(5000, () => {
// 	console.log('HTTP Server running on port 80');
// });

httpsServer.listen(5000, "narashivanie-volos.club" ,() => {
	console.log('HTTPS Server running on port 5000');
});

app.listen(port, () => console.log(`Server has been started on ${port}`));