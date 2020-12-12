window.addEventListener('load', function(event) {

document.getElementById("submit").addEventListener("click", buttonGet);
})

function buttonGet(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById('lname').value;
  var appName = navigator.appName;
  var userInfo = window.navigator; //capture all navigator properties https://developer.mozilla.org/en-US/docs/Web/API/Navigator


  console.log('appname: ' + appName); //prints appname to log
  console.log('First name: ' + fname); //prints First name to log
  console.log('Last name: ' + lname); //prints Last name to log

//detects the Browser name and version
  navigator.sayswho= (function(){
      var ua= navigator.userAgent, tem,
      M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
          tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE '+(tem[1] || '');
      }
      if(M[1]=== 'Chrome'){
          tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
          if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
      M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
      return M.join(' ');
  })();

  console.log('Browser version:' + navigator.sayswho); //prints browser name and version
  console.log('OS: ' + navigator.platform); //prints info about OS
  console.log('Language of the browser: ' + navigator.browserLanguage); //prints Language used in browser
  console.log('Language used in OS: ' + navigator.userLanguage); //prints Language used in OS

}
