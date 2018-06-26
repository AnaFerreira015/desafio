//importar o serie.js aqui
//importar o banco de dados aqui

exports.get = (req, res, next) => {
    Serie.find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var serie = new Serie(req.body);
    serie
        .save()
            .then(x=>{
                res.status(201).send({ message: 'Série cadastrada com sucesso!'});
            }).catch(e=>{
                res.status(400).send({ message: 'Falha ao cadastrar série!',
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
    Serie
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};