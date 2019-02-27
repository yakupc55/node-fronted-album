/*
Burdaki kodlar saf veri işlemesinden yararlanılarak yazıldığı için
5-6 saatlik bir süre zarfında kolayca yazılmıştır. Uzun kod satırlarına kanmayin yüksek oranda
açıklama satırı içerir. Hızlı yazılan bir algoritma olduğu için çok sıradan,dolamaçlı bir yapıya sahip
ve yavaş çalışan bir mekanizmaya sahip olabilir. Burdaki fonksiyonlar, tüm ihtimaller
çerçevesinde düşünülerek yazılmamıştır. ihtiyaç dahilinde yazılmıştır. Algoritmanın
tüm ihtimallere göre yazılması bir kütüphane boyutuna gelmesini sağlar.
Ayrıca hızlı bir algoritmalama olduğu için çoğu yerde yorum eksikliği vardır.
 */

//*********************
//  deneme amaçlı yazılan veriler başlama noktası
//*********************
/*let deneme='[{"id":1,"id2":2,"name":"selçuk" }' +
    ',{"id":1,"id2":1,"name":"ahmet"},' +
    '{"id":3,"id2":1,"name":"pinar"}]';

let yeni=JSON.parse(deneme);
 */

//*********************
//  deneme amaçlı yazılan veriler bitiş noktası
//*********************


//*********************
//  Test amaçlı yazılan Fonksiyonlar başlama noktası
//*********************
let degiskenAlgilayici=()=>{
    let veri="bu bir #id# ve buda bir url: #url# yani bu bir #id# buda bir url#url# daha ne olabilirki zaten #id# ve #url#";

    let degiskenler={id:1,url:"http://google.com"};
    // gönderilen verinin uzunluğu while işleminin sonlandırılımasında kullanılıyor
    let uzunluk=veri.length;
    // taranan verisi iki "#" işaret arasındaki mesafelerin belirlenmesinde kullanılıyor
    let taranan=0;
    // sonTaranan verisi while işleminin sonlandırılması ve yeni değişkenlerin bulunması işleminde kullanılıyor
    let sonTaranan=0;
    // enson üretilecek olan veri
    let sonYazi="";
    // kontrol verisi arama işleminin parçalanmış substring ile yapılmasını sağlıyor.
    // Bu işlem aslında yavaş bir yapı karekter karekter inceleme daha hızlı olabilir. Sonraki bir versiyon hazırlanırsa
    // lütfen bu öneriye dikkat etin (sanki bu kıytırık kodumu başkaları alıp geliştirekte :) vay lo loo)
    let kontrol=veri;
    //tara verileri özel değişken işaretlerinin karekter konumunlarını taşımak için kullanılıyor
    let tara,tara2;

    while(sonTaranan!=uzunluk){
        // console.log("ana kontrol verisi :",kontrol);
        // console.log("tarama takip değeri :",sonTaranan);

        //ilk tarama işlemini uyguluyoruz
        tara=kontrol.search("#");
        // eğer bulunan bir sonuc varsa değer -1 dönmemiştir. eğer yoksa değer -1 dönmüştür.
        if(tara>-1){
            //taranan değeri bulunan bir karekter sonrasına eşitliyoruz. Maksat o karekterin aramadan men edilmesi.
            taranan+=tara+1;
            // başlama olarak görülen ilk karekterden sonra, bitiş karekterini aramaya çalışıyoruz
            kontrol=kontrol.substring(taranan);
            // console.log("ikinci kontrol verisi :",kontrol);
            tara2=kontrol.search("#");
            if(tara>-1){
                // let incele1=veri.substring(0+sonTaranan,tara+sonTaranan);
                // let incele2=veri.substring(tara+1+sonTaranan,tara2+taranan+sonTaranan);
                // console.log("tara 1 değeri :",tara);
                // console.log("tara 2 değeri :",tara2);
                // console.log("incele 1 veri:",incele1);
                // console.log("incele 1 uzunluk:",incele1.length);
                // console.log("incele 2 veri:",incele2);
                // console.log("incele 2 uzunluk:",incele2.length);

                //değişken değerinden önceki verileri alıyoruz
                sonYazi+=veri.substring(0+sonTaranan,tara+sonTaranan);
                // değişken içindeki değeri ekleyerek devam ediyoruz.
                sonYazi+=degiskenler[veri.substring(tara+1+sonTaranan,tara2+taranan+sonTaranan)];
                // console.log("son yazi:",sonYazi);
                // sonTaranan değerimiz bitiş karekterinin bulunup o karekterden sonraki başlangıcı ifade ediyor
                sonTaranan+=tara2+1+taranan;
                // ilk ve son arasında ki değişken ismini bulmak için kullandığımız taranan verisini.
                //sonraki aramalarda kullanmak için sıfırlıyoruz.
                taranan=0;
                // console.log("son taranan verisi son hali.",sonTaranan);
                kontrol=veri.substring(sonTaranan);
                // console.log("son kontrol verisi :",kontrol);
            }
        }
        else{
            sonYazi+=kontrol;
            uzunluk=sonTaranan;
        }

    }
    // console.log(sonYazi);
};


