let total = 0;
let strbuffer = "0";
let operator = null;

function setListeners() {
    //Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
        let buttons = document.querySelectorAll(".buttons");
        for (item of buttons) {
            item.addEventListener('click', function (event) {
                    buttonClicked(event.target.innerText);
                });
        //Hint: addEventListener might be useful.
        //Hint: event.target.innerText might be helpful. innerText return type is a string
        }
    }

    //Make sure to call setListeners!!!

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
        makesSymbol(valueClicked);
    } else {
        //Hint: call a function we just created!
      makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerText = strbuffer;
}

setListeners();


function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
    /*  If strbuffer is not 0, meaning there is a previous number typed in already, what should we display on the screen?
    Hint: How do we concatenate strings? If you are stuck, imagine typing in a "5" into the calculator, making strbuffer into "5". 
    Then imagine typing "3" into the calculator. Now "3" is value and strbuffer is still at "5", so strbuffer will now be 53.  */
        strbuffer += value;
    }
}

function makesSymbol(symbol) {
    //make functionality for symbol C
    //make functionality for symbol ← Hint: .substring might be helpful! 
    //make functionality for symbol = Hint: use operator variable. Also call a function we created already!
  if (symbol === "C") {
      total = 0;
      strbuffer = "0";
      operator = null;
  }
  else if (symbol === "←") {
      if (strbuffer.length === 1 || strbuffer === "0") {
          strbuffer = "0";
      }
      else {
          strbuffer = strbuffer.substring(0, strbuffer.length - 1);
      }
  }
  else if (symbol === "=") {
      calculations()
      operator = null;
      strbuffer = total.toString();
  }
    else { //make functionality if symbol is an operator
    const intBuffer = parseInt(strbuffer);
    if (total === 0) {
        total += intBuffer;
    } 
    else {
        strbuffer = "0";
    }
    operator = symbol;
    strbuffer = "0";
    }
}

function calculations() {
    const intBuffer = parseInt(strbuffer); // Hint: Use parseInt to convert string to integer
    if (operator === "+") {
        total += intBuffer;
    }
    else if (operator === "-") {
        total -= intBuffer;
    }
    else if (operator === "x") {
        total *= intBuffer;
    }
    else if (operator === null) {
        return;
    }
    else {
        total /= intBuffer;
    }
}