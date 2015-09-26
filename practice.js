//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
var me = {
  name : 'Paul Berrett',
  age : '25',
};

console.log("1. "+me.name);
//************************************************************************************************************************************************************************************************************************************************************************************************************************************

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band : 'Jack Johnson',
  food : 'pizza',
  person : 'Laura',
  book: 'Book of Mormon',
  movie: 'Lord of the Rings',
  holiday:'Christmas',
};

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car='Toyota';
favoriteThings.brand='Nike';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';
console.log("\n2. ",favoriteThings);

//************************************************************************************************************************************************************************************************************************************************************************************************************************************


/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = 'firstPocket';
backPack[item] = 'chapstick';

//After you do the above, alert your entire backPack object.

console.log("\n3. ",backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here

//************************************************************************************************************************************************************************************************************************************************************************************************************************************

//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: 'Paul',
  age: '25',
  height: '6 ft',
  gender: 'Male',
  married: 'nope',
  eyeColor: 'hazel',
  hairColor: 'brown',
};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

console.log('\n4. ');
for(var i in me){
  console.log('\t'+i);
}

//************************************************************************************************************************************************************************************************************************************************************************************************************************************

//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  Ocean_Avenue : 3 + 18/60,
  Only_One: 4 + 17/60,
  Way_Away: 3 + 22/60,
  Breathing: 3 + 38/60,
  Lights_And_Sounds: 3 + 28/60,
};

//Now, loop through your album object alerting every song title individually.

console.log('\n5. ');
for(var i in album){
  console.log("\t" + i);
}
//************************************************************************************************************************************************************************************************************************************************************************************************************************************

//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  Utah: 230000,
  Cal: 270000000000,
  Texas: 5000000000,
  Navada: 2098302,
  Montana: 10,
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

console.log("\n6. ");
for(var s in states){
  if(states[s] > 30000){
    console.log(s);
  }
}

//************************************************************************************************************************************************************************************************************************************************************************************************************************************


var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for(var key in user){
  console.log(user[key]);
  if(user[key]){
    delete user.key;
  }
}

console.log("\n7. ",user);
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here

//************************************************************************************************************************************************************************************************************************************************************************************************************************************

var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            console.log('\n8. Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.
user.name = 'Tyler S. McGinnis';
user.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayName method that's on the user object which will alert the users email
user.sayName();

//************************************************************************************************************************************************************************************************************************************************************************************************************************************

//Create an empty object called methodCollection.

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function (){
  console.log("\n9. Imagine I'm an alert 'Hello'");
};

methodCollection.logHello = function (){
  console.log("\tHello");
};

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();

//************************************************************************************************************************************************************************************************************************************************************************************************************************************

// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(name, birthday, ssn){
    this.name = name;
    this.birthday = birthday;
    this.ssn = ssn;
}

var paul = new MakePerson('Paul','Dec','secret');

console.log('\n10. ', paul);
//************************************************************************************************************************************************************************************************************************************************************************************************************************************

// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

function MakeCard(name, id, phone, pin, zip){
    this.name = name;
    this.id = id;
    this.phone = phone;
    this.pin = pin;
    this.zip = zip;
}

var card = new MakeCard('pj',123,321,4321,54231);
console.log('\n11. ',card);
  
//************************************************************************************************************************************************************************************************************************************************************************************************************************************

/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

function bindCard(person, creditcard){
  var customer = {};
  for (var i in person){
    console.log(i);
    customer[i] = person[i];
  }
  for (var j in creditcard){
    customer[j] = creditcard[i];
  }
}

var cp = new bindCard(paul,card);
console.log('\n12. ',card);