//*********************
//  Test amaçlı yazılan Fonksiyonlar bitiş noktası
//*********************
let derinlikAlgila=(object)=>{
    let durum=true;
    let derinlik=0;
    let degisken=object;
    while(durum){
        if((typeof degisken)=="object"){
            derinlik++;
            degisken=degisken[0];
        }
        else {
            durum = false;
        }
    }
    return derinlik;
};

let derinlikYapilandir=(sonVeri,arananVeri)=>{
    // console.log("gelen veri",arananVeri);
    const derinlik=derinlikAlgila(arananVeri);
    // console.log("elde edilen",derinlik);
    if(derinlik<=1){
        sonVeri[0]=arananVeri;
    }
    else {
        sonVeri=arananVeri;
    }
    // console.log("son veri",sonVeri);
};
let derinlikOlustur=(arananVeri)=>{
    let veri=[];
     // console.log("gelen veri",arananVeri);
    const derinlik=derinlikAlgila(arananVeri);
     // console.log("elde edilen",derinlik);
    if(derinlik<=1){
        veri[0]=arananVeri;
    }
    else {
        veri=arananVeri;
    }
    return veri;
};
let degiskenAlgila=(veri,degiskenler)=>{
    let uzunluk=veri.length; let taranan=0; let sonTaranan=0; let sonYazi=""; let kontrol=veri;
    let tara,tara2;

    while(sonTaranan!=uzunluk){
        tara=kontrol.search("#");
        if(tara>-1){
            taranan+=tara+1;
            kontrol=kontrol.substring(taranan);
            tara2=kontrol.search("#");

            if(tara>-1){
                sonYazi+=veri.substring(0+sonTaranan,tara+sonTaranan);
                sonYazi+=degiskenler[veri.substring(tara+1+sonTaranan,tara2+taranan+sonTaranan)];
                sonTaranan+=tara2+1+taranan;
                taranan=0;
                kontrol=veri.substring(sonTaranan);
            }}
        else{
            sonYazi+=kontrol;
            uzunluk=sonTaranan;
        }}
    return sonYazi;
};
// Bu sorgu çoklayıcı fonksiyon birden fazla if sorgusu için kullanılmıştır
let sorguCoklayici=(degiskenler,aranan)=>{
    let sonuc=false;
    for(let i=0;i<degiskenler.length;i++){
        if(degiskenler[i]===aranan)
            sonuc=true;
    }
    return sonuc;
};
// if li yapılarda hızlı değer atamaları oluşturmaya yönelik bir sistendir
//eğer bu yapı kullanılamasaydı çok fazla if yazılmak zorunda kalınırdı(Şahşen yazdım da :).
let degerAta=(degiskenler,aranan,deger)=>{
    //değişkenlerden gelen keyleri sorgu için kullanıyoruz.
    let keys=Object.keys(degiskenler);
    let sonuc=false;
    for(let i=0;i<keys.length;i++){
        if(keys[i]===aranan) {
            degiskenler[keys[i]] = deger;
            sonuc=true;
            break;
        }
    }// for sonu
    return sonuc;
};


//çoklu if yerine oluşturulmuş hızlı tag yapılandırıcısı
let sonucId=-1;
const taglar={name:["a", "img"],
            bas:["<a ","<img "],
            son:["</a>",""]};
const ozNitelikler=["href","src","class","onclick"];
const konumlar={"tagArasi":"","tagSonu":"","tagBasi":""};

