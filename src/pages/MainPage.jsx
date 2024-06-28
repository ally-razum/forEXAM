const React = require('react');
const Layout = require('../components/Layout');

module.exports = function MainPage ({user, events, }) {
    console.log(user,'это юзер из навбара');
    return (
        <Layout user={user}>
            <script defer src='/js/addEvent.js'></script>
            <script defer src='/js/deleteEvent.js'></script> 
            
            <div>
                
                <div className='schedule'>
                    <div className='events' id='events'>
                        
                        { (user) ? (
                            (user.role === "admin") ? (
                            <>
                            <span>привет Админ</span>
                            {events.map(event => {
                                return (
                                <div className='eventList-mainPage'>
                                    <div className='cards-event'>
                                        <div>
                                             <b>{event.title}</b><br />
                                                {event.description} 
                                        </div>                                       

                                    <div>
                                        <button><a href={`/events/${event.id}`}>Редактировать</a></button> {"      "}
                                        <button  className='deleteEvent red-btn' data-id = {`${event.id}`} > Удалить </button>
                                    </div>                                                             
                                   
                                    </div> 
                                    <br />                                 
                                
                                </div>
                                )
                            })
                            }
                                                       
                            
                            </>
                            
                        ) : (
                            <>
                            <span>привет Юзер</span>
                            
                            {events.map(event => {
                                return (
                                    <>  
                                    <div className='eventList-mainPage'>
                                        <div className='cards-event'>
                                            <div>
                                                <b>{event.title}</b><br />
                                                    {event.description} 
                                            </div>                                                            
                                        </div> 
                                        <br />                            
                                    </div>
                                    </>
                                )
                            })
                            }
                            </>
                        )) : (
                            events.map(event => {
                                return (
                                    <>  
                                    <div className='eventList-mainPage'>
                                        <div className='cards-event'>
                                            <div>
                                                <b>{event.title}</b><br />
                                                    {event.description} 
                                            </div>                                                            
                                        </div> 
                                        <br />                            
                                    </div>
                                    </>
                              
                                )
                            })
                            
                        )
                        }
                        
                    </div>
                    
                </div>
            </div>
           
            
            
        </Layout>
    )
}