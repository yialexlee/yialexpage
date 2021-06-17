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
title: 'Da zero a cento',
artist: 'Baby K',
album: '',
cover: 'img/dazeroacento.jpg',
mp3: 'mp3/dazeroacento.mp3',
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
title: '月半小夜曲',
artist: '李克勤、周深',
album: '',
cover: 'img/yeban.jpg',
mp3: 'mp3/yeban.mp3',
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
title: 'Adrenaline',
artist: 'Aalia',
album: '',
cover: 'img/adrenalineaalia.jpg',
mp3: '',
ogg: 'mp3/adrenalineaalia.ogg'
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
