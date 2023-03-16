const Joi = require('joi')

module.exports = {
    register(req,res,next){
        const schema = Joi.object().keys({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        const data = req.body;
        const {error, value} = schema.validate(data)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Please check your email format.'
                    })
                 break
                case 'password':
                    res.status(400).send({
                        error: `Kindly check the password format <br>
                                ONLY accept lower case, upper case alphabet and numeric.<br>
                                Minimum 8 and Maximum 32 character`
                    })
                 break
                default:
                    res.status(400).send({
                        error: 'Invalid registration requeest information.'
                    })
            }
         
        }
        next()
    }
}