// function SetUsername(username){
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username)                  // pass createUser context to the setusername to hold the useranme to the 
                                                        // createuser context
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);

 

//own code

function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log(username);
}

function createUser(username, email, password){
    SetUsername(username);
   
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// const code=new SetUsername('prashat');
// console.log(code);

console.log(SetUsername);