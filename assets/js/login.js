$(document).ready(function () {

});

async function iniciarSesion() {
    let login = {
        numDocOrEmail: document.getElementById("iDNIEmail").value,
        password: document.getElementById("iPassword").value
    };

    const response = await fetch('https://transsurf-api.herokuapp.com/api/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"numDocOrEmail":"77531657","password":"password"})
    });
    const content = await response;

    console.log(content);
}
