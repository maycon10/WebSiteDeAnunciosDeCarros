const connection = require('../database/connection');

module.exports = {

    // Método que cria sessão para se autenticar na aplicação
    async create(request, response){
        const { id } = request.body;

        const advertiser = await connection('advertiser')
            .whereNotNull('id', id)
            .select('name')
            .first();

        if(!advertiser){

            const interested = await connection('interested')
                .whereNotNull('id', id)
                .select('name')
                .first();
            
            if(!interested){
                
                return response.status(400).json({error: 'No advertiser found with this ID'})
            }

            return response.json(interested);
            
        }

        return response.json(advertiser);

    }
}