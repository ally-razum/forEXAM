const React = require('react');

module.exports = function Navbar ({user}) {    
    console.log(user,'user from NAV');
    return(
        <nav className='navbar '>
                        
            <button  data-type="shadow"></button>
            { user ? (
                (user.role === "admin") ? (
                    <>                 
                    
                    <div className='nav-role'>                        
                        Администратор {user.fullName}
                    </div>
                    <button className='red-btn'><a href="/logout"><b>ВЫХОД</b></a></button>
                  </>
                ): (
                    <>

                   
                    <div className='nav-role'>                        
                        Участник {user.fullName}
                    </div>
                    
                    <button className='red-btn'><a href="/logout"><b>ВЫХОД</b></a></button></>
                )
        
            ) : (
                <>
                <button><a href="/login"><b>ВОЙТИ</b></a></button>
                </>            
            ) }
        </nav>
    )
}

