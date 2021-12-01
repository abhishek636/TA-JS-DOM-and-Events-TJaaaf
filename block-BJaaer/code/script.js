let form = document.querySelector('form');

let userInfo = {};

function handleSubmit(event){
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.youLove = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.rating = form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;

    console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);