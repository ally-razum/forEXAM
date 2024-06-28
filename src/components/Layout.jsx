const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />  
                      
        <title>{title}</title>        
      </head>
      <body>
      <Navbar user={user}/>
        
        {children}
        
      </body>
    </html>
  );
};

