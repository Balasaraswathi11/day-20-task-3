var button = document.querySelector(".btn");                  //selecting the button tag using its class name "btn"           
var para = document.querySelector(".para");                      //selecting the p tag using its class name "para" 
button.addEventListener("click", () => {                      // adding event listeners click  to button
    fetch("https://dog-api.kinduff.com/api/facts")            //fetching api from the dog facts
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();  // Convert the response to JSON
    })
    .then((data) => {
        console.log(data);  // Log the data to the console
       
        para.innerHTML = data.facts;                        //fetching the facts from api and passing it to the p tag using textcontent
                    para.classList.add("show");             //adding a class name show to the para
    })
    .catch((error) => {  // Handle any errors that occur during the fetch
        console.error("Error fetching data:", error);
    });
});