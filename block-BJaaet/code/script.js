let form = document.querySelector("form");

let input = document.querySelector('input')

let ul = document.querySelector('ul');

function handleSubmit(event) {
    event.preventDefault();
    let movie = event.target.elements.moviename.value;
    let li = document.createElement('li');
    li.innerText = movie;
    let small = document.createElement("small");
    small.innerText = "X";
    li.append(" ", small);
    ul.append(li);
    small.addEventListener("click", () => {
        small.parentElement.remove();
    });
}

form.addEventListener("submit", handleSubmit);