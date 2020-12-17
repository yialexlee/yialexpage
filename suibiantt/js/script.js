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
artist: 'YOASABI',
album: '',
cover: 'img/halzion.jpg',
mp3: 'mp3/halzion.mp3',
ogg: ''
},
{
title: '夜に駆ける',
artist: 'YOASABI',
album: '',
cover: 'img/yorunikakeru.jpg',
mp3: 'mp3/yorunikakeru.mp3',
ogg: ''
},
{
title: '夜に駆ける - THE HOME TAKE (幾田りら)',
artist: 'YOASABI',
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
cover: 'img/whoiam.jpg',
mp3: 'mp3/whoiam.mp3',
ogg: ''
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
},];

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
