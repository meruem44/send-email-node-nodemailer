import Mail from '../lib/Mail';
import * as yup from 'yup';

class UserController {
    async store (req, res) {
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required().min(6)
        });

        if (! (await schema.isValid(req.body))) {
            return res.status(400).json({err: 'Validation Fails'});
        }

        const { name, email, password } = req.body;
    
        const user = {
            name,
            email,
            password
        }

        // Enviar um E-mail
       

        return res.json(user);
    }
}

export default new UserController();