(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
{
title: 'Lovesick Girl',
artist: 'Blackpink',
album: 'BLACKPINKTHEALBUM',
cover: 'img/lovesickgirl.jpg',
mp3: 'mp3/lovesickgirl.mp3',
ogg: ''
},
{
title: 'WANNABE',
artist: 'ITZY',
album: 'ITz Me',
cover: 'img/WANNABE.jpg',
mp3: 'mp3/WANNABE.mp3',
ogg: ''
},
{
title: 'You(=I)',
artist: '볼빨간사춘기',
album: 'Full Album RED PLANET',
cover: 'img/you.jpg',
mp3: 'mp3/you.mp3',
ogg: ''
},
{
title: 'Alien',
artist: '이수현',
album: 'ALIEN',
cover: 'img/alien.jpg',
mp3: 'mp3/alien.mp3',
ogg: ''
},
{
title: '휘파람 Whistle',
artist: 'Blackpink',
album: 'SQUARE ONE',
cover: 'img/whistle.jpg',
mp3: 'mp3/whistle.mp3',
ogg: ''
},
{
title: '누구없소',
artist: 'LEE HI',
album: '24℃',
cover: 'img/noone.jpg',
mp3: 'mp3/noone.mp3',
ogg: ''
},
{
title: 'Super Power Girl',
artist: 'Moon Sung Nam',
album: 'Strong Woman Do Bong Soon, Pt. 7 (Original Television Soundtrack)',
cover: 'img/powergirl.jpg',
mp3: 'mp3/powergirl.mp3',
ogg: ''
},
{
title: 'I Mean',
artist: 'UNI.T(유니티)',
album: '',
cover: 'img/imean.jpg',
mp3: 'mp3/imean.mp3',
ogg: ''
},
{
title: 'BAAM',
artist: 'MOMOLAND(모모랜드)',
album: 'Fun to The World',
cover: 'img/baam.jpg',
mp3: 'mp3/baam.mp3',
ogg: ''
},
{
title: 'BBoom BBoom',
artist: 'MOMOLAND(모모랜드)',
album: 'GREAT!',
cover: 'img/bboom.jpg',
mp3: 'mp3/bboom.mp3',
ogg: ''
},
{
title: 'How You Like That',
artist: 'Blackpink',
album: 'BLACKPINKTHEALBUM',
cover: 'img/howulikethat.jpg',
mp3: 'mp3/howulikethat.mp3',
ogg: ''
},
{
title: 'Dingga(딩가딩가)',
artist: 'MAMAMOO(마마무)',
album: '',
cover: 'img/dingga.jpg',
mp3: 'mp3/dingga.mp3',
ogg: ''
},
{
title: 'Eight (에잇)',
artist: 'IU',
album: '',
cover: 'img/eight.jpg',
mp3: 'mp3/eight.mp3',
ogg: ''
},
{
title: '꿈인 듯 해 (You Are Like My Dream)',
artist: 'SinB (GFriend) ',
album: '도도솔솔라라솔 (Original Television Soundtrack) Pt. 2',
cover: 'img/uarelikemydream.jpg',
mp3: 'mp3/uarelikemydream.mp3',
ogg: ''
},
{
title: 'Loving You',
artist: '베이비소울,이미주,JIN (러블리즈)',
album: '도도솔솔라라솔 (Original Television Soundtrack) Pt. 3',
cover: 'img/uarelikemydream.jpg',
mp3: 'mp3/lovingu.mp3',
ogg: ''
},
{
title: 'Hello',
artist: 'Sohyang(소향)',
album: '18 again(18 어게인) OST Part.2',
cover: 'img/hello.jpg',
mp3: 'mp3/hello.mp3',
ogg: ''
},
{
title: 'One Person(한사람)',
artist: 'olji(솔지)',
album: '18 again(18 어게인) OST Part.4',
cover: 'img/oneperson.jpg',
mp3: 'mp3/oneperson.mp3',
ogg: ''
},
{
title: '하나면 돼요(The Only One)',
artist: '소유 (SOYOU)',
album: '18 again(18 어게인) OST Part.1',
cover: 'img/theonlyone.jpg',
mp3: 'mp3/theonlyone.mp3',
ogg: ''
},
{
title: 'Be ok',
artist: '아일',
album: '',
cover: 'img/beok.jpg',
mp3: 'mp3/beok.mp3',
ogg: ''
},
{
title: '아예 (Ah Yeah)',
artist: 'EXID',
album: '',
cover: 'img/ahyeah.jpg',
mp3: 'mp3/ahyeah.mp3',
ogg: ''
},
{
title: 'Maria',
artist: '화사',
album: '',
cover: 'img/maria.jpg',
mp3: 'mp3/maria.mp3',
ogg: ''
},
{
title: 'Wind Inside You(cover by Raon Lee)',
artist: '최현아',
album: '',
cover: 'img/windinsideu.jpg',
mp3: 'mp3/windinsideu.mp3',
ogg: ''
},
{
title: 'DUN DUN',
artist: 'EVERGLOW',
album: '',
cover: 'img/dundun.jpg',
mp3: 'mp3/dundun.mp3',
ogg: ''
},
{
title: 'Uh-Oh',
artist: '(G)I-DLE',
album: '',
cover: 'img/uhoh.jpg',
mp3: 'mp3/uhoh.mp3',
ogg: ''
},
{
title: 'Adios',
artist: 'EVERGLOW',
album: '',
cover: 'img/dundun.jpg',
mp3: 'mp3/adios.mp3',
ogg: ''
},
{
title: 'LION',
artist: '(G)I-DLE',
album: '',
cover: 'img/lion.jpg',
mp3: 'mp3/lion.mp3',
ogg: ''
},
{
title: 'Deja Vu',
artist: 'Dreamcatcher',
album: '',
cover: 'img/dejavu.jpg',
mp3: 'mp3/dejavu.mp3',
ogg: ''
},
{
title: 'Scar (흉터)',
artist: '김연지',
album: 'The Tale of Nokdu (조선로코 녹두전) OST PART 7',
cover: 'img/scar.jpg',
mp3: 'mp3/scar.mp3',
ogg: ''
},
{
title: 'Everyday, Everynight',
artist: '송지은',
album: '도도솔솔라라솔 OST Part.15',
cover: 'img/everydayeverynight.jpg',
mp3: 'mp3/everydayeverynight.mp3',
ogg: ''
},
{
title: 'SECRET',
artist: 'Yuju GFRIEND (유주(여자친구)) Feat. ISHXRK',
album: '앨리스 OST Part 1',
cover: 'img/secret.jpg',
mp3: 'mp3/secret.mp3',
ogg: ''
},
{
title: '별',
artist: '임한별',
album: '앨리스 OST Part 3',
cover: 'img/byeol.jpg',
mp3: 'mp3/byeol.mp3',
ogg: ''
},
{
title: 'Why (내 맘이 자꾸 왜 이래)',
artist: 'LEEXLEE',
album: '',
cover: 'img/why.jpg',
mp3: 'mp3/why.mp3',
ogg: ''
},
{
title: 'SOLO',
artist: 'JENNIE',
album: '',
cover: 'img/solo.jpg',
mp3: 'mp3/solo.mp3',
ogg: ''
},
{
title: 'Remember Me',
artist: 'Gummy',
album: '',
cover: 'img/rememberme.jpg',
mp3: 'mp3/rememberme.mp3',
ogg: ''
},
{
title: 'No',
artist: 'CLC',
album: 'No.1',
cover: 'img/no.jpg',
mp3: 'mp3/no.mp3',
ogg: ''
},
{
title: '뚜두뚜두 (DDU-DU DDU-DU)',
artist: 'BLACKPINK',
album: '',
cover: 'img/ddududdudu.jpg',
mp3: 'mp3/ddududdudu.mp3',
ogg: ''
},
{
title: '마지막처럼 (AS IF ITS YOUR LAST)',
artist: 'BLACKPINK',
album: '',
cover: 'img/asifitsyourlast.jpg',
mp3: 'mp3/asifitsyourlast.mp3',
ogg: ''
},
{
title: '불장난 (PLAYING WITH FIRE)',
artist: 'BLACKPINK',
album: '',
cover: 'img/playingwithfire.jpg',
mp3: 'mp3/playingwithfire.mp3',
ogg: ''
},
{
title: 'Left & Right',
artist: 'SEVENTEEN',
album: '',
cover: 'img/leftnright.jpg',
mp3: 'mp3/leftnright.mp3',
ogg: ''
},
{
title: 'Oh my god',
artist: '(G)I-DLE',
album: 'I trust',
cover: 'img/ohmygod.jpg',
mp3: 'mp3/ohmygod.mp3',
ogg: ''
},
{
title: 'Thumbs Up',
artist: 'MOMOLAND(모모랜드)',
album: '',
cover: 'img/thumbsup.jpg',
mp3: 'mp3/thumbsup.mp3',
ogg: ''
},
{
title: 'Say My Name',
artist: 'ANS',
album: '',
cover: 'img/saymyname.jpg',
mp3: 'mp3/saymyname.mp3',
ogg: ''
},
{
title: '날 보러 와요 (Come See Me)',
artist: 'AOA',
album: 'NEW MOON',
cover: 'img/comeseeme.jpg',
mp3: 'mp3/comeseeme.mp3',
ogg: ''
},
{
title: 'HIP',
artist: 'MAMAMOO (마마무)',
album: '',
cover: 'img/hip.jpg',
mp3: 'mp3/hip.mp3',
ogg: ''
},
{
title: '비올레타 (Violeta)',
artist: 'IZ*ONE',
album: '',
cover: 'img/violeta.jpg',
mp3: 'mp3/violeta.mp3',
ogg: ''
},
{
title: '환상동화 (Secret Story of the Swan)',
artist: 'IZ*ONE',
album: 'Oneiric Diary',
cover: 'img/storyswan.jpg',
mp3: 'mp3/storyswan.mp3',
ogg: ''
},
{
title: 'Dynamite',
artist: 'BTS',
album: '',
cover: 'img/dynamite.jpg',
mp3: 'mp3/dynamite.mp3',
ogg: ''
},
{
title: 'I CANT STOP ME',
artist: 'TWICE',
album: 'Eyes wide open',
cover: 'img/icantstopme.jpg',
mp3: 'mp3/icantstopme.mp3',
ogg: ''
},
{
title: 'HELICOPTER',
artist: 'CLC',
album: '',
cover: 'img/helicopter.jpg',
mp3: 'mp3/helicopter.mp3',
ogg: ''
},
{
title: 'Hobgoblin',
artist: 'CLC',
album: '',
cover: 'img/hobgoblin.jpg',
mp3: 'mp3/hobgoblin.mp3',
ogg: ''
},
{
title: 'HANN(Alone)',
artist: '(G)I-DLE',
album: '',
cover: 'img/alone.jpg',
mp3: 'mp3/alone.mp3',
ogg: ''
},
{
title: 'Senorita',
artist: '(G)I-DLE',
album: 'I MADE',
cover: 'img/senorita.jpg',
mp3: 'mp3/senorita.mp3',
ogg: ''
},
{
title: 'Egotistic',
artist: 'MAMAMOO(마마무)',
album: 'RED MOON',
cover: 'img/egotistic.jpg',
mp3: 'mp3/egotistic.mp3',
ogg: ''
},
{
title: 'PIRI',
artist: 'Dreamcatcher',
album: 'The End of Nightmare',
cover: 'img/piri.jpg',
mp3: 'mp3/piri.mp3',
ogg: ''
},
{
title: 'Dumb',
artist: 'BVNDIT',
album: '',
cover: 'img/dumb.jpg',
mp3: 'mp3/dumb.mp3',
ogg: ''
},
{
title: 'Dramatic',
artist: 'BVNDIT',
album: '',
cover: 'img/dramatic.jpg',
mp3: 'mp3/dramatic.mp3',
ogg: ''
},
{
title: 'Bon Bon Chocolat',
artist: 'EVERGLOW',
album: '',
cover: 'img/bonbonchocolat.jpg',
mp3: 'mp3/bonbonchocolat.mp3',
ogg: ''
},
{
title: 'TWIT',
artist: '화사',
album: '',
cover: 'img/twit.jpg',
mp3: 'mp3/twit.mp3',
ogg: ''
},
{
title: 'A SONG WRITTEN EASILY',
artist: 'ONEUS',
album: '',
cover: 'img/asongwritteneasily.jpg',
mp3: 'mp3/asongwritteneasily.mp3',
ogg: ''
},
{
title: 'THANXX',
artist: 'ATEEZ',
album: '',
cover: 'img/thanxx.jpg',
mp3: 'mp3/thanxx.mp3',
ogg: ''
},
{
title: 'Panorama',
artist: 'IZ*ONE',
album: 'Into the Stars',
cover: 'img/panorama.jpg',
mp3: 'mp3/panorama.mp3',
ogg: ''
},
{
title: 'MAGO 가사',
artist: 'GFRIEND',
album: '回:Walpurgis Night',
cover: 'img/mago.jpg',
mp3: 'mp3/mago.mp3',
ogg: ''
},
{
title: 'UR',
artist: '太妍(TAEYEON)',
album: 'I - The 1st Mini Album',
cover: 'img/ur.jpg',
mp3: 'mp3/ur.mp3',
ogg: ''
},
{
title: 'I',
artist: '太妍(TAEYEON)',
album: 'I - The 1st Mini Album',
cover: 'img/ur.jpg',
mp3: 'mp3/i.mp3',
ogg: ''
},
{
title: '불티 (Spark)',
artist: '太妍(TAEYEON)',
album: 'Purpose - The 2nd Album',
cover: 'img/spark.jpg',
mp3: 'mp3/spark.mp3',
ogg: ''
},
{
title: 'Pretty Savage',
artist: 'Blackpink',
album: '',
cover: 'img/prettysavage.jpg',
mp3: 'mp3/prettysavage.mp3',
ogg: ''
},
{
title: 'Love Letter',
artist: '볼빨간사춘기',
album: '',
cover: 'img/loveletter.jpg',
mp3: 'mp3/loveletter.mp3',
ogg: ''
},
{
title: '미래',
artist: 'Red Velvet (레드벨벳)',
album: '',
cover: 'img/future.jpg',
mp3: 'mp3/future.mp3',
ogg: ''
},
{
title: 'Running',
artist: '가호',
album: '',
cover: 'img/running.jpg',
mp3: 'mp3/running.mp3',
ogg: ''
},
{
title: 'My Love',
artist: '다비치',
album: '',
cover: 'img/mylove.jpg',
mp3: 'mp3/mylove.mp3',
ogg: ''
},
{
title: 'END GAME',
artist: 'Susan (수잔)',
album: '',
cover: 'img/endgame.jpg',
mp3: 'mp3/endgame.mp3',
ogg: ''
},
{
title: 'Black Mamba',
artist: 'aespa 에스파',
album: '',
cover: 'img/blackmamba.jpg',
mp3: 'mp3/blackmamba.mp3',
ogg: ''
},
{
title: '난 (Me)',
artist: '비비(BIBI) ',
album: '',
cover: 'img/me.jpg',
mp3: 'mp3/me.mp3',
ogg: ''
},
{
title: '봉환아(奉煥啊)',
artist: '노라조',
album: 'Mr. Queen (Original Television Soundtrack), Pt. 1',
cover: 'img/bonghwana.jpg',
mp3: 'mp3/bonghwana.mp3',
ogg: ''
},
{
title: '산다는 건',
artist: '홍진영',
album: 'Lots of Love',
cover: 'img/cheerup.jpg',
mp3: 'mp3/cheerup.mp3',
ogg: ''
},
{
title: '안돼요',
artist: '홍진영',
album: 'Never Ever',
cover: 'img/neverever.jpg',
mp3: 'mp3/neverever.mp3',
ogg: ''
},
{
title: '너를 그린다',
artist: '정세운',
album: '어쩌다 발견한 하루',
cover: 'img/neoleulgeulinda.jpg',
mp3: 'mp3/neoleulgeulinda.mp3',
ogg: ''
},
{
title: 'I GUESS I LOVE YOU (사랑하나봐요) ',
artist: '영은',
album: 'Love Revolution OST Part.5',
cover: 'img/iguessiloveu.jpg',
mp3: 'mp3/iguessiloveu.mp3',
ogg: ''
},
{
title: 'Run To You',
artist: 'LUCY',
album: 'Run To You (Run On OST Part.1)',
cover: 'img/runtoyou.jpg',
mp3: 'mp3/runtoyou.mp3',
ogg: ''
},
{
title: 'Meet Again 재회',
artist: '세정',
album: '경이로운 소문 OST Part2',
cover: 'img/meetagainkorea.jpg',
mp3: 'mp3/meetagainkorea.mp3',
ogg: ''
},
{
title: 'Close Your Eyes',
artist: '홍이삭',
album: '경이로운 소문 OST Part3',
cover: 'img/closeyoureyes.jpg',
mp3: 'mp3/closeyoureyes.mp3',
ogg: ''
},
{
title: 'Who I am',
artist: '최진솔',
album: '제발 그 남자 만나지 마요 OST Part.4',
cover: 'img/whoiam.jpg',
mp3: 'mp3/whoiam.mp3',
ogg: ''
},
{
title: 'CRY FOR ME',
artist: 'TWICE',
album: '',
cover: 'img/cryformetwice.jpg',
mp3: 'mp3/cryformetwice.mp3',
ogg: ''
},
{
title: '화(火花)',
artist: '(G)I-DLE',
album: 'I burn',
cover: 'img/hwaa.jpg',
mp3: 'mp3/hwaa.mp3',
ogg: ''
},
{
title: 'Odd Eye',
artist: 'Dreamcatcher',
album: '',
cover: 'img/oddeye.jpg',
mp3: 'mp3/oddeye.mp3',
ogg: ''
},
{
title: 'Celebrity',
artist: 'IU',
album: '',
cover: 'img/celebrityiu.jpg',
mp3: 'mp3/celebrityiu.mp3',
ogg: ''
},
{
title: '안아줄게',
artist: 'Golden Child',
album: '',
cover: 'img/an-ajulge.jpg',
mp3: 'mp3/an-ajulge.mp3',
ogg: ''
},
{
title: 'Im Not Cool',
artist: '현아 (HyunA)',
album: '',
cover: 'img/imnotcool.jpg',
mp3: 'mp3/imnotcool.mp3',
ogg: ''
},
{
title: 'Im Missing You',
artist: 'Sunjae(선재)',
album: '여신강림 OST Part 4',
cover: 'img/immissingyou.jpg',
mp3: 'mp3/immissingyou.mp3',
ogg: ''
},
{
title: 'Call Me Maybe',
artist: 'SAya(사야)',
album: '여신강림 OST Part 1',
cover: 'img/callmemaybe.jpg',
mp3: 'mp3/callmemaybe.mp3',
ogg: ''
},
{
title: '반박불가 (No diggity)',
artist: 'ONEUS(원어스)',
album: 'Devil',
cover: 'img/nodiggity.jpg',
mp3: 'mp3/nodiggity.mp3',
ogg: ''
},
{
title: 'Burn It',
artist: 'Golden Child',
album: '',
cover: 'img/burnitgoldenchild.jpg',
mp3: 'mp3/burnitgoldenchild.mp3',
ogg: ''
},
{
title: 'GOOD GIRL',
artist: '현아 (HyunA)',
album: '',
cover: 'img/imnotcool.jpg',
mp3: 'mp3/goodgirlhyuna.mp3',
ogg: ''
},
{
title: 'Here I am',
artist: '조현아',
album: 'Mr. Queen (Original Television Soundtrack), Pt. 3',
cover: 'img/hereiamost.jpg',
mp3: 'mp3/hereiamost.mp3',
ogg: ''
},
{
title: 'Forever (약속)',
artist: 'aespa 에스파',
album: '',
cover: 'img/foreveraespa.jpg',
mp3: 'mp3/foreveraespa.mp3',
ogg: ''
},
{
title: 'Where Are You(그대는 어디에)',
artist: '김나영',
album: 'Run On(런 온) OST Part.8',
cover: 'img/whereareyouostkr.jpg',
mp3: 'mp3/whereareyouostkr.mp3',
ogg: ''
},
{
title: 'Sour Candy',
artist: 'Lady Gaga, BLACKPINK',
album: '',
cover: 'img/sourcandy.jpg',
mp3: '',
ogg: 'mp3/sourcandy.ogg'
},
{
title: 'Love To Hate Me',
artist: 'BLACKPINK',
album: 'THE ALBUM',
cover: 'img/lovetohatemebp.jpg',
mp3: '',
ogg: 'mp3/lovetohatemebp.ogg'
},
{
title: 'STAY',
artist: 'BLACKPINK',
album: 'Square Two',
cover: 'img/staybp.jpg',
mp3: '',
ogg: 'mp3/staybp.ogg'
},
{
title: 'Forever Young',
artist: 'BLACKPINK',
album: 'Square Up',
cover: 'img/foreveryoungbp.jpg',
mp3: '',
ogg: 'mp3/foreveryoungbp.ogg'
},
{
title: 'PARANOIA',
artist: 'KANGDANIEL',
album: '',
cover: 'img/paranoiakangdaniel.jpg',
mp3: '',
ogg: 'mp3/paranoiakangdaniel.ogg'
},
{
title: 'Waiting for Spring',
artist: 'Kassy',
album: '',
cover: 'img/waitingforspringkassy.jpg',
mp3: '',
ogg: 'mp3/waitingforspringkassy.ogg'
},
{
title: 'ZERO:ATTITUDE',
artist: '소유 (SOYOU) X 아이즈원 (IZ*ONE)',
album: '',
cover: 'img/zeroattitudeizone.jpg',
mp3: '',
ogg: 'mp3/zeroattitudeizone.ogg'
},
{
title: 'Bicycle',
artist: '청하 (CHUNG HA)',
album: '',
cover: 'img/bicyclechungha.jpg',
mp3: '',
ogg: 'mp3/bicyclechungha.ogg'
},
{
title: 'Tears Of The Moon(달의 눈물)',
artist: 'Kang Tae Kwan(강태관)',
album: 'River Where the Moon Rises(달이 뜨는 강) OST Part.2',
cover: 'img/tearsofthemoonkangtaekwan.jpg',
mp3: '',
ogg: 'mp3/tearsofthemoonkangtaekwan.ogg'
},

{
title: '클리커 (Clicker)',
artist: '이승협 (J.DON)',
album: 'On The Track',
cover: 'img/clickerjdon.jpg',
mp3: '',
ogg: 'mp3/clickerjdon.ogg'
},
{
title: 'LA DI DA',
artist: 'EVERGLOW (에버글로우)',
album: '',
cover: 'img/ladidaeverglow.jpg',
mp3: '',
ogg: 'mp3/ladidaeverglow.ogg'
},
{
title: '바람이 불어와도 (Against The Wind)',
artist: '안예은(AHN YE EUN)',
album: '',
cover: 'img/tearsofthemoonkangtaekwan.jpg',
mp3: '',
ogg: 'mp3/againstthewindahnyeeun.ogg'
},
{
title: '미쳐(Crazy)',
artist: '4MINUTE',
album: '',
cover: 'img/crazy4minutes.jpg',
mp3: '',
ogg: 'mp3/crazy4minutes.ogg'
},
{
title: 'MELODY',
artist: 'ASH ISLAND',
album: '',
cover: 'img/melodyashisland.jpg',
mp3: '',
ogg: 'mp3/melodyashisland.ogg'
},
{
title: '좋은 이별이 있을 리가 없잖아(Feat. 조현아 Of 어반자카파)',
artist: 'MC몽',
album: '',
cover: 'img/cantbegoodbreakupmc.jpg',
mp3: '',
ogg: 'mp3/cantbegoodbreakupmc.ogg'
},
{
title: '3!4!',
artist: 'SOYA (소야) & DinDin (딘딘)',
album: 'Hello, Me! (안녕? 나야!) OST Part 3',
cover: 'img/34soyadindin.jpg',
mp3: '',
ogg: 'mp3/34soyadindin.ogg'
},
{
title: 'My Last Love',
artist: '에일리(AILEE)',
album: 'SISYPHUS: the myth OST Part 3',
cover: 'img/mylastloveailee.jpg',
mp3: '',
ogg: 'mp3/mylastloveailee.ogg'
},
{
title: 'Stay: tempus',
artist: 'GSoul (지소울)',
album: 'SISYPHUS: the myth OST Part 1',
cover: 'img/staygsoul.jpg',
mp3: '',
ogg: 'mp3/staygsoul.ogg'
},
{
title: 'Someday 그 시간, 그 공간',
artist: '허각 Huh Gak',
album: 'Hello, Me! OST Part 4',
cover: 'img/somedayhuhgak.jpg',
mp3: '',
ogg: 'mp3/somedayhuhgak.ogg'
},
{
title: 'After School',
artist: 'Weeekly(위클리)',
album: '',
cover: 'img/afterschoolweekly.jpg',
mp3: '',
ogg: 'mp3/afterschoolweekly.ogg'
},
{
title: 'Timeless',
artist: 'BIBI (비비)',
album: '',
cover: 'img/timelessbibi.jpg',
mp3: '',
ogg: 'mp3/timelessbibi.ogg'
},
{
title: 'Ponzona',
artist: 'PURPLE KISS(퍼플키스)',
album: '',
cover: 'img/ponzonapurplekiss.jpg',
mp3: '',
ogg: 'mp3/ponzonapurplekiss.ogg'
},
{
title: 'House Party',
artist: 'SUPER JUNIOR',
album: '',
cover: 'img/housepartysuperjunior.jpg',
mp3: '',
ogg: 'mp3/housepartysuperjunior.ogg'
},
{
title: 'DO or NOT',
artist: 'PENTAGON',
album: '',
cover: 'img/doornotpentagon.jpg',
mp3: '',
ogg: 'mp3/doornotpentagon.ogg'
},
{
title: 'LILAC',
artist: 'IU',
album: '',
cover: 'img/lilaciu.jpg',
mp3: '',
ogg: 'mp3/lilaciu.ogg'
},
{
title: 'Skyline',
artist: '이소정 Lee Sojung',
album: '',
cover: 'img/skylineleesojung.jpg',
mp3: '',
ogg: 'mp3/skylineleesojung.ogg'
},
{
title: 'Coin',
artist: 'IU',
album: '',
cover: 'img/lilaciu.jpg',
mp3: '',
ogg: 'mp3/coiniu.ogg'
},
{
title: 'Elegante',
artist: 'Azer',
album: '',
cover: 'img/eleganteazer.jpg',
mp3: '',
ogg: 'mp3/eleganteazer.ogg'
},
{
title: 'Warning (Feat. lIlBOI)',
artist: '김세정',
album: '',
cover: 'img/warningkimsejeong.jpg',
mp3: '',
ogg: 'mp3/warningkimsejeong.ogg'
},
{
title: 'UNNATURAL',
artist: 'WJSN(우주소녀)',
album: '',
cover: 'img/unnaturalwjsn.jpg',
mp3: '',
ogg: 'mp3/unnaturalwjsn.ogg'
},
{
title: 'Like Water',
artist: 'WENDY 웬디',
album: '',
cover: 'img/likewaterwendy.jpg',
mp3: '',
ogg: 'mp3/likewaterwendy.ogg'
},
{
title: 'DADADA',
artist: 'LUNARSOLAR(루나솔라)',
album: 'SOLAR : rise',
cover: 'img/dadadalunarsolar.jpg',
mp3: '',
ogg: 'mp3/dadadalunarsolar.ogg'
},
{
title: 'We are',
artist: '이승윤(LEE SEUNG YOON)',
album: '〈로스쿨(LAW SCHOOL)〉 OST Part.1',
cover: 'img/weareleeseungyoon.jpg',
mp3: '',
ogg: 'mp3/weareleeseungyoon.ogg'
},
{
title: 'Shoulder Dance(어깨춤)',
artist: 'Lim Seo Won(임서원)',
album: '',
cover: 'img/shoulderdancelimseowon.jpg',
mp3: '',
ogg: 'mp3/shoulderdancelimseowon.ogg'
},
{
title: '외딴길에서 (On A Secluded Road)',
artist: 'Sondia(손디아), 김준휘(Kim Jun Hwi)',
album: '(언더커버 OST) Undercover OST Part 2',
cover: 'img/onasecludedroadsondiajunhwi.jpg',
mp3: '',
ogg: 'mp3/onasecludedroadsondiajunhwi.ogg'
},
{
title: 'All Day',
artist: 'Cha Ji Yeon(차지연)',
album: '모범택시(Taxidriver) OST Part.4',
cover: 'img/alldaychajiyeon.jpg',
mp3: '',
ogg: 'mp3/alldaychajiyeon.ogg'
},
{
title: 'In the morning',
artist: 'ITZY',
album: 'GUESS WHO',
cover: 'img/inthemorningitzy.jpg',
mp3: '',
ogg: 'mp3/inthemorningitzy.ogg'
},
{
title: 'We Are',
artist: 'Richard Parkers',
album: '',
cover: 'img/wearerichardparkers.jpg',
mp3: '',
ogg: 'mp3/wearerichardparkers.ogg'
},
{
title: 'Song of Destiny',
artist: '한예(HANYE)',
album: '',
cover: 'img/songofdestinyhanye.jpg',
mp3: '',
ogg: 'mp3/songofdestinyhanye.ogg'
},
{
title: 'MALO',
artist: 'SHAX (샥스)',
album: '',
cover: 'img/maloshax.jpg',
mp3: '',
ogg: 'mp3/maloshax.ogg'
},
{
title: 'Call Me (8282119)',
artist: 'OMEGA Ⅲ',
album: '',
cover: 'img/callmeomega3.jpg',
mp3: '',
ogg: 'mp3/callmeomega3.ogg'
},
{
title: '답답해 (No Answer)',
artist: 'LA LIMA',
album: '',
cover: 'img/noanswerlalima.jpg',
mp3: '',
ogg: 'mp3/noanswerlalima.ogg'
},
{
title: 'RUN AWAY',
artist: 'Simon Dominic',
album: '',
cover: 'img/runawaysimondominic.jpg',
mp3: '',
ogg: 'mp3/runawaysimondominic.ogg'
},
{
title: 'Shadow',
artist: 'Dreamcatcher(드림캐쳐) 시연, 다미',
album: '다크홀OST Part.2',
cover: 'img/shadowdreamcatcher.jpg',
mp3: '',
ogg: 'mp3/shadowdreamcatcher.ogg'
},
{
title: '내 마음이 너에게 닿았으면',
artist: '유성은',
album: 'Oh My Lady Lord OST Part 6',
cover: 'img/ifmyheartreachuusungeun.jpg',
mp3: '',
ogg: 'mp3/ifmyheartreachuusungeun.ogg'
},
{
title: 'Breaking Down',
artist: '에일리(AILEE)',
album: 'Doom at Your Service ( 어느 날 우리 집 현관으로 멸망이 들어왔다 ) OST Part 1',
cover: 'img/breakingdownailee.jpg',
mp3: '',
ogg: 'mp3/breakingdownailee.ogg'
},
{
title: 'Advice',
artist: 'TAEMIN 태민',
album: '',
cover: 'img/advicetaemin.jpg',
mp3: '',
ogg: 'mp3/advicetaemin.ogg'
},
{
title: '네가 분다 (When u blow)',
artist: '권민제(Kwon Minje)',
album: 'So I Married The Anti-fan OST Part.2',
cover: 'img/whenublowkwonminje.jpg',
mp3: '',
ogg: 'mp3/whenublowkwonminje.ogg'
},
{
title: 'Love Sight',
artist: 'TOMORROW X TOGETHER',
album: 'Doom at Your Service (Original Television Soundtrack) Pt. 2',
cover: 'img/lovesighttmrxtgr.jpg',
mp3: '',
ogg: 'mp3/lovesighttmrxtgr.ogg'
},
{
title: 'FIRST',
artist: 'EVERGLOW',
album: 'Last Melody',
cover: 'img/firsteverglow.jpg',
mp3: '',
ogg: 'mp3/firsteverglow.ogg'
},
{
title: 'Next Level',
artist: 'aespa',
album: '',
cover: 'img/nextlevelaespa.jpg',
mp3: '',
ogg: 'mp3/nextlevelaespa.ogg'
},
{
title: 'Like It Hot',
artist: '공원소녀 GWSN',
album: '',
cover: 'img/likeithotgwsn.jpg',
mp3: '',
ogg: 'mp3/likeithotgwsn.ogg'
},
{
title: 'HAPPEN (헤픈 우연)',
artist: 'HEIZE',
album: '',
cover: 'img/happenheize.jpg',
mp3: '',
ogg: 'mp3/happenheize.ogg'
},
{
title: 'Winter of May(오월의 겨울)',
artist: 'Kim Bumsoo(김범수)',
album: 'Youth of May OST Part 9',
cover: 'img/winterofmaykimbumsoo.jpg',
mp3: '',
ogg: 'mp3/winterofmaykimbumsoo.ogg'
},
{
title: 'I Got U',
artist: 'LUCY',
album: '',
cover: 'img/igotulucy.jpg',
mp3: '',
ogg: 'mp3/igotulucy.ogg'
},
{
title: 'Rain To Be(비를 몰고 오는 소년)',
artist: 'ONEWE',
album: '',
cover: 'img/raintobeonewe.jpg',
mp3: '',
ogg: 'mp3/raintobeonewe.ogg'
},
{
title: '치맛바람',
artist: 'Brave Girls',
album: 'SUMMER QUEEN',
cover: 'img/chimatbarambravegirl.jpg',
mp3: '',
ogg: 'mp3/chimatbarambravegirl.ogg'
},
{
title: '깨어나',
artist: 'Ailee',
album: '',
cover: 'img/kkaeeonaailee.jpg',
mp3: '',
ogg: 'mp3/kkaeeonaailee.ogg'
},
{
title: 'Don’t Turn Away',
artist: '유소나',
album: '결혼작사 이혼작곡2 OST Part 4',
cover: 'img/dontrunawayusona.jpg',
mp3: '',
ogg: 'mp3/dontrunawayusona.ogg'
},
{
title: '사랑해선 안되는 걸 알면서도',
artist: '유제이',
album: '결혼작사 이혼작곡2 OST Part 3',
cover: 'img/salanghaeseonandoeneungeolalmyeonseodoyujei.jpg',
mp3: '',
ogg: 'mp3/salanghaeseonandoeneungeolalmyeonseodoyujei.ogg'
},
{
title: '봄봄봄 (BOM BOM BOM)',
artist: '펀치(Punch)',
album: '멀리서 보면 푸른 봄OST Part 1',
cover: 'img/bombombompunch.jpg',
mp3: '',
ogg: 'mp3/bombombompunch.ogg'
},
{
title: 'I Wanna Be With You',
artist: 'Gummy',
album: 'Doom at Your Service (Original Television Soundtrack)Part 4',
cover: 'img/iwannabewithugummy.jpg',
mp3: '',
ogg: 'mp3/iwannabewithugummy.ogg'
},
{
title: 'I will show you(보여줄게)',
artist: 'Ailee',
album: '',
cover: 'img/iwillshowuailee.jpg',
mp3: '',
ogg: 'mp3/iwillshowuailee.ogg'
},
{
title: 'U & I',
artist: 'Ailee',
album: '',
cover: 'img/uniailee.jpg',
mp3: '',
ogg: 'mp3/uniailee.ogg'
},
{
title: 'Mind Your Own Business(너나 잘해)',
artist: 'Ailee',
album: '',
cover: 'img/mindurownusinessailee.jpg',
mp3: '',
ogg: 'mp3/mindurownusinessailee.ogg'
},
{
title: 'Make up your mind',
artist: 'Ailee',
album: 'LOVIN',
cover: 'img/makeupurmindailee.jpg',
mp3: '',
ogg: 'mp3/makeupurmindailee.ogg'
},
{
title: '품',
artist: '로시, 한승윤',
album: '',
cover: 'img/pumrothyseungyun.jpg',
mp3: '',
ogg: 'mp3/pumrothyseungyun.ogg'
},
{
title: 'Life Is Still Going On',
artist: 'NCT DREAM',
album: '',
cover: 'img/lifeisstillgoingonctdream.jpg',
mp3: '',
ogg: 'mp3/lifeisstillgoingonctdream.ogg'
},
{
title: 'Let me be',
artist: '백지영(Baek Z Young)',
album: '펜트하우스3 OST　Part 2',
cover: 'img/letmebebaekzyoung.jpg',
mp3: '',
ogg: 'mp3/letmebebaekzyoung.ogg'
},
{
title: 'Foolish Love',
artist: 'MSG WANNABE (M.O.M)',
album: 'MSG WANNABE 1st Album',
cover: 'img/foolishlovemsg.jpg',
mp3: '',
ogg: 'mp3/foolishlovemsg.ogg'
},
{
title: 'Closer',
artist: 'LA LIMA (라리마)',
album: '',
cover: 'img/closerlalima.jpg',
mp3: '',
ogg: 'mp3/closerlalima.ogg'
},
{
title: 'DIAMOND',
artist: '스파클링 (Sparkling)',
album: '',
cover: 'img/diamondsparkling.jpg',
mp3: '',
ogg: 'mp3/diamondsparkling.ogg'
},
{
title: '별자리',
artist: 'SHAX, 티파티, 스파클링, LA LIMA',
album: '',
cover: 'img/byeoljaliimitation.jpg',
mp3: '',
ogg: 'mp3/byeoljaliimitation.ogg'
},
{
title: '악몽 (Nightmare)',
artist: 'Sondia(손디아)',
album: '',
cover: 'img/nightmaresondia.jpg',
mp3: '',
ogg: 'mp3/nightmaresondia.ogg'
},
{
title: 'Twenty-three (스물셋)',
artist: 'AKMU & IU',
album: '',
cover: 'img/twentythreeakmuiu.jpg',
mp3: '',
ogg: 'mp3/twentythreeakmuiu.ogg'
},
{
title: '낙하 (NAKKA)',
artist: 'AKMU & IU',
album: '',
cover: 'img/nakkaakmuiu.jpg',
mp3: '',
ogg: 'mp3/nakkaakmuiu.ogg'
},
{
title: 'BEcause',
artist: 'Dreamcatcher',
album: '',
cover: 'img/becausedreamcatcher.jpg',
mp3: '',
ogg: 'mp3/becausedreamcatcher.ogg'
},
];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.title+' - '+item.artist+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source id="myAudio" src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);
