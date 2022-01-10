function intro(){
    var name1, age, school, id;

    name1 = prompt("Enter your name: ");
    age = prompt("Enter age: ");
    school = prompt("Enter school: ");
    id = prompt("Enter schoool id: ")

    console.log('Student details: Name: ' + name1 + ' Age: ' + age + ' school: ' + school + ' ID ' + id);

    alert(name1 + ', thanks for your feedback.');

    //typeof operator

    //operator precedence

    let now = 2021;
    let birthYear = 1998;
    let fullAge = 18;

    var isFullAge = now - birthYear >= fullAge;

    console.log(isFullAge);
}
// intro();

/////CODING CHALLENGE 1///////////////////
function codingChallenge1(){
    var mark_BMI, mark_mass, mark_height;
    var john_BMI, john_mass, john_height = 150;

    mark_BMI = mark_mass / (mark_height^2);
    john_BMI = john_mass / (mark_height^2);

    console.log('Mark\'s BMI: ' + mark_BMI + '\nJohn\'s BMI: ' + john_BMI);
    
  
    if(mark_BMI > john_BMI){
        console.log('Mark has a larger BMI');
    }else {
        console.log('John has a larger BMI')
    }

    //USING TERNARY
    mark_BMI > john_BMI ? console.log('Defined: Mark has a larger BMI') : console.log('Undefined: John has a larger BMI');

    // FALSY VALUEs
    //undefined, null, 0, NaN, '' -- Not exactly false but produce a false result when evaluated under a TRUE or FALSE condition

    //=== is the strict comparison operator while  == does type coersion
}
// codingChallenge1();

//CODING CHALLENGE 3//
function codingChallenge3(){
    var j_game1 = 89, j_game2 = 120, j_game3 = 103;
    var m_game1 = 116, m_game2 = 94, m_game3 = 123;
    var r_game1 = 97, r_game2 = 94, r_game3 = 123;

    var j_avg = (j_game1 + j_game2 + j_game3)/3;
    var m_avg = (m_game1 + m_game2 + m_game3)/3;
    var r_avg = (r_game1 + r_game2 + r_game3)/3;

    // j_avg > m_avg ? console.log('John\'s teams won!') : console.log('Mark\'s teams won!');

    if(j_avg > m_avg && j_avg > r_avg){
        console.log('John\'s teams won!')
    }else if(m_avg > j_avg && m_avg > r_avg){
        console.log('Mark\'s teams won!')
    }else if(r_avg > m_avg && r_avg > j_avg){
        console.log('Mary\'s teams won!')
    }
    else if(j_avg === m_avg){
        console.log('DRAW between John and Mark');
    }else if(j_avg === r_avg){
        console.log('DRAW between John and Mary');
    }else if(m_avg === r_avg){
        console.log('DRAW between Mark and Mary');
    }
    else {
        console.log('INVALID DATA');
    }
}
// codingChallenge3();

function functionTut(){
    //Parameters -- Defined in the signature
    //Arguments -- those passed into the function
    var j_game1 = 89, j_game2 = 120, j_game3 = 103;
    var m_game1 = 116, m_game2 = 94, m_game3 = 123;
    var r_game1 = 97, r_game2 = 94, r_game3 = 123;

    var j_avg = (j_game1 + j_game2 + j_game3)/3;
    var m_avg = (m_game1 + m_game2 + m_game3)/3;
    var r_avg = (r_game1 + r_game2 + r_game3)/3;

    // j_avg > m_avg ? console.log('John\'s teams won!') : console.log('Mark\'s teams won!');

    if(j_avg > m_avg && j_avg > r_avg){
        return 'James';
    }else if(m_avg > j_avg && m_avg > r_avg){
        return 'Mark';
    }else if(r_avg > m_avg && r_avg > j_avg){
        return 'Mary';
    }
    else if(j_avg === m_avg){
        draw_arr = [];
        return draw_Arr['James', 'Mark']
    }else if(j_avg === r_avg){
        return draw_Arr['James', 'Mary']
    }else if(m_avg === r_avg){
        return draw_Arr['Mary', 'Mark']
    }
    else {
        console.log('INVALID DATA');
    }

}
// functionTut();

