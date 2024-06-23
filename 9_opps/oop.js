const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
                                                            
// const userOne =  User("hitesh", 12, true)          // here useronOne is overwrights by userTwo because no use of or 
// const userTwo =  User("ChaiAurCode", 11, false)    // we can say no console
// console.log(userOne.constructor);
// console.log(userTwo);
// console.log(userOne);

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);


//console.log(userTwo);


console.log(userOne instanceof User);
console.log(userOne instanceof User);
const auto='prahant';
console.log(auto instanceof User);