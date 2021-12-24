**Cluster and PM2 for nodejs**

script for package.json


npm run command -- --arg1=v11 --arg2:v2
scripts:{
	"command": " node server.js"
}


npm run command  --  --port=5000 --api:customURL flag1 flag2 ==> node server.js --port=5000 --api:customURL flag1 flag2 


npx pm2 start --name clustername npm -- run start/command -i number or "max"
npx pm2 delete clustername
npx pm2 list or l
npx pm2 logs
npx pm2 monit
npx pm2 set pm2:systmonit true
npx pm2 restart 
npx pm2 scale clustername number



npx loadtest -c 1000 --rps 20000  http://localhost:5000