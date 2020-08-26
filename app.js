/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: '0',
      answers: {
        a: '11heelflip.png',
        b: '12bigspin.png',
        c: '13kickflip.png',
        d: '14halfcab.png'
      },
      img: 'images/13kickflip.png',
      correctAnswer: 'kickflip',
      gif: 'https://media.giphy.com/media/SWVn3mXwj8fOchallL/giphy.gif'
    },
    {
      question: '1',
      answers: {
        a: '21shuvit.png',
        b: '22varial-flip.png',
        c: '23tre-flip.png',
        d: '24no-comply.png'
      },
      img: 'images/23tre-flip.png',
      correctAnswer: '360 flip',
      gif: 'https://media.giphy.com/media/Y0DOHndhhxV2f7cpAH/giphy.gif'
    },
    {
      question: '2',
      answers: {
        a: '31laser-flip.png',
        b: '32pop-shuvit.png',
        c: '33z540-flip.png',
        d: '34hardflip.png'
      },
      img: 'images/31laser-flip.png',
      correctAnswer: 'laser flip',
      gif: 'https://media.giphy.com/media/icDgF4v8jEEC920qHy/giphy.gif'
    },
    {
      question: '3',
      answers: {
        a: '41underflip.png',
        b: '42full-cab.png',
        c: '43impossible.png',
        d: '44hardflip.png'
      },
      img: 'images/44hardflip.png',
      correctAnswer: 'hardflip',
      gif: 'https://media.giphy.com/media/eMa2KVfSmvDBUQgvfd/giphy.gif'
    },
    {
      question: '4',
      answers: {
        a: '51gazelle-flip.png',
        b: '52dolphin-flip.png',
        c: '53pressure-flip.png',
        d: '54impossible.png'
      },
      img: 'images/51gazelle-flip.png',
      correctAnswer: 'gazelle flip',
      gif: 'https://media.giphy.com/media/cLZLpq9KvUaU5azAXL/giphy.gif'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

function generateTemplate(qN) {
  return '<div class="main-parent"><ul class="question-and-score"><li id="question-number">Question Number: ' + (qN+1) + '/5</li><li id="score">Score: ' + (STORE.score) + '/5</li></ul><img src="' + (STORE.questions[qN].gif) + '" alt="slow motion skateboarding trick demo"><div class="correct"><p>Thats correct!<p/></div><div class="incorrect"><p>Thats incorrect, the correct answer is ' + (STORE.questions[STORE.questionNumber].correctAnswer) + '.<p/></div><div class="box"><p>What is the name of this trick?</p><div class="options"><input type="image" src="images/' + (STORE.questions[qN].answers.a) + '" alt="option a" aria-pressed="false" class="red-bg option"><input type="image" src="images/' + (STORE.questions[qN].answers.b) + '" alt="option b" aria-pressed="false" class="orange-bg option"></div><div class="options"><input type="image" src="images/' + (STORE.questions[qN].answers.c) + '" alt="option c" aria-pressed="false" class="green-bg option"><input type="image" src="images/' + (STORE.questions[qN].answers.d) + '" alt="option d" aria-pressed="false" class="blue-bg option"></div><button type="button" id="submit" class="submit">Submit</button><button type="button" id="next" class="next">Next</button></div></div>';

  /*

  '<div class="main-parent">
  
  <ul class="question-and-score">
    <li id="question-number">Question Number: ' + (qN+1) + '/5</li>
    <li id="score">Score: ' + (STORE.score) + '/5</li>
  </ul>


  <img src="' + (STORE.questions[qN].gif) + '" alt="slow motion skateboarding trick demo">
    
  <div class="correct"><p>Thats correct!<p/></div>
  <div class="incorrect"><p>Thats incorrect, the correct answer is ' + (STORE.questions[STORE.questionNumber].correctAnswer) + '.<p/></div>


  <div class="box">

    <p>What is the name of this trick?</p>
    <div class="options">
      <input type="image" src="images/' + (STORE.questions[qN].answers.a) + '" alt="option a" aria-pressed="false" class="red-bg option">
      <input type="image" src="images/' + (STORE.questions[qN].answers.b) + '" alt="option b" aria-pressed="false" class="orange-bg option">
    </div>
    <div class="options">
       <input type="image" src="images/' + (STORE.questions[qN].answers.c) + '" alt="option c" aria-pressed="false" class="green-bg option">
       <input type="image" src="images/' + (STORE.questions[qN].answers.d) + '" alt="option d" aria-pressed="false" class="blue-bg option">
    </div>

    <button type="button" id="submit" class="submit">Submit</button>
    <button type="button" id="next" class="next">Next</button>

  </div>
  
  </div>'

  */
}

function finalScoreTemplate() {
  return '<div class="main-parent"><img src="https://media.giphy.com/media/l4KhUsTvaxtBP3fzi/giphy.gif" alt="animated kickflip over trash can"><div class="box"><p><b>Your final score is: ' + (STORE.score) + '/5</b></p></div></div>';

  /*

  '<div class="main-parent">
  
  <img src="https://media.giphy.com/media/l4KhUsTvaxtBP3fzi/giphy.gif" alt="animated kickflip over trash can">

  <div class="box">
    <p><b>You're score is: ' + (STORE.score) + '/5</b></p>
  </div>
  
  </div>'

  */
}

/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  if (STORE.questionNumber < 5) {
    $('.main-parent').html(generateTemplate(STORE.questionNumber))
    $('.correct').hide();
    $('.incorrect').hide();
    $('.next').hide();
  } else {
    $('.main-parent').html(finalScoreTemplate)
  }
}

/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

function startQuiz() {
  $('.startQuiz').on('click', function(event) {
    event.preventDefault();
    STORE.quizStarted = true;
    $(this).closest('.main-parent').remove();
    render();
  });
}

function submitButton() {
  $('.main-parent').on('click', '.submit', function(event) {
    event.preventDefault();
    if( $('.selected').attr('aria-pressed') == 'true') {
      if ($('.selected').attr('src') == STORE.questions[STORE.questionNumber].img) {
        STORE.score += 1;
        render();
        $('.correct').show();
      } else {
        $('.incorrect').show();
      }
      STORE.questionNumber += 1;
      $('.submit').hide();
      $('.next').show();
    } else {
      alert('nothing is selected!')
    }
  });
}

function nextButton() {
  $('.main-parent').on('click', '.next', function(event) {
    event.preventDefault();
    $(this).closest('.main-parent').remove();
    render();
  });
}

function handleOptionClicks() {
  $('.option').attr('aria-pressed', false)
  $('.main-parent').on('click', '.option', function(event) {
    const pressed = $(this).attr('aria-pressed') === 'true';
    $('.option').not(this).removeClass('selected').attr('aria-pressed', false);
    $(this).toggleClass('selected').attr('aria-pressed', !pressed);
  });
}

function oneFunctionToRunThemAll() {
  startQuiz();
  handleOptionClicks();
  submitButton();
  nextButton();
}

$(oneFunctionToRunThemAll);