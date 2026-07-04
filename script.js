let text = localStorage.getItem("city") || "delhi";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=54945e9dedf4e63c6a9022d6a2df4651&units=metric`

fetch(url).then(response => response.json())
  .then(data =>
    update(data)
  ).catch(e => {
    console.log("not found")
  });


let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};

let date = today.toLocaleDateString("en-GB", options);
document.querySelector(".span1").textContent = date;

let search = document.querySelector(".icon1");
search.addEventListener("click", () => {
  let text = document.querySelector(".inp").value;


  let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=54945e9dedf4e63c6a9022d6a2df4651&units=metric`

  fetch(url).then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        localStorage.setItem("city", text);
        update(data);
      }
      else {
        alert("City Not Found");
      }
    }


    ).catch(e => {
      console.log("not found")
    });

})
function update(data) {
  console.log(data.cod);
  document.querySelector(".inp").value = "";
  document.querySelector(".delhi").textContent = data.name;
  document.querySelector(".temp2").textContent = data.main.temp;
  document.querySelector(".t").textContent = data.main.feels_like;
  document.querySelector(".h").textContent = `${data.main.humidity}%`;
  document.querySelector(".w").textContent = `${data.wind.speed}km/h`;
  document.querySelector(".p").textContent = `${data.main.pressure}pa`;
  document.querySelector(".temp1").textContent = data.weather[0].main;
}