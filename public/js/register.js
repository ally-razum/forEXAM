const registerForm = document.forms['regForm']
console.log(registerForm,'regForm!');

if (registerForm) {
    registerForm.addEventListener('submit', async(event) =>{
        event.preventDefault()
        const formData = Object.fromEntries( new FormData(registerForm))
        console.log(formData,'formData');

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            window.location.assign('/')
        } else {
            const data = await res.json();
            console.log(data.message);
        }


    })
} 