const CustomerService = require("../service/customer-service");

module.exports = (app) => {

    const service = new CustomerService();
    
    app.post("/customer/signup", async (req,res, next) => {
        try{
            const { email, password, phone} = req.body;
            const { data } = await service.SingUp({ email, password, phone });
            return res.json(data);
        }catch (err){
            next(err);
        }
    });
    



}