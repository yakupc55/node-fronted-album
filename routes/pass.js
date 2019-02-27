const list=[
    {user: "user1", pass: "pass1"},
    {user: "user2", pass: "pass2"},
    {user: "user3", pass: "pass3"},
    {user: "user4", pass: "pass4"},
    {user: "user5", pass: "pass5"},
    {user: "user6", pass: "pass6"},
    {user: "user7", pass: "pass7"},
    {user: "user8", pass: "pass8"},
    {user: "user9", pass: "pass9"},
    {user: "user10", pass: "pass10"}
];
let message="";
const messages={user:" username boş bırakılamaz. ",pass:" password boş bırakılamaz. "};
const noEmpty=(user,pass)=>{
    // console.log("gelen user",user);
    // console.log("gelen user tipi", typeof user);
    // console.log("gelen pass",pass);
    // console.log("gelen pass tipi", typeof pass);
    message="";
    let sonuc=true;
    if(user ==""|| user===null || (typeof user)==="undefined") {
        sonuc=false;
        message+=messages.user;
    }
    if(pass ==""|| pass===null || (typeof pass)==="undefined"){
        sonuc=false;
        message+=messages.pass;
    }
    return sonuc;
};
const pass=
{
    search: (user,pass)=> {
        let sonuc="username veya password hatalı girildi";
        if(noEmpty(user,pass)) {
            for (let z = 0; z < list.length; z++) {
                if (user === list[z].user && pass === list[z].pass){
                    sonuc = "success"; break;
                }// if sonu
            }// for sonu
        }//if sonu
        else{
            sonuc=message;
        }
        return sonuc;
    }
};


module.exports = pass;