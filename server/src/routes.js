const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// module.exports = (app) => {
//     app.post('/register',(req, res)=>{
//         console.log(req.body);
//         res.send({
//             message: `Hello ${req.body.email}! Your user was registered!`
//         })
//     })
// }
module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, 
        AuthenticationController.register
    )
}

