var rows=0; //number of rows
var referenceNum=0; //Number used to set the id of the generated labels, textfields, and buttons

/**
 * First checks to see if options have already been generated
 * Then it generates the test which contains: labels,textfields, and buttons
 */
function generateOptions(){
    //clear area if needed
    clearArea();
    //get the base number
    var selectedBaseNumber=document.getElementById('num1').value;
    //get the number of rows
    var selectedNumberOfRows=document.getElementById('num2').value;
    //turn the inputted number of rows into an int for easier reference
    rows=parseInt(selectedNumberOfRows,10);
    //Get the operator
    var operator=document.getElementById('operator').value;
    
    //Start generating the test
    for(var alpha=1;alpha<rows+1;alpha++){
        //increment count for number of options
        referenceNum++;
        var node = document.createElement('div');
        //generate the label,textfield,and button
        node.innerHTML = '<label id="labelForCheck'+referenceNum+'" for="check' + referenceNum + '">'+ selectedBaseNumber+operator+referenceNum+'</label><input type="text" id="textfield' + referenceNum + '" name="textfield' + referenceNum + '"><button value='+referenceNum+' onclick="checkAnswer(this.value)" id="check' + referenceNum + '" name="check' + referenceNum + '">check</button>';
        document.getElementById('container2').appendChild(node);
    }
    
}

/**
 * Checks the answer inputted by the user
 * @param {int} num 
 */
function checkAnswer(num){
    //Gets inputted answer in string
    var inputAnswerString=document.getElementById('textfield'+num).value;
    //convert answer to int
    var inputAnswerNumber=parseInt(inputAnswerString);
    //get inputted base number
    var selectedBaseNumber=document.getElementById('num1').value;
    //Convert base number to int
    var thisNumber=parseInt(selectedBaseNumber,10);
    //Get the operator
    var operator=document.getElementById('operator').value;
    //convert reference number to int
    var otherNumber=parseInt(num,10);
    //Gets the answer
    var answer=getAnswer(thisNumber,otherNumber,operator);
    //if the user got the correct answer
    if(inputAnswerNumber==answer){
        //Let the user know that they got the correct answer
        alert("Correct!");
    }
    //if the user got the incorrect answer
    else{
        //Let the user know that they got the incorrect answer
        alert("Incorrect... the answer was: "+answer+", you put: "+inputAnswerNumber);
    }
    
}

/**
 * Filters through the possible operators and returns the calculation
 * @param {int} n1 
 * @param {int} n2 
 * @param {char} op 
 * @returns answer
 */
function getAnswer(n1,n2,op){
    switch(op){
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
        }
}

/**
 * Determines if there are already options
 * If so, deletes them
 */
function clearArea(){
    //check to see if options exist
    if (document.getElementById("labelForCheck1")&&document.getElementById("check1")&&document.getElementById("textfield1")) {
        //going through all of the options
        for(var bravo=1;bravo<=rows;bravo++){
            
            //initializing id of labels, textfields, and buttons
            var labelId="labelForCheck"+bravo;
            var buttonId="check"+bravo;
            var inputId="textfield"+bravo;

            //Getting the labels, textfields, and buttons
            var thisLabel=document.getElementById(labelId);
            var thisbutton=document.getElementById(buttonId);
            var thisinput=document.getElementById(inputId);
            
            //Removing the labels, textfields, and buttons
            thisLabel.remove();
            thisbutton.remove();
            thisinput.remove();
        }
        //reset the reference number because there are no options currently
        referenceNum=0;
      }
      
}