function logWinner(){
    var winner = functionTut();
    console.log(`${winner}\'s team won!`);
}
// logWinner();

function calculateAge(yob){
    return 2021 - yob;
}

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var remainingYears = 65 - age;

    if (remainingYears < 0){
        console.log(`${firstName} is already retired`);
    }else {
        console.log(`${firstName} retires in ${remainingYears} years.`);
    }
    
}

// yearsUntilRetirement(1989, 'Mike');

////////////FUNCTION DECLARATIONS////////////////////
//Can be called BEFORE they are initialized
// console.log(`${whatDoYouDo('teacher', 'Simon')}`);

function whatDoYouDo(job, firstName){
    switch(job){
        case 'teacher':
            return `${firstName} teaches kids how to code`;
        case 'designer':
            return `${firstName} designs beautiful websites`;
        case 'driver':
            return `${firstName} drives ubers in NYC`;
        default:
            return `Invalid inputs`
    }
}


/////////////FUNCTION EXPRESSIONS//////////////////
//Can only be called AFTER they are declared. Below the function
const whatDoYouDo2 = function(job, firstName){
    switch(job){
        case 'teacher':
            return `${firstName} teaches kids how to code`;
        case 'designer':
            return `${firstName} designs beautiful websites`;
        case 'driver':
            return `${firstName} drives a cab in NYC`;
        default:
            return `Invalid inputs`
    }
}
// console.log(`${whatDoYouDo2('designer', 'Ken')}`);

/////////////CODING CHALLENGE 3////////////////////
//A TIP CALCULATOR
function tipCal(){
    let bills = [124, 48, 268];

    function tipCalculator(bill) {
        var tip;
        if(bill < 50){
            tip = 0.2;
        }else if (bill >= 50 && bill <= 200){
            tip = 0.15;
        }else if (bill > 200){
            tip = 0.1;
        }else {
            console.log('INVALID BILL');
        }
        return tip * bill;
    }

    let tipsArray = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

    let billsArray = [bills[0] + tipsArray[0], bills[1] + tipsArray[1], bills[2] + tipsArray[2]];
    console.log(tipsArray, billsArray);
}
// tipCal();

///////////OBJECTS/////////////////////
function objectsFun(){
    const student = {
        firstName: 'Eric',
        lastName: 'Philip',
        status: 'Single',
        jobs: ['Software Engineer', 'Content Strategist', 'Businessman'],
        yearOfBirth: 1998,
        isMarried: false,
        calcAge: function(){  //Function expression
            this.age = 2021 - this.yearOfBirth;
        }
    }

    // student.firstName = 'Mike';

    student.calcAge();

    console.log(student)

    // console.log(student.calcAge(student.yearOfBirth));
}
// objectsFun();

////////CODING CHALLENGE 4//////////////////
function codingChallenge4(){
    let mark = {
        fullName: 'Mark Sn',
        mass: 57,
        height: 157,
        calcBMI: function(){
            this.bmi = this.mass/(this.height**2);
            return this.bmi;
        }
    }
    mark.calcBMI();

    let john = {
        fullName: 'John Sn',
        mass: 57,
        height: 157,
        calcBMI: function(){
            this.bmi = this.mass/(this.height**2);
            return this.bmi;
        }
    }
    john.calcBMI();

    if(mark.bmi > john.bmi){
        console.log(`${mark.fullName} has a higher BMI than ${john.fullName}. John\'s BMI = ${john.bmi.toFixed(4)}`);
    }else if(mark.bmi < john.bmi){
        console.log(`${mark.fullName} has a higher BMI than ${john.fullName}. Marks\'s BMI = ${mark.bmi.toFixed(4)}`);
    }else if(mark.bmi === john.bmi){
        console.log(`${john.fullName} and ${mark.fullName} have equal BMIs of ${john.bmi.toFixed(4)}`)
    } else {
        console.log(`FAILED`);
    }
}

