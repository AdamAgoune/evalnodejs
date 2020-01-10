const form =document.getElementById('form') 
    if (form!= null) {
        form.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log(event)
        let newContact = document.getElementById('msg').value
        })
        
        fetch('/user', {
            method : 'POST' ,
            headers : {
                'Content-type' : 'application/json'
        },
        body : JSON.stringify({message : newContact})
        })
        }   
    