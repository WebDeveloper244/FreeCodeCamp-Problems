/*  
Make A Person
*/

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast
    };
    this.getFirstName = function() {
      return firstAndLast.split(' ')[0];
    };
    this.getLastName = function() {
      return firstAndLast.split(' ')[1];
    };
  };
  
  const bob = new Person('Bob Ross');
  // bob.getFullName(); 
  // bob.getFirstName();
  bob.getFirstName();
  console.log(bob.getLastName());
