const schema = new Schema ({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    ano: {
        type: Number,
        required: true
    },
    autorDiretor: {
        type: String,
        required: true
    }
});

//module.exports = hq;