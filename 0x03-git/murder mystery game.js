/* 
Directions:
For this quiz, you're going to help solve a fictitious murder mystery that happened here at Udacity! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.

Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:

sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
Afterwards, use this template to print a message to the console if the mystery was solved:

__________ did it in the __________ with the __________!
What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:

Mr. Parkes did it in the dining room with the knife!
Running Your Code
Enter the following in the terminal:

node murder-mystery.js
Testing Your Code
How will you know if your code works? Change the values of room and suspect and re-run the code. If the case is solved, you should get the solution printed in the console, e.g. "Ms. Van Cleve did it in the gallery with the trophy!".

If the case is not solved, you should get a message saying "The case is not solved!"

Expected Outcomes
room	        suspect	        Case is Solved?
dining room	    Mr. Parkes	    Yes
gallery	        Ms. Van Cleve	Yes
billiards room	Mrs. Sparr	    Yes
ballroom	    Mr. Kalehoff	Yes
billiards room	Ms. Van Cleve	No
dining room	    Mrs. Sparr	    No
ballroom	    Mr. Kalehoff	No
gallery	        Mr. Parkes	    No
*/

/*
 * Programming Quiz: Murder Mystery
 */

/*
 * QUIZ REQUIREMENTS
* QUIZ REQUIREMENTS
 * 1. Your code should have four variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output when the case is solved: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 */
// Solution
/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

const room = "billiards room";
const suspect = "Mrs. Sparr"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
let weapon = "";
let solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === 'dining room' && suspect === 'Mr. Parkes' /* your conditional goes here */) {
    weapon = 'knife';
  	solved= true;
} else if (room === 'gallery' && suspect === 'Ms. Van Cleve'/* your conditional goes here */) {
   weapon = 'tropy';
   solved= true;
} else if (room === 'billiards room' && suspect === 'Mrs. Sparr'/* your conditional goes here */) {
    weapon = 'pool stick';
  	solved= true;
} else {room === 'ballroom' && suspect === 'Mr. Kalehoff'
   weapon = 'poison';
   solved= true;
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect + ' did it in the ' +room + ' with the '+weapon+'!'/* your message goes here*/);
} else {
  console.log("The case is not solved!")
}
/* ****************************************** */