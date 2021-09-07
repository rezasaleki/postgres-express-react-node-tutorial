class BaseController {

    async all(model, include = []) {
        try {
			return await model.findAll({
                include: include
            });
		} catch (err) {
			return Promise.reject(err);
		}
    }


    async create(model, objData) {
        try {
			return await model.create(objData);
		} catch (err) {
			return Promise.reject(err);
		}
    }

    async findById(model, id, include = []) {
        try {
            return await model.findOne({
                where: {
                    id: id 
                },
                include: include
            });
        } catch (err) {
			return Promise.reject(err);
		}
       
    }

    async destroy(model, id) {
        try {
            await model.destroy({
                where: { 
                    id: id 
                }
            });
        } catch (err) {
			return Promise.reject(err);
		}
        
    }

    async update(model, objData, id) {
        try {
            return await model.update(objData, {
                where: {
                    id: id
                }
            })
        } catch (err) {
			return Promise.reject(err);
		}
    }
}

module.exports = BaseController;