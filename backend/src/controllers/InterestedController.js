const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    
    // Método que lista os cadastros de Interessados
    async index(request, response){
        const interested = await connection('interested').select('*');
        return response.json(interested);
    },

    // Método que cria um novo cadastro de Interessado
    async create(request, response){
        
        const {name, surname, username, password, confirmpassword, birthday, email, whatsapp} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const typeprofile = 'Interested';

    await connection('interested').insert({
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