const init = () => {
    const inputForm = document.querySelector('form');
    
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);

        const input =document.querySelector('input#searchById');
        fetch('http://localhost:3000/movies/${input.value}')
        .then(response => response.json())
        .then(data => {
         console.log(data);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);