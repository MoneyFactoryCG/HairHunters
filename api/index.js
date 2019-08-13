const fs = require('fs');
const http = require('http');
const https = require('https');
const app = require("./app");
const port = process.env.PORT || 5000;

const privateKey = fs.readFileSync('server.key');
const certificate = fs.readFileSync('server.cert');
// const ca = fs.readFileSync('/etc/letsencrypt/live/narashivanie-volos.club/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
};

// const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// httpServer.listen(5000, () => {
// 	console.log('HTTP Server running on port 80');
// });

httpsServer.listen(5000, () => {
	console.log('HTTPS Server running on port 5000');
});

// app.listen(port, () => console.log(`Server has been started on ${port}`));