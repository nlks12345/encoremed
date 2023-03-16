console.log('start hello')
const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models');
const config = require('./config/config')
const app = express()

app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

require('./routes')(app)
// app.use('./routes')
// app.get('/status',(req, res)=>{
//     res.send({
//         message: 'hello world'
//     })
// })


sequelize.sync().then(() => {
    app.listen(config.port)
    console.log(`Server start on port ${config.port}`)
})

// app.listen(3001, () =>{
//     console.log('server is runnning on port 3001');
// });

//app.listen(process.env.PORT || 8081)