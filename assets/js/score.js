// var printHighscores = document.querySelector('#highscores');
var clearButton = document.querySelector('#clearHighscore');
// printHighscores();

function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(localStorage.getItem('highscores'));
    
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {return b.score, a.score;});

    // loop through scores
      for (var i = 0; i < scores.length; i++){
       // create li tag for each high score
       var li=document.createElement('li');
       li.textContent= 

       document.getElementById('highscores').appendChild(li);
    }

      // display on page
      printHighscores.textcontent = highscores;
  }
  
  /// FUNCTION TO CLEAR SCORES ///
  function clearHighscores() {
  
    // remove an item from local storage
    localStorage.removeItem('removeScores');
    // reload the page
    location.reload();
  };
  
  /// CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION ///
  document.querySelector('#clearButton').addEventListener('clearHighscore')
  // run function when page loads
  printHighscores();