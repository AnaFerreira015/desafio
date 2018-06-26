//importar o filme.js aqui
//importar o banco de dados aqui

exports.get = (req, res, next) => {
    Filme.find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var filme = new Filme(req.body);
    filme
        .save()
            .then(x=>{
                res.status(201).send({ message: 'Filme cadastrado com sucesso!'});
            }).catch(e=>{
                res.status(400).send({ message: 'Falha ao cadastrar filme!',
                data: e
            });
            });
    
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.post = (req, res, next) => {
    res.status(200).send(req.body);
};

exports.getById = (req, res, next) => {
    Filme
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};