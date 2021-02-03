const express = require('express')
const app = express()

const juros = require('./src/functions/juros')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views','./src/views')

app.get('/', (req, res)=>{ 
   res.render('index')
})

app.post('/calculo', (req, res)=>{
    const num = req.body.num
    const juro = req.body.juro
    var resultado = juros(num, juro)
    var desconto = num - resultado
    var arredondado = parseFloat(desconto.toFixed(2));
    var dados = {num, juro, resultado, arredondado}
    res.render('resultado', {dado: dados})

})

app.listen(2500, ()=>{
    console.log('Servidor ativo!')
})