////////CODING CHALLENGE 5//////////////

var johnObject = {
    objectName: 'John',
    bills: [124, 48, 268, 180, 42],
    newBills: [],
    tips: [],
    calcTips: function(){
        for(var i = 0; i < this.bills.length; i++){
            var tip;
            if(this.bills[i] < 50){
                tip = 0.2;
            }else if(this.bills[i] >= 50 && this.bills[i] < 200){
                tip = 0.15;
            }else{
                tip = 0.1
            }
            this.tips.push(tip * this.bills[i]);
            this.newBills.push(this.bills[i] + this.tips[i]);
        }
    }
}

johnObject.calcTips();
console.log(johnObject);

var markObject = {
    objectName: 'Mark',
    bills: [77, 375, 110, 45],
    newBills: [],
    tips: [],
    calcTips: function(){
        for(var i = 0; i < this.bills.length; i++){
            var tip;
            if(this.bills[i] < 50){
                tip = 0.2;
            }else if(this.bills[i] >= 50 && this.bills[i] < 200){
                tip = 0.15;
            }else{
                tip = 0.1
            }
            this.tips.push(tip * this.bills[i]);
            this.newBills.push(this.bills[i] + this.tips[i]);
        }
    }
}

markObject.calcTips();
console.log(markObject);

var avgTips = function(johnTips, markTips){
    //JOHN
    var johnTipsSum = 0;
    for(var i = 0; i < johnTips.length; i++){
        johnTipsSum += johnTips[i];
    }
    var johnAvgTips = johnTipsSum/johnTips.length;

    //MARK
    var markTipsSum = 0;
    for(var i = 0; i < markTips.length; i++){
        markTipsSum += markTips[i];
    }
    var markAvgTips = markTipsSum/markTips.length;

    if(johnAvgTips > markAvgTips) {
        console.log(`${johnObject.objectName} spent more on tips than ${markObject.objectName}`)
    }else{
        console.log(`${markObject.objectName} spent more on tips than ${johnObject.objectName}`)
    }

}
avgTips(johnObject.tips, markObject.tips);



//Coding challenge 7//

(function(){
    var Questions = function(qns, answers, correct){
        this.qns = qns;
        this.answers = answers;
        this.correct = correct;
    }

    Questions.qns = [
        'What\'s the name of this course tutor?',
        'Who was the first president of Kenya?',
        'Is Nairobi the capical city of Kenya?',
        'What is the hearbeat rate of a normal human?',
        'Between cat and dog, which pet is bigger?',
    ]
    
    Questions.answers = [
        ['Jonas', 'Mike', 'Steve'],
        ['Kibaki', 'Uhuru', 'Jomo'],
        [true, false],
        [65, 80, 56, 72],
        ['Dog', 'Cat']
    ]
    
    Questions.correct = [
        Questions.answers[0][0],
        Questions.answers[1][2],
        Questions.answers[2][0],
        Questions.answers[3][3],
        Questions.answers[4][0]
    ]

    var rightWrong = {
        correct: 'Correct!',
        wrong: 'Wrong!',
        elseResponse: 'Invalid input!'
    }

    var randomNum = Math.floor(Math.random() * Questions.qns.length);

    for(var i = 0; i < Questions.answers[randomNum].length; i++){
        console.log(`${i}: ${Questions.answers[randomNum][i]}`);
        
    }
    
    //Index of the entered value
    var playerAnswer = parseInt(prompt(Questions.qns[randomNum]));

    //Actual answer
    var actualAns = Questions.correct[randomNum];
    
    //Array with answers for the current random question
    var currentArrAns = Questions.answers[randomNum]

    if(currentArrAns.indexOf(actualAns) === playerAnswer){
        console.log(rightWrong.correct)
    }else if(currentArrAns.indexOf(actualAns) !== playerAnswer){
        console.log(rightWrong.wrong)
    }else {
        console.log(rightWrong.elseResponse);
    }  

})();