let tagBulucu=(aranan)=>{
    let sonuc=false;
    for(let i=0;i<taglar["name"].length;i++){
        if(taglar["name"][i]===aranan) {
            sonucId=i;
            sonuc=true;
            break;
        }
    }// for sonu
    return sonuc;
};
//d objesi nesnelerin içeriğinin daha net anlaşılmasında kullanılan bir operatör
let d={};
let nesne= {
    searchOne : (tip,aranan,nesne,gonderilen)=>{
        // console.log(nesne);
        console.log(nesne[0][tip]);
        console.log(aranan);
      for(let z=0;z<nesne.length;z++){
             if(nesne[z][tip]==aranan) {
                 console.log("buraya girildi");
                 return nesne[z][gonderilen];
             }
      }
      return "";
    },
    olustur : (sorguVerisi,eklenecekler,gelenDosya)=>{
        //gelen dosyayı her ihtimale karşı parseliyoruz
        let dosya=JSON.parse(gelenDosya);
        let cikti=[];
        let sorgu=derinlikOlustur(sorguVerisi);
        // console.log("aranan deger ",dosya.length);

        //kod da kolay okuna bilirlik için d objesine atamalar yapıyoruz. Burdan hızdan biraz feraget edilip
        // kolay okunurluğa yönelik bir yapı kullanılmaya çalışılmıştır. Gerçekte nasıl bir yöntem kullanılıyor
        // bununla ilgili pek bilgim yok ama ben kendimce böyle bir yöntem uydurdum :).
        // let sorgu=[]
        // derinlikYapilandir(sorgu,sorguVerisi);
        // console.log("sorgu değeri",sorgu);
        d.aranan=0; d.tip=1; d.deger=2;
        for(let j=0;j<dosya.length;j++) {
            let eslesenSorgu=0;
             // console.log("sorgulanan deger sayısı",sorgu.length);
            for (let i = 0; i < sorgu.length; i++) {
                let aranan = sorgu[i][d.aranan];
                // console.log("aranan deger :",sorgu[i][0]);
                let tip = sorgu[i][d.tip];
                // console.log("bulunan tip :",sorgu[i][1]);
                let deger = sorgu[i][d.deger];
                // console.log("karşılaştırılan deger :",sorgu[i][2]);
                if(tip ==="=" || tip ==="==" || tip ==="==="){
                    // console.log("buraya girildi aranan tip ");
                    // console.log("ilk sorgu :",dosya[j][aranan]);
                    // console.log("ikinci sorgu :",deger);
                    if(dosya[j][aranan] === deger){
                        // console.log("buraya girildi aranan deger ");

                        eslesenSorgu++;
                        // console.log("eslesenSorgu ",eslesenSorgu);
                    }//aranan değer if sonu
                    else{
                        eslesenSorgu=0;
                        break;
                    }
                }// aranan tip if sonu
                // else if daha sonra bu yapının geliştirilme işlemine bırakılmıştır.
            }// sorgu forları sonu
            if(eslesenSorgu==sorgu.length){
                let dizi= {};
                for(let k=0;k<eklenecekler.length;k++){
                    dizi[eklenecekler[k]]=dosya[j][eklenecekler[k]];
                }//eklenme durumu foru sonu
                cikti.push(dizi);
            }// eslesen sorgu durumu
        }//dosya foru sonu
        return cikti;
    }// fonskisyon sonu
    ,
    yayinla : (yapiVerisi,dosya)=>{
        let yazi="";
        // koda girmeden önce yapılan bir deneme alanı
        let tags=derinlikOlustur(yapiVerisi);
        // console.log("veri inceleme 1",tags);
        //dönüştürme yapısı burdan başlıyor.
        for(let i=0;i<dosya.length;i++){
            let icerikler=[];
            for(let f=0;f<tags.length;f++)
            {
                //öncelikle sadece linke göre yayınlama yapıyoruz.

                //kolay okunurluk için d objemizi kullanıyoruz
                // tüm ilk kodlama bitince d objesi degişkenlerle yer değiştirebilir.
                d.tag = 0;
                d.ozNitelik = 1;
                d.tip = 0;
                d.veri = 1;
                let icerik={};
                let konum=[];
                Object.assign(konum,konumlar);
                icerik.konum=konum;
/// buranın detaylı bir şekilde tekrar yapılandırılmaya ihtiyacı var.
                if (tagBulucu(tags[f][d.tag])) {
                    icerik.tagTipBas = taglar["bas"][sonucId];
                    icerik.tagTipSon = taglar["son"][sonucId];
                }// a tagına ait if sonu
                 // console.log("yapi 1 içeriği : ",yapi[1]);
                 // console.log("yapi 1 uzunluğu : ",yapi[1].length);
                let ozNitelik = tags[f][d.ozNitelik];
                icerik.oznitelikVerisi="";
                for (let j = 0; j < ozNitelik.length; j++) {
                    //yapi[1] objesinde 0=tip, 1=veritipi, 2=veri
                    // console.log("yapi 1 alt içerik : ",yapi[1][j]);

                    let islemDatasi = ozNitelik[j];
                    let islemTipi = islemDatasi[d.tip];

                    // console.log("yapi 1 alt içerik ilk deger : ",islemDatasi[0]);
                    let islemVerisi = degiskenAlgila(islemDatasi[d.veri], dosya[i]);
                    if (sorguCoklayici(ozNitelikler, islemTipi)) {
                        icerik.oznitelikVerisi += islemTipi + "='" + islemVerisi + "' ";
                    }//hsorgu çoklayıcı sonu
                    // gerekli değer atamaları inceleniyor
                    degerAta(icerik.konum, islemTipi, islemVerisi);

                }// yapi sonu
                icerikler[f]=icerik;
                // console.log("icerik verisi",icerik);
            }//tags sonu

            let donguYazisi="";
            for(let f=tags.length-1;f>-1;f--)
            {
                donguYazisi=icerikler[f].konum["tagBasi"] + icerikler[f].tagTipBas
                    + icerikler[f].oznitelikVerisi + ">"+donguYazisi+ icerikler[f].konum["tagArasi"]
                    + icerikler[f].tagTipSon + icerikler[f].konum["tagSonu"];
            }
            yazi+=donguYazisi;
        }// dosya foru sonu
        //her ihtimale karşı sıfırlanan veriler
        konumlar.tagArasi=""; konumlar.tagBasi=""; konumlar.tagSonu="";
        return yazi;
    }// fonksiyon sonu
};

module.exports = nesne;