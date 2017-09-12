Developer environment

1. Run `npm install`
2. Run: `npm run compile:watch`

For production (minify css, js etc.)

1. Run: `npm install`
2. Run: `npm run compile`

For universal JavaScript

1. Run: `npm install`
2. Run: `npm run compile`
3. Run: `npm run compile:server`
4. Run: `node server.js`
5. visit: http://localhost:3000

For live server

This project resides in: /usr/share/nginx/html/brighton-profolio
ssh root@188.166.238.222
1. Run: `npm install --only=production` // Only installs dependencies Not DevDependencies
1. Run: `npm install -g pm2` // Already installed
1. Run: `cd /into/your/project/directory`
1. Run: `pm2 start server.js`
1. Visit: [jonbrighton.nz](http://jonbrighton.nz)
