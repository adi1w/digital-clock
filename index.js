let timeText = document.getElementById("timeText");
let greetText = document.getElementById("greetText");

function function2() {
  
  const slotOne = document.getElementById("Wake").value;
  const slotTwo = document.getElementById("Lunch").value;
  const slotThree = document.getElementById("nap").value;
  const slotFour = document.getElementById("night").value;

  const date = new Date();
  const hours = date.getHours();

  let wakeTime =
    document.getElementById("Wake").options[
      document.getElementById("Wake").selectedIndex
    ].text;
  let lunchTime =
    document.getElementById("Lunch").options[
      document.getElementById("Lunch").selectedIndex
    ].text;
  let napTime =
    document.getElementById("nap").options[
      document.getElementById("nap").selectedIndex
    ].text;
  let nightTime =
    document.getElementById("night").options[
      document.getElementById("night").selectedIndex
    ].text;

  document.getElementById("wakeTime").textContent = wakeTime;
  document.getElementById("lunchTime").textContent = lunchTime;
  document.getElementById("napTime").textContent = napTime;
  document.getElementById("nightTime").textContent = nightTime;

 
  if (hours === parseInt(slotOne))
   {
    image = "./goodmorning.jpg"; 
    wakeTime.innerHTML;
  } 
  else if (hours === parseInt(slotTwo)) 
  {
    image = "./Group 5183@2x.jpg"; 
    timeText.innerHTML = `GOOD AFTERNOON !! TAKE SOME SLEEP`;

  } 
  else if (hours === parseInt(slotThree)) 
  {
    image = "./lunch_image@2x.jpg"; 
    timeText.innerHTML = `GOOD EVENING !!`;
    
  } 
  else if (hours === parseInt(slotFour)) 
  {
    image = "./goodnight.111.jpg";
    timeText.innerHTML = `GOOD NIGHT !!`;
   
  }
  
  document.getElementById("changeImage").src = image;
}
function showTime() {
  let showDisplayTime = new Date();
  let hours = showDisplayTime.getHours();
  let mins = showDisplayTime.getMinutes();
  let secs = showDisplayTime.getSeconds();
  let session = document.getElementById("session");

  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
  if ((hours + "").length === 1) {
    hours = "0" + hours;
  }
  if ((mins + "").length === 1) {
    mins = "0" + mins;
  }
  if ((secs + "").length === 1) {
    secs = "0" + secs;
  }

  document.getElementById("hours").innerHTML = hours + `<br>hours`;
  document.getElementById("mins").innerHTML = mins + `<br>mins`;
  document.getElementById("secs").innerHTML = secs + `<br>secs`;
  document.getElementById("changeImage").style.borderRadius = "10px";
}
setInterval(showTime, 1000);
function showChanges() {
  let Time = new Date();
  let hour = Time.getHours();

  
  if (hour > 5 && hour < 11) {
    image = "./goodmorning.jpg";
  }
  
  else if (hour > 10 && hour < 15) {
   
    greetText.innerHTML = `LET'S HAVE SOME LUNCH !!`;
  } else if (hour > 14 && hour < 19) {
   
    greetText.innerHTML = `STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!`;
  }

  else {
    greetText.innerHTML = `CLOSE YOUR EYES AND GO TO SLEEP`;
  }


}
setInterval(showChanges, 1000);
