// Script to fetch the navigation HTML content and inject it into the navbar div
const nav = document.querySelector('.navbar');

fetch('nav.html')
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.text();
    })
    .then(data => {
        nav.innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });     
    
