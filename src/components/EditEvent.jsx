const React = require('react');
const Layout = require('./Layout');

module.exports = function EditEvent({ user, currentEvent }) {
  
  return (
    <Layout  user={ user }>
      <script defer src='/js/editEvent.js'></script>
     <div className='editEvent'>
      <p><b>Редактировать данные о встрече:</b></p>
            
        <form name="update" data-id={currentEvent.id}>
          <div>
          <label htmlFor="name-input">Тема:</label> <br />
          <input className='titleArt' id="name-input"  name="title"   type="text"
            defaultValue={currentEvent.title}
          /> <br />
          </div>
          <div>

          <label  htmlFor="des-input">дата, время, место :</label> <br />
          <textarea className='description' id="des-input" name="description"
            type="text"
            defaultValue={currentEvent.description}
          /> <br />
          </div>
          <button type="submit" id='upd-button'> ОБНОВИТЬ</button>
         
        </form>
           </div>
    </Layout>
  );
};
