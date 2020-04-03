
const connection = require('../database/connection');

module.exports = {

    async index(request, response){

        const {page = 1} = request.query;

        const [count] = await connection('adverts').count();

        console.log(count);

        const adverts = await connection('adverts')
        .join('advertiser','advertiser.id','=', 'adverts.advertiser_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'adverts.*',
            'advertiser.name',
            'advertiser.email',
            'advertiser.whatsapp',
            'advertiser.typeprofile']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(adverts);

    },

    async create(request, response){
        const { caryear, carbrand, carmodel, carcolor, carprice, cardescriptioncondition } = request.body;
        const advertiser_id = request.headers.authorization;

        const [ id ] = await connection('adverts').insert({
            caryear,
            carbrand,
            carmodel,
            carcolor,
            carprice,
            cardescriptioncondition,
            advertiser_id,
        });

        return response.json({ id, advertiser_id });
    },

    async delete(){
        
    }
};