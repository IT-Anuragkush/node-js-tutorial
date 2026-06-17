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
    if(uname===this.username && pws===this.#password){
      console.log("Login successfully");
    }else{
      console.log("Login unsuccessfull");
    }
  }
};

//create class object
let obj=new User("ram sharma",1234);

console.log(obj.checkPassword(1212))
console.log(obj.checkPassword(1234))

obj.username="Raj singh";
obj.showName()

obj.password=34334;
obj.showPass()
console.log(obj.password)

obj.login("ram sharma",1234)
obj.login("Raj singh",1234)
obj.login("ram sharma",obj.password)