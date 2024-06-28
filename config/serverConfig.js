const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const ssr = require('../middleware/ssr');
const session = require('express-session')//сессии для поддержки авторизации
const FileStore = require('session-file-store')(session) // хранилище сессий
const userSession = require('../middleware/userSession')




const sessionConfig = {
  store: new FileStore(), // настройка файлового хранилища sessions папка
  name: 'user_sid', // имя куки для хранения id сессии
  secret: process.env.SESSION_SECRET ?? 'test', // для шифрования id сессии
  resave: false, // не пересохранять куку при каждом запросе
  saveUninitialized: false, // не создавать сессию без записи в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // срок действия куки в миллисекундах
    httpOnly: true,
  },
}

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);
  app.use(userSession);
 
  
};

module.exports = serverConfig;
