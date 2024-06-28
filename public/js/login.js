const loginForm = document.forms['loginForm']
console.log(loginForm,'loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', async(event) =>{
        event.preventDefault()
        const formData = Object.fromEntries( new FormData(loginForm))

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            window.location.assign('/')
        } else {
            const data = await res.json();
            alert('Incorrrect login')
        }


    })
}