  function addName (){
      var userName = prompt('Hello, what is your name?');
      console.log(userName);
      return '<h3>' + 'Hello' + userName + '!' +'</h3>'
    }

    function askQuestion(){

        var answer = confirm ('Do you need training for you and your dog?')
    var response;

    if (answer === true) {
        response = ('Well welcome to the right place');
    } {
        response = ('Check out our dogs');
    }

    return ('<h3>' + response + '<h3>')
    }

  
      function askQuestion(){
  
          var answer = confirm ('Do you need training for you and your dog?')
      var response;
  
      if (answer === true) {
          response = ('Well welcome to the right place');
      } {
          response = ('Check out our dogs');
      }
  
      return ('<h3>' + response + '<h3>')
      }