
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  /*
    The function takes the click action from the button

    Calls for the API
    Parses the the response and returns it on the page
  */

  
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200){
      //Parses the JSON respons
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>Something  went wrong</li>'
      }

      //Displays the reponse to the page
      document.querySelector('.jokes').innerHTML = output;

    }
  }

  xhr.send();

  e.preventDefault();
}