let block_items = document.getElementById('items');

/*AIzaSyC5ikY7UYpw_Z3t2SZiIt_lc2oSpfqsfuQ*/


let hour = document.createElement('p');
let min = document.createElement('p');
let sec = document.createElement('p');
hour.className = "timer";
min.className = "timer";
sec.className = "timer";
hour.className
let null_hour = 00; //ЧАСЫ
let null_min = 00; // МИНУТЫ
let null_sec = 00; //СЕКУНДЫ

setInterval(() => {
    if(null_hour<10)
    {
        hour.innerText = '0' + null_hour;
    }
    else{
        hour.innerHTML = null_hour;
    }
    if(null_min<10)
    {
        min.innerText = '0' + null_min;
    }
    else{
        min.innerHTML = null_min;
    }
    if(null_sec<10)
    {
        sec.innerText = '0' + null_sec;
    }
    else{
        sec.innerHTML = null_sec;
    }

    null_sec++
    if (null_sec >= 60) {
        null_min++
        null_sec = 0;
    }
    else if (null_min >= 60) {
        null_hour++
        null_min = 0;
    }
}, 1000);


function load_activity(){
    block_items.innerText = "";
    let column1= document.createElement('div');
    column1.className = 'column1';
    let news1= document.createElement('div');
    news1.className = 'news1';

    let news = document.createElement('div');
    news.className = 'news';

    let img = document.createElement('img');
    img.src = "Img/img1.png";
    img.className = 'img';
    

    let string1 = document.createElement('div');
    string1.className='string1';

    let img2 = document.createElement('img');
    img2.src = "Img/mes.svg";
    img2.className = 'img2';

    let t2 = document.createElement('p');
    t2.className = 't2';
    t2.textContent = "commented:";
    let t1 = document.createElement('p');
    t1.className = 'bluet1';
    t1.textContent = "Jason Anderson ";
    string1.append(img2, t1, t2)


    let string2 = document.createElement('div');
    string2.className='string2';

    let podstr2 = document.createElement('div');
    podstr2.className = 'podstr2';

    let img3 = document.createElement('img');
    img3.src = "Img/line.svg";
    img3.className = 'img3';

    let t3 = document.createElement('p');
    t3.className = 't3';
    t3.textContent = "Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.";

    let t4 = document.createElement('p');
    let t5 = document.createElement('p');
    t4.className = 't4';
    t5.className = 't5';
    t5.textContent = "10:30 am";
    t4.textContent = "- Jason, " + t5.textContent;

    podstr2.append(t3, t4);
    string2.append(img3, podstr2);


    let inf = document.createElement('div');
    inf.className = 'inf';

    let eyes = document.createElement('div');
    eyes.className='eyes';
    let comments = document.createElement('div');
    comments.className = 'comments';

    let imgeye = document.createElement('img');
    imgeye.src = "Img/eye.svg";
    let imgcom = document.createElement('img');
    imgcom.src = "Img/mes.svg";

    let eyecount = document.createElement('p');
    eyecount.textContent = "432";
    let comcount = document.createElement('p');
    comcount.textContent = "47";


    eyes.append(imgeye, eyecount);
    comments.append(imgcom, comcount);
    inf.append(eyes, comments);

    inf.append(eyes, comments);
    news.append(string1, string2, inf);

    news1.append(img, news);
    column1.append(news1);

    let news2 = document.createElement('div');
    news2.className = 'mininews';
    let news3 = document.createElement('div');
    news3.className = 'mininews';

    let string3 = document.createElement('p');
    let string4 = document.createElement('p');
    string3.className = 'string34';
    string4.className = 'string34';
    string3.textContent = "Sunset Sunset Sunset";
    string4.textContent = "Morning of Siberia";

    let ago1 = document.createElement('p');
    let ago2 = document.createElement('p');
    ago1.className = 'ago';
    ago2.className = 'ago';
    ago1.textContent = "53 minutes ago";
    ago2.textContent = "56 minutes ago";

    let img41 = document.createElement('img');
    img41.className = 'svgsize';
    img41.src = "Img/clock.svg";

    let img51 = document.createElement('img');
    img51.className = 'svgsize';
    img51.src = "Img/arow.svg";

    let img42 = document.createElement('img');
    img42.className = 'svgsize';
    img42.src = "Img/clock.svg";

    let img52 = document.createElement('img');
    img52.className = 'svgsize';
    img52.src = "Img/arow.svg";

    news2.append(string3, img41, ago1, img51);
    news3.append(string4, img42, ago2, img52);
    column1.append(news2,news3);

    block_items.append(column1);



    let column2 = document.createElement('div');
    column2.className = 'column2';

    /* Avatar */
    let UserInfo = document.createElement('div');
    UserInfo.className = 'UserInfo';

    let avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = "Img/Avatar.png";

    let name = document.createElement('p');
    name.className = 'name';
    name.textContent = "Hanna Dorman";

    let post = document.createElement('p');
    post.className = 'post';
    post.textContent = "UX/UI designer";

    let ref = document.createElement('div');
    ref.className = 'ref';
    let refimg1 = document.createElement('img');
    refimg1.src = "Img/telega.svg";
    let refimg2 = document.createElement('img');
    refimg2.className = 'refimg';
    refimg2.src = "Img/hh.svg";
    let refimg3 = document.createElement('img');
    refimg3.src = "Img/twit.svg";

    ref.append(refimg1,refimg2,refimg3);
    UserInfo.append(avatar, name, post, ref);
    column2.append(UserInfo);

    /*Navigation*/
    let navigation = document.createElement('div');
    navigation.className = 'navigation';

    let navhead = document.createElement('div');
    navhead.className = 'navhead';

    let text1 = document.createElement('p');
    text1.className = 'text1';
    text1.textContent = "Navigation";
    let arowup = document.createElement('img');
    arowup.src = "Img/arowup.svg";
    arowup.className = "arowup";
    navhead.append(text1, arowup);

    let line2 = document.createElement('div');
    line2.className ='line2';
    let line3 = document.createElement('div');
    line3.className ='line2';
    navigation.append(navhead);
    navigation.append(line2);

    let profile = document.createElement('div');
    profile.className = "bodynav";
    let primg = document.createElement('img');
    primg.src = "Img/face.svg";
    let title1 = document.createElement('p');
    title1.className = "title";
    title1.textContent = "My profile";
    profile.append(primg, title1);

    let balance = document.createElement('div');
    balance.className = "bodynav";
    let blimg = document.createElement('img');
    blimg.src = "Img/money.svg";
    let title2 = document.createElement('p');
    title2.className = "title";
    title2.textContent = "Balance";
    let title21 = document.createElement('p');
    title21.className = "title2";
    title21.textContent = "$ 1,430";
    balance.append(blimg, title2, title21);

    let conections = document.createElement('div');
    conections.className = "bodynav";
    let coimg = document.createElement('img');
    coimg.src = "Img/connections.svg";
    let title3 = document.createElement('p');
    title3.className = "title";
    title3.textContent = "Connections";
    let title31 = document.createElement('p');
    title31.className = "title3";
    title31.textContent = "29";
    conections.append(coimg, title3, title31);

    let friends = document.createElement('div');
    friends.className = "bodynav";
    let frimg = document.createElement('img');
    frimg.src = "Img/friends.svg";
    let title4 = document.createElement('p');
    title4.className = "title";
    title4.textContent = "Friends";
    friends.append(frimg, title4);

    let events = document.createElement('div');
    events.className = "bodynav";
    let evimg = document.createElement('img');
    evimg.src = "Img/events.svg";
    let title5 = document.createElement('p');
    title5.className = "title";
    title5.textContent = "Events";
    let title51 = document.createElement('p');
    title51.className = "title5";
    title51.textContent = "45";
    events.append(evimg, title5, title51);

    let settings = document.createElement('div');
    settings.className = "bodynav";
    let seimg = document.createElement('img');
    seimg.src = "Img/set.svg";
    let title6 = document.createElement('p');
    title6.className = "title";
    title6.textContent = "Account settings";
    settings.append(seimg, title6);
    

    navigation.append(profile, balance, conections, friends, line3, events, settings);
    column2.append(navigation);


    let share = document.createElement('div');
    share.className = "share";

    let sharehead = document.createElement('div');
    sharehead.className = 'navhead';

    let text11 = document.createElement('p');
    text11.className = 'text11';
    text11.textContent = "Share your thoughts";
    let arowup1 = document.createElement('img');
    arowup1.src = "Img/arowup.svg";
    arowup1.className = "arowup";
    sharehead.append(text11, arowup1);

    let line4 = document.createElement('div');
    line4.className ='line4';

    let textbox = document.createElement('textarea');
    textbox.className = "textbox";
    textbox.placeholder = "Enter your message..."

    let button = document.createElement('button');
    button.className = "btnsave";
    button.textContent = "Save";

    share.append(sharehead, line4, textbox, button);
    column2.append(share);
    block_items.append(column2);
}

