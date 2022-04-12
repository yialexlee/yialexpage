(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
{
title: 'We Can Get High',
artist: 'Galantis & Yellow Claw',
album: 'We Can Get High',
cover: 'img/wecangethigh.jpg',
mp3: 'mp3/wecangethigh.mp3',
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
title: 'Pretty Girl (Cheat Codes x CADE Remix)',
artist: 'Maggie Lindemann',
album: '',
cover: 'img/prettygirlremix.jpg',
mp3: 'mp3/prettygirlremix.mp3',
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
title: 'Someone You Loved',
artist: 'Davina Michelle',
album: '',
cover: 'img/someoneyouloved.jpg',
mp3: 'mp3/someoneyouloved.mp3',
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
title: 'I Need Your Love-Nightcore',
artist: 'Madilyn Bailey, Jake Coco',
album: '',
cover: 'img/ineedyourlovejake.jpg',
mp3: '',
ogg: 'mp3/ineedyourlovejake.ogg'
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
title: 'Bad Ones',
artist: 'Tate McRae',
album: '',
cover: 'img/badonesmcrae.jpg',
mp3: '',
ogg: 'mp3/badonesmcrae.ogg'
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
title: 'Deja vu',
artist: 'Olivia Rodrigo',
album: '',
cover: 'img/dejavuoliviarodrigo.jpg',
mp3: '',
ogg: 'mp3/dejavuoliviarodrigo.ogg'
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
title: 'Be Alright',
artist: 'Fly By Nightcore',
album: '',
cover: 'img/bealrightflybynightcore.jpg',
mp3: '',
ogg: 'mp3/bealrightflybynightcore.ogg'
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
title: 'Yearning for dark shadows',
artist: 'Resident Evil',
album: 'Village Soundtrack',
cover: 'img/yearningfordarkshadowsre.jpg',
mp3: '',
ogg: 'mp3/yearningfordarkshadowsre.mp3'
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
title: 'Sunlight(Feat. Nilka)',
artist: 'InfiNoise',
album: '',
cover: 'img/sunlightnikainfinoise.jpg',
mp3: '',
ogg: 'mp3/sunlightnikainfinoise.ogg'
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
title: 'I Love You 3000',
artist: 'Stephanie Poetri',
album: '',
cover: 'img/iloveu3000tephaniepoetri.jpg',
mp3: '',
ogg: 'mp3/iloveu3000tephaniepoetri.ogg'
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
title: 'Dandelions',
artist: 'Ruth B.',
album: '',
cover: 'img/dandelionsruthb.jpg',
mp3: '',
ogg: 'mp3/dandelionsruthb.ogg'
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
title: 'Keep me afraid',
artist: 'Nessa Barrett',
album: '',
cover: 'img/keepmeafraid.jpg',
mp3: '',
ogg: 'mp3/keepmeafraid.ogg'
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
title: 'So Dumb ',
artist: 'Mindme feat.NeiNei',
album: '',
cover: 'img/sodumbmindmeneinei.jpg',
mp3: '',
ogg: 'mp3/sodumbmindmeneinei.ogg'
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
title: 'Easy On Me',
artist: 'Adele',
album: '',
cover: 'img/easyonmeadele.jpg',
mp3: '',
ogg: 'mp3/easyonmeadele.ogg'
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
title: 'Take Me (feat. RUNN)',
artist: 'William Black & Matte',
album: '',
cover: 'img/takemewilliamblacknmatte.jpg',
mp3: '',
ogg: 'mp3/takemewilliamblacknmatte.ogg'
},
{
title: 'Baby Girl (feat. Anthony B. Quiñones)',
artist: 'El Neón',
album: '',
cover: 'img/babygirlelneon.jpg',
mp3: '',
ogg: 'mp3/babygirlelneon.ogg'
},
{
title: 'Daylight',
artist: 'MindaRyn',
album: '',
cover: 'img/daylightmindaryn.jpg',
mp3: '',
ogg: 'mp3/daylightmindaryn.ogg'
},
{
title: 'Bam Bam',
artist: 'Camila Cabello',
album: '',
cover: 'img/bambamcamilacabello.jpg',
mp3: '',
ogg: 'mp3/bambamcamilacabello.ogg'
},
{
title: 'luv starved',
artist: 'GAYLE',
album: '',
cover: 'img/luvstarvedgayle.jpg',
mp3: '',
ogg: 'mp3/luvstarvedgayle.ogg'
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
