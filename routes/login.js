const express = require('express');
const router = express.Router();
const pass=require('./pass');
const app = express();
const session = require('express-session');
app.use (session({
    name : "login",
    proxy : true ,
    resave : true ,
    saveUninitialized : true
}));
/* GET home page. */
router.get('/', (req, res, next)=>{
    const user=req.session.user;
    // console.log("session verisi",user);
    if((user==="" || user===null || (typeof  user)==="undefined")) {
        return  res.redirect("login");
    }else{
        return  res.redirect("myalbums");
    }
});
router.get('/login', (req, res, next)=>{
    const user=req.session.user;
    // console.log("session verisi",user);
    if(!(user==="" || user===null || (typeof  user)==="undefined")) {
        return  res.redirect("myalbums");
    }else{
        res.render('login', {hata: ""});
    }
});
router.get('/logout', (req, res, next)=>{
    delete req.session.user;
    return  res.redirect("/");
});
router.post('/login', (req, res, next)=>{
   const deger= pass.search(req.body["username"],req.body["password"]);
    if(deger!="success") {
        res.render('login', {hata: deger});
    }
    else{
        req.session.user=req.body["username"];
        return  res.redirect("/");
    }
});

module.exports = router;
