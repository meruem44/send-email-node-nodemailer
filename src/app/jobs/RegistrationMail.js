import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user: { name, email } } = data;

        await Mail.sendMail({
            from: 'Queue Test <queue@queueteste.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usúario',
            html: `Olá, ${name}, Bem-vindo aos estudos do leandro :D`,
        });
    }
}