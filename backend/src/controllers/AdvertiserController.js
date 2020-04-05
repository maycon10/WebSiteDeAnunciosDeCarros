
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    // Método que lista os cadastros de Anunciante
    async index(request, response){
        const advertiser = await connection('advertiser').select('*');
    return response.json(advertiser); 
    
    },

    // Método que cadastra novo Anunciante
    async create(request, response){
        
        const {name, surname, username, password, confirmpassword, birthday, email, whatsapp} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const typeprofile = 'Advertiser';

    await connection('advertiser').insert({
        id,
        name,
        surname,
        username,
        password,
        confirmpassword,
        birthday,
        email,
        whatsapp,
        typeprofile,
    })

    return response.json({ id, username, typeprofile });

    }
};