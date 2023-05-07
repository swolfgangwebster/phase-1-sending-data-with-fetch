// Add your code here
function submitData(a,b) {
    let user = {name: a, email: b}

    fetch('http://localhost:3000/users', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })

    .then(resp => resp.json())
    .then(r => document.querySelector('h2').append(r.id))
    .catch(err => document.querySelector('h2').append(err))


}

document.querySelector('#submit').addEventListener('click', handle)

function handle(e) {
    e.preventDefault()
    a = document.querySelector("#name").value
    b = document.querySelector('#email').value
    submitData(a,b)
    document.querySelector("#name").value = ''
    document.querySelector('#email').value = ''
}