const { User } = require ('../db/models')

const userSession = async (req, res, next) => {   
    try {
        if (req.session?.user_sid){//сущ ли така            
            const user =  await User.findByPk(req.session.user_sid); // ищем юзера по праймари кии        
            res.locals.user = user ? user.get() : null; //
            //user.get()  уберет все метаданные 
            //todo кладем в локалс чтобы было доступно в любой ручке
        }else{
       
            res.locals.user = null;
        }
     
        next()
        } catch (error) {
        console.log("User NOT found: ",  error);
        next(error)
    }
}

module.exports = userSession
