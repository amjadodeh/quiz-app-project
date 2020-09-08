const STORE = {
  questions: [
    {
      question: '0',
      answers: {
        imga: '11heelflip.png',
        imgb: '12bigspin.png',
        imgc: '13kickflip.png',
        imgd: '14halfcab.png',
        a: 'heelflip',
        b: 'bigspin',
        c: 'kickflip',
        d: 'halfcab',
      },
      img: 'images/13kickflip.png',
      correctAnswer: 'kickflip',
      gif: 'https://media.giphy.com/media/SWVn3mXwj8fOchallL/giphy.gif',
    },
    {
      question: '1',
      answers: {
        imga: '21shuvit.png',
        imgb: '22varial-flip.png',
        imgc: '23tre-flip.png',
        imgd: '24no-comply.png',
        a: 'shuvit',
        b: 'varial flip',
        c: '360 flip',
        d: 'no comply',
      },
      img: 'images/23tre-flip.png',
      correctAnswer: '360 flip',
      gif: 'https://media.giphy.com/media/Y0DOHndhhxV2f7cpAH/giphy.gif',
    },
    {
      question: '2',
      answers: {
        imga: '31laser-flip.png',
        imgb: '32pop-shuvit.png',
        imgc: '33z540-flip.png',
        imgd: '34hardflip.png',
        a: 'laser flip',
        b: 'pop shuvit',
        c: '540 flip',
        d: 'hardflip',
      },
      img: 'images/31laser-flip.png',
      correctAnswer: 'laser flip',
      gif: 'https://media.giphy.com/media/icDgF4v8jEEC920qHy/giphy.gif',
    },
    {
      question: '3',
      answers: {
        imga: '41underflip.png',
        imgb: '42full-cab.png',
        imgc: '43impossible.png',
        imgd: '44hardflip.png',
        a: 'underflip',
        b: 'full cab',
        c: 'impossible',
        d: 'hardflip',
      },
      img: 'images/44hardflip.png',
      correctAnswer: 'hardflip',
      gif: 'https://media.giphy.com/media/eMa2KVfSmvDBUQgvfd/giphy.gif',
    },
    {
      question: '4',
      answers: {
        imga: '51gazelle-flip.png',
        imgb: '52dolphin-flip.png',
        imgc: '53pressure-flip.png',
        imgd: '54impossible.png',
        a: 'gazelle flip',
        b: 'dolphin flip',
        c: 'pressure flip',
        d: 'impossible',
      },
      img: 'images/51gazelle-flip.png',
      correctAnswer: 'gazelle flip',
      gif: 'https://media.giphy.com/media/cLZLpq9KvUaU5azAXL/giphy.gif',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

function generateTemplate(qN) {
  return (
    '<div class="main-parent"><ul class="question-and-score"><li id="question-number">Question Number: ' +
    (qN + 1) +
    '/5</li><li id="score">Score: ' +
    STORE.score +
    '/5</li></ul><img src="' +
    STORE.questions[qN].gif +
    '" alt="slow motion skateboarding trick demo" class="gif"><div class="box"><div class="correct"><p>Thats correct! This is a ' +
    STORE.questions[STORE.questionNumber].correctAnswer +
    '.<p/></div><div class="incorrect"><p>Thats incorrect, this is a ' +
    STORE.questions[STORE.questionNumber].correctAnswer +
    '.<p/></div><p class="q">What is the name of this trick?</p><form class="options"><input type="radio" id="optiona" name="option" value="' +
    STORE.questions[qN].answers.a +
    '"><img src="images/' +
    STORE.questions[qN].answers.imga +
    '" class="red-bg option" aria-pressed="false"><br><input type="radio" id="optionb" name="option" value="' +
    STORE.questions[qN].answers.b +
    '"><img src="images/' +
    STORE.questions[qN].answers.imgb +
    '" class="orange-bg option" aria-pressed="false"><br><input type="radio" id="optionc" name="option" value="' +
    STORE.questions[qN].answers.c +
    '"><img src="images/' +
    STORE.questions[qN].answers.imgc +
    '" class="blue-bg option" aria-pressed="false"><br><input type="radio" id="optiond" name="option" value="' +
    STORE.questions[qN].answers.d +
    '"><img src="images/' +
    STORE.questions[qN].answers.imgd +
    '" class="green-bg option" aria-pressed="false"></form><button type="button" id="submit" class="submit">Submit</button><button type="button" id="next" class="next">Next</button></div></div>'
  );

  /*

  '<div class="main-parent">
  
  <ul class="question-and-score">
    <li id="question-number">Question Number: ' + (qN+1) + '/5</li>
    <li id="score">Score: ' + (STORE.score) + '/5</li>
  </ul>


  <img src="' + (STORE.questions[qN].gif) + '" alt="slow motion skateboarding trick demo" class="gif">
    

  <div class="box">

    <div class="correct"><p>Thats correct! This is a ' + (STORE.questions[STORE.questionNumber].correctAnswer) + '.<p/></div>
    <div class="incorrect"><p>Thats incorrect, this is a ' + (STORE.questions[STORE.questionNumber].correctAnswer) + '.<p/></div>

    <p class="q">What is the name of this trick?</p>
    <form class="options">
      <input type="radio" id="optiona" name="option" value="' + (STORE.questions[qN].answers.a) + '">
      <img src="images/' + (STORE.questions[qN].answers.imga) + '" class="red-bg option" aria-pressed="false"><br>

      <input type="radio" id="optionb" name="option" value="' + (STORE.questions[qN].answers.b) + '">
      <img src="images/' + (STORE.questions[qN].answers.imgb) + '" class="orange-bg option" aria-pressed="false"><br>

      <input type="radio" id="optionc" name="option" value="' + (STORE.questions[qN].answers.c) + '">
      <img src="images/' + (STORE.questions[qN].answers.imgc) + '" class="blue-bg option" aria-pressed="false"><br>

      <input type="radio" id="optiond" name="option" value="' + (STORE.questions[qN].answers.d) + '">
      <img src="images/' + (STORE.questions[qN].answers.imgd) + '" class="green-bg option" aria-pressed="false">
    </form>

    <button type="button" id="submit" class="submit">Submit</button>
    <button type="button" id="next" class="next">Next</button>

  </div>
  
  </div>'

  */
}

function finalScoreTemplate() {
  return (
    '<div class="main-parent"><img src="https://media.giphy.com/media/l4KhUsTvaxtBP3fzi/giphy.gif" alt="animated kickflip over trash can" class="gif"><div class="box"><p><b>Your final score is: ' +
    STORE.score +
    '/5</b></p><button type="button" id="start" class="startQuiz">Start New Quiz</button></div></div>'
  );
}

/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  if (STORE.questionNumber < 5) {
    $('.main-parent').html(generateTemplate(STORE.questionNumber));
    $('.correct').hide();
    $('.incorrect').hide();
    $('.next').hide();
  } else {
    $('.main-parent').html(finalScoreTemplate);
    STORE.quizStarted = false;
    startQuiz();
  }
}

/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

function startQuiz() {
  $('.startQuiz').on('click', function (event) {
    event.preventDefault();
    STORE.quizStarted = true;
    STORE.questionNumber = 0;
    STORE.score = 0;
    $(this).closest('.main-parent').remove();
    render();
  });
}

function submitButton() {
  $('.main-parent').on('click', '.submit', function (event) {
    event.preventDefault();
    if ($('.selected').attr('aria-pressed') != 'false') {
      if (
        $('.selected')
          .attr('src')
          .includes(STORE.questions[STORE.questionNumber].img)
      ) {
        STORE.score += 1;
        render();
        $('.correct').show();
        $('.options').hide();
        $('.q').hide();
      } else {
        $('.incorrect').show();
        $('.options').hide();
        $('.q').hide();
      }
      STORE.questionNumber += 1;
      $('.submit').hide();
      $('.next').show();
    } else {
      alert('nothing is selected!');
    }
  });
}

function nextButton() {
  $('.main-parent').on('click', '.next', function (event) {
    event.preventDefault();
    $(this).closest('.main-parent').remove();
    render();
  });
}

function arrowKeyNavigation() {
  $('body').on('keydown', 'form', function (event) {
    const currentOption = document.activeElement;

    // enter
    if (event.which == 13) {
      event.preventDefault();
      console.log('enter pressed');
      $(currentOption).next('.option').click();
      $('.submit').click();
    }
  });
}

function handleOptionClicks() {
  $('.option').attr('aria-pressed', false);
  $('.main-parent').on('click', '.option', function (event) {
    const pressed = $(this).attr('aria-pressed') === 'true';
    $('.option').not(this).removeClass('selected').attr('aria-pressed', false);
    $(this).toggleClass('selected').attr('aria-pressed', !pressed);
  });
}

/********** OTHER FUNCTIONS **********/

function startScreen() {
  $('#main').html(
    '<div class="main-parent"><img src="https://media.giphy.com/media/xT0GqpNlINWjnQEXpC/giphy.gif" alt="slow motion skateboarding trick" class="gif"><div class="box"><p>This quiz will test your knowledge of skateboarding tricks.</p><button type="button" id="start" class="startQuiz">Start Quiz</button></div></div><div class="main-parent"></div>'
  );
}

/********** THE BEST FUNCTION OF THEM ALL **********/

function oneFunctionToRunThemAll() {
  startScreen();
  startQuiz();
  handleOptionClicks();
  submitButton();
  nextButton();
  arrowKeyNavigation();
}

$(oneFunctionToRunThemAll);
