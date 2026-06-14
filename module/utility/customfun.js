function login(name, pass, callback)
{
  if(name == 'admin' && pass == 12345)
  {
    callback();
    return {
      status : 200,
      msg : "login successful" 
    };
  }
  else{
    return {
      status : 401,
      msg : "invalid username and password please try again" 
    };
  }
}

function registration(name)
{
  if(name == "Anurag")
  {
    return "registered successfully" 
  }
  else{
    return "invalid name please try again" 
  }
}

// Dashboard Function
function dashboard()
{
  console.log("Dashboard Opened");
}

module.exports = {login, registration, dashboard};