const {Usuario, Post, Comentario, sequelize} = require('./models');
const {Op} = require('sequelize');

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

Post.findAll({
    where : {
        texto: {[Op.like]: 'oi%'}
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

//desafios 12/04

Usuario.findAll({
    where:{
       nome:{[Op.like]: '%a%'}  
    }
})
.then((result) => {
    console.table(result.map(usuario => usuario.toJSON()))
});

Usuario.findAll({
    where:{
        nome:{[Op.notLike]: '%a%'}  
    }
})
.then((result) => {
    console.table(result.map(usuario => usuario.toJSON()))
});

Comentario.findAll({
    order: [['id', 'DESC']],
    limit: 2,
    offset: 0
})
.then((result) => {
    console.table(result.map(user => user.toJSON()))
});

Usuario.update({
    email: 'sergio@digitalhouse.com'
}, {
    where: {
        id: 2
    }
}).then((resultado) => {
    console.table(resultado);
});

Usuario.create({
    nome: 'Alanda',
    email: 'alanda@digitalhouse.com',
    senha: 'dev1234579'
});

Usuario.destroy({
    where: {
        id: 3
    }
});

Post.create({
    texto: 'a dona aranha subiu pela parede',
    img: 'dona_arana.png',
    n_likes: 1550000,
    usuarios_id: 10
});

Usuario.findAll().then((usuarios) => {
    console.table(usuarios.map((usuario) => usuario.toJSON()));
})

// // Outro jeito
Usuario.findByPk(1, {include:['posts']}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)


Post.findByPk(1, {include:['comentarios']}).then(
    post => {
        console.log(post.toJSON());
        sequelize.close();
    }
)
