const headerContainer =  document.getElementById("header-container");
const footerContainer =  document.getElementById("footer-container");
const workTogether =  document.getElementById("work-together-section");

fetch("./partials/header.html")
    .then(response=> response.text())
    .then((data)=> {
        headerContainer.innerHTML = data;
    })
    
    fetch("partials/footer.html")
        .then(response=> response.text())
        .then((data)=> {
            footerContainer.innerHTML = data;
        })
    
    fetch("partials/together.html")
    .then(response=> response.text())
    .then((data)=> {
        workTogether.innerHTML = data;
    })