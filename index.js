let express = require("express");
let app = express();

function welcomemessage(){
  return "Welcome to my message"
}

app.get('/welcome',(req,res)=>{
  res.send(welcomemessage())
})

function getGreetingMessage(username){
  return "Hello, " + username + "!"
}

app.get('/greet',(req,res)=>{
  let username = req.query.username
  res.send(getGreetingMessage(username))
})

function checkPassword(password){
  if(password.length > 15){
    return "Password is Strong"
  }else {
    return "Password is Weak"
  }
}

app.get('/check-password',(req,res)=>{
  let password = req.query.password
  res.send(checkPassword(password))
})

function calculateSum(num1,num2){
  let sum = num1 + num2
  return sum.toString();
}

app.get('/sum',(req,res)=>{
  let num1 = parseFloat(req.query.num1)
  let num2 = parseFloat(req.query.num2)
  res.send(calculateSum(num1,num2))
})

function checkSubscriptionStatus(username,subscribed){
  if(subscribed === "true"){
    return username + " is subscribed"
  }else{
    return username + " is not subscribed"
  }
}
 
app.get('/subscription-status',(req,res)=>{
  let username = req.query.username
  let subscribed = req.query.isSubscribed
  res.send(checkSubscriptionStatus(username,subscribed))
})

function calculatediscountedprice(price,discount){
  let finalprice = price - ((price * discount)/100)
  return finalprice.toString();
}

app.get('/discounted-price',(req,res)=>{
  let price = parseFloat(req.query.price)
  let discount = parseFloat(req.query.discount)
  res.send(calculatediscountedprice(price,discount))
})

function creategreetingmessage(age,gender,name){
  return "Hello , " + name + "! You are a " + age + " year old " + gender + "."
}

app.get('/personalise-greeting',(req,res)=>{
  let age = req.query.age
  let gender = req.query.gender
  let name = req.query.name
  res.send(creategreetingmessage(age,gender,name))
})

function EndPrice(price,discount,tax){
  let discountedprice = price - (price * (discount)/100)
  let FinalPrice = discountedprice + (discountedprice * (tax / 100))
  return FinalPrice.toString();
}

app.get('/final-price',(req,res)=>{
  let price = parseFloat(req.query.price)
  let discount = parseFloat(req.query.discount)
  let tax = parseFloat(req.query.tax)
  res.send(EndPrice(price,discount,tax))
})

function exercisetime(running,cycling,swimming){
  let totaltime = running + cycling + swimming
  return totaltime.toString();
  
}

app.get('/total-exercise-time',(req,res)=>{
  let running = parseFloat(req.query.running)
  let cycling = parseFloat(req.query.cycling)
  let swimming = parseFloat(req.query.swimming)
  res.send(exercisetime(running,cycling,swimming))
})





const port = 3000;
app.listen(port,()=>{
  console.log("Server is running on https://localhost:" + "port");
});