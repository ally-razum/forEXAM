const deleteEvent = document.querySelectorAll(".deleteEvent"); 

console.log(deleteEvent,'это все кнопки удаления');

deleteEvent.forEach((del) => {
  del.addEventListener("click", async (event) => {
    event.preventDefault();     
    try {        
      const { id } = event.target.dataset;//конкретная кнопка удаления

      if(event.target.dataset){console.log('yeaah');}
      
      const delCurrentEvent = await fetch(`/events/${id}`, 
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
