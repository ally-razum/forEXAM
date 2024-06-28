require('@babel/register');// пакет для автоматической компиляции файлов (JSX > HTML)
require('dotenv').config();// использование данных из конфигурации файла .env

const express = require('express');
const serverConfig = require('./config/serverConfig');
const { sequelize } = require('./db/models');
const indexRouter = require('./routes/index.routes');// роутеры

const PORT = process.env.PORT ?? 8000;// условное формирование порта
const app = express();// инициализация приложения 'app'

serverConfig(app);// конфигурация приложения

app.use('/', indexRouter);// маршрутизация приложения


try {
    sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }// проверка работы ДБ



  app.listen(PORT, () => {
    console.log(`*** SATTVA -  Server started at ${PORT} port ***`);
  });// прослушивание порта приложения
  