function initMap(){
    block_items.innerText = "";
    let formap = document.createElement('div');
    formap.className = "map";
    let mapblock = document.createElement('div');
    mapblock.className = 'mapblock';

    let headmap= document.createElement('div');
    headmap.className="headmap";

    let text2 = document.createElement('p');
    text2.textContent = "Basic map";
    text2.className = "stringmap";

    let mapimg1 = document.createElement('img');
    let mapimg2 = document.createElement('img');
    let mapimg3 = document.createElement('img');

    mapimg1.src = "Img/arow.svg";
    mapimg2.src = "Img/reload.svg";
    mapimg3.src = "Img/krest.svg";

    mapimg1.className = "mapimg";
    mapimg2.className = "mapimg";
    mapimg3.className = "mapimg";

    headmap.append(text2, mapimg1, mapimg2, mapimg3);

    let options = {
        center: {lat: 56.735803, lng: 37.156884},
        zoom: 12
    }
    let map = new google.maps.Map(formap, options);
    mapblock.append(headmap, formap);
    block_items.append(mapblock);
}

function timer_load(){
    
    block_items.innerText = "";

    let timerblock = document.createElement('div');
    timerblock.className = "timerblock";

    let r1 = document.createElement('p');
    let r2 = document.createElement('p');
    r1.textContent = ":";
    r2.textContent = ":";
    let timer = document.createElement('p');
    timer.className = "timer";
    timer.textContent = "Timer"

    let numbers = document.createElement('div');
    numbers.className = "numbers";

    numbers.append(hour, r1, min, r2, sec)
    timerblock.append(timer, numbers);
    block_items.append(timerblock);
}