'use strict';

chrome.runtime.onInstalled.addListener(function() {
  setInterval(()=>{
    isItAlive(itsAlive, itsDead);
  }, 5000)
});

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


function itsDead() {
  chrome.browserAction.setIcon({path: 'icon_16_dead.png'});
};

function itsAlive(){
  chrome.browserAction.setIcon({path: 'icon_16.png'});
}


