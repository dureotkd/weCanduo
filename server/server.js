const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userModel = require('./model/userModel');

const app = express();
const http = require('http').createServer(app);
const router = express.Router();

app.use(bodyParser.json());
app.use('/api', bodyParser.urlencoded({extended: true}), router);
app.use(cors());

const io = require('socket.io')(http, {
  transport: ['websocket'],
  cors: {origin: '*'},
});

io.on('connection', socket => {
  console.log(`소켓 서버가 연결되었습니다 👨`);
});

http.listen(8090, (req, res) => {
  console.log('서버 준비완료 👩');
});

router.get('/', (req, res) => {
  res.send('Hello RESTFUL API ');
});
router.get('/users', async (req, res) => {
  const {accessToken} = req.query;

  if (!accessToken) {
    req.status(404).send({success: false});
  }

  const user = await userModel.getRow({
    accessToken,
  });

  res.send({user});
});

router.post('/users', (req, res) => {
  const {
    nickname,
    profileImageUrl,
    email,
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  } = req.body;

  const result = userModel.save({
    nickname,
    profileImageUrl,
    email,
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  });

  if (result) {
    res.status(201).send({success: true});
  } else {
    res.status(400).send({success: false});
  }
});
