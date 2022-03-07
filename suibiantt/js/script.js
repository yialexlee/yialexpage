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
{
title: 'Stand by me, Stand by you. / 平井大 (cover)',
artist: 'ぷらそにか',
album: '',
cover: 'img/standbymepurasonika.jpg',
mp3: '',
ogg: 'mp3/standbymepurasonika.ogg'
},
{
title: 'Centi',
artist: 'にしな',
album: '',
cover: 'img/centinishina.jpg',
mp3: '',
ogg: 'mp3/centinishina.ogg'
},
{
title: 'Not the End',
artist: '安田レイ',
album: '',
cover: 'img/yasudareinottheend.jpg',
mp3: '',
ogg: 'mp3/yasudareinottheend.ogg'
},
{
title: 'アルカシア',
artist: 'saji',
album: '',
cover: 'img/arukashiasaji.jpg',
mp3: '',
ogg: 'mp3/arukashiasaji.ogg'
},
{
title: 'ただいま',
artist: '手嶌葵',
album: '',
cover: 'img/aoiteshimatadaima.jpg',
mp3: '',
ogg: 'mp3/aoiteshimatadaima.ogg'
},
{
title: '旅人の唄',
artist: '大原ゆい子',
album: '',
cover: 'img/tabibitonoutaoharayuiko.jpg',
mp3: '',
ogg: 'mp3/tabibitonoutaoharayuiko.ogg'
},
{
title: 'Answer',
artist: '幾田りら',
album: '',
cover: 'img/answerikutarika.jpg',
mp3: '',
ogg: 'mp3/answerikutarika.ogg'
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
title: 'Fight For Love: Aria For Myth',
artist: '조수미 Jo Sumi',
album: 'Sisyphus: The Myth OST Part 2',
cover: 'img/fightforlovejosumi.jpg',
mp3: '',
ogg: 'mp3/fightforlovejosumi.ogg'
},
{
title: 'Heartbreak Anniversary',
artist: 'Giveon',
album: '',
cover: 'img/giveonheartbreakanni.jpg',
mp3: '',
ogg: 'mp3/giveonheartbreakanni.ogg'
},
{
title: 'Gone',
artist: 'ROSÉ',
album: '',
cover: 'img/gonerose.jpg',
mp3: '',
ogg: 'mp3/gonerose.ogg'
},
{
title: 'On The Ground',
artist: 'ROSÉ',
album: '',
cover: 'img/gonerose.jpg',
mp3: '',
ogg: 'mp3/onthegroundrose.ogg'
},
{
title: 'Beautiful Mistakes ft. Megan Thee Stallion',
artist: 'Maroon 5',
album: '',
cover: 'img/beautifulmistakemaroon5.jpg',
mp3: '',
ogg: 'mp3/beautifulmistakemaroon5.ogg'
},
{
title: 'One Last Kiss',
artist: '宇多田ヒカル',
album: '',
cover: 'img/onelastkissutadahikaru.jpg',
mp3: '',
ogg: 'mp3/onelastkissutadahikaru.ogg'
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
title: 'Hold On',
artist: 'Justin Bieber',
album: '',
cover: 'img/holdonjustinbieber.jpg',
mp3: '',
ogg: 'mp3/holdonjustinbieber.ogg'
},
{
title: 'Astronaut In The Ocean',
artist: 'Masked Wolf',
album: '',
cover: 'img/astronautmaskedwolf.jpg',
mp3: '',
ogg: 'mp3/astronautmaskedwolf.ogg'
},
{
title: 'la di die (feat. jxdn)',
artist: 'Nessa Barrett',
album: '',
cover: 'img/ladidienessabarrett.jpg',
mp3: '',
ogg: 'mp3/ladidienessabarrett.ogg'
},
{
title: 'My Head & My Heart',
artist: 'Ava Max',
album: '',
cover: 'img/myheadnmyheartavamax.jpg',
mp3: '',
ogg: 'mp3/myheadnmyheartavamax.ogg'
},
{
title: 'Sacrifice',
artist: 'Bebe Rexha',
album: '',
cover: 'img/sacrificebebe.jpg',
mp3: '',
ogg: 'mp3/sacrificebebe.ogg'
},
{
title: 'Adrenaline',
artist: 'Aalia',
album: '',
cover: 'img/adrenalineaalia.jpg',
mp3: '',
ogg: 'mp3/adrenalineaalia.ogg'
},
{
title: 'たとえたとえ',
artist: '緑黄色社会',
album: '',
cover: 'img/tatoetatoe.jpg',
mp3: '',
ogg: 'mp3/tatoetatoe.ogg'
},
{
title: '誇り高きアイドル',
artist: 'HoneyWorks feat.Kotoha',
album: '',
cover: 'img/hokoritakakiaidoruhnwork.jpg',
mp3: '',
ogg: 'mp3/hokoritakakiaidoruhnwork.ogg'
},
{
title: 'Blaze',
artist: 'lol',
album: '',
cover: 'img/blazelol.jpg',
mp3: '',
ogg: 'mp3/blazelol.ogg'
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
title: 'フールフールフール',
artist: 'おくのほそみち feat. Ado',
album: '',
cover: 'img/foolfoolhosomichiado.jpg',
mp3: '',
ogg: 'mp3/foolfoolhosomichiado.ogg'
},
{
title: '三原色',
artist: 'YOASOBI',
album: '',
cover: 'img/sangenshokuyoasoobi.jpg',
mp3: '',
ogg: 'mp3/sangenshokuyoasoobi.ogg'
},
{
title: 'TAKE A PICTURE',
artist: 'NiziU',
album: '',
cover: 'img/takeapicniziu.jpg',
mp3: '',
ogg: 'mp3/takeapicniziu.ogg'
},
{
title: 'Bad Ones',
artist: 'Tate McRae',
album: '',
cover: 'img/badonesmcrae.jpg',
mp3: '',
ogg: 'mp3/badonesmcrae.ogg'
},
{
title: '勘冴えて悔しいわ',
artist: 'ずっと真夜中でいいのに',
album: '',
cover: 'img/kansaetekuyashiiwazutomayo.jpg',
mp3: '',
ogg: 'mp3/kansaetekuyashiiwazutomayo.ogg'
},
{
title: 'わけあって',
artist: '當山みれい',
album: '',
cover: 'img/wakeattemirei.jpg',
mp3: '',
ogg: 'mp3/wakeattemirei.ogg'
},
{
title: 'Лепесток',
artist: 'MIA BOYKA, T-killah',
album: '',
cover: 'img/lepestokmiaboyka.jpg',
mp3: '',
ogg: 'mp3/lepestokmiaboyka.ogg'
},
{
title: '最後のキス',
artist: 'Non Stop Rabbit',
album: '',
cover: 'img/saigonokisunsr.jpg',
mp3: '',
ogg: 'mp3/saigonokisunsr.ogg'
},
{
title: '真刀勝負',
artist: 'FantasticYouth',
album: '',
cover: 'img/shintoshobufantasticyouth.jpg',
mp3: '',
ogg: 'mp3/shintoshobufantasticyouth.ogg'
},
{
title: 'Radio Noise feat. Ado',
artist: 'ミコ吉',
album: '',
cover: 'img/rajionoisumikokichi.jpg',
mp3: '',
ogg: 'mp3/rajionoisumikokichi.ogg'
},
{
title: 'BAN',
artist: '櫻坂46',
album: '',
cover: 'img/bansakurazaka46.jpg',
mp3: 'BAN',
ogg: 'mp3/bansakurazaka46.ogg'
},
{
title: '思ったよりも寂しくない',
artist: '櫻坂46',
album: '',
cover: 'img/bansakurazaka46.jpg',
mp3: 'BAN',
ogg: 'mp3/omotayorimosabishikunai.ogg'
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
title: 'Josh',
artist: 'Peach PRC',
album: '',
cover: 'img/joshpeachprc.jpg',
mp3: '',
ogg: 'mp3/joshpeachprc.ogg'
},
{
title: 'Do You Believe',
artist: 'Ali Gatie with Marshmello & Ty Dolla $ign',
album: '',
cover: 'img/doubelievealigatie.jpg',
mp3: '',
ogg: 'mp3/doubelievealigatie.ogg'
},
{
title: '足跡',
artist: 'the peggies',
album: '',
cover: 'img/footprintsthepeggies.jpg',
mp3: '',
ogg: 'mp3/footprintsthepeggies.ogg'
},
{
title: '涙の銀河',
artist: 'ロザリーナ',
album: '',
cover: 'img/namidanogingarozarina.jpg',
mp3: '',
ogg: 'mp3/namidanogingarozarina.ogg'
},
{
title: 'Eclipse',
artist: 'Dreamcatcher',
album: '',
cover: 'img/eclipsedreamcatcher.jpg',
mp3: '',
ogg: 'mp3/eclipsedreamcatcher.ogg'
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
title: 'Kamuras Song of Purification',
artist: 'Capcom Sound Team',
album: '',
cover: 'img/kamurascapcomsound.jpg',
mp3: '',
ogg: 'mp3/kamurascapcomsound.ogg'
},
{
title: 'Kamuras Song of Purification Live Cover',
artist: 'Gawr Gura',
album: '',
cover: 'img/kamurascapcomsound.jpg',
mp3: '',
ogg: 'mp3/kamurasgawrgura.ogg'
},
{
title: '旧梦一场',
artist: '阿悠悠',
album: '',
cover: 'img/jiumengychangayouyou.jpg',
mp3: '',
ogg: 'mp3/jiumengychangayouyou.ogg'
},
{
title: '一曲琵琶',
artist: '阿悠悠',
album: '',
cover: 'img/yiqupipaayouyou.jpg',
mp3: '',
ogg: 'mp3/yiqupipaayouyou.ogg'
},
{
title: '人間驚鴻客',
artist: '葉裡',
album: '',
cover: 'img/renjianjinghongkeyeli.jpg',
mp3: '',
ogg: 'mp3/renjianjinghongkeyeli.ogg'
},
{
title: '燕無歇',
artist: '蒋雪儿',
album: '',
cover: 'img/yanwuxiejiangxueer.jpg',
mp3: '',
ogg: 'mp3/yanwuxiejiangxueer.ogg'
},
{
title: '赤子囈語一生夢',
artist: '刺蝟Hedgehog',
album: '',
cover: 'img/chiziyiyuyishengmengciwei.jpg',
mp3: '',
ogg: 'mp3/chiziyiyuyishengmengciwei.ogg'
},
{
title: 'Deja vu',
artist: 'Olivia Rodrigo',
album: '',
cover: 'img/dejavuoliviarodrigo.jpg',
mp3: '',
ogg: 'mp3/dejavuoliviarodrigo.ogg'
},
{
title: 'DiViNE',
artist: 'EXiNA',
album: '',
cover: 'img/divineexina.jpg',
mp3: '',
ogg: 'mp3/divineexina.ogg'
},
{
title: 'I’m the shit feat. ¥ellow Bucks',
artist: 'AK-69',
album: '',
cover: 'img/imtheshitak69.jpg',
mp3: '',
ogg: 'mp3/imtheshitak69.ogg'
},
{
title: 'BLIZZARD',
artist: 'BURNOUT SYNDROMES',
album: '',
cover: 'img/blizzardburnoutsyndromes.jpg',
mp3: '',
ogg: 'mp3/blizzardburnoutsyndromes.ogg'
},
{
title: 'Renegades',
artist: 'ONE OK ROCK',
album: '',
cover: 'img/renegadesoneokrock.jpg',
mp3: '',
ogg: 'mp3/renegadesoneokrock.ogg'
},
{
title: 'Flying B',
artist: 'AK-69',
album: '',
cover: 'img/flyingbak69.jpg',
mp3: '',
ogg: 'mp3/flyingbak69.ogg'
},
{
title: 'Plastic 2 Mercy',
artist: 'GANG PARADE',
album: '',
cover: 'img/plastic2mercygangparade.jpg',
mp3: '',
ogg: 'mp3/plastic2mercygangparade.ogg'
},
{
title: 'Question',
artist: 'Ambers',
album: '',
cover: 'img/questionambers.jpg',
mp3: '',
ogg: 'mp3/questionambers.ogg'
},
{
title: '感官先生',
artist: '刘凤瑶',
album: '',
cover: 'img/ganguanxianshengliufengyao.jpg',
mp3: '',
ogg: 'mp3/ganguanxianshengliufengyao.ogg'
},
{
title: '感官先生 Cover by 許莉潔',
artist: '許莉潔',
album: '',
cover: 'img/ganguanxianshengxulijie.jpg',
mp3: '',
ogg: 'mp3/ganguanxianshengxulijie.ogg'
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
title: 'LOSER',
artist: '米津玄師',
album: '',
cover: 'img/loseryonezukekenshi.jpg',
mp3: '',
ogg: 'mp3/loseryonezukekenshi.ogg'
},
{
title: '此生过半',
artist: '豆包',
album: '',
cover: 'img/cishengguobandoubao.jpg',
mp3: '',
ogg: 'mp3/cishengguobandoubao.ogg'
},
{
title: 'Bursty Greedy Spider',
artist: '鈴木このみ',
album: '',
cover: 'img/burstygreedyspidersuzukikonomi.jpg',
mp3: '',
ogg: 'mp3/burstygreedyspidersuzukikonomi.ogg'
},
{
title: '廻廻奇譚',
artist: 'Eve',
album: '',
cover: 'img/kaikaikitaneve.jpg',
mp3: '',
ogg: 'mp3/kaikaikitaneve.ogg'
},
{
title: '踊',
artist: 'Ado',
album: '',
cover: 'img/odoriado.jpg',
mp3: '',
ogg: 'mp3/odoriado.ogg'
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
title: 'Be Alright',
artist: 'Fly By Nightcore',
album: '',
cover: 'img/bealrightflybynightcore.jpg',
mp3: '',
ogg: 'mp3/bealrightflybynightcore.ogg'
},
{
title: 'Drown',
artist: 'Milet',
album: '',
cover: 'img/drownmilet.jpg',
mp3: '',
ogg: 'mp3/drownmilet.ogg'
},
{
title: 'ないない',
artist: 'ReoNa',
album: '',
cover: 'img/nainaireona.jpg',
mp3: '',
ogg: 'mp3/nainaireona.ogg'
},
{
title: '品行崩壊',
artist: 'FantasticYouth',
album: '',
cover: 'img/hinkouhoukaifantasticyouth.jpg',
mp3: '',
ogg: 'mp3/hinkouhoukaifantasticyouth.ogg'
},
{
title: 'Checkmate',
artist: 'Milet',
album: '',
cover: 'img/checkmatemilet.jpg',
mp3: '',
ogg: 'mp3/checkmatemilet.ogg'
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
title: '踏山河',
artist: '是七叔呢',
album: '',
cover: 'img/tashanheshiqishune.jpg',
mp3: '',
ogg: 'mp3/tashanheshiqishune.ogg'
},
{
title: '虞兮叹',
artist: '闻人听書',
album: '',
cover: 'img/yuxitanwenrentingshu.jpg',
mp3: '',
ogg: 'mp3/yuxitanwenrentingshu.ogg'
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
title: 'Bedroom',
artist: 'JJ Lin 林俊傑 ft. Anne-Marie',
album: '',
cover: 'img/bedroomjjlinannemarie.jpg',
mp3: '',
ogg: 'mp3/bedroomjjlinannemarie.ogg'
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
title: 'Ever after',
artist: 'Aimer',
album: '',
cover: 'img/everafteraimer.jpg',
mp3: '',
ogg: 'mp3/everafteraimer.ogg'
},
{
title: '愛を知るまでは',
artist: 'あいみょん',
album: '',
cover: 'img/aiwoshirumadewaaimiyon.jpg',
mp3: '',
ogg: 'mp3/aiwoshirumadewaaimiyon.ogg'
},
{
title: 'Cry Baby',
artist: '髭男dism',
album: 'Cry Baby',
cover: 'img/crybabydism.jpg',
mp3: '',
ogg: 'mp3/crybabydism.ogg'
},
{
title: 'Page for Tomorrow',
artist: 'NOW ON AIR',
album: '',
cover: 'img/pagefortmrnowonair.jpg',
mp3: '',
ogg: 'mp3/pagefortmrnowonair.ogg'
},
{
title: 'もう少しだけ',
artist: 'YOASOBI',
album: '',
cover: 'img/mousukoshidake.jpg',
mp3: '',
ogg: 'mp3/mousukoshidake.ogg'
},
{
title: 'Cold rain',
artist: 'Aimer',
album: '',
cover: 'img/coldrainaimer.jpg',
mp3: '',
ogg: 'mp3/coldrainaimer.ogg'
},
{
title: 'Yearning for dark shadows',
artist: 'Resident Evil',
album: 'Village Soundtrack',
cover: 'img/yearningfordarkshadowsre.jpg',
mp3: '',
ogg: 'mp3/yearningfordarkshadowsre.mp3'
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
title: 'Say Yes',
artist: 'Nissy',
album: '',
cover: 'img/sayyesnissy.jpg',
mp3: '',
ogg: 'mp3/sayyesnissy.ogg'
},
{
title: 'まっさら',
artist: 'ReoNa',
album: '',
cover: 'img/masarareona.jpg',
mp3: '',
ogg: 'mp3/masarareona.ogg'
},
{
title: 'あしたはハレルヤ',
artist: 'ReoNa',
album: '',
cover: 'img/ashitawahareruyareona.jpg',
mp3: '',
ogg: 'mp3/ashitawahareruyareona.ogg'
},
{
title: '生きてるだけでえらいよ',
artist: 'ReoNa',
album: '',
cover: 'img/masarareona.jpg',
mp3: '',
ogg: 'mp3/ikiterudakedeeraiyoreona.ogg'
},
{
title: '愛って',
artist: 'Adieu',
album: '',
cover: 'img/aitteadieu.jpg',
mp3: '',
ogg: 'mp3/aitteadieu.ogg'
},
{
title: '最強★ピース',
artist: 'she9',
album: '',
cover: 'img/saikyopisu.jpg',
mp3: '',
ogg: 'mp3/saikyopisu.ogg'
},
{
title: 'プラネタリウム',
artist: '大塚 愛',
album: '',
cover: 'img/puranetariumuotsukaai.jpg',
mp3: '',
ogg: 'mp3/puranetariumuotsukaai.ogg'
},
{
title: 'CHE. R. RY',
artist: 'YUI',
album: '',
cover: 'img/cherryyui.jpg',
mp3: '',
ogg: 'mp3/cherryyui.ogg'
},
{
title: 'リナリア',
artist: 'まるりとりゅうが',
album: '',
cover: 'img/rinariamaruritoriyuuga.jpg',
mp3: '',
ogg: 'mp3/rinariamaruritoriyuuga.ogg'
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
title: 'Giant',
artist: 'YUQI ((G)I-DLE)',
album: 'A Page',
cover: 'img/giantyuqi.jpg',
mp3: '',
ogg: 'mp3/giantyuqi.ogg'
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
title: 'へべれけジャンキー',
artist: 'syudou',
album: '',
cover: 'img/heberekejiyankisyudou.jpg',
mp3: '',
ogg: 'mp3/heberekejiyankisyudou.ogg'
},
{
title: 'イージーゲーム',
artist: 'feat.和ぬか/natsumi',
album: '',
cover: 'img/ijigemewanukanatsumi.jpg',
mp3: '',
ogg: 'mp3/ijigemewanukanatsumi.ogg'
},
{
title: 'あんずの花',
artist: 'すりぃ feat.ねね',
album: '',
cover: 'img/anzunohanasuriinene.jpg',
mp3: '',
ogg: 'mp3/anzunohanasuriinene.ogg'
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
title: '恋',
artist: '星野源',
album: '',
cover: 'img/koihoshinogen.jpg',
mp3: '',
ogg: 'mp3/koihoshinogen.ogg'
},
{
title: '貴方解剖純愛歌 〜死ね〜',
artist: 'あいみょん',
album: '',
cover: 'img/shineaimiyon.jpg',
mp3: '',
ogg: 'mp3/shineaimiyon.ogg'
},
{
title: 'Hero',
artist: '平井 大',
album: '',
cover: 'img/herohiraidai.jpg',
mp3: '',
ogg: 'mp3/herohiraidai.ogg'
},
{
title: 'バードマン',
artist: 'SEKAI NO OWARI',
album: '',
cover: 'img/badomansekainoowari.jpg',
mp3: '',
ogg: 'mp3/badomansekainoowari.ogg'
},
{
title: '人生は最高の暇つぶし',
artist: 'HoneyWorks feat.Hanon',
album: '',
cover: 'img/jinseiwasaikonohimatsubushihoneywork.jpg',
mp3: '',
ogg: 'mp3/jinseiwasaikonohimatsubushihoneywork.ogg'
},
{
title: 'Moonlight(feat. Lil Milk)',
artist: '政学Zx',
album: '',
cover: 'img/moonlightzhengxuezx.jpg',
mp3: '',
ogg: 'mp3/moonlightzhengxuezx.ogg'
},
{
title: '遇螢',
artist: '只有影子',
album: '',
cover: 'img/yuyingzhiyouyingzi.jpg',
mp3: '',
ogg: 'mp3/yuyingzhiyouyingzi.ogg'
},
{
title: '女侠饶命',
artist: '陆虎',
album: '',
cover: 'img/nvxiaraomingluhu.jpg',
mp3: '',
ogg: 'mp3/nvxiaraomingluhu.ogg'
},
{
title: 'LOOP',
artist: 'HARRIANNE(해리앤)',
album: '',
cover: 'img/loopharrianne.jpg',
mp3: '',
ogg: 'mp3/loopharrianne.ogg'
},
{
title: 'Bonnie & Clyde',
artist: 'YUQI ((G)I-DLE)',
album: 'A Page',
cover: 'img/giantyuqi.jpg',
mp3: '',
ogg: 'mp3/bonnienclydeyuqi.ogg'
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
title: '怪盗',
artist: 'back number',
album: '',
cover: 'img/kaitoubacknumber.jpg',
mp3: '',
ogg: 'mp3/kaitoubacknumber.ogg'
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
title: 'Be Mine',
artist: 'Kaownah',
album: '',
cover: 'img/beminekaownah.jpg',
mp3: '',
ogg: 'mp3/beminekaownah.ogg'
},
{
title: 'พี่ไม่หล่อลวง (IM NOT A CON-HEARTIST)',
artist: 'BamBam',
album: '',
cover: 'img/imnotaconheartist.jpg',
mp3: '',
ogg: 'mp3/imnotaconheartist.ogg'
},
{
title: 'W/X/Y',
artist: 'Tani Yuuki',
album: '',
cover: 'img/wxytaniyuuki.jpg',
mp3: '',
ogg: 'mp3/wxytaniyuuki.ogg'
},
{
title: '盾',
artist: 'ロザリーナ',
album: '',
cover: 'img/taterozarina.jpg',
mp3: '',
ogg: 'mp3/taterozarina.ogg'
},
{
title: '大丈夫',
artist: 'たかやん',
album: '',
cover: 'img/daijoubutakayan.jpg',
mp3: '',
ogg: 'mp3/daijoubutakayan.ogg'
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
title: '热爱105°C的你',
artist: '阿肆',
album: '',
cover: 'img/reai105dudeniashi.jpg',
mp3: '',
ogg: 'mp3/reai105dudeniashi.ogg'
},
{
title: '归去来兮',
artist: '叶炫清 · 郑建浩 · 朱伟',
album: '网剧《双世宠妃2》主题曲',
cover: 'img/guiqulaixiyexuanqing.jpg',
mp3: '',
ogg: 'mp3/guiqulaixiyexuanqing.ogg'
},
{
title: '过场',
artist: '月尘',
album: '',
cover: 'img/guochangyuechen.jpg',
mp3: '',
ogg: 'mp3/guochangyuechen.ogg'
},
{
title: '盜墓筆記·十年人間',
artist: 'cici_ ',
album: '',
cover: 'img/shinianrenjiancici_.jpg',
mp3: '',
ogg: 'mp3/shinianrenjiancici_.ogg'
},
{
title: '夢返',
artist: '黃霄雲',
album: '',
cover: 'img/mengfanhuangxiaoyun.jpg',
mp3: '',
ogg: 'mp3/mengfanhuangxiaoyun.ogg'
},
{
title: '滿目星辰皆是你',
artist: 'LKer林柯',
album: '',
cover: 'img/manmuxingchengjieshinilker.jpg',
mp3: '',
ogg: 'mp3/manmuxingchengjieshinilker.ogg'
},
{
title: '守護著我的光',
artist: '李巍V仔',
album: '',
cover: 'img/shouhuzhewodeguangliweivzai.jpg',
mp3: '',
ogg: 'mp3/shouhuzhewodeguangliweivzai.ogg'
},
{
title: '半生雪',
artist: '是七叔呢',
album: '',
cover: 'img/banshengxueshiqishune.jpg',
mp3: '',
ogg: 'mp3/banshengxueshiqishune.ogg'
},
{
title: '生而为人',
artist: '范茹',
album: '',
cover: 'img/shengerweirenfanru.jpg',
mp3: '',
ogg: 'mp3/shengerweirenfanru.ogg'
},
{
title: 'Dancing with your ghost',
artist: '于文文',
album: '',
cover: 'img/dancingwithyourghost.jpg',
mp3: '',
ogg: 'mp3/dancingwithyourghost.ogg'
},
{
title: 'Dirty Paws',
artist: 'Of Monsters And Men',
album: '',
cover: 'img/dirtypawsofmonsterandmen.jpg',
mp3: '',
ogg: 'mp3/dirtypawsofmonsterandmen.ogg'
},
{
title: 'Blur',
artist: 'Stellar',
album: '',
cover: 'img/blurstellar.jpg',
mp3: '',
ogg: 'mp3/blurstellar.ogg'
},
{
title: '勿忘',
artist: 'Awesome City Club',
album: '',
cover: 'img/mochiwasureawesomecityclub.jpg',
mp3: '',
ogg: 'mp3/mochiwasureawesomecityclub.ogg'
},
{
title: '不可幸力',
artist: 'Vaundy',
album: '',
cover: 'img/fukakorikivaundy.jpg',
mp3: '',
ogg: 'mp3/fukakorikivaundy.ogg'
},
{
title: '又三郎',
artist: 'ヨルシカ',
album: '',
cover: 'img/matasaroyorushika.jpg',
mp3: '',
ogg: 'mp3/matasaroyorushika.ogg'
},
{
title: 'เกี้ยวพาราสี',
artist: 'P-HOT ft. SPRITE',
album: '',
cover: 'img/Keiywpharasiphot.jpg',
mp3: '',
ogg: 'mp3/Keiywpharasiphot.ogg'
},
{
title: 'ใครเพื่อนเธอ',
artist: 'Pam',
album: '',
cover: 'img/askrealpam.jpg',
mp3: '',
ogg: 'mp3/askrealpam.ogg'
},
{
title: 'เจ็บส่ำฟ้า',
artist: 'เบลล์ นิภาดา',
album: '',
cover: 'img/cebsafabellniphada.jpg',
mp3: '',
ogg: 'mp3/cebsafabellniphada.ogg'
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
title: 'Viewtiful Days!',
artist: '和氣あず未',
album: '記憶に恋をした',
cover: 'img/viewtifuldayswakiazumi.jpg',
mp3: '',
ogg: 'mp3/viewtifuldayswakiazumi.ogg'
},
{
title: '超跑情人夢日本版',
artist: '三原JAPAN',
album: '',
cover: 'img/chaopaoqingrenmengsangen.jpg',
mp3: '',
ogg: 'mp3/chaopaoqingrenmengsangen.ogg'
},
{
title: 'BPM',
artist: 'she9',
album: '',
cover: 'img/bpmshe9.jpg',
mp3: '',
ogg: 'mp3/bpmshe9.ogg'
},
{
title: 'サプライズ',
artist: 'LiSA',
album: '',
cover: 'img/sapuraizulisa.jpg',
mp3: '',
ogg: 'mp3/sapuraizulisa.ogg'
},
{
title: '白鴿',
artist: '你的上好佳',
album: '',
cover: 'img/baigenideshanghaojia.jpg',
mp3: '',
ogg: 'mp3/baigenideshanghaojia.ogg'
},
{
title: '银河与星斗',
artist: 'yihuik苡慧',
album: '',
cover: 'img/yihuikyinheyuxingdou.jpg',
mp3: '',
ogg: 'mp3/yihuikyinheyuxingdou.ogg'
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
title: '怪獣の花唄',
artist: 'Vaundy',
album: '',
cover: 'img/kaijiunoutavaundy.jpg',
mp3: '',
ogg: 'mp3/kaijiunoutavaundy.ogg'
},
{
title: 'モア',
artist: 'After the Rain',
album: '',
cover: 'img/mouaaftertherain.jpg',
mp3: '',
ogg: 'mp3/mouaaftertherain.ogg'
},
{
title: 'ずっとずっとずっと',
artist: '緑黄色社会',
album: '',
cover: 'img/zuttozuttozuttoryokuoushokushakai.jpg',
mp3: '',
ogg: 'mp3/zuttozuttozuttoryokuoushokushakai.ogg'
},
{
title: 'ヨイハナビ',
artist: 'リムル (CV.岡咲美保)',
album: '',
cover: 'img/yoihanabirimuru.jpg',
mp3: '',
ogg: 'mp3/yoihanabirimuru.ogg'
},
{
title: '105°C',
artist: '早稻叽',
album: '',
cover: 'img/105shiuzaodaoji.jpg',
mp3: '',
ogg: 'mp3/105shiuzaodaoji.ogg'
},
{
title: '玦恋',
artist: '周深',
album: '',
cover: 'img/juelianzhoushen.jpg',
mp3: '',
ogg: 'mp3/juelianzhoushen.ogg'
},
{
title: '年岁',
artist: '毛不易',
album: '',
cover: 'img/niansuimaobuyi.jpg',
mp3: '',
ogg: 'mp3/niansuimaobuyi.ogg'
},
{
title: '嘉宾',
artist: '张远',
album: '',
cover: 'img/jiabingzhangyuan.jpg',
mp3: '',
ogg: 'mp3/jiabingzhangyuan.ogg'
},
{
title: '來遲',
artist: '戴羽彤',
album: '',
cover: 'img/laichidaiyutong.jpg',
mp3: '',
ogg: 'mp3/laichidaiyutong.ogg'
},
{
title: '野摩托（Remix Dj阿卓版）',
artist: '郭鎬鳴',
album: '',
cover: 'img/yemotuoguogaoming.jpg',
mp3: '',
ogg: 'mp3/yemotuoguogaoming.ogg'
},
{
title: '繋がりたいの',
artist: 'たかやん',
album: '',
cover: 'img/tsunagaritainotakayan.jpg',
mp3: '',
ogg: 'mp3/tsunagaritainotakayan.ogg'
},
{
title: 'REFLECT',
artist: 'Gawr Gura',
album: '',
cover: 'img/reflectgawgura.jpg',
mp3: '',
ogg: 'mp3/reflectgawgura.ogg'
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
title: 'Rolling in the deep Cover',
artist: 'AILEE X HENRY',
album: '',
cover: 'img/rollinginthedeepaileehenry.jpg',
mp3: '',
ogg: 'mp3/rollinginthedeepaileehenry.ogg'
},
{
title: 'GOT IT Cover',
artist: '毛不易 X 周深',
album: '',
cover: 'img/gotitmaobuyizhoushen.jpg',
mp3: '',
ogg: 'mp3/gotitmaobuyizhoushen.ogg'
},
{
title: 'Bad Habits',
artist: 'Ed Sheeran',
album: '',
cover: 'img/badhabitsedsheeran.jpg',
mp3: '',
ogg: 'mp3/badhabitsedsheeran.ogg'
},
{
title: 'Coming to you',
artist: '그래쓰 (GRASS)',
album: '보이스4 OST',
cover: 'img/comingtoyougrass.jpg',
mp3: '',
ogg: 'mp3/comingtoyougrass.ogg'
},
{
title: 'ウシロマエ Cover',
artist: 'ぷらそにか',
album: '',
cover: 'img/ushiromaepurasonika.jpg',
mp3: '',
ogg: 'mp3/ushiromaepurasonika.ogg'
},
{
title: 'U+',
artist: 'にしな',
album: '',
cover: 'img/u+nishina.jpg',
mp3: '',
ogg: 'mp3/u+nishina.ogg'
},
{
title: '死神',
artist: '米津玄師',
album: '',
cover: 'img/shinigamiyonezukenshi.jpg',
mp3: '',
ogg: 'mp3/shinigamiyonezukenshi.ogg'
},
{
title: 'Perfect World',
artist: 'TWICE',
album: '',
cover: 'img/perfectworldtwice.jpg',
mp3: '',
ogg: 'mp3/perfectworldtwice.ogg'
},
{
title: 'ばかじゃないのに',
artist: 'ずっと真夜中でいいのに',
album: '',
cover: 'img/bakajyanainonizuttomayo.jpg',
mp3: '',
ogg: 'mp3/bakajyanainonizuttomayo.ogg'
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
title: 'Sunlight(Feat. Nilka)',
artist: 'InfiNoise',
album: '',
cover: 'img/sunlightnikainfinoise.jpg',
mp3: '',
ogg: 'mp3/sunlightnikainfinoise.ogg'
},
{
title: 'グレースノート',
artist: 'Aimer',
album: '短編アニメ「夜の国」第2夜 主題歌',
cover: 'img/guresunotoaimer.jpg',
mp3: '',
ogg: 'mp3/guresunotoaimer.ogg'
},
{
title: 'A Girls',
artist: 'alma',
album: '',
cover: 'img/agirlsalma.jpg',
mp3: '',
ogg: 'mp3/agirlsalma.ogg'
},
{
title: '空腹',
artist: 'まふまふ',
album: '',
cover: 'img/kuufukumafumafu.jpg',
mp3: '',
ogg: 'mp3/kuufukumafumafu.ogg'
},
{
title: 'デモーニッシュ',
artist: 'ツユ',
album: '貴方を不幸に誘いますね',
cover: 'img/demonnishiyushiyu.jpg',
mp3: '',
ogg: 'mp3/demonnishiyushiyu.ogg'
},
{
title: '忠犬ハチ',
artist: 'ツユ',
album: '貴方を不幸に誘いますね',
cover: 'img/chiukenhachishiu.jpg',
mp3: '',
ogg: 'mp3/chiukenhachishiu.ogg'
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
title: 'ニッポン笑顔百景',
artist: 'ももクロ MOMOIRO CLOVER Z',
album: '',
cover: 'img/nipponegaohaikyou.jpg',
mp3: '',
ogg: 'mp3/nipponegaohaikyou.ogg'
},
{
title: '好きだから',
artist: 'ユイカ',
album: '',
cover: 'img/sukidakarayuika.jpg',
mp3: '',
ogg: 'mp3/sukidakarayuika.ogg'
},
{
title: '不如 (女声翻唱)',
artist: '也可',
album: '',
cover: 'img/buruyeke.jpg',
mp3: '',
ogg: 'mp3/buruyeke.ogg'
},
{
title: 'Butterflies',
artist: 'MAX & Ali Gatie',
album: '',
cover: 'img/butterfliesmaxnaligate.jpg',
mp3: '',
ogg: 'mp3/butterfliesmaxnaligate.ogg'
},
{
title: 'Drunk On Emotions',
artist: 'Clara Mae',
album: '',
cover: 'img/drunkonemotionsclaramae.jpg',
mp3: '',
ogg: 'mp3/drunkonemotionsclaramae.ogg'
},
{
title: 'Love To Lose',
artist: 'Sandro Cavazza, Georgia Ku',
album: '',
cover: 'img/lovetolosesandrogeorgia.jpg',
mp3: '',
ogg: 'mp3/lovetolosesandrogeorgia.ogg'
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
title: '勿忘 (Covered by KOBASOLO & Nagie Lane )',
artist: 'KOBASOLO & Nagie Lane',
album: '',
cover: 'img/mochiwasurekoasolonagie.jpg',
mp3: '',
ogg: 'mp3/mochiwasurekoasolonagie.ogg'
},
{
title: 'ギャンブル',
artist: 'syudou',
album: '',
cover: 'img/gyanburusyudou.jpg',
mp3: '',
ogg: 'mp3/gyanburusyudou.ogg'
},
{
title: '爆笑',
artist: 'syudou',
album: '',
cover: 'img/bakushousyudou.jpg',
mp3: '',
ogg: 'mp3/bakushousyudou.ogg'
},
{
title: 'DROP',
artist: '美波',
album: '',
cover: 'img/dropminami.jpg',
mp3: '',
ogg: 'mp3/dropminami.ogg'
},
{
title: 'YY',
artist: 'ロイ-RöE- ',
album: '',
cover: 'img/yyroe.jpg',
mp3: '',
ogg: 'mp3/yyroe.ogg'
},
{
title: 'Like Flames',
artist: 'MindaRyn',
album: '『転生したらスライムだった件第2期』オープニング主題歌第二弾',
cover: 'img/likeflamesmindaryn.jpg',
mp3: '',
ogg: 'mp3/likeflamesmindaryn.ogg'
},
{
title: 'ノスタルジア',
artist: 'AliA',
album: '',
cover: 'img/nosutarujiaalia.jpg',
mp3: '',
ogg: 'mp3/nosutarujiaalia.ogg'
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
{
title: 'Love Song',
artist: 'Uru',
album: '',
cover: 'img/lovesoguru.jpg',
mp3: '',
ogg: 'mp3/lovesoguru.ogg'
},
{
title: '生來是鹰',
artist: '陈雪燃',
album: '',
cover: 'img/shenglaishiyingchengxueran.jpg',
mp3: '',
ogg: 'mp3/shenglaishiyingchengxueran.ogg'
},
{
title: 'На часах ноль-ноль',
artist: 'Dabro',
album: '',
cover: 'img/nachasakhnolnoldabro.jpg',
mp3: '',
ogg: 'mp3/nachasakhnolnoldabro.ogg'
},
{
title: '三時のキス',
artist: 'ロクデナシ',
album: '',
cover: 'img/sanjinokisurokudenashi.jpg',
mp3: '',
ogg: 'mp3/sanjinokisurokudenashi.ogg'
},
{
title: 'ヘビリンゴ ',
artist: 'すりぃ feat.ねね',
album: '',
cover: 'img/hebiringosuriinene.jpg',
mp3: '',
ogg: 'mp3/hebiringosuriinene.ogg'
},
{
title: '彼女は旅に出る',
artist: '鎖那',
album: '',
cover: 'img/kanojowatabiniderukisarina.jpg',
mp3: '',
ogg: 'mp3/kanojowatabiniderukisarina.ogg'
},
{
title: 'tutu',
artist: '鎖那',
album: '',
cover: 'img/tutukisarina.jpg',
mp3: '',
ogg: 'mp3/tutukisarina.ogg'
},
{
title: 'Don Omar - Danza Kuduro REMIX Long Version',
artist: 'GANGSTER CITY',
album: '',
cover: 'img/danzakudororemixgangstercity.jpg',
mp3: '',
ogg: 'mp3/danzakudororemixgangstercity.ogg'
},
{
title: 'ワールドイズマイン',
artist: 'ハンブレッダーズ',
album: '',
cover: 'img/worldisminehumbreaders.jpg',
mp3: '',
ogg: 'mp3/worldisminehumbreaders.ogg'
},
{
title: '夏霞',
artist: 'あたらよ',
album: '',
cover: 'img/natukasumiatarayo.jpg',
mp3: '',
ogg: 'mp3/natukasumiatarayo.ogg'
},
{
title: '会いたくて',
artist: 'Ado',
album: '',
cover: 'img/aitakuteado.jpg',
mp3: '',
ogg: 'mp3/aitakuteado.ogg'
},
{
title: 'Caramelldansen (Swedish Original)',
artist: 'Caramella Girls',
album: '',
cover: 'img/caramelldansencaramellagirls.jpg',
mp3: '',
ogg: 'mp3/caramelldansencaramellagirls.ogg'
},
{
title: 'I Love You 3000',
artist: 'Stephanie Poetri',
album: '',
cover: 'img/iloveu3000tephaniepoetri.jpg',
mp3: '',
ogg: 'mp3/iloveu3000tephaniepoetri.ogg'
},
{
title: '掠火之槍',
artist: '三無x祖婭納惜',
album: '',
cover: 'img/jinghuozhiqiangannwuzuyanaxi.jpg',
mp3: '',
ogg: 'mp3/jinghuozhiqiangannwuzuyanaxi.ogg'
},
{
title: '白い蝉',
artist: 'majiko / まじ娘',
album: '',
cover: 'img/shiroisemimajiko.jpg',
mp3: '',
ogg: 'mp3/shiroisemimajiko.ogg'
},
{
title: 'ロマンスの約束',
artist: '幾田りら',
album: '',
cover: 'img/romansunoyakusokuikura.jpg',
mp3: '',
ogg: 'mp3/romansunoyakusokuikura.ogg'
},
{
title: 'Cry Baby',
artist: '髭男dism',
album: '',
cover: 'img/crybabyhigedandism.jpg',
mp3: '',
ogg: 'mp3/crybabyhigedandism.ogg'
},
{
title: 'Eyes of the future',
artist: 'HiHi Jets',
album: '',
cover: 'img/eyesofthefuturehihijets.jpg',
mp3: '',
ogg: 'mp3/eyesofthefuturehihijets.ogg'
},
{
title: 'Sleepless Night',
artist: 'yama',
album: '',
cover: 'img/sleepnightyama.jpg',
mp3: '',
ogg: 'mp3/sleepnightyama.ogg'
},
{
title: '소리꾼',
artist: 'Stray Kids',
album: 'NOEASY',
cover: 'img/solikkunstraykid.jpg',
mp3: '',
ogg: 'mp3/solikkunstraykid.ogg'
},
{
title: 'Still Wonder',
artist: '하현상(Ha Hyunsang)',
album: '너는 나의 봄 OST Part 3',
cover: 'img/stillwonderhahyunsang.jpg',
mp3: '',
ogg: 'mp3/stillwonderhahyunsang.ogg'
},
{
title: '世界の秘密',
artist: '酸欠少女さユり',
album: '',
cover: 'img/sekainohimitsusankenshyojousayuri.jpg',
mp3: '',
ogg: 'mp3/sekainohimitsusankenshyojousayuri.ogg'
},
{
title: 'ヨワネハキ feat. 和ぬか, asmi',
artist: 'MAISONdes',
album: '',
cover: 'img/yowanehakimaisondes.jpg',
mp3: '',
ogg: 'mp3/yowanehakimaisondes.ogg'
},
{
title: 'ヨワネハキ feat. 和ぬか, asmi ( The First Take ver )',
artist: 'MAISONdes',
album: '',
cover: 'img/yowanehakimaisondesthefirsttake.jpg',
mp3: '',
ogg: 'mp3/yowanehakimaisondesthefirsttake.ogg'
},
{
title: '八月の蛍',
artist: 'HACHI',
album: '',
cover: 'img/hachigatsunohotaruhachi.jpg',
mp3: '',
ogg: 'mp3/hachigatsunohotaruhachi.ogg'
},
{
title: '구원자 (Savior) Feat. B.I',
artist: '이하이 (LeeHi)',
album: 'ONLY',
cover: 'img/saviorleehi.jpg',
mp3: '',
ogg: 'mp3/saviorleehi.ogg'
},
{
title: 'Dandelions',
artist: 'Ruth B.',
album: '',
cover: 'img/dandelionsruthb.jpg',
mp3: '',
ogg: 'mp3/dandelionsruthb.ogg'
},
{
title: ' ทน Acoustic Cover By Pookky x Oat ',
artist: 'Pookky x Oat',
album: '',
cover: 'img/thnpookkyoat.jpg',
mp3: '',
ogg: 'mp3/thnpookkyoat.ogg'
},
{
title: 'WIP WUP (วิบวับ)  Acoustic Cover By Pookky x Oat ',
artist: 'Pookky x Oat',
album: '',
cover: 'img/wipwuppookkyoat.jpg',
mp3: '',
ogg: 'mp3/wipwuppookkyoat.ogg'
},
{
title: 'อยากเป็นลูกเขย ( ຢາກເປັນລູກເຂີຍ )Acoustic Cover By Pookky x Oat ',
artist: 'Pookky x Oat',
album: '',
cover: 'img/yakpenlukkhoenypookkyoat.jpg',
mp3: '',
ogg: 'mp3/yakpenlukkhoenypookkyoat.ogg'
},
{
title: 'ใส่ใจได้แค่มอง (ໃສ່ໃຈໄດ້ແຕ່ມອງ)Acoustic Cover By Pookky x Oat ',
artist: 'Pookky x Oat',
album: '',
cover: 'img/saichaidaiaetmongpookkyoat.jpg',
mp3: '',
ogg: 'mp3/saichaidaiaetmongpookkyoat.ogg'
},
{
title: 'Chance',
artist: 'N.Flying(엔플라잉)',
album: '',
cover: 'img/nflyingchance.jpg',
mp3: '',
ogg: 'mp3/nflyingchance.ogg'
},
{
title: 'トライミライ',
artist: 'she9',
album: '',
cover: 'img/doraimiraishe9.jpg',
mp3: '',
ogg: 'mp3/doraimiraishe9.ogg'
},
{
title: 'Summer Fling',
artist: 'Nina Nesbitt',
album: '',
cover: 'img/summerflingninanesbitt.jpg',
mp3: '',
ogg: 'mp3/summerflingninanesbitt.ogg'
},
{
title: 'Im not Pretty',
artist: 'JESSIA',
album: '',
cover: 'img/imnotprettyjessia.jpg',
mp3: '',
ogg: 'mp3/imnotprettyjessia.ogg'
},
{
title: 'Girls Like Us',
artist: 'Zoe Wees',
album: '',
cover: 'img/girlslikeuszoewees.jpg',
mp3: '',
ogg: 'mp3/girlslikeuszoewees.ogg'
},
{
title: 'Reason',
artist: '요아리(Yoari)',
album: '검은 태양 OST Part 1',
cover: 'img/reasonyoari.jpg',
mp3: '',
ogg: 'mp3/reasonyoari.ogg'
},
{
title: 'THATS WHAT I WANT',
artist: 'Lil Nas',
album: '',
cover: 'img/thatswhatiwantlilnas.jpg',
mp3: '',
ogg: 'mp3/thatswhatiwantlilnas.ogg'
},
{
title: 'LALISA',
artist: 'LISA',
album: '',
cover: 'img/lalisalisa.jpg',
mp3: '',
ogg: 'mp3/lalisalisa.ogg'
},
{
title: 'Deja Vu',
artist: 'ATEEZ(에이티즈)',
album: '',
cover: 'img/dejavuateez.jpg',
mp3: '',
ogg: 'mp3/dejavuateez.ogg'
},
{
title: '색안경 (STEREOTYPE)',
artist: 'STAYC(스테이씨)',
album: '',
cover: 'img/stereotypestayc.jpg',
mp3: '',
ogg: 'mp3/stereotypestayc.ogg'
},
{
title: '花月ノ夢',
artist: 'さくらみこ',
album: '',
cover: 'img/hagetsunoyumesakuramiko.jpg',
mp3: '',
ogg: 'mp3/hagetsunoyumesakuramiko.ogg'
},
{
title: '大正浪漫',
artist: 'YOASOBI',
album: '',
cover: 'img/taishouromanyoasobi.jpg',
mp3: '',
ogg: 'mp3/taishouromanyoasobi.ogg'
},
{
title: '画离弦',
artist: '海伦',
album: '',
cover: 'img/hualixianhailun.jpg',
mp3: '',
ogg: 'mp3/hualixianhailun.ogg'
},
{
title: '花花世界',
artist: '尤起勝/夏婉安',
album: '',
cover: 'img/huahuashijieyouqishengxiawanan.jpg',
mp3: '',
ogg: 'mp3/huahuashijieyouqishengxiawanan.ogg'
},
{
title: '你能不能不要离开我',
artist: '莫叫姐姐',
album: '',
cover: 'img/ninengbunengbuyaolikaiwomojiaojiejie.jpg',
mp3: '',
ogg: 'mp3/ninengbunengbuyaolikaiwomojiaojiejie.ogg'
},
{
title: 'LOCO',
artist: 'ITZY',
album: 'ITZY The 1st Album "CRAZY IN LOVE"',
cover: 'img/locoitzy.jpg',
mp3: '',
ogg: 'mp3/locoitzy.ogg'
},
{
title: '深海',
artist: '森七菜',
album: '',
cover: 'img/shinkaimorinana.jpg',
mp3: '',
ogg: 'mp3/shinkaimorinana.ogg'
},
{
title: '血流',
artist: 'yama',
album: '',
cover: 'img/ketsuryuyama.jpg',
mp3: '',
ogg: 'mp3/ketsuryuyama.ogg'
},
{
title: 'Choose me',
artist: 'BAND-MAID',
album: '',
cover: 'img/bandmaidchooseme.jpg',
mp3: '',
ogg: 'mp3/bandmaidchooseme.ogg'
},
{
title: 'After Life',
artist: 'BAND-MAID',
album: '',
cover: 'img/afterlifebandmaid.jpg',
mp3: '',
ogg: 'mp3/afterlifebandmaid.ogg'
},
{
title: '湘南族',
artist: 'Aural Vampire',
album: 'ZOLTANK',
cover: 'img/shonanzokuauralvampire.jpg',
mp3: '',
ogg: 'mp3/shonanzokuauralvampire.ogg'
},
{
title: 'Im a Pop',
artist: 'ちゃんみな',
album: '',
cover: 'img/imapopchanmina.jpg',
mp3: '',
ogg: 'mp3/imapopchanmina.ogg'
},
{
title: '美人',
artist: 'ちゃんみな',
album: '',
cover: 'img/bijinchanmina.jpg',
mp3: '',
ogg: 'mp3/bijinchanmina.ogg'
},
{
title: 'End of a life',
artist: 'Mori Calliope',
album: '',
cover: 'img/endofalifemoricalliope.jpg',
mp3: '',
ogg: 'mp3/endofalifemoricalliope.ogg'
},
{
title: 'The Feels',
artist: 'TWICE',
album: '',
cover: 'img/thefeelstwice.jpg',
mp3: '',
ogg: 'mp3/thefeelstwice.ogg'
},
{
title: 'シャッター',
artist: '優里',
album: '',
cover: 'img/shiyattayuri.jpg',
mp3: '',
ogg: 'mp3/shiyattayuri.ogg'
},
{
title: 'Magical Word',
artist: 'P丸様',
album: '',
cover: 'img/magicalwordpmarusama.jpg',
mp3: '',
ogg: 'mp3/magicalwordpmarusama.ogg'
},
{
title: 'そばにいて。',
artist: 'ユイカ',
album: '',
cover: 'img/sobaniiteyuika.jpg',
mp3: '',
ogg: 'mp3/sobaniiteyuika.ogg'
},
{
title: 'Lost Control',
artist: 'Alan Walker ft. Sorana',
album: 'Different World',
cover: 'img/lostcontrolalanwalker.jpg',
mp3: '',
ogg: 'mp3/lostcontrolalanwalker.ogg'
},
{
title: 'STAY',
artist: 'The Kid LAROI, Justin Bieber',
album: '',
cover: 'img/stayjustinbieberthekidlarot.jpg',
mp3: '',
ogg: 'mp3/stayjustinbieberthekidlarot.ogg'
},
{
title: 'Savage',
artist: 'aespa 에스파',
album: '',
cover: 'img/savageaespa.jpg',
mp3: '',
ogg: 'mp3/savageaespa.ogg'
},
{
title: 'Keep me afraid',
artist: 'Nessa Barrett',
album: '',
cover: 'img/keepmeafraid.jpg',
mp3: '',
ogg: 'mp3/keepmeafraid.ogg'
},
{
title: 'Berani',
artist: 'DOLLA',
album: '',
cover: 'img/beranidolla.jpg',
mp3: '',
ogg: 'mp3/beranidolla.ogg'
},
{
title: 'MONEY HONEY (Prod. By URBOYTJ)',
artist: 'F.HERO x URBOYTJ Ft. MINNIE ((G)I-DLE)',
album: '',
cover: 'img/moneyhoneyfherourboytj.jpg',
mp3: '',
ogg: 'mp3/moneyhoneyfherourboytj.ogg'
},
{
title: 'เก่งแต่เรื่องคนอื่น (EXPERT)',
artist: 'INK WARUNTORN Feat.SPRITE',
album: '',
cover: 'img/expertinkwaruntorn.jpg',
mp3: '',
ogg: 'mp3/expertinkwaruntorn.ogg'
},
{
title: '比擬',
artist: '阿YueYue',
album: '',
cover: 'img/biniayueyue.jpg',
mp3: '',
ogg: 'mp3/biniayueyue.ogg'
},
{
title: '孤城',
artist: '洛先生',
album: '',
cover: 'img/guchengluoxiansheng.jpg',
mp3: '',
ogg: 'mp3/guchengluoxiansheng.ogg'
},
{
title: '沈园外',
artist: '阿YueYue/戾格',
album: '',
cover: 'img/shenyuanwaiayueyuelige.jpg',
mp3: '',
ogg: 'mp3/shenyuanwaiayueyuelige.ogg'
},
{
title: 'Invisible',
artist: 'Gremlin',
album: '',
cover: 'img/invisiblegremin.jpg',
mp3: '',
ogg: 'mp3/invisiblegremin.ogg'
},
{
title: 'Zombie',
artist: 'Bad Wolves',
album: '',
cover: 'img/zombiebadwolves.jpg',
mp3: '',
ogg: 'mp3/zombiebadwolves.ogg'
},
{
title: '太陽',
artist: 'ちゃんみな',
album: '',
cover: 'img/daiyouchanmina.jpg',
mp3: '',
ogg: 'mp3/daiyouchanmina.ogg'
},
{
title: 'Lucky Days',
artist: '福原 遥',
album: '',
cover: 'img/luckydayfukaharaharuka.jpg',
mp3: '',
ogg: 'mp3/luckydayfukaharaharuka.ogg'
},
{
title: 'Возьми сердце моё',
artist: 'Канги',
album: '',
cover: 'img/Vozmiserdtsemoyoarishanya.jpg',
mp3: '',
ogg: 'mp3/Vozmiserdtsemoyokangi.ogg'
},
{
title: 'Возьми сердце моё cover',
artist: 'arishanya',
album: '',
cover: 'img/Vozmiserdtsemoyoarishanya.jpg',
mp3: '',
ogg: 'mp3/Vozmiserdtsemoyoarishanya.ogg'
},
{
title: 'Heart',
artist: 'あいみょん',
album: '',
cover: 'img/heartaimiyon.jpg',
mp3: '',
ogg: 'mp3/heartaimiyon.ogg'
},
{
title: 'ツバメ (feat. ミドリーズ)',
artist: 'YOASOBI',
album: '',
cover: 'img/tsubameyoasobi.jpg',
mp3: '',
ogg: 'mp3/tsubameyoasobi.ogg'
},
{
title: 'Oz.',
artist: 'yama',
album: '',
cover: 'img/ozyama.jpg',
mp3: '',
ogg: 'mp3/ozyama.ogg'
},
{
title: 'ヒカレイノチ',
artist: 'Kitri キトリ',
album: '',
cover: 'img/hikareinochikitri.jpg',
mp3: '',
ogg: 'mp3/hikareinochikitri.ogg'
},
{
title: 'モラトリアム',
artist: 'Omoinotake',
album: '',
cover: 'img/moratoriamuomoinotake.jpg',
mp3: '',
ogg: 'mp3/moratoriamuomoinotake.ogg'
},
{
title: '나를 신경 쓰고 있는 건가',
artist: '웬디(WENDY)',
album: '유미의 세포들 OST Part.1',
cover: 'img/naleulsingyeongsseugoissneungeongawendy.jpg',
mp3: '',
ogg: 'mp3/naleulsingyeongsseugoissneungeongawendy.ogg'
},
{
title: '타이밍',
artist: '선우정아',
album: '유미의 세포들 OST Part.11',
cover: 'img/timingjungsunwoo.jpg',
mp3: '',
ogg: 'mp3/timingjungsunwoo.ogg'
},
{
title: 'Rock with you',
artist: 'SEVENTEEN',
album: 'SEVENTEEN 9th Mini Album - Attacca',
cover: 'img/rockwithuseventeen.jpg',
mp3: '',
ogg: 'mp3/rockwithuseventeen.ogg'
},
{
title: 'XOXO',
artist: 'JEON SOMI (전소미)',
album: '',
cover: 'img/xoxojeonsomi.jpg',
mp3: '',
ogg: 'mp3/xoxojeonsomi.ogg'
},
{
title: '高攀',
artist: '小乐哥',
album: '',
cover: 'img/gaopanxiaolege.jpg',
mp3: '',
ogg: 'mp3/gaopanxiaolege.ogg'
},
{
title: '玻璃心',
artist: '黃明志 Ft.陳芳語',
album: '',
cover: 'img/bolixinnameweechengfangyu.jpg',
mp3: '',
ogg: 'mp3/bolixinnameweechengfangyu.ogg'
},
{
title: 'Танцы под дождем',
artist: 'MIA BOYKA, Ваня Дмитриенко',
album: '',
cover: 'img/tantsypoddozhdemmiaboyka.jpg',
mp3: '',
ogg: 'mp3/tantsypoddozhdemmiaboyka.ogg'
},
{
title: 'Капкан (Волшебная Ариэль)',
artist: 'Konfuz, MIA BOYKA',
album: '',
cover: 'img/kapkanmiaboykakonfuz.jpg',
mp3: '',
ogg: 'mp3/kapkanmiaboykakonfuz.ogg'
},
{
title: 'Юность',
artist: 'Dabro',
album: '',
cover: 'img/youthdabro.jpg',
mp3: '',
ogg: 'mp3/youthdabro.ogg'
},
{
title: '自娱自乐',
artist: '徐心愉',
album: '',
cover: 'img/ziyuzilexuxinyu.jpg',
mp3: '',
ogg: 'mp3/ziyuzilexuxinyu.ogg'
},
{
title: 'So Dumb ',
artist: 'Mindme feat.NeiNei',
album: '',
cover: 'img/sodumbmindmeneinei.jpg',
mp3: '',
ogg: 'mp3/sodumbmindmeneinei.ogg'
},
{
title: 'MAKAFUKA',
artist: 'グランサガ×RADWIMPS',
album: '',
cover: 'img/mafafukaguranagaaradwimps.jpg',
mp3: '',
ogg: 'mp3/mafafukaguranagaaradwimps.ogg'
},
{
title: 'Dark seeks light',
artist: 'ニノミヤユイ',
album: '',
cover: 'img/darkseekslightnonomiyayui.jpg',
mp3: '',
ogg: 'mp3/darkseekslightnonomiyayui.ogg'
},
{
title: 'A Promise',
artist: '結城アイラ',
album: '',
cover: 'img/apromiseketsujoaira.jpg',
mp3: '',
ogg: 'mp3/apromiseketsujoaira.ogg'
},
{
title: '不完全花',
artist: 'こはならむ',
album: '',
cover: 'img/fukanzenkakohanalam.jpg',
mp3: '',
ogg: 'mp3/fukanzenkakohanalam.ogg'
},
{
title: '迷えるヒツジ',
artist: 'こはならむ',
album: '',
cover: 'img/mayoeruhitsujikohanalam.jpg',
mp3: '',
ogg: 'mp3/mayoeruhitsujikohanalam.ogg'
},
{
title: 'UP',
artist: '하진(HAJIN)',
album: '구경이 OST Part 2',
cover: 'img/uphajin.jpg',
mp3: '',
ogg: 'mp3/uphajin.ogg'
},
{
title: 'Destiny',
artist: '김필 (Kim Feel)',
album: '지리산 OST Part 1',
cover: 'img/destinykimfeel.jpg',
mp3: '',
ogg: 'mp3/destinykimfeel.ogg'
},
{
title: 'ラストシーン',
artist: '菅田将暉',
album: '',
cover: 'img/lastscenesugatamasaki.jpg',
mp3: '',
ogg: 'mp3/lastscenesugatamasaki.ogg'
},
{
title: 'Bloom',
artist: 'WJSN EXY',
album: 'IDOL [아이돌 : The Coup] OST Part 2',
cover: 'img/bloomwjsnexy.jpg',
mp3: '',
ogg: 'mp3/bloomwjsnexy.ogg'
},
{
title: 'Paradise',
artist: '소유(SOYOU)',
album: 'IDOL [아이돌 : The Coup] OST Part 1',
cover: 'img/paradisesoyou.jpg',
mp3: '',
ogg: 'mp3/paradisesoyou.ogg'
},
{
title: 'Home',
artist: 'BIG Naughty(서동현), 엑시(EXY), Raiden(레이든)',
album: 'IDOL [아이돌 : The Coup] OST Part 1',
cover: 'img/paradisesoyou.jpg',
mp3: '',
ogg: 'mp3/homebigexyraiden.ogg'
},
{
title: '刪了吧',
artist: '烟(许佳豪)',
album: '',
cover: 'img/shanlebayan.jpg',
mp3: '',
ogg: 'mp3/shanlebayan.ogg'
},
{
title: '琵琶行',
artist: '河伯',
album: '',
cover: 'img/pipaxinghebo.jpg',
mp3: '',
ogg: 'mp3/pipaxinghebo.ogg'
},
{
title: '春庭院',
artist: '等什么君',
album: '',
cover: 'img/chuntingyuandengshenmejun.jpg',
mp3: '',
ogg: 'mp3/chuntingyuandengshenmejun.ogg'
},
{
title: '极恶都市',
artist: '夏日入侵计划',
album: '',
cover: 'img/jiedushixiariruqinjihua.jpg',
mp3: '',
ogg: 'mp3/jiedushixiariruqinjihua.ogg'
},
{
title: 'Easy On Me',
artist: 'Adele',
album: '',
cover: 'img/easyonmeadele.jpg',
mp3: '',
ogg: 'mp3/easyonmeadele.ogg'
},
{
title: '가끔은 말야 (Sometimes)',
artist: '하니(HANI)(EXID)',
album: 'IDOL [아이돌 : The Coup] OST Part 3',
cover: 'img/sometimeshani.jpg',
mp3: '',
ogg: 'mp3/sometimeshani.ogg'
},
{
title: 'Christmas EveL',
artist: 'Stray Kids',
album: '',
cover: 'img/christmasevelstraykids.jpg',
mp3: '',
ogg: 'mp3/christmasevelstraykids.ogg'
},
{
title: 'なんでもないよ、',
artist: 'マカロニえんぴつ',
album: '',
cover: 'img/nandemonaiyomakaronienpitsu.jpg',
mp3: '',
ogg: 'mp3/nandemonaiyomakaronienpitsu.ogg'
},
{
title: 'なんでもないよ、Cover by こはならむ',
artist: 'こはならむ',
album: '',
cover: 'img/nandemonaiyomakaronienpitsu.jpg',
mp3: '',
ogg: 'mp3/nandemonaiyokohannaramu.ogg'
},
{
title: '宝石 feat. 幾田りら',
artist: '伶',
album: '',
cover: 'img/housekirei.jpg',
mp3: '',
ogg: 'mp3/housekirei.ogg'
},
{
title: 'Ahoy!! 我ら宝鐘海賊団',
artist: '宝鐘マリン',
album: '',
cover: 'img/ahoywarerahoushokaizokudanhoushomarin.jpg',
mp3: '',
ogg: 'mp3/ahoywarerahoushokaizokudanhoushomarin.ogg'
},
{
title: 'もしも命が描けたら',
artist: 'YOASOBI',
album: '',
cover: 'img/moshimoinochigakaketara.jpg',
mp3: '',
ogg: 'mp3/moshimoinochigakaketara.ogg'
},
{
title: '神っぽいな Cover by ラプラス・ダークネス',
artist: 'ラプラス・ダークネス',
album: '',
cover: 'img/kamipoinnarapurasudakunesu.jpg',
mp3: '',
ogg: 'mp3/kamipoinnarapurasudakunesu.ogg'
},
{
title: 'LOCO -Japanese ver.-',
artist: 'ITZY',
album: '',
cover: 'img/locojapanitzy.jpg',
mp3: '',
ogg: 'mp3/locojapanitzy.ogg'
},
{
title: 'Chopstick',
artist: 'NiziU',
album: '1st Album『U』',
cover: 'img/chopstickniziu.jpg',
mp3: '',
ogg: 'mp3/chopstickniziu.ogg'
},
{
title: 'Pirate',
artist: 'EVERGLOW',
album: 'Return of The Girl',
cover: 'img/pirateeverglow.jpg',
mp3: '',
ogg: 'mp3/pirateeverglow.ogg'
},
{
title: 'ELEVEN',
artist: 'IVE',
album: '',
cover: 'img/elevenive.jpg',
mp3: '',
ogg: 'mp3/elevenive.ogg'
},
{
title: 'I Love Mama Mantu Remix Jedag Jedug',
artist: 'Bulan Sutena',
album: '',
cover: 'img/ilovemamamantubulansutena.jpg',
mp3: '',
ogg: 'mp3/ilovemamamantubulansutena.ogg'
},
{
title: '不器用な男',
artist: 'カンザキイオリ',
album: '',
cover: 'img/fukiyonaotokokanazakiiori.jpg',
mp3: '',
ogg: 'mp3/fukiyonaotokokanazakiiori.ogg'
},
{
title: '大人',
artist: 'カンザキイオリ',
album: '',
cover: 'img/otonakanazakiiori.jpg',
mp3: '',
ogg: 'mp3/otonakanazakiiori.ogg'
},
{
title: '빛으로 WE RISE',
artist: 'Cotton Candy',
album: 'IDOL [아이돌 : The Coup] OST Part 5',
cover: 'img/werisecottoncandy.jpg',
mp3: '',
ogg: 'mp3/werisecottoncandy.ogg'
},
{
title: 'Pray',
artist: 'GA EUN (가은)',
album: 'IDOL [아이돌 : The Coup] OST Part 4',
cover: 'img/praygaeun.jpg',
mp3: '',
ogg: 'mp3/praygaeun.ogg'
},
{
title: '울어도 좋아 (You Can Cry)',
artist: 'E.Gen (이젠) Feat Cheon Ji Won (천지원)',
album: 'IDOL [아이돌 : The Coup] OST Part 2',
cover: 'img/ucancryegencheonjiwon.jpg',
mp3: '',
ogg: 'mp3/ucancryegencheonjiwon.ogg'
},
{
title: '피날레 (Finale)',
artist: 'Cotton Candy',
album: 'IDOL [아이돌 : The Coup] OST Part 6',
cover: 'img/finalecottoncandy.jpg',
mp3: '',
ogg: 'mp3/finalecottoncandy.ogg'
},
{
title: '오늘 밤 (Tonight) (feat. 그린)',
artist: '이은상, 김민규, 조준영, 홍은기 (HONG EUNKI)',
album: 'IDOL [아이돌 : The Coup] OST Part 6',
cover: 'img/finalecottoncandy.jpg',
mp3: '',
ogg: 'mp3/tonighthongeunki.ogg'
},
{
title: '残響散歌',
artist: 'Aimer',
album: '',
cover: 'img/zankyousankaaimer.jpg',
mp3: '',
ogg: 'mp3/zankyousankaaimer.ogg'
},
{
title: 'Rise',
artist: 'Calum Scott',
album: '',
cover: 'img/risecalumscott.jpg',
mp3: '',
ogg: 'mp3/risecalumscott.ogg'
},
{
title: 'Fly Up',
artist: 'Queen WA$ABII',
album: 'IDOL [아이돌 : The Coup] OST Part 3',
cover: 'img/flyupqueenwasabii.jpg',
mp3: '',
ogg: 'mp3/flyupqueenwasabii.ogg'
},
{
title: 'Queendom',
artist: 'Red Velvet',
album: '',
cover: 'img/queendomredvelvet.jpg',
mp3: '',
ogg: 'mp3/queendomredvelvet.ogg'
},
{
title: 'bugAboo',
artist: 'bugAboo(버가부)',
album: '',
cover: 'img/bugboobugboo.jpg',
mp3: '',
ogg: 'mp3/bugboobugboo.ogg'
},
{
title: 'Dreams Come True',
artist: 'aespa',
album: '',
cover: 'img/dreamcometrueaespa.jpg',
mp3: '',
ogg: 'mp3/dreamcometrueaespa.ogg'
},
{
title: '우리가 헤어져야 했던 이유',
artist: '비비(BIBI)',
album: '그 해 우리는 OST Part 2',
cover: 'img/uligaheeojyeoyahaessdeonbibi.jpg',
mp3: '',
ogg: 'mp3/uligaheeojyeoyahaessdeonbibi.ogg'
},
{
title: '환청(Feat. 나쑈(NaShow))',
artist: '장재인',
album: 'MBC 드라마 킬미힐미 OST',
cover: 'img/hwancheongjangjaein.jpg',
mp3: '',
ogg: 'mp3/hwancheongjangjaein.ogg'
},
{
title: '시간을 거슬러',
artist: 'LYn',
album: 'MBC 드라마 해를 품은 달 OST Part 2',
cover: 'img/siganeulgeoseulleolyn.jpg',
mp3: '',
ogg: 'mp3/siganeulgeoseulleolyn.ogg'
},
{
title: 'Shanghai Romance',
artist: 'Orange Carame',
album: '',
cover: 'img/shanghairomance.jpg',
mp3: '',
ogg: 'mp3/shanghairomance.ogg'
},
{
title: 'Full Moon(보름달)',
artist: 'Sunmi(선미) ',
album: '',
cover: 'img/fullmoonsunmi.jpg',
mp3: '',
ogg: 'mp3/fullmoonsunmi.ogg'
},
{
title: 'Thank You (feat. Beenzino)',
artist: 'D-UNIT',
album: '',
cover: 'img/tqdunit.jpg',
mp3: '',
ogg: 'mp3/tqdunit.ogg'
},
{
title: '月夜ノコトリ',
artist: '白鳥ことり',
album: '',
cover: 'img/tsukiyonokotorishiratorikotori.jpg',
mp3: '',
ogg: 'mp3/tsukiyonokotorishiratorikotori.ogg'
},
{
title: '戀の歌',
artist: '白鳥ことり',
album: '',
cover: 'img/rennoutashiratorikotori.jpg',
mp3: '',
ogg: 'mp3/rennoutashiratorikotori.ogg'
},
{
title: '하루',
artist: '포맨(4MEN)',
album: '하루 :: 불가살(Bulgasal: Immortal Souls) OST Part.1',
cover: 'img/halu4men.jpg',
mp3: '',
ogg: 'mp3/halu4men.ogg'
},
{
title: 'ASAP',
artist: 'STAYC(스테이씨)',
album: 'STAYDOM',
cover: 'img/asapstayc.jpg',
mp3: '',
ogg: 'mp3/asapstayc.ogg'
},
{
title: 'Why',
artist: 'Janet Suhh(자넷서)',
album: '그 해 우리는(Our Beloved Summer) OST Part.6',
cover: 'img/whyjanetsuhh.jpg',
mp3: '',
ogg: 'mp3/whyjanetsuhh.ogg'
},
{
title: 'Christmas Tree',
artist: 'V',
album: '그 해 우리는(Our Beloved Summer) OST Part.5',
cover: 'img/christmastreev.jpg',
mp3: '',
ogg: 'mp3/christmastreev.ogg'
},
{
title: 'Heroes Tonight (feat. Johnning)',
artist: 'Janji',
album: '',
cover: 'img/heroestonightjanji.jpg',
mp3: '',
ogg: 'mp3/heroestonightjanji.ogg'
},
{
title: 'Anymore',
artist: 'JEON SOMI (전소미)',
album: 'XOXO',
cover: 'img/anymorejeonsomi.jpg',
mp3: '',
ogg: 'mp3/anymorejeonsomi.ogg'
},
{
title: 'WA DA DA',
artist: 'Kep1er 케플러',
album: 'FIRST IMPACT',
cover: 'img/wadadakep1er.jpg',
mp3: '',
ogg: 'mp3/wadadakep1er.ogg'
},
{
title: '忘れじの言の葉 Cover by ダズビー',
artist: 'ダズビー',
album: '',
cover: 'img/wasurejinokotonohadazubi.jpg',
mp3: '',
ogg: 'mp3/wasurejinokotonohadazubi.ogg'
},
{
title: '여름비',
artist: '샘김 (Sam Kim)',
album: '그 해 우리는(Our Beloved Summer) OST Part.8',
cover: 'img/yeoleumbisamkim.jpg',
mp3: '',
ogg: 'mp3/yeoleumbisamkim.ogg'
},
{
title: '터널',
artist: '김예지(With KARDI)',
album: '불가살(Bulgasal: Immortal Souls OST) OST Part.2',
cover: 'img/teoneolgimyejikardi.jpg',
mp3: '',
ogg: 'mp3/teoneolgimyejikardi.ogg'
},
{
title: 'Super Yuppers!(슈퍼 그럼요)',
artist: 'WJSN Chocome(우주소녀 쪼꼬미)',
album: '',
cover: 'img/superyupperswjsnchocome.jpg',
mp3: '',
ogg: 'mp3/superyupperswjsnchocome.ogg'
},
{
title: 'レオ',
artist: '優里',
album: '',
cover: 'img/reoyuri.jpg',
mp3: '',
ogg: 'mp3/reoyuri.ogg'
},
{
title: '언덕나무',
artist: '이승윤',
album: '그 해 우리는(Our Beloved Summer) OST Part.7',
cover: 'img/eondeognamuiseungyun.jpg',
mp3: '',
ogg: 'mp3/eondeognamuiseungyun.ogg'
},
{
title: 'Cant Control Myself',
artist: 'TAEYEON 태연',
album: 'INVU - The 3rd Album',
cover: 'img/cantcontrolmyselftaeyeon.jpg',
mp3: '',
ogg: 'mp3/cantcontrolmyselftaeyeon.ogg'
},
{
title: '잊을 수 없다면',
artist: '민서',
album: '',
cover: 'img/ijeulsueobsdamyeonminseo.jpg',
mp3: '',
ogg: 'mp3/ijeulsueobsdamyeonminseo.ogg'
},
{
title: '행복하게 해줄게',
artist: '장범준',
album: '',
cover: 'img/haengboghagehaejulgejangbeomjun.jpg',
mp3: '',
ogg: 'mp3/haengboghagehaejulgejangbeomjun.ogg'
},
{
title: '놀이',
artist: '유주(YUJU)',
album: '',
cover: 'img/noliyuju.jpg',
mp3: '',
ogg: 'mp3/noliyuju.ogg'
},
{
title: 'SMILEY(Feat. BIBI)',
artist: 'YENA (최예나)',
album: '',
cover: 'img/smileyyena.jpg',
mp3: '',
ogg: 'mp3/smileyyena.ogg'
},
{
title: 'Wonderland',
artist: 'iri',
album: '',
cover: 'img/wonderlandiri.jpg',
mp3: '',
ogg: 'mp3/wonderlandiri.ogg'
},
{
title: '踊り子 cover by ぷらそにか',
artist: 'ぷらそにか',
album: '',
cover: 'img/odorikopurasonika.jpg',
mp3: '',
ogg: 'mp3/odorikopurasonika.ogg'
},
{
title: '悪魔の子',
artist: 'ヒグチアイ',
album: '',
cover: 'img/akumanokohiguchiai.jpg',
mp3: '',
ogg: 'mp3/akumanokohiguchiai.ogg'
},
{
title: '心という名の不可解',
artist: 'Ado',
album: '',
cover: 'img/kokorotoiunanofukakaiado.jpg',
mp3: '',
ogg: 'mp3/kokorotoiunanofukakaiado.ogg'
},
{
title: 'スパークル',
artist: '幾田りら',
album: '',
cover: 'img/supakuruikutarira.jpg',
mp3: '',
ogg: 'mp3/supakuruikutarira.ogg'
},
{
title: '언제나 사랑해',
artist: '케이시 Kassy',
album: '',
cover: 'img/eonjenasalanghaekassy.jpg',
mp3: '',
ogg: 'mp3/eonjenasalanghaekassy.ogg'
},
{
title: 'INVU',
artist: '태연 TAEYEON',
album: 'INVU - The 3rd Album',
cover: 'img/taeyeoninvu.jpg',
mp3: '',
ogg: 'mp3/taeyeoninvu.ogg'
},
{
title: '그런 밤 Some Nights',
artist: '태연 TAEYEON',
album: 'INVU - The 3rd Album',
cover: 'img/taeyeoninvu.jpg',
mp3: '',
ogg: 'mp3/somenightinvu.ogg'
},
{
title: '아주, 천천히',
artist: '비비(BIBI)',
album: '스물다섯 스물하나 OST Part 3',
cover: 'img/ajucheoncheonhibibi.jpg',
mp3: '',
ogg: 'mp3/ajucheoncheonhibibi.ogg'
},
{
title: 'Dilemma',
artist: 'Apink 에이핑크',
album: 'Apink Special Album [HORN]',
cover: 'img/dilemmaapink.jpg',
mp3: '',
ogg: 'mp3/dilemmaapink.ogg'
},
{
title: '裸の勇者',
artist: 'Vaundy',
album: '',
cover: 'img/hadakanoyushavaundy.jpg',
mp3: '',
ogg: 'mp3/hadakanoyushavaundy.ogg'
},
{
title: 'あいつの犬',
artist: '松本千夏',
album: '',
cover: 'img/aitsunoinuchinatsumatsumoto.jpg',
mp3: '',
ogg: 'mp3/aitsunoinuchinatsumatsumoto.ogg'
},
{
title: 'ミスター',
artist: 'YOASOBI',
album: '',
cover: 'img/misutayoasobi.jpg',
mp3: '',
ogg: 'mp3/misutayoasobi.ogg'
},
{
title: 'Misery',
artist: '優里',
album: '',
cover: 'img/miseryyuri.jpg',
mp3: '',
ogg: 'mp3/miseryyuri.ogg'
},
{
title: 'Play',
artist: 'Alan Walker',
album: '',
cover: 'img/playalanwalker.jpg',
mp3: '',
ogg: 'mp3/playalanwalker.ogg'
},
{
title: 'Beyond The Time',
artist: 'Janet Suhh(자넷서)',
album: '불가살 OST Part.4',
cover: 'img/beyondthetime.jpg',
mp3: '',
ogg: 'mp3/beyondthetime.ogg'
},
{
title: 'When Im Gone',
artist: 'Alesso & Katy Perry',
album: '',
cover: 'img/whenimgonealessonkatyperry.jpg',
mp3: '',
ogg: 'mp3/whenimgonealessonkatyperry.ogg'
},
{
title: 'She is all i wanna be',
artist: 'Tate McRae',
album: '',
cover: 'img/sheisalliwannabetatemcrae.jpg',
mp3: '',
ogg: 'mp3/sheisalliwannabetatemcrae.ogg'
},
{
title: 'Brace Up',
artist: '163 braces',
album: '',
cover: 'img/braceup163braces.jpg',
mp3: '',
ogg: 'mp3/braceup163braces.ogg'
},
{
title: '暗哑',
artist: '夏婉安',
album: '',
cover: 'img/anyaxiawanan.jpg',
mp3: '',
ogg: 'mp3/anyaxiawanan.ogg'
},
{
title: 'BAD',
artist: 'DOLLA',
album: '',
cover: 'img/baddolla.jpg',
mp3: '',
ogg: 'mp3/baddolla.ogg'
},
{
title: 'แปะหัวใจ',
artist: 'JAONAAY ft. Juné',
album: '',
cover: 'img/pewozaijaonaayjune.jpg',
mp3: '',
ogg: 'mp3/pewozaijaonaayjune.ogg'
},
{
title: 'ดึกแล้วอย่าเพิ่งกลับ',
artist: 'JAONAAY',
album: '',
cover: 'img/nenglaoyakpengkaojanoaay.jpg',
mp3: '',
ogg: 'mp3/nenglaoyakpengkaojanoaay.ogg'
},
{
title: 'Материк',
artist: 'Артем Качер & Ани Лорак',
album: '',
cover: 'img/materikartemkacheranilorak.jpg',
mp3: '',
ogg: 'mp3/materikartemkacheranilorak.ogg'
},
{
title: '巴比诺 Bambino feat. Bunga',
artist: 'Layla Sania 蕾拉',
album: '',
cover: 'img/bambinolaylasania.jpg',
mp3: '',
ogg: 'mp3/bambinolaylasania.ogg'
},
{
title: '踏雪',
artist: '等什麼君/FOX胡天渝',
album: '',
cover: 'img/taxuedengshenmejunfox.jpg',
mp3: '',
ogg: 'mp3/taxuedengshenmejunfox.ogg'
},
{
title: '月老牵红线',
artist: '毛省曈',
album: '',
cover: 'img/yuelaoqianhongxianmaoshentong.jpg',
mp3: '',
ogg: 'mp3/yuelaoqianhongxianmaoshentong.ogg'
},
{
title: '好想抱住你',
artist: '程jiajia',
album: '',
cover: 'img/haoxiangbaozhunichenjiajia.jpg',
mp3: '',
ogg: 'mp3/haoxiangbaozhunichenjiajia.ogg'
},
{
title: 'O.O',
artist: 'NMIXX',
album: '',
cover: 'img/oonmixx.jpg',
mp3: '',
ogg: 'mp3/oonmixx.ogg'
},
{
title: 'Believe',
artist: 'Rothy(로시)',
album: '',
cover: 'img/believerothy.jpg',
mp3: '',
ogg: 'mp3/believerothy.ogg'
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
