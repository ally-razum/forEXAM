const React = require('react');
const Layout = require('../components/Layout');

module.exports = function RegisterPage ({user}) {
    return (
        <Layout user={user}>
            <script defer src='/js/register.js'></script>
            <div>
                <h2>Зарегистрироваться:</h2>
                <form name='regForm'>
                        <input type="text" name="role" defaultValue={"user"}/><br />
                        <input type="text" name="name" placeholder="Имя" /><br />
                        <input type="text" name="login" placeholder="логин"/><br />
                        <input type="email" name="email" placeholder="Email"/><br />
                        <input type="password" name="password" placeholder="пароль"/><br />
                        <input  type="text" name="info" placeholder="роль"/><br />
                        <button type="submit">ВОЙТИ</button>
                        <button type="reset">СБРОС</button>
                        <button type="button" className='red-btn'><a href="/">ОТМЕНА</a></button>
                    </form>
                    
            </div>

        </Layout>
    )
} 

