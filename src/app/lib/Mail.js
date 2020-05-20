import nodemailer from 'nodemailer';
import mailConfig from '../../config/main';

export default nodemailer.createTransport(mailConfig);