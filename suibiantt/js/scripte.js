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
