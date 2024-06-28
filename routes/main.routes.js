const router = require('express').Router();
const bcrypt = require('bcrypt'); 
const MainPage = require('../src/pages/MainPage');
const RegisterPage = require('../src/pages/RegisretPage');
const LoginPage = require('../src/pages/LoginPage');


const {User, Event } = require('../db/models/');

const permission = require('../middleware/permission');


router.get('/', async (req, res) => {
try {
  const dataEvents = await Event.findAll({attributes: ["id","title", "description"],})
  
  const events = JSON.parse(JSON.stringify(dataEvents)).sort((a, b) => a.id - b.id);
  
 
  res.renderComponent(MainPage,{ events });
} catch (error) {
  console.log("ERROR: ", error);
  res.status(500).send("Internal Server Error"); 
}
});

router.get ('/register', permission, (req, res) => {
  res.renderComponent(RegisterPage,{user: res.locals.user});
});


router.post('/api/register',  async (req, res) => {  
  try {
    
    const { role, name, login, email, password , info } = req.body;//принимаем с инпута введенные данные (роль по умолчанию юзер всегдаю ее нельзя изменить, она не отображается на стр)
    const hashedPassword = await bcrypt.hash(password, 10)
    const findUser = await User.findOne({where: {email}}) //ищем в бд юзера по емейлу тк он уникальный всегда  
     if(!findUser) {
      const user = await User.create({fullName: name, login, email, password: hashedPassword, role, info})      
      req.session.user_sid = user.id //*создаем куку и сессию
      //user_sid потомy что имя куки для хранения айди сессии user_sid  
      res.sendStatus(203)
    }else {
      res.status(403).json({message: 'User already exists'})
    }

  } catch (error) {
    console.log('error register: ', error);
    res.status(503).json({messege: '=('})
  }
})


router.get('/login',permission, (req, res) => {
  res.renderComponent(LoginPage,{});
})

router.post('/api/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const findUser = await User.findOne({where: {login}});
    const isSamePassword = await bcrypt.compare(password, findUser.password);//сравниваем введенный пароль с тем что у нас в бд
    //*isSamePassword это булевая переменная. будет говорить да / нет
    if (findUser && isSamePassword) {
      req.session.user_sid = findUser.id;
      res.sendStatus(204)
    } else {
      res.status(403).json({message: 'Incorrect email or password'}) //ошибка на клиенте
    }

  } catch (error) {
    res.status(503).json({message: 'Error while find user'})
  }
})


//разлогиневаемся и чистим куки по куки айди. удаляем сессию
router.get('/logout', (req,res) =>{
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({message: 'LOGOUT ERROR'})
    }
    res.clearCookie('user_sid').redirect('/')
  })
})



module.exports = router;
