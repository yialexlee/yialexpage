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
