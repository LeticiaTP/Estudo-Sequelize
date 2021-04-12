const {Usuario, Post, Comentario, sequelize} = require('./models');
const {Op} = require('sequelize');

Post.findAll()
.then((result) => {
    console.log(result.map(user => user.toJSON()))
});

Post.findByPk(2)
.then((result) => {
    console.log(result.toJSON());
});

Post.findOne({
    where : {
        texto : 'Como foi o fim de semana?'
    }
})
.then((result) => {
    console.log(result.toJSON());
});

Post.findAll({
    where : {
        texto: {[Op.like]: 'oi%'}
    }
})
.then((result) => {
    console.log(result.toJSON());
});

Comentario.findAll()
.then((result) => {
    console.log(result.map(user => user.toJSON()))
});

Comentario.findByPk(1)
.then((result) => {
    console.log(result.toJSON());
});

Comentario.findOne({
    where : {
        texto : 'Oi gente é o !@#!$%! Meu nome agora é Zé Pequeno!'
    }
})
.then((result) => {
    console.log(result.toJSON());
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