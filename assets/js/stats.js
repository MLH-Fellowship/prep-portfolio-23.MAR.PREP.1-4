const url =
  "https://api.github.com/repos/MLH-Fellowship/prep-portfolio-23.MAR.PREP.1/contributors";

let fellowData = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    fellowData = data;
  })
  .then(() => {
    let str = "";
    fellowData.forEach(function (fellow) {
      let fellowName = "<td>" + fellow.login + "</td>";
      let fellowContributions = "<td>" + fellow.contributions + "</td>";
      str += "<tr>" + fellowName + fellowContributions + "</tr>";
    });
    document.getElementById("fellowContainer").innerHTML = str;
  })
  .catch(() => console.log("Error fetching data"));
