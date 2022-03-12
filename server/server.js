const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userModel = require('./model/userModel');
const summonerModel = require('./model/summonerModel');

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
  res.send('Hello RESTFUL API !! ');
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

router.post('/users', async (req, res) => {
  const {
    userData,
    accountId,
    id,
    name,
    profileIconId,
    puuid,
    revisionDate,
    summonerLevel,
    wins,
    losses,
    rank,
    tier,
    championMastery,
  } = req.body;

  const userRow = await userModel.getRow({
    email: userData.email,
  });

  const procType = userRow ? 'UPDATE' : 'INSERT';

  let userAsyncData = {
    nickname: userData.nickname,
    profileImageUrl: userData.profileImageUrl,
    email: userData.email,
    accessToken: userData.accessToken,
    refreshToken: userData.refreshToken,
    accessTokenExpiresAt: userData.accessTokenExpiresAt,
    refreshTokenExpiresAt: userData.refreshTokenExpiresAt,
  };

  let summonerAsyncData = {
    accountId,
    lolId: id,
    name,
    profileIconId,
    puuid,
    level: summonerLevel,
    wins,
    losses,
    rank,
    tier,
  };

  switch (procType) {
    case 'INSERT':
      var lastInsertId = await userModel.save(userAsyncData);
      summonerAsyncData.userId = lastInsertId;
      await summonerModel.save(summonerAsyncData);

      break;

    case 'UPDATE':
      const summonerWhere = [`userId = ${userData.id}`];
      const userWhere = [`email = ${userData.email}`];

      await userModel.update(userAsyncData, userWhere);
      await summonerModel.update(summonerAsyncData, summonerWhere);

      break;
  }

  res.status(201).send({success: true});

  // if (result) {
  //   res.status(201).send({success: true});
  // } else {
  //   res.status(400).send({success: false});
  // }
});

router.post('/article', async (req, res) => {
  const {title, body, myPosition, preferPosition} = req.body;

  let ing = true;
  const validProc = [1];

  for (const valid of validProc) {
    if (!title) {
      ing = false;
      break;
    }

    if (!body) {
      ing = false;
      break;
    }

    if (!myPosition) {
      ing = false;
      break;
    }

    if (!preferPosition) {
      ing = false;
      break;
    }
  }

  if (!ing) {
    res.status(400).send({msg: '필수값 부족'});
    return;
  }

  res.status(201).send({});
});

router.post('/search', async (req, res) => {
  const {userSeq, preferPosition, myPosition} = req.body;

  res.status(201).send({success: true});
});

router.delete('/search', async (req, res) => {
  const {userSeq, preferPosition, myPosition} = req.body;

  console.log(userSeq);

  res.send({success: true});
});
