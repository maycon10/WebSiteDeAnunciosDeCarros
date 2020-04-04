const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const advertiser_id = request.headers.authorization;
        const adverts = await connection('adverts')
            .where('advertiser_id', advertiser_id)
            .select('*');

            return response.json(adverts);
    }
};