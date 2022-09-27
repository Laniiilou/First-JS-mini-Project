
var nameAnswer = prompt("Hi! What's your name?");
console.log('users name is:', nameAnswer);

var shopAnswer = prompt(nameAnswer + " -ready to go shopping?");
//If answer is yes (or any iteration of it stated below)//
if(shopAnswer == 'Yes'||shopAnswer == 'YES'|| shopAnswer == 'yes')


{
var moneyAnswer = prompt("Awesome! What kind of budget are we looking at? (£)");
}
//Range in budget >100 and <1000//
if(moneyAnswer > 100 && moneyAnswer < 1000)
{ alert("No problem!")
var listAnswer1 = prompt("What are 3 things you are planning on buying - 1st thing?");
console.log('users list is:', listAnswer1 );
var listAnswer2 = prompt("The 2nd thing?");
console.log('users list is:', listAnswer2 );
var listAnswer3 = prompt("The 3rd thing?");
console.log('users list is:', listAnswer3 );

var shoppingArray = [listAnswer1, listAnswer2, listAnswer3];
var shoppingText = shoppingArray.join(" and ")
console.log(shoppingText)
alert("Enjoy! "+ shoppingText)
}

//Range in budget >1000 //
else if (moneyAnswer > 1000)
{ alert("WOWZ£RS!!! Splurge Day!!!")
var listAnswer1 = prompt("What are 3 things you are planning on buying - 1st thing?");
console.log('users list is:', listAnswer1 );
var listAnswer2 = prompt("The 2nd thing?");
console.log('users list is:', listAnswer2 );
var listAnswer3 = prompt("The 3rd thing?");
console.log('users list is:', listAnswer3 );

var shoppingArray = [listAnswer1, listAnswer2, listAnswer3];
var shoppingText = shoppingArray.join(" and ")
console.log(shoppingText)
alert("Enjoy! "+ shoppingText)
}

//Range in budget 100 or less//
else if (moneyAnswer < 101)
{ alert("We love budget friendly shopping days!")
var listAnswer1 = prompt("What are 3 things you are planning on buying - 1st thing?");
console.log('users list is:', listAnswer1 );
var listAnswer2 = prompt("The 2nd thing?");
console.log('users list is:', listAnswer2 );
var listAnswer3 = prompt("The 3rd thing?");
console.log('users list is:', listAnswer3 );

var shoppingArray = [listAnswer1, listAnswer2, listAnswer3];
var shoppingText = shoppingArray.join(" and ")
console.log(shoppingText)
alert("Enjoy! "+ shoppingText)
}

//If answer is no (or any iteration of it stated below)//
else if(shopAnswer == 'No'||shopAnswer == 'NO'|| shopAnswer == 'no')

{
    alert("Aw...no problem at all. Maybe next time!!!");
} 
//any other answer//
else {
    alert("I wasn't expecting that answer");
} 