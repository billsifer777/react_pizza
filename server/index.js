require('dotenv').config()
const express =require('express')
const sequelize=require('./db')
const PORT = process.env.PORT || 3001

const app=express()

const start = async ()=>{
    try{
        app.get( "/" , (req, res) => {
            res.send( "Hello World!" );
        });
        await  sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`server up ${PORT}`))
    }
    catch (e){
        console.log(e)
    }
}

app.get('/api',(req,res)=>{
    res.json([
        {
            id: 0,
            name: 'Чизбургер-пицца',
            category: 'мясные',
            size: 1,
            price: 10,
            image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
        },
            {
                id: 1,
                name: 'Сырный цыпленок',
                category: 'гриль',
                size: 1,
                price: 395,
                image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
            },
            {
                id: 2,
                name: 'Сырная',
                category: 'вегетарианская',
                size: 1,
                price: 395,
                image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
            },
            {
                id: 3,
                name: 'Креветки по-азиатски',
                category: 'острые',
                size: 1,
                price: 395,
                image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
            },
        {
            id: 4,
            name: 'Чизбургер-пицца',
            category: 'мясные',
            size: 1,
            price: 10,
            image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
        },
        {
            id: 5,
            name: 'Сырный цыпленок',
            category: 'гриль',
            size: 1,
            price: 395,
            image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
        },
        {
            id: 6,
            name: 'Сырная',
            category: 'вегетарианская',
            size: 1,
            price: 395,
            image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
        },
        {
            id: 7,
            name: 'Креветки по-азиатски',
            category: 'острые',
            size: 1,
            price: 395,
            image: 'https://avatars.mds.yandex.net/i?id=4c4198157bd55d6e1f366d3f9ac7f356-5292616-images-thumbs&n=13'
        }
            ]
    )
})

start()