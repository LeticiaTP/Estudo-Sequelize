const {Usuario, Post, Comentario, sequelize} = require('./models');

Post.findAll()
.then((result) => {
    console.table(result.map(user => user.toJSON()))
});

Post.findByPk(2)
.then((result) => {
    console.table(result.toJSON());
});

Post.findOne({
    where : {
        texto : 'Como foi o fim de semana?'
    }
})
.then((result) => {
    console.table(result.toJSON());
});

Comentario.findAll()
.then((result) => {
    console.table(result.map(user => user.toJSON()))
});

Comentario.findByPk(1)
.then((result) => {
    console.table(result.toJSON());
});

Comentario.findOne({
    where : {
        texto : 'Oi gente é o !@#!$%! Meu nome agora é Zé Pequeno!'
    }
})
.then((result) => {
    console.table(result.toJSON());
});
