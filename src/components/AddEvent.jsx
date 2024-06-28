const React = require('react')
const Layout = require('./Layout')

module.exports = function AddEvent ({user}) {
    return (
        <Layout  user={ user }>
            <script defer src='/js/addEvent.js'></script>
            <div className='addEvent'>
            <h5 className="eventTitle">Новая встреча:</h5>
                <div>     
                <textarea type="text" name='title' id='titleInput' placeholder='Тема'/> 
                <br />                       
                <textarea type="text" name='description' id='descriptionInput' placeholder='дата, время, место'/> 
                <br />
                <br />
                <input type="hidden" name="user_id" id='user_id' defaultValue={user.id}/><br />

                <button id='submitEvent'> ДОБАВИТЬ </button>                
                </div>
                
                
            </div>
        </Layout>
    )

}