const connection = require('../database/connection');

module.exports = {

    // Método que cria sessão para se autenticar na aplicação
    async create(request, response){
        
        const { username, password } = request.body;
        
        const advertiser_user = await connection('advertiser')
            .where('username', username)
            .select('username')
            .first();

        const advertiser_pwd = await connection('advertiser')
            .where('password', password)
            .select('password')
            .first();

        if(!advertiser_user || !advertiser_pwd){

            const interested_user = await connection('interested')
                    .where('username', username)
                    .select('username')
                    .first();

            const interested_pwd = await connection('interested')
                .where('password', password)
                .select('password')
                .first();
            
            if(!interested_user || !interested_pwd){

                return response.status(404).json({error :'Date incorrects, try again.'});
            }   

            return response.status(200).json(interested_user);  
        }
        
        return response.status(200).json(advertiser_user);  
    }   
        
};