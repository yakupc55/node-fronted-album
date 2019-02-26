const express = require('express');
const router = express.Router();
const dizayn = require('./dizayn');
// uzak noktadaki json verisini okumak için lazım
const request = require('request');
/*let gelenVeri; //gelen verinin atılacağı değişken
let oku=(link)=>{
    request.get(link,  (error, response, body)=> {
        if (!error && response.statusCode == 200) {
            //adresten dönen string içeriği yeni adli değişkenimize attık
            gelenVeri= JSON.parse(body);
        }
    });
    return gelenVeri;
};*/

let deneme='[{"id":1,"id2":2,"name":"selçuk" }' +
    ',{"id":1,"id2":1,"name":"ahmet"},' +
    '{"id":3,"id2":1,"name":"pinar"}]';
/* GET home page. */
router.get('/test', (req, res, next)=>{
    res.json(dizayn.olustur([['id','==',1]],['id','name'],deneme));
    console.log(dizayn.olustur([['id','==',1]],['id','name'],deneme))
});

router.get('/test2', (req, res, next)=>{
    const calistir = ()=>{
        request.get('https://jsonplaceholder.typicode.com/albums',  (error, response, body)=> {
            if (!error && response.statusCode == 200) {
                //adresten dönen string içeriği yeni adli değişkenimize attık
                res.json(dizayn.olustur([['userId','==',1]],['id','title'],body));
            }else{
                res.json('{}');
            }
        });
    };
    calistir();

    });

router.get('/test3', (req, res, next)=>{
    const calistir = ()=>{
        request.get('https://jsonplaceholder.typicode.com/albums',  (error, response, body)=> {
            if (!error && response.statusCode == 200) {
                //adresten dönen string içeriği yeni adli değişkenimize attık
                let veri=dizayn.olustur([['userId','==',2]],['id','title'],body);
                res.send(dizayn.yayinla(["a",[["href","data","id"],["tagArasi","data","title"],["tagSonu","deger","<br>"]]],veri));
            }else{
                res.json('{}');
            }
        });
    };
    calistir();

});


router.get('/test4', (req, res, next)=>{
    let dizayn=[[[1,2,3]]];
    let durum=true;
    let derinlik=0;
    let degisken=dizayn;
    while(durum){
        console.log(typeof degisken);
        if((typeof degisken)=="object"){
            derinlik++;
            degisken=degisken[0];
        }
        else {
            durum = false;
        }
    }
    console.log("derinlik",derinlik);
    let icerik={};
    Object.assign(icerik,dizayn);
    res.send(icerik);
});

router.get('/myalbums', (req, res, next)=>{
    res.render('MyAlbums',{albums : "<a href='' >ahmet</a>"});
});


router.get('/okuma', (req, res, next) => {
    const calistir = ()=>{
        request.get('https://jsonplaceholder.typicode.com/albums',  (error, response, body)=> {
            if (!error && response.statusCode == 200) {
                //adresten dönen string içeriği yeni adli değişkenimize attık
               res.json(JSON.parse(body));
            }else{
               res.json('{}');
            }
        });
    };
    calistir();
});

router.get('/:user_id', (req, res, next)=>{
    let u_id=parseInt(req.params.user_id);
    const calistir = ()=>{
        request.get('https://jsonplaceholder.typicode.com/albums',  (error, response, body)=> {
            if (!error && response.statusCode == 200) {
                //adresten dönen string içeriği yeni adli değişkenimize attık
                // derinlik algılama vardır sorgu değer [[sorgu1],[sorgu2]] şeklinde oluşturulabilir
                let data=dizayn.olustur(['userId','==',u_id], ['id','title'],body);
                let veri=dizayn.yayinla(["a",
                    [["href","http://localhost:3000/"+u_id+"/#id#"]
                    ,["tagArasi","#title#"],["tagSonu","<br>"]]],data);
                res.render('MyAlbums',{albums : veri});
            }else{
                res.json('{}');
            }
        });
    };
    calistir();
});
router.get('/:user_id/:album_id', (req, res, next)=>{
    let u_id=parseInt(req.params.user_id);
    let a_id=parseInt(req.params.album_id);
    const calistir = ()=>{
        request.get('https://jsonplaceholder.typicode.com/albums',  (error, response, body)=> {
            if (!error && response.statusCode == 200) {
                request.get('https://jsonplaceholder.typicode.com/albums/ALBUM_ID/photos',  (error2, response2, body2)=> {
                    if (!error && response.statusCode == 200) {
                        //adresten dönen string içeriği yeni adli değişkenimize attık
                        const data = dizayn.olustur(['userId', '==', u_id], ['id', 'title'], body);
                        const veri = dizayn.yayinla(["a", [["href", "http://localhost:3000/"+u_id+"/#id#"],
                            ["tagArasi", "#title#"], ["tagSonu", "<br>"]]], data);

                        const data2 = dizayn.olustur(['albumId', '==', a_id],['id', 'thumbnailUrl'], body2);
                        const veri2 = dizayn.yayinla([
                            ["a",[["href","http://localhost:3000/"+u_id+"/"+a_id+"/#id#"],["tagSonu","\n"]]],
                            ["img", [["src","#thumbnailUrl#"],["class","small"],["tagSonu","\n"]]
                            ]
                        ], data2);

                        res.render('MyAlbums', {albums: veri, photos: veri2});
                    } });
            }else{
                res.json('{}');
            }

            });
    };
    calistir();
});
router.get('/:user_id/:album_id/:photo_id', (req, res, next)=>{
    const u_id=parseInt(req.params.user_id); const a_id=parseInt(req.params.album_id); const p_id=parseInt(req.params.photo_id);
    const calistir = ()=>{
        request.get('https://jsonplaceholder.typicode.com/albums',  (error, response, body)=> {
            if (!error && response.statusCode == 200) {
                request.get('https://jsonplaceholder.typicode.com/albums/ALBUM_ID/photos',  (error2, response2, body2)=> {
                    if (!error && response.statusCode == 200) {
                        //adresten dönen string içeriği yeni adli değişkenimize attık
                        const data = dizayn.olustur(['userId', '==', u_id], ['id', 'title'], body);
                        const veri = dizayn.yayinla(["a", [["href", "http://localhost:3000/"+u_id+"/#id#"],
                            ["tagArasi", "#title#"], ["tagSonu", "<br>"]]], data);
                        const data2 = dizayn.olustur(['albumId', '==', a_id],['id', 'thumbnailUrl',"url"], body2);
                        const veri2 = dizayn.yayinla([
                            ["a",[["href","http://localhost:3000/"+u_id+"/"+a_id+"/#id#"],["tagSonu","\n"]]],
                            ["img", [["src","#thumbnailUrl#"],["class","small"],["tagSonu","\n"]]
                            ] ], data2);
                        const url=dizayn.searchOne("id",p_id,data2,"url");
                        const urlVerisi='<img class=\"big\" src=\"'+url+'">';
                        res.render('MyAlbums', {albums: veri, photos: veri2,big: urlVerisi});
                    } });
            }else{
                res.json('{}');
            }

        });
    };
    calistir();
});
module.exports = router;