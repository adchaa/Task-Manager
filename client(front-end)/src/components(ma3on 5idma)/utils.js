function alphanumeric(ch)
{
 if(ch.match(/^[0-9a-zA-Z]+$/)) 
  {
   return true;
  }
else
  { 
   return false; 
  }
}
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}
function validepassword(pass)
{
    var low=false,up=false,special=false,number=false;
    for (var i=0;i<pass.length;i++)
    {
        if(pass[i]>="0"&&pass[i]<="9")
        {
            number=true;  
        }
        else if(pass[i]>="a"&&pass[i]<="z")
        {
            low=true;
        }
        else if(pass[i]>="A"&&pass[i]<="Z")
        {
            up=true;
        }
        else 
        {
            special=true;
        }
    }
    return number&&low&&up&&special; 
    
}
function verif(data)
{
    var error = [];
    error.push(alphanumeric(data.username)===false);
    error.push(ValidateEmail(data.mail)===false);
    error.push(validepassword(data.password)===false);
    error.push((data.password2===data.password)===false);
    error.push(data.tos===false);
    return error;

}
export default verif