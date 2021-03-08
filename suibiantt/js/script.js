(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
		{
title: 'Chenparty',
artist: 'Schnuffel',
album: 'Chenparty',
cover:'img/Chenparty.jpg',
mp3: 'mp3/Chenparty.mp3',
ogg: ''
},
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
title: 'Inside You',
artist: 'Milet',
album: 'Eyes',
cover: 'img/insideyou.jpg',
mp3: 'mp3/insideyou.mp3',
ogg: ''
},
{
title: 'We Can Get High',
artist: 'Galantis & Yellow Claw',
album: 'We Can Get High',
cover: 'img/wecangethigh.jpg',
mp3: 'mp3/wecangethigh.mp3',
ogg: ''
},
		{
title: '谪仙',
artist: '叶里',
album: '',
cover: 'img/zhexian.jpg',
mp3: 'mp3/zhexian.mp3',
ogg: ''
},
{
title: '虹',
artist: '菅田将暉',
album: '',
cover: 'img/niji.jpg',
mp3: 'mp3/niji.mp3',
ogg: ''
},
{
title: 'テルーの唄 (cover by 蒼莉奈)',
artist: '手嶌葵',
album: 'ゲド戦記歌集',
cover: 'img/teru.jpg',
mp3: 'mp3/teru.mp3',
ogg: ''
},
{
title: '同歸',
artist: '雲の泣',
album: '明教·劍網三',
cover: 'img/tonggui.jpg',
mp3: 'mp3/tonggui.mp3',
ogg: ''
},
{
title: 'Da zero a cento',
artist: 'Baby K',
album: '',
cover: 'img/dazeroacento.jpg',
mp3: 'mp3/dazeroacento.mp3',
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
title: '炎',
artist: 'LISA',
album: '炎',
cover: 'img/yan.jpg',
mp3: 'mp3/yan.mp3',
ogg: ''
},
{
title: 'Bless You',
artist: '家入レオ',
album: '',
cover: 'img/blessyou.jpg',
mp3: 'mp3/blessyou.mp3',
ogg: ''
},
{
title: '春はゆく',
artist: 'Aimer',
album: '春はゆく / marie',
cover: 'img/haruwayuku.jpg',
mp3: 'mp3/haruwayuku.mp3',
ogg: ''
},
{
title: 'DADDY ! DADDY ! DO ! feat. 鈴木愛理',
artist: '鈴木雅之',
album: 'ALL TIME ROCK N ROLL',
cover: 'img/daddy.jpg',
mp3: 'mp3/daddy.mp3',
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
title: 'ハルジオン',
artist: 'YOASOBI',
album: '',
cover: 'img/halzion.jpg',
mp3: 'mp3/halzion.mp3',
ogg: ''
},
{
title: '夜に駆ける',
artist: 'YOASOBI',
album: '',
cover: 'img/yorunikakeru.jpg',
mp3: 'mp3/yorunikakeru.mp3',
ogg: ''
},
{
title: '夜に駆ける - THE HOME TAKE (幾田りら)',
artist: 'YOASOBI',
album: '',
cover: 'img/yorunikakeru-c.jpg',
mp3: 'mp3/yorunikakeru-c.mp3',
ogg: ''
},
{
title: '再会',
artist: 'LISA x Uru',
album: '',
cover: 'img/saikai.jpg',
mp3: 'mp3/saikai.mp3',
ogg: ''
},
{
title: '月半小夜曲',
artist: '李克勤、周深',
album: '',
cover: 'img/yeban.jpg',
mp3: 'mp3/yeban.mp3',
ogg: ''
},
{
title: '梅香如故',
artist: '毛不易、周深',
album: '梅香如故 - 電視劇《如懿傳》片尾曲',
cover: 'img/meixiang.jpg',
mp3: 'mp3/meixiang.mp3',
ogg: ''
},
{
title: '无问',
artist: '周深',
album: '',
cover: 'img/wuwen.jpg',
mp3: 'mp3/wuwen.mp3',
ogg: ''
},
{
title: '无问 (现场版）',
artist: '刘乐瑶',
album: '',
cover: 'img/wuwen-c.jpg',
mp3: 'mp3/wuwen-c.mp3',
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
title: 'Eden',
artist: 'MONKEY MAJIK',
album: '',
cover: 'img/eden.jpg',
mp3: 'mp3/eden.mp3',
ogg: ''
},
{
title: '打上花火',
artist: 'DAOKO×米津玄師',
album: '打上花火',
cover: 'img/hanabi.jpg',
mp3: 'mp3/hanabi.mp3',
ogg: ''
},
{
title: '僕が死のうと思ったのは',
artist: '中島美嘉',
album: '',
cover: 'img/shinohodo.jpg',
mp3: 'mp3/shinohodo.mp3',
ogg: ''
},
{
title: '夢と葉桜',
artist: 'ヲタみん',
album: '',
cover: 'img/hazakura.jpg',
mp3: 'mp3/hazakura.mp3',
ogg: ''
},
{
title: '生きていたんだよな',
artist: 'あいみょん',
album: '',
cover: 'img/ikite.jpg',
mp3: 'mp3/ikite.mp3',
ogg: ''
},
{
title: 'Feeling So Good',
artist: 'Ashley Tisdale',
album: '',
cover: 'img/feelingsogood.jpg',
mp3: 'mp3/feelingsogood.mp3',
ogg: ''
},
{
title: 'Speechless (cover by 이수현)',
artist: 'Naomi Scott',
album: '',
cover: 'img/speechless.jpg',
mp3: 'mp3/speechless.mp3',
ogg: ''
},
{
title: 'Bidadari (cover by 蔡恩雨)',
artist: 'Ismail Izzani',
album: '',
cover: 'img/bidadari.jpg',
mp3: 'mp3/bidadari.mp3',
ogg: ''
},
{
title: 'Flashlight',
artist: 'Jessie J',
album: '',
cover: 'img/flashlight.jpg',
mp3: 'mp3/flashlight.mp3',
ogg: ''
},
{
title: 'Loved You Once',
artist: 'Clara Mae',
album: '',
cover: 'img/loveduonce.jpg',
mp3: 'mp3/loveduonce.mp3',
ogg: ''
},
{
title: 'Oh Yeah',
artist: 'Wildflowers feat. Christine Smit',
album: '',
cover: 'img/ohyeah.jpg',
mp3: 'mp3/ohyeah.mp3',
ogg: ''
},
{
title: 'Let Me Down Slowly',
artist: 'Alec Benjamin',
album: '',
cover: 'img/downslowly.jpg',
mp3: 'mp3/downslowly.mp3',
ogg: ''
},
{
title: 'Natural',
artist: 'Imagine Dragons',
album: '',
cover: 'img/natural.jpg',
mp3: 'mp3/natural.mp3',
ogg: ''
},
{
title: 'Monsters',
artist: 'Timeflies',
album: '',
cover: 'img/monsters.jpg',
mp3: 'mp3/monsters.mp3',
ogg: ''
},
{
title: '那年初夏',
artist: '任然',
album: '禁獵社 No. 1',
cover: 'img/nanianchuxia.jpg',
mp3: 'mp3/nanianchuxia.mp3',
ogg: ''
},
{
title: '魔鬼中的天使【中国好聲音】第一期',
artist: '康树龙',
album: '【中国好聲音】第一期',
cover: 'img/moguitianshi.jpg',
mp3: 'mp3/moguitianshi.mp3',
ogg: ''
},
{
title: '山海【中国好聲音】第一期',
artist: '黎真吾',
album: '【中国好聲音】第一期',
cover: 'img/shanhai.jpg',
mp3: 'mp3/shanhai.mp3',
ogg: ''
},
{
title: 'ถ้าเขาจะรัก (ยืนเฉยๆเขาก็รัก) (Enough)',
artist: 'First Anuwat',
album: '',
cover: 'img/enough.jpg',
mp3: 'mp3/enough.mp3',
ogg: ''
},
{
title: 'แฟนใหม่หน้าคุ้น',
artist: 'MAIYARAP ft. MILLI',
album: '',
cover: 'img/newfan.jpg',
mp3: 'mp3/newfan.mp3',
ogg: ''
},
{
title: 'Who I Am',
artist: 'Milet',
album: '',
cover: 'img/whoiammilet.jpg',
mp3: '',
ogg: 'mp3/whoiammilet.ogg'
},
{
title: 'ぼくらのレットイットビー 針原 翼 / はりーP (feat. 初音ミク) (cover by 梦音)',
artist: '針原 翼（はりーP）',
album: '',
cover: 'img/bokura.jpg',
mp3: 'mp3/bokura.mp3',
ogg: ''
},
{
title: 'マリーゴールド',
artist: 'あいみょん',
album: '',
cover: 'img/marigorudo.jpg',
mp3: 'mp3/marigorudo.mp3',
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
title: 'Secret Love',
artist: '安斉かれん',
album: '',
cover: 'img/secretlove.jpg',
mp3: 'mp3/secretlove.mp3',
ogg: ''
},
{
title: '群青',
artist: 'YOASOBI',
album: '',
cover: 'img/gunjo.jpg',
mp3: 'mp3/gunjo.mp3',
ogg: ''
},
{
title: '笑えれば (cover by さやカバー)',
artist: 'ウルフルズ',
album: '',
cover: 'img/waraeba.jpg',
mp3: 'mp3/waraeba.mp3',
ogg: ''
},
{
title: 'Etoile',
artist: 'OH MY GIRL',
album: '',
cover: 'img/etoile.jpg',
mp3: 'mp3/etoile.mp3',
ogg: ''
},
{
title: 'BLUE ROSE knows',
artist: 'MindaRyn',
album: '',
cover: 'img/blueroseknows.jpg',
mp3: 'mp3/blueroseknows.mp3',
ogg: ''
},
{
title: 'パプリカ',
artist: '米津玄師',
album: '',
cover: 'img/papurika.jpg',
mp3: 'mp3/papurika.mp3',
ogg: ''
},
{
title: '僕のこと (Covered by コバソロ & 鈴木瑛美子)',
artist: 'Mrs. GREEN APPLE ',
album: '',
cover: 'img/bokunokoto.jpg',
mp3: 'mp3/bokunokoto.mp3',
ogg: ''
},
{
title: 'マリーミー',
artist: 'Rude-α',
album: '',
cover: 'img/marimi.jpg',
mp3: 'mp3/marimi.mp3',
ogg: ''
},
{
title: 'おまじない',
artist: 'ほのかりん',
album: '',
cover: 'img/omajinai.jpg',
mp3: 'mp3/omajinai.mp3',
ogg: ''
},
{
title: 'ANIMA',
artist: 'ReoNa',
album: '',
cover: 'img/anima.jpg',
mp3: 'mp3/anima.mp3',
ogg: ''
},
{
title: 'Umbrella',
artist: 'SEKAI NO OWARI',
album: '',
cover: 'img/umbrella.jpg',
mp3: 'mp3/umbrella.mp3',
ogg: ''
},
{
title: '心做し [LIVE]',
artist: 'majiko / まじ娘',
album: '',
cover: 'img/kokoronashi.jpg',
mp3: 'mp3/kokoronashi.mp3',
ogg: ''
},
{
title: 'ひび割れた世界',
artist: 'majiko / まじ娘',
album: '',
cover: 'img/hibiwaretasekai.jpg',
mp3: 'mp3/hibiwaretasekai.mp3',
ogg: ''
},
{
title: '景色',
artist: '花譜',
album: '',
cover: 'img/keshiki.jpg',
mp3: 'mp3/keshiki.mp3',
ogg: ''
},
{
title: '嘘月',
artist: 'ヨルシカ',
album: '',
cover: 'img/usotsuki.jpg',
mp3: 'mp3/usotsuki.mp3',
ogg: ''
},
{
title: '裸の心',
artist: 'あいみょん',
album: '',
cover: 'img/hadakanokokoro.jpg',
mp3: 'mp3/hadakanokokoro.mp3',
ogg: ''
},
{
title: 'それを愛と呼ぶだけ',
artist: 'マフマフ',
album: '',
cover: 'img/sorewoaitoyobudake.jpg',
mp3: 'mp3/sorewoaitoyobudake.mp3',
ogg: ''
},
{
title: 'エイリアンエイリアン (cover by Raon Lee)',
artist: 'ナユタン星人',
album: '',
cover: 'img/alienalien.jpg',
mp3: 'mp3/alienalien.mp3',
ogg: ''
},
{
title: 'Neko',
artist: 'DISH',
album: '',
cover: 'img/neko.jpg',
mp3: 'mp3/neko.mp3',
ogg: ''
},
{
title: 'ポラリス',
artist: 'BLUE ENCOUNT',
album: '',
cover: 'img/polaris.jpg',
mp3: 'mp3/polaris.mp3',
ogg: ''
},
{
title: '未来コネクション',
artist: 'ReaL',
album: '',
cover: 'img/miraikoneshiyon.jpg',
mp3: 'mp3/miraikoneshiyon.mp3',
ogg: ''
},
{
title: 'プロローグ',
artist: 'Uru',
album: '',
cover: 'img/burogu.jpg',
mp3: 'mp3/burogu.mp3',
ogg: ''
},
{
title: 'Shine',
artist: '家入レオ',
album: '',
cover: 'img/shine.jpg',
mp3: 'mp3/shine.mp3',
ogg: ''
},
{
title: 'Summers Still Burning',
artist: '川口レイジ',
album: '',
cover: 'img/summersstillburning.jpg',
mp3: 'mp3/summersstillburning.mp3',
ogg: ''
},
{
title: 'あなたがいることで',
artist: 'Uru',
album: '',
cover: 'img/anatagairukotode.jpg',
mp3: 'mp3/anatagairukotode.mp3',
ogg: ''
},
{
title: 'YELLOW',
artist: '神山羊',
album: '',
cover: 'img/yellow.jpg',
mp3: 'mp3/yellow.mp3',
ogg: ''
},
{
title: 'D.D.D.D.',
artist: '(K)NoW_NAME',
album: '',
cover: 'img/dddd.jpg',
mp3: 'mp3/dddd.mp3',
ogg: ''
},
{
title: 'Blaaaw',
artist: 'lol-エルオーエル-',
album: '',
cover: 'img/blaaaw.jpg',
mp3: 'mp3/blaaaw.mp3',
ogg: ''
},
{
title: 'BaNG!!!',
artist: 'BAE',
album: '',
cover: 'img/bang.jpg',
mp3: 'mp3/bang.mp3',
ogg: ''
},
{
title: '雪の華',
artist: '中島美嘉',
album: '',
cover: 'img/yukinohane.jpg',
mp3: 'mp3/yukinohane.mp3',
ogg: ''
},
{
title: '別の人の彼女になたよ (cover by Kobasolo x 相沢)',
artist: 'Wacci',
album: '',
cover: 'img/betsunohitonokanojoninatayo.jpg',
mp3: 'mp3/betsunohitonokanojoninatayo.mp3',
ogg: ''
},
{
title: 'R・I・O・T',
artist: 'RAISE A SUILEN',
album: 'ERA',
cover: 'img/riot.jpg',
mp3: 'mp3/riot.mp3',
ogg: ''
},
{
title: '夢を打ち抜く瞬間に',
artist: 'Poppin Party',
album: '',
cover: 'img/yumewouchinukushunkanni.jpg',
mp3: 'mp3/yumewouchinukushunkanni.mp3',
ogg: ''
},
{
title: '命に嫌われている',
artist: 'まふまふ',
album: '',
cover: 'img/inochinikirawareteiru.jpg',
mp3: 'mp3/inochinikirawareteiru.mp3',
ogg: ''
},
{
title: 'A little love song (Full Covered by Kobasoro & apricot Masako)',
artist: 'MONGOL800',
album: '',
cover: 'img/alittlelovesong.jpg',
mp3: 'mp3/alittlelovesong.mp3',
ogg: ''
},
{
title: '平行線',
artist: '酸欠少女 さユり',
album: '',
cover: 'img/hekosen.jpg',
mp3: 'mp3/hekosen.mp3',
ogg: ''
},
{
title: 'Birthday song',
artist: '酸欠少女 さユり',
album: '',
cover: 'img/birthdaysong.jpg',
mp3: 'mp3/birthdaysong.mp3',
ogg: ''
},
{
title: 'No 1（Full Cover by Kobasolo & Lefty Hand Cream)',
artist: '西野カナ',
album: '',
cover: 'img/no1.jpg',
mp3: 'mp3/no1.mp3',
ogg: ''
},
{
title: 'まちがいさがし',
artist: '菅田将暉',
album: '',
cover: 'img/machigaisagashi.jpg',
mp3: 'mp3/machigaisagashi.mp3',
ogg: ''
},
{
title: 'Main actor',
artist: '美波',
album: '',
cover: 'img/mainactor.jpg',
mp3: 'mp3/mainactor.mp3',
ogg: ''
},
{
title: 'ホロネス',
artist: '美波',
album: '',
cover: 'img/hollowness.jpg',
mp3: 'mp3/hollowness.mp3',
ogg: ''
},
{
title: 'カワキヲアメク',
artist: '美波',
album: '',
cover: 'img/cryingforrain.jpg',
mp3: 'mp3/cryingforrain.mp3',
ogg: ''
},
{
title: 'だから僕は音楽を辞めた',
artist: 'ヨルシカ',
album: '',
cover: 'img/dakarabokuwaongakuwoyameta.jpg',
mp3: 'mp3/dakarabokuwaongakuwoyameta.mp3',
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
title: 'Make you happy',
artist: 'NiziU',
album: '',
cover: 'img/makeuhappy.jpg',
mp3: 'mp3/makeuhappy.mp3',
ogg: ''
},
{
title: 'Tell me',
artist: 'Milet',
album: '',
cover: 'img/tellme.jpg',
mp3: 'mp3/tellme.mp3',
ogg: ''
},
{
title: '花に亡霊',
artist: 'ヨルシカ',
album: '盗作 (Plagiarism)',
cover: 'img/hananiborei.jpg',
mp3: 'mp3/hananiborei.mp3',
ogg: ''
},
{
title: '好きと言わせたい',
artist: 'IZ*ONE',
album: '',
cover: 'img/sukitoiwasetai.jpg',
mp3: 'mp3/sukitoiwasetai.mp3',
ogg: ''
},
{
title: 'Lonely days',
artist: '有華',
album: '',
cover: 'img/lonelydays.jpg',
mp3: 'mp3/lonelydays.mp3',
ogg: ''
},
{
title: 'Ref:rain',
artist: 'Aimer',
album: '',
cover: 'img/refrain.jpg',
mp3: 'mp3/refrain.mp3',
ogg: ''
},
{
title: 'ゼロ ユニバース',
artist: '山本彩',
album: '',
cover: 'img/zerouniverse.jpg',
mp3: 'mp3/zerouniverse.mp3',
ogg: ''
},
{
title: 'カムパネルラ',
artist: '米津玄師',
album: 'STRAY SHEEP',
cover: 'img/kamupanerura.jpg',
mp3: 'mp3/kamupanerura.mp3',
ogg: ''
},
{
title: '感電',
artist: '米津玄師',
album: 'STRAY SHEEP',
cover: 'img/kamupanerura.jpg',
mp3: 'mp3/ganden.mp3',
ogg: ''
},
{
title: 'SHINEMAGIC',
artist: 'ZOC',
album: '',
cover: 'img/shinemagic.jpg',
mp3: 'mp3/shinemagic.mp3',
ogg: ''
},
{
title: 'Lemon',
artist: '米津玄師',
album: '',
cover: 'img/lemon.jpg',
mp3: 'mp3/lemon.mp3',
ogg: ''
},
{
title: 'Pretender',
artist: '髭男dism',
album: '',
cover: 'img/pretender.jpg',
mp3: 'mp3/pretender.mp3',
ogg: ''
},
{
title: 'One Touch',
artist: 'Milet',
album: '',
cover: 'img/onetouch.jpg',
mp3: 'mp3/onetouch.mp3',
ogg: ''
},
{
title: 'アシンメトリー',
artist: '安田レイ',
album: '',
cover: 'img/ashinmetori.jpg',
mp3: 'mp3/ashinmetori.mp3',
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
title: 'GirlsSpkOut (Feat.ちゃんみな)',
artist: '太妍(TAEYEON)',
album: 'GirlsSpkOut - The 2nd Album',
cover: 'img/girlsspkout.jpg',
mp3: 'mp3/girlsspkout.mp3',
ogg: ''
},
{
title: 'Let Me Hear',
artist: 'Fear, and Loathing in Las Vegas',
album: 'Feeling of Unity',
cover: 'img/letmehear.jpg',
mp3: 'mp3/letmehear.mp3',
ogg: ''
},
{
title: 'ダダダダ天使',
artist: 'アズマリム',
album: '',
cover: 'img/dadadadatenshi.jpg',
mp3: 'mp3/dadadadatenshi.mp3',
ogg: ''
},
{
title: 'Lady',
artist: 'ちゃんみな',
album: '未成年',
cover: 'img/lady.jpg',
mp3: 'mp3/lady.mp3',
ogg: ''
},
{
title: 'PAIN IS BEAUTY',
artist: 'ちゃんみな',
album: 'PAIN IS BEAUTY',
cover: 'img/painisbeauty.jpg',
mp3: 'mp3/painisbeauty.mp3',
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
title: 'カタオモイ',
artist: 'Aimer',
album: 'Daydream',
cover: 'img/kataomoi.jpg',
mp3: 'mp3/kataomoi.mp3',
ogg: ''
},
{
title: 'ただ君に晴れ',
artist: 'ヨルシカ',
album: '2nd Mini Album 「負け犬にアンコールはいらない」',
cover: 'img/tadakiminihare.jpg',
mp3: 'mp3/tadakiminihare.mp3',
ogg: ''
},
{
title: 'BREAK OUT! (live sing by 櫻井佑音)',
artist: '相川七瀬',
album: '',
cover: 'img/breakout!.jpg',
mp3: 'mp3/breakout!.mp3',
ogg: ''
},
{
title: 'Be My Love',
artist: '阿部真央',
album: '',
cover: 'img/bemylove.jpg',
mp3: 'mp3/bemylove.mp3',
ogg: ''
},
{
title: '第六感',
artist: 'Reol',
album: '',
cover: 'img/dairokukan.jpg',
mp3: 'mp3/dairokukan.mp3',
ogg: ''
},
{
title: '水平線',
artist: 'back number',
album: '',
cover: 'img/suihesen.jpg',
mp3: 'mp3/suihesen.mp3',
ogg: ''
},
{
title: 'インフェルノ（Inferno)',
artist: 'Mrs. GREEN APPLE',
album: '',
cover: 'img/inferno.jpg',
mp3: 'mp3/inferno.mp3',
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
title: 'Unlasting',
artist: 'LiSA',
album: '',
cover: 'img/unlasting.jpg',
mp3: 'mp3/unlasting.mp3',
ogg: ''
},
{
title: 'PLANET',
artist: 'ﾗﾑｼﾞ',
album: '3ﾗﾑｼﾞ',
cover: 'img/planet.jpg',
mp3: 'mp3/planet.mp3',
ogg: ''
},
{
title: 'ブルーバード',
artist: 'いきものがかり',
album: '',
cover: 'img/burubado.jpg',
mp3: 'mp3/burubado.mp3',
ogg: ''
},
{
title: 'aLIEz',
artist: '澤野弘之',
album: '',
cover: 'img/aliez.jpg',
mp3: 'mp3/aliez.mp3',
ogg: ''
},
{
title: 'Again',
artist: 'YUI',
album: '',
cover: 'img/againyui.jpg',
mp3: 'mp3/againyui.mp3',
ogg: ''
},
{
title: 'ヒトヒラのハナビラ',
artist: 'Stereopony',
album: '',
cover: 'img/hitohiranohanabira.jpg',
mp3: 'mp3/hitohiranohanabira.mp3',
ogg: ''
},
{
title: '正しくなれない',
artist: 'ずっと真夜中でいいのに',
album: '映画『約束のネバーランド』主題歌',
cover: 'img/tadashinarenai.jpg',
mp3: 'mp3/tadashinarenai.mp3',
ogg: ''
},
{
title: 'ハルカ',
artist: 'YOASOBI',
album: '',
cover: 'img/haruka.jpg',
mp3: 'mp3/haruka.mp3',
ogg: ''
},
{
title: 'て',
artist: '上野大樹',
album: '',
cover: 'img/te.jpg',
mp3: 'mp3/te.mp3',
ogg: ''
},
{
title: 'おぼせ',
artist: '上野大樹',
album: '',
cover: 'img/obose.jpg',
mp3: 'mp3/obose.mp3',
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
title: 'アメヲマツ、',
artist: '美波',
album: '',
cover: 'img/amewomatsu.jpg',
mp3: 'mp3/amewomatsu.mp3',
ogg: ''
},
{
title: 'ノンシュガー',
artist: 'マカロニえんぴつ',
album: '愛を知らずに魔法は使えない',
cover: 'img/nonsugar.jpg',
mp3: 'mp3/nonsugar.mp3',
ogg: ''
},
{
title: '快眠！安眠！スヤリスト生活',
artist: '水瀨祈',
album: '',
cover: 'img/kaiminanminsuyarisutosekatsu.jpg',
mp3: 'mp3/kaiminanminsuyarisutosekatsu.mp3',
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
title: 'Body Back (VIP Remix)',
artist: 'Gryffin',
album: '',
cover: 'img/bodyback.jpg',
mp3: 'mp3/bodyback.mp3',
ogg: ''
},
{
title: 'Sing Me To Sleep',
artist: 'Alan Walker',
album: '',
cover: 'img/singmetosleep.jpg',
mp3: 'mp3/singmetosleep.mp3',
ogg: ''
},
{
title: 'Problem With You',
artist: 'Chris Brown',
album: '',
cover: 'img/problemwithyou.jpg',
mp3: 'mp3/problemwithyou.mp3',
ogg: ''
},
{
title: 'All Falls Down',
artist: 'Alan Walker',
album: '',
cover: 'img/allfallsdown.jpg',
mp3: 'mp3/allfallsdown.mp3',
ogg: ''
},
{
title: 'On My Way',
artist: 'Alan Walker , Sabrina Carpenter & Farruko',
album: '',
cover: 'img/onmyway.jpg',
mp3: 'mp3/onmyway.mp3',
ogg: ''
},
{
title: 'Lily',
artist: 'Alan Walker , K-391 & Emelie Hollow',
album: '',
cover: 'img/lily.jpg',
mp3: 'mp3/lily.mp3',
ogg: ''
},
{
title: 'Beautiful Now ft. Jon Bellion',
artist: 'Zedd',
album: '',
cover: 'img/beautifulnow.jpg',
mp3: 'mp3/beautifulnow.mp3',
ogg: ''
},
{
title: 'The Nights',
artist: 'Avicii',
album: '',
cover: 'img/thenights.jpg',
mp3: 'mp3/thenights.mp3',
ogg: ''
},
{
title: 'Take Me Home, Country Roads',
artist: 'John Denver',
album: '',
cover: 'img/takemehomecountryroad.jpg',
mp3: 'mp3/takemehomecountryroad.mp3',
ogg: ''
},
{
title: 'Waiting For Love',
artist: 'Avicii',
album: '',
cover: 'img/waitingforlove.jpg',
mp3: 'mp3/waitingforlove.mp3',
ogg: ''
},
{
title: 'Here With You',
artist: 'Asher Monroe',
album: '',
cover: 'img/herewithyou.jpg',
mp3: 'mp3/herewithyou.mp3',
ogg: ''
},
{
title: 'Legends Never Die',
artist: 'Against The Current',
album: '',
cover: 'img/legendsneverdie.jpg',
mp3: 'mp3/legendsneverdie.mp3',
ogg: ''
},
{
title: 'Home',
artist: 'Diana Wang',
album: '',
cover: 'img/homedianawang.jpg',
mp3: 'mp3/homedianawang.mp3',
ogg: ''
},
{
title: 'Numb',
artist: 'Linkin Park',
album: '',
cover: 'img/numb.jpg',
mp3: 'mp3/numb.mp3',
ogg: ''
},
{
title: 'FRIENDS',
artist: 'Marshmello & Anne-Marie',
album: '',
cover: 'img/friendsanne.jpg',
mp3: 'mp3/friendsanne.mp3',
ogg: ''
},
{
title: 'Dance Monkey',
artist: 'Tones and I',
album: '',
cover: 'img/dancemonkey.jpg',
mp3: 'mp3/dancemonkey.mp3',
ogg: ''
},
{
title: 'Mood (Remix)',
artist: '24kGoldn, Justin Bieber, J Balvin, iann dior',
album: '',
cover: 'img/moodremix.jpg',
mp3: 'mp3/moodremix.mp3',
ogg: ''
},
{
title: 'Holy',
artist: 'Justin Bieber, The Lewisham And Greenwich NHS Choir',
album: '',
cover: 'img/holy.jpg',
mp3: 'mp3/holy.mp3',
ogg: ''
},
{
title: 'Lonely',
artist: 'Justin Bieber, benny blanco',
album: '',
cover: 'img/lonely.jpg',
mp3: 'mp3/lonely.mp3',
ogg: ''
},
{
title: 'Therefore I Am',
artist: 'Billie Eilish',
album: '',
cover: 'img/thereforeiam.jpg',
mp3: 'mp3/thereforeiam.mp3',
ogg: ''
},
{
title: 'HOLIDAY',
artist: 'Lil Nas X',
album: '',
cover: 'img/holidaylilnas.jpg',
mp3: 'mp3/holidaylilnas.mp3',
ogg: ''
},
{
title: 'あの夢をなぞって',
artist: 'YOASOBI',
album: '',
cover: 'img/anoyumewonazote.jpg',
mp3: 'mp3/anoyumewonazote.mp3',
ogg: ''
},
{
title: 'Unravel',
artist: '凛として時雨 ',
album: '',
cover: 'img/unravel.jpg',
mp3: 'mp3/unravel.mp3',
ogg: ''
},
{
title: 'Poupelle Of ChimneyTown · Lozareena',
artist: 'ロザリーナ',
album: '',
cover: 'img/lozareena.jpg',
mp3: 'mp3/lozareena.mp3',
ogg: ''
},
{
title: 'Poupelle Of ChimneyTown · Lozareena ( covered by 花譜 )',
artist: 'ロザリーナ',
album: '',
cover: 'img/lozareena-c.jpg',
mp3: 'mp3/lozareena-c.mp3',
ogg: ''
},
{
title: '何になりたくて、',
artist: 'ロザリーナ',
album: '',
cover: 'img/nanininaritakute.jpg',
mp3: 'mp3/nanininaritakute.mp3',
ogg: ''
},
{
title: '夜問',
artist: '花粥',
album: '',
cover: 'img/yejian.jpg',
mp3: 'mp3/yejian.mp3',
ogg: ''
},
{
title: '丢了你 (女版)',
artist: '王雨桐',
album: '',
cover: 'img/diuleni.jpg',
mp3: 'mp3/diuleni.mp3',
ogg: ''
},
{
title: '春风词笔',
artist: '三无',
album: '',
cover: 'img/chunfengshibi.jpg',
mp3: 'mp3/chunfengshibi.mp3',
ogg: ''
},
{
title: '無畏',
artist: '馬頔',
album: '',
cover: 'img/wuwei.jpg',
mp3: 'mp3/wuwei.mp3',
ogg: ''
},
{
title: '如此可爱的我们 ',
artist: '阎其儿Jill',
album: '',
cover: 'img/ruchikeaidewomen.jpg',
mp3: 'mp3/ruchikeaidewomen.mp3',
ogg: ''
},
{
title: '圈住你',
artist: '一口甜',
album: '',
cover: 'img/quanzhuni.jpg',
mp3: 'mp3/quanzhuni.mp3',
ogg: ''
},
{
title: '莫测',
artist: '陆虎',
album: '',
cover: 'img/moche.jpg',
mp3: 'mp3/moche.mp3',
ogg: ''
},
{
title: '難解的題',
artist: '陳昊宇',
album: '',
cover: 'img/nanjiedeti.jpg',
mp3: 'mp3/nanjiedeti.mp3',
ogg: ''
},
{
title: '六七月',
artist: '赵贝尔',
album: '',
cover: 'img/liuqiyue.jpg',
mp3: 'mp3/liuqiyue.mp3',
ogg: ''
},
{
title: '我们的1999',
artist: '庄达菲',
album: '',
cover: 'img/womende1999.jpg',
mp3: 'mp3/womende1999.mp3',
ogg: ''
},
{
title: '破茧',
artist: '张韶涵',
album: '',
cover: 'img/pojian.jpg',
mp3: 'mp3/pojian.mp3',
ogg: ''
},
{
title: '九张机',
artist: '叶炫清',
album: '',
cover: 'img/jiuzhangji.jpg',
mp3: 'mp3/jiuzhangji.mp3',
ogg: ''
},
{
title: '枕邊人',
artist: '胡彥斌',
album: '',
cover: 'img/zhenbianren.jpg',
mp3: 'mp3/zhenbianren.mp3',
ogg: ''
},
{
title: '春风十里',
artist: '房东的猫',
album: '',
cover: 'img/chunfengshili.jpg',
mp3: 'mp3/chunfengshili.mp3',
ogg: ''
},
{
title: '雲煙成雨',
artist: '房东的猫',
album: '',
cover: 'img/yunyanchengyu.jpg',
mp3: 'mp3/yunyanchengyu.mp3',
ogg: ''
},
{
title: '有多少人和我一樣',
artist: '小洲',
album: '',
cover: 'img/youduoshaorenhewoyiyang.jpg',
mp3: 'mp3/youduoshaorenhewoyiyang.mp3',
ogg: ''
},
{
title: '句號',
artist: 'G.E.M.鄧紫棋',
album: '',
cover: 'img/jvhao.jpg',
mp3: 'mp3/jvhao.mp3',
ogg: ''
},
{
title: '失控',
artist: '劉增瞳',
album: '',
cover: 'img/shikong.jpg',
mp3: 'mp3/shikong.mp3',
ogg: ''
},
{
title: '傷害',
artist: '劉增瞳',
album: '',
cover: 'img/shanghai.jpg',
mp3: 'mp3/shanghai.mp3',
ogg: ''
},
{
title: '世間美好與你環環相扣',
artist: '柏松',
album: '',
cover: 'img/shijianmeihaohuanhuanxk.jpg',
mp3: 'mp3/shijianmeihaohuanhuanxk.mp3',
ogg: ''
},
{
title: '从前',
artist: '董真, 王敬轩',
album: '',
cover: 'img/congqian.jpg',
mp3: 'mp3/congqian.mp3',
ogg: ''
},
{
title: '夢回還',
artist: '呦貓UNEKO',
album: '',
cover: 'img/menghuihuan.jpg',
mp3: 'mp3/menghuihuan.mp3',
ogg: ''
},
{
title: '妲己',
artist: '木易',
album: '',
cover: 'img/daji.jpg',
mp3: 'mp3/daji.mp3',
ogg: ''
},
{
title: '槍口',
artist: '木易',
album: '',
cover: 'img/qiangkou.jpg',
mp3: 'mp3/qiangkou.mp3',
ogg: ''
},
{
title: '把孤獨當作晚餐',
artist: '劉旭陽',
album: '',
cover: 'img/bagududangzuowancan.jpg',
mp3: 'mp3/bagududangzuowancan.mp3',
ogg: ''
},
{
title: '歸去來兮',
artist: '花粥',
album: '',
cover: 'img/guiqulaixi.jpg',
mp3: 'mp3/guiqulaixi.mp3',
ogg: ''
},
{
title: '去你妹的撩妹',
artist: '封茗囧菌',
album: '',
cover: 'img/qunideliaomei.jpg',
mp3: 'mp3/qunideliaomei.mp3',
ogg: ''
},
{
title: '一生獨一',
artist: '西彬呀',
album: '',
cover: 'img/yishengduyi.jpg',
mp3: 'mp3/yishengduyi.mp3',
ogg: ''
},
{
title: '盜將行',
artist: '花粥 , 馬雨陽',
album: '',
cover: 'img/daojiangxing.jpg',
mp3: 'mp3/daojiangxing.mp3',
ogg: ''
},
{
title: '說書人',
artist: '暗槓＆寅子',
album: '',
cover: 'img/shuoshuren.jpg',
mp3: 'mp3/shuoshuren.mp3',
ogg: ''
},
{
title: '大笑江湖',
artist: '高進',
album: '',
cover: 'img/daxiaojianghu.jpg',
mp3: 'mp3/daxiaojianghu.mp3',
ogg: ''
},
{
title: '山鬼',
artist: '清秋秋',
album: '',
cover: 'img/shangui.jpg',
mp3: 'mp3/shangui.mp3',
ogg: ''
},
{
title: '無歸',
artist: '葉里',
album: '',
cover: 'img/wugui.jpg',
mp3: 'mp3/wugui.mp3',
ogg: ''
},
{
title: '赤伶',
artist: '李玉剛',
album: '',
cover: 'img/chiling.jpg',
mp3: 'mp3/chiling.mp3',
ogg: ''
},
{
title: '清明上河圖',
artist: '排骨教主',
album: '',
cover: 'img/qingmingshanghetu.jpg',
mp3: 'mp3/qingmingshanghetu.mp3',
ogg: ''
},
{
title: '風花雪月',
artist: '紫堂宿、林斜陽',
album: '',
cover: 'img/fenghuaxueyue.jpg',
mp3: 'mp3/fenghuaxueyue.mp3',
ogg: ''
},
{
title: '何必詩債換酒錢',
artist: '嵐提',
album: '',
cover: 'img/hebishizaihuanjiuqian.jpg',
mp3: 'mp3/hebishizaihuanjiuqian.mp3',
ogg: ''
},
{
title: '我命不由天',
artist: '杨可爱',
album: '',
cover: 'img/womingbuyoutian.jpg',
mp3: 'mp3/womingbuyoutian.mp3',
ogg: ''
},
{
title: '牽絲戲',
artist: '銀臨、Aki阿杰',
album: '',
cover: 'img/qiansixi.jpg',
mp3: 'mp3/qiansixi.mp3',
ogg: ''
},
{
title: '寄明月',
artist: 'SING女團',
album: '',
cover: 'img/jimingyue.jpg',
mp3: 'mp3/jimingyue.mp3',
ogg: ''
},
{
title: '白衣少年',
artist: '許詩茵',
album: '',
cover: 'img/baiyishaonian.jpg',
mp3: 'mp3/baiyishaonian.mp3',
ogg: ''
},
{
title: '葬仙',
artist: '葉里 & 苑舍',
album: '',
cover: 'img/zangxian.jpg',
mp3: 'mp3/zangxian.mp3',
ogg: ''
},
{
title: '殆',
artist: '李泽龙',
album: '',
cover: 'img/dai.jpg',
mp3: 'mp3/dai.mp3',
ogg: ''
},
{
title: '紀念',
artist: '李泽龙',
album: '',
cover: 'img/jinian.jpg',
mp3: 'mp3/jinian.mp3',
ogg: ''
},
{
title: '噓',
artist: '李泽龙',
album: '',
cover: 'img/xu.jpg',
mp3: 'mp3/xu.mp3',
ogg: ''
},
{
title: '春樹暮雲',
artist: '李泽龙',
album: '',
cover: 'img/chunshumuyun.jpg',
mp3: 'mp3/chunshumuyun.mp3',
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
title: 'バケモノと呼ばれて ',
artist: '藤川千愛',
album: '無能なナナ',
cover: 'img/bakemonotoyobarete.jpg',
mp3: 'mp3/bakemonotoyobarete.mp3',
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
title: '香水',
artist: '瑛人',
album: '',
cover: 'img/koshui.jpg',
mp3: 'mp3/koshui.mp3',
ogg: ''
},
{
title: 'イカサマダンス',
artist: 'まふまふ',
album: '',
cover: 'img/ikasamadansu.jpg',
mp3: 'mp3/ikasamadansu.mp3',
ogg: ''
},
{
title: 'Nobodys fault',
artist: '櫻坂46',
album: '',
cover: 'img/nobodyisfault.jpg',
mp3: 'mp3/nobodyisfault.mp3',
ogg: ''
},
{
title: 'アンコール',
artist: 'YOASOBI',
album: '',
cover: 'img/ankoru.jpg',
mp3: 'mp3/ankoru.mp3',
ogg: ''
},
{
title: '怪物',
artist: 'YOASOBI',
album: '',
cover: 'img/gaibutsu.jpg',
mp3: 'mp3/gaibutsu.mp3',
ogg: ''
},
{
title: '跳鍾馗',
artist: '李英宏',
album: '馗降：粽邪2',
cover: 'img/tiaojiongkui.jpg',
mp3: 'mp3/tiaojiongkui.mp3',
ogg: ''
},
{
title: '无华',
artist: '张靓颖&摩登兄弟刘宇宁',
album: '《有翡》电视剧片尾主题曲',
cover: 'img/wuhua.jpg',
mp3: 'mp3/wuhua.mp3',
ogg: ''
},
{
title: '四季予你',
artist: '程響',
album: '',
cover: 'img/sijiyuni.jpg',
mp3: 'mp3/sijiyuni.mp3',
ogg: ''
},
{
title: '轍～Wadachi～',
artist: 'SPYAIR',
album: '',
cover: 'img/wadachi.jpg',
mp3: 'mp3/wadachi.mp3',
ogg: ''
},
{
title: '瞬間ドラマチック',
artist: 'Saji',
album: '',
cover: 'img/shunkandoramachikku.jpg',
mp3: 'mp3/shunkandoramachikku.mp3',
ogg: ''
},
{
title: 'ハッピーになれよ',
artist: '瑛人',
album: 'すっからかん',
cover: 'img/happininareyo.jpg',
mp3: 'mp3/happininareyo.mp3',
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
title: '空と青',
artist: '家入レオ',
album: '',
cover: 'img/soratoao.jpg',
mp3: 'mp3/soratoao.mp3',
ogg: ''
},
{
title: 'Someone You Loved',
artist: 'Davina Michelle',
album: '',
cover: 'img/someoneyouloved.jpg',
mp3: 'mp3/someoneyouloved.mp3',
ogg: ''
},
{
title: 'うっせぇわ',
artist: 'Ado',
album: '',
cover: 'img/usseewa.jpg',
mp3: 'mp3/usseewa.mp3',
ogg: ''
},
{
title: 'Echo (cover by DELUTAYA Δ.)',
artist: 'Crusher-P',
album: '',
cover: 'img/echodelutaya.jpg',
mp3: 'mp3/echodelutaya.mp3',
ogg: ''
},
{
title: 'Kids In The Corner',
artist: 'Amber Van Day',
album: '',
cover: 'img/kidsinthecorner.jpg',
mp3: 'mp3/kidsinthecorner.mp3',
ogg: ''
},
{
title: 'Grandeur',
artist: 'Snow Man',
album: '',
cover: 'img/grandeur.jpg',
mp3: 'mp3/grandeur.mp3',
ogg: ''
},
{
title: '優しい彗星',
artist: 'YOASOBI',
album: '',
cover: 'img/yasashisuisei.jpg',
mp3: 'mp3/yasashisuisei.mp3',
ogg: ''
},
{
title: 'DEAR MY FRIEND',
artist: 'LITTLE GLEE MONSTER FEAT.PENTATONIX ',
album: '',
cover: 'img/dearmyfriend.jpg',
mp3: 'mp3/dearmyfriend.mp3',
ogg: ''
},
{
title: '春泥棒',
artist: 'ヨルシカ',
album: '',
cover: 'img/harudorobo.jpg',
mp3: 'mp3/harudorobo.mp3',
ogg: ''
},
{
title: '麻痺',
artist: 'yama',
album: '',
cover: 'img/mahi.jpg',
mp3: 'mp3/mahi.mp3',
ogg: ''
},
{
title: 'アイデンティティ',
artist: '秋山黄色',
album: '',
cover: 'img/aidenteitei.jpg',
mp3: 'mp3/aidenteitei.mp3',
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
title: '季路',
artist: 'Aimer',
album: '',
cover: 'img/kiro.jpg',
mp3: 'mp3/kiro.mp3',
ogg: ''
},
{
title: '這就是愛嗎',
artist: '楊胖雨',
album: '',
cover: 'img/zhejiushiaima.jpg',
mp3: 'mp3/zhejiushiaima.mp3',
ogg: ''
},
{
title: '笑納',
artist: '花僮',
album: '',
cover: 'img/xiaona.jpg',
mp3: 'mp3/xiaona.mp3',
ogg: ''
},
{
title: '白月光与朱砂痣',
artist: '大籽',
album: '',
cover: 'img/baiyueguangyuzhushazhi.jpg',
mp3: 'mp3/baiyueguangyuzhushazhi.mp3',
ogg: ''
},
{
title: '错位时空',
artist: '艾辰',
album: '',
cover: 'img/cuoweishikong.jpg',
mp3: 'mp3/cuoweishikong.mp3',
ogg: ''
},
{
title: '醉墨',
artist: '范丞丞',
album: '',
cover: 'img/zuimo.jpg',
mp3: 'mp3/zuimo.mp3',
ogg: ''
},
{
title: '遥望',
artist: '范丞丞，程潇',
album: '',
cover: 'img/yaowang.jpg',
mp3: 'mp3/yaowang.mp3',
ogg: ''
},
{
title: 'DRIVERS LICENSE',
artist: 'OLIVIA RODRIGO',
album: '',
cover: 'img/driverslicense.jpg',
mp3: 'mp3/driverslicense.mp3',
ogg: ''
},
{
title: 'Not the End of the World',
artist: 'Katy Perry',
album: '',
cover: 'img/nottheendoftheworld.jpg',
mp3: 'mp3/nottheendoftheworld.mp3',
ogg: ''
},
{
title: 'ドライフラワー',
artist: '優里',
album: '',
cover: 'img/doraifurawa.jpg',
mp3: 'mp3/doraifurawa.mp3',
ogg: ''
},
{
title: '廻廻奇譚',
artist: 'Eve',
album: '',
cover: 'img/kaikaikitan.jpg',
mp3: 'mp3/kaikaikitan.mp3',
ogg: ''
},
{
title: '結証',
artist: '緑黄色社会',
album: '',
cover: 'img/kesshou.jpg',
mp3: 'mp3/kesshou.mp3',
ogg: ''
},
{
title: 'Pretty Girl (Cheat Codes x CADE Remix)',
artist: 'Maggie Lindemann',
album: '',
cover: 'img/prettygirlremix.jpg',
mp3: 'mp3/prettygirlremix.mp3',
ogg: ''
},
{
title: '衝撃',
artist: '安藤裕子',
album: '',
cover: 'img/shiyogeki.jpg',
mp3: 'mp3/shiyogeki.mp3',
ogg: ''
},
{
title: 'Moon',
artist: '家入レオ',
album: '',
cover: 'img/mooniede.jpg',
mp3: 'mp3/mooniede.mp3',
ogg: ''
},
{
title: '平行線',
artist: 'EVE × SUIS FROM ヨルシカ',
album: '',
cover: 'img/hekouseneve.jpg',
mp3: 'mp3/hekouseneve.mp3',
ogg: ''
},
{
title: '星を仰ぐ',
artist: '菅田将暉',
album: '',
cover: 'img/hoshiwoaogu.jpg',
mp3: 'mp3/hoshiwoaogu.mp3',
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
title: '星辰大海',
artist: '黃霄雲',
album: '',
cover: 'img/xingchengdahai.jpg',
mp3: '',
ogg: 'mp3/xingchengdahai.ogg'
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
title: '魔法',
artist: 'Myuk',
album: '',
cover: 'img/mahomyuk.jpg',
mp3: '',
ogg: 'mp3/mahomyuk.ogg'
},
{
title: '醜い生き物',
artist: 'CHiCO with HoneyWorks',
album: '',
cover: 'img/busaiikimonochico.jpg',
mp3: '',
ogg: 'mp3/busaiikimonochico.ogg'
},
{
title: 'チチンプイプイ',
artist: '真島ゆろ feat. flower・初音ミク（ RiMy × TOKU MIX cover. ）',
album: '',
cover: 'img/chichinpuipui.jpg',
mp3: '',
ogg: 'mp3/chichinpuipui.ogg'
},
{
title: 'ドライフラワー',
artist: 'Uru',
album: '',
cover: 'img/doraifurawauru.jpg',
mp3: '',
ogg: 'mp3/doraifurawauru.ogg'
},
{
title: 'Give It Up？',
artist: '96猫',
album: '',
cover: 'img/giveitup96neko.jpg',
mp3: '',
ogg: 'mp3/giveitup96neko.ogg'
},
{
title: '5センチ先の夢',
artist: 'H△G',
album: '',
cover: 'img/gosenchinoyume.jpg',
mp3: '',
ogg: 'mp3/gosenchinoyume.ogg'
},
{
title: '浪子闲话',
artist: '花僮',
album: '',
cover: 'img/langzixianhuahuatong.jpg',
mp3: '',
ogg: 'mp3/langzixianhuahuatong.ogg'
},
{
title: '策馬正少年',
artist: '肖战',
album: '',
cover: 'img/chemashishaonian.jpg',
mp3: '',
ogg: 'mp3/chemashishaonian.ogg'
},
{
title: 'STARTLINE',
artist: '大原櫻子',
album: '',
cover: 'img/sutarlineohara.jpg',
mp3: '',
ogg: 'mp3/sutarlineohara.ogg'
},
{
title: '素直になりたい子の話',
artist: 'りりあ',
album: '',
cover: 'img/sunaoninaritaikonohanashi.jpg',
mp3: '',
ogg: 'mp3/sunaoninaritaikonohanashi.ogg'
},
{
title: '激辛LOVE',
artist: 'ビヨーンズ',
album: '',
cover: 'img/gekikararabu.jpg',
mp3: '',
ogg: 'mp3/gekikararabu.ogg'
},
{
title: 'ギラギラ',
artist: 'Ado',
album: '',
cover: 'img/giragiraado.jpg',
mp3: '',
ogg: 'mp3/giragiraado.ogg'
},
{
title: 'Scarborough Fair',
artist: '加藤達也',
album: '青い記憶',
cover: 'img/scarboroughfair.jpg',
mp3: '',
ogg: 'mp3/scarboroughfair.ogg'
},
{
title: 'Always in my heart',
artist: '山田タマル',
album: '青い記憶',
cover: 'img/scarboroughfair.jpg',
mp3: '',
ogg: 'mp3/alwaysinmyheart.ogg'
},
{
title: 'All The Ways',
artist: 'Meghan Trainor',
album: '',
cover: 'img/allthewaysmeghan.jpg',
mp3: '',
ogg: 'mp3/allthewaysmeghan.ogg'
},
{
title: 'キミとボクの歌',
artist: '安斉かれん',
album: '',
cover: 'img/kimitobokunoutaanzai.jpg',
mp3: '',
ogg: 'mp3/kimitobokunoutaanzai.ogg'
},
{
title: 'Unreachable love song',
artist: 'Tani Yuuki',
album: '',
cover: 'img/unreachablelovesongtani.jpg',
mp3: '',
ogg: 'mp3/unreachablelovesongtani.ogg'
},
{
title: '振り子',
artist: 'ぷらそにか Cover',
album: '',
cover: 'img/furikopurasonika.jpg',
mp3: '',
ogg: 'mp3/furikopurasonika.ogg'
},
{
title: '僕の戦争',
artist: 'かまって',
album: '',
cover: 'img/bokunosensoukamate.jpg',
mp3: '',
ogg: 'mp3/bokunosensoukamate.ogg'
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
title: 'チャイムの音で',
artist: 'Ayaho',
album: '',
cover: 'img/chaimunootodeayaho.jpg',
mp3: '',
ogg: 'mp3/chaimunootodeayaho.ogg'
},
{
title: '桜恋',
artist: 'もさを',
album: '',
cover: 'img/sakurakoimosao.jpg',
mp3: '',
ogg: 'mp3/sakurakoimosao.ogg'
},
{
title: '寝れない夜に feat.yama',
artist: 'くじ',
album: '',
cover: 'img/nerenaiyorunikuji.jpg',
mp3: '',
ogg: 'mp3/nerenaiyorunikuji.ogg'
},
{
title: 'ねむるまち feat.yama',
artist: 'くじ',
album: '',
cover: 'img/nemurumachikuji.jpg',
mp3: '',
ogg: 'mp3/nemurumachikuji.ogg'
},
{
title: '限りなく灰色へ',
artist: 'すりぃ feat.鏡音レン',
album: '',
cover: 'img/kagirinakuhaiiroesorii.jpg',
mp3: '',
ogg: 'mp3/kagirinakuhaiiroesorii.ogg'
},
{
title: 'I Need Your Love-Nightcore',
artist: 'Madilyn Bailey, Jake Coco',
album: '',
cover: 'img/ineedyourlovejake.jpg',
mp3: '',
ogg: 'mp3/ineedyourlovejake.ogg'
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
title: '与君相依',
artist: '等什么君',
album: '',
cover: 'img/yujunxiangyidengshenmejun.jpg',
mp3: '',
ogg: 'mp3/yujunxiangyidengshenmejun.ogg'
},
{
title: '桜が降る夜は',
artist: 'あいみょん',
album: '',
cover: 'img/sakuragafuruyoruwaaimiyon.jpg',
mp3: '',
ogg: 'mp3/sakuragafuruyoruwaaimiyon.ogg'
},
{
title: 'Spotlight',
artist: 'Rude-α ',
album: 'Paradise',
cover: 'img/spotlightrudea.jpg',
mp3: '',
ogg: 'mp3/spotlightrudea.ogg'
},
{
title: 'Paradise',
artist: 'Rude-α ',
album: 'Paradise',
cover: 'img/spotlightrudea.jpg',
mp3: '',
ogg: 'mp3/paradiserudea.ogg'
},
{
title: '旅路',
artist: '藤井風',
album: '',
cover: 'img/tabijifujikaze.jpg',
mp3: '',
ogg: 'mp3/tabijifujikaze.ogg'
},
{
title: '私を殺さないで',
artist: 'CHiCO with HoneyWorks',
album: '',
cover: 'img/watashiokorosanaidechico.jpg',
mp3: '',
ogg: 'mp3/watashiokorosanaidechico.ogg'
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
title: '弱水三千',
artist: 'W.K',
album: '',
cover: 'img/ruoshuisanqian.jpg',
mp3: '',
ogg: 'mp3/ruoshuisanqian.ogg'
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
title: 'ケダモノのフレンズ',
artist: 'にしな Nishina',
album: '',
cover: 'img/kedamonofurensunishina.jpg',
mp3: '',
ogg: 'mp3/kedamonofurensunishina.ogg'
},
];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
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
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
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
