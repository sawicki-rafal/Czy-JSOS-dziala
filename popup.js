'use strict';

function isItAlive(itsAlive, itsDead){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4){
          if(xmlHttp.status == 200){
  
            itsAlive();
          } else {
  
            itsDead();
          }
        } else {
        }
    }
    xmlHttp.open("GET", "https://jsos.pwr.edu.pl/", true); 
    xmlHttp.send(null);
  }

document.addEventListener('DOMContentLoaded', function () {
    var status = document.querySelector(".status");
    isItAlive(() => {
        status.textContent = "Działa!"  
        status.classList.remove("dead");
        status.classList.add("git");
    }, 
    () => {
        status.textContent = "Nie działczy."
        status.classList.add("dead");
        status.classList.remove("git");
    })
});