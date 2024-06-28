
const addEvent = document.getElementById('addEvent-mainPage')
console.log(addEvent,'addEvent from addEvent');

const eventsList = document.getElementById('events')



addEvent.addEventListener('click', event => {
    event.preventDefault();
    const newEvent = document.createElement('div');
    console.log(newEvent,'newEvent CREATED');

    //*-------------------------------------->вставляем по клику на кн добавить форму куда будем вписывать новые данные 

    newEvent.innerHTML = `
    <div class='addEvent'>
        <h5>Новая встреча:</h5>
        <div>     
        <input type="text" name='title' id='titleInput' placeholder='Тема'/>                             
        <input type="text" name='description' id='descriptionInput' placeholder='дата, время, место'/>       
        
        <button id='submitEvent' class='submitEvent';> ДОБАВИТЬ </button>                
        </div>
    </div>`
  
   
      eventsList.append(newEvent);
      


      const submitEvent = document.getElementById('submitEvent') //нашли кнопку добавить уже в форме
      console.log(submitEvent,'submitEvent from addEvent');      
          submitEvent.addEventListener('click', async (event) => {
            console.log('yes');
            const title = document.getElementById('titleInput')
            const description = document.getElementById('descriptionInput')
            
        try {
            const data = {
                title: title.value, //тут данные из формы по имени и значение
                description: description.value,                
            }
            console.log(data, 'данные взятые из формы');
            //* -----------------------------------------------------------> отправляем фетч по нужному адресу ПОСТ
            const response = await fetch("/events", {
                method: "POST",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(data)
            })
            console.log(response,'что в фетче');
            if(response.status === 201){               

                //РИСУЕМ НА СТРАНИЦЕ НОВЫЙ ЭЛЕМЕНТ
                const eventFromAdmin = await response.json() // принимаем данные (те же) из ручки в которой обращаемся в бд и создаем элемент с нашими новыми данными
                console.log(eventFromAdmin,'eventFromAdmin принимаем данные (те же) из ручки в которой обращаемся в бд');

                //новый элемент: (создается по типу того как лежит уже на стр элемент и данные для него тянутся из бд)

                const nextEvent = document.createElement('div');
                nextEvent.classList.add('eventList-mainPage');
                nextEvent.innerHTML = `
                 <div class='cards-event'>
                    <div>
                        <b>${title.value}</b><br />
                         ${description.value} 
                    </div>                                       

                    <div>
                        <button><a href='/events/${eventFromAdmin.eventNew.id}'>✏️</a></button> 
                        <button class='deleteEvent red-btn' data-id = ${eventFromAdmin.eventNew.id} > ❌ </button>
                        </div>                                                             
                                   
                        </div> 
                        <br />   
                `
                eventsList.append(nextEvent);
                newEvent.innerHTML = '' //убираем форму


                const deleteEvent = document.querySelectorAll(".deleteEvent"); 

                console.log(deleteEvent,'это все кнопки удаления');

                deleteEvent.forEach((del) => {
                  del.addEventListener("click", async (event) => {
                    event.preventDefault();     
                    try {        
                      const { id } = event.target.dataset;//конкретная кнопка удаления

                      if(event.target.dataset){console.log('конкретная кнопка удаления');}
                      
                      const delCurrentEvent = await fetch(`/events/${id}`, //путь 
                        {
                          method: "DELETE",
                          headers: { "Content-type": "application/json" },
                          body: JSON.stringify({id}),
                        }
                      )
                      const data = await delCurrentEvent.json();
                      console.log(data,'data!!!');
                      if (data.message === "OK") {      
                        del.parentNode.parentNode.remove();        
                      }
                    } catch (error) {
                      console.error(error);
                    }

                  });

                }); 

            }       
        } catch (error) {
            console.log('ERROR :', error);
        }
    })


    } 
  
  )




