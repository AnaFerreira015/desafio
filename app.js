const express = require('express');

const bd = require('./firebase');

const seriesRef = bd.child('serie');
const filmesRef = bd.child('filme');
const hqsRef = bd.child('hq');
const livrosRef = bd.child('livro');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/series', (req, res) => {
  seriesRef.once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/filmes', (req, res) => {
  filmesRef.once("value",(snap) => {
    res.send(snap.val());
  });
});

app.get('/hqs', (req, res) => {
  hqsRef.once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/livros', (req, res) => {
  livrosRef.once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/series/name', (req, res) => {
  var q = req.query.q;
  seriesRef.orderByChild("nome").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/series/year', (req, res) => {
  var q = parseInt(req.query.q);
  seriesRef.orderByChild("ano").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/series/autorDir', (req, res) => {
  var q = req.query.q;
  seriesRef.orderByChild("autorDiretor").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

//filme
app.get('/filmes/name', (req, res) => {
  var q = req.query.q;
  filmesRef.orderByChild("nome").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/filmes/year', (req, res) => {
  var q = parseInt(req.query.q);
  filmesRef.orderByChild("ano").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/filmes/autorDir', (req, res) => {
  var q = req.query.q;
  filmesRef.orderByChild("autorDiretor").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

//livro
app.get('/livros/name', (req, res) => {
  var q = req.query.q;
  livrosRef.orderByChild("nome").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/livros/year', (req, res) => {
  var q = parseInt(req.query.q);
  livrosRef.orderByChild("ano").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/livros/autorDir', (req, res) => {
  var q = req.query.q;
  livrosRef.orderByChild("autorDiretor").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

//hq
app.get('/hqs/name', (req, res) => {
  var q = req.query.q;
  hqsRef.orderByChild("nome").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/hqs/year', (req, res) => {
  var q = parseInt(req.query.q);
  hqsRef.orderByChild("ano").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.get('/hqs/autorDir', (req, res) => {
  var q = req.query.q;
  hqsRef.orderByChild("autorDiretor").equalTo(q).once("value", (snap) => {
    res.send(snap.val());
  });
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});