const updateEvent = document.forms['update']
console.log(updateEvent,'FORM FOUND');
if(updateEvent) {
    updateEvent.addEventListener('submit', async (event) => {
        try {
            event.preventDefault();
            const data = Object.fromEntries(new FormData (updateEvent))
            const response =  await fetch(`/events/${updateEvent.dataset.id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error("ERROR fetch");
              }          
            const result = await response.json();
            if (result.message === 'OK') {
                window.location.href = '/';
            }       

        } catch (error) {
            console.log('Error while UPD', error);
        }
    })
}