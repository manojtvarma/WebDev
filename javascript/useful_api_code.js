//1.Tab Change

window.addEventListener("visibilitychange",function(){
   switch(document.visibilityState){
     case 'prerender':console.log("Tab is pre-rendering");
                      break;
     case 'hidden': console.log("Tab is hidden");
                    break;
     case 'visible': console.log("Tab is focused");
                   break;
   }
});

//2.AJAX Code

var request = new XMLHttpRequest();
request.open("GET","https://github.com/manojtvarma",true);
request.onload = function(){
  if(this.status === 200){
    console.log(this.responseText);
  }
}
request.send();

//3. check cookies is enable or not.

if(navigator.cookieEnabled){
     console.log("Cookies Enabled");
}

//4.check user is online or offline
if(navigator.onLine){
     console.log("Online");	
}else{
     console.log("Offline");
}

//5.Copy Data to Clipboard

var button = document.querySelector('button');

button.addEventListener('click',function(){
  var txtInput = document.getElementById('txtInput');
  txtInput.focus();
  txtInput.select();
  /*data.setSelectionRange(0, txtInput.value.length);*/
  document.execCommand("copy");
});







