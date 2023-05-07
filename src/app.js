import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/index.js';
import DB from './clients/db.js';
import mqttSetup from './clients/mqtt-client.js';
import mysql from 'mysql2';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);

// 정적 경로 설정
app.use('/static', express.static('uploads'));

// 포트 연결
const port = parseInt(process.env.PORT ?? '8080');

app.listen(port, () => {
  console.log(`🚀 서버가 포트 ${port}에서 운영중입니다.`);
});

// MQTT connection

const mqttOptions = {
  host: process.env.MQTT_HOST,
  port: process.env.MQTT_PORT,
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
};

const mqttClient = new mqttSetup(mqttOptions, ['data/unit001/#']);
mqttClient.connect();

// MySQL connection 실행
// function getDBConnection() {
//   const db = new DB({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     port: process.env.MYSQL_PORT,
//   });
//   return db;
// }
// getDBConnection();

connection.connect();

// export { getDBConnection };