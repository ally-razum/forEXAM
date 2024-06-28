const React = require('react');
const Layout = require('../components/Layout');

module.exports = function LoginPage ({user}) {
    return (
        <Layout user={user}>
            <script defer src='/js/login.js'></script>
            <div>
                <h2>Войти в систему или <a className='zaregatisa-link' href="/register">зарегистрироваться</a></h2>
                <form name='loginForm'>                   
                        <input type="text" name="login" placeholder="логин"/><br />
                        <input type="password" name="password" placeholder="пароль"/><br />
                        <button type="submit">ВОЙТИ</button>
                        <button type="button" className='red-btn'><a href="/">ОТМЕНА</a></button>
                    </form>
                    
                </div>
        </Layout>
    )

}
