class User{

  #password; 

  //create class constructor
  constructor(userName, password){
    this.userName = userName;
    this.#password = password;
  }
  showName()
  {
    console.log(this.userName);
  }
  showPass()
  {
    console.log(this.#password);
  }

  checkPassword(pws){
    return pws === this.#password;
  }

  login(uname, pws)
  {
    if(uname === this.userName && pws === this.#password )
    {
      
    }
  }
};

// create class object
let obj = new User("Ram sharma", 1212);

console.log(obj.checkPassword(1212));
console.log(obj.checkPassword(1234));

obj.userName = "Anurag";
obj.showName();

obj.password = "3434";
obj.showPass();  // 1212

console.log(obj.password)  // 3434

obj.login()