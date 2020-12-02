(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
{
title: 'Inside You',
artist: 'Milet',
album: 'Eyes',
cover: 'img/insideyou.jpg',
mp3: 'mp3/insideyou.mp3',
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
title: 'テルーの唄 (covered by 蒼莉奈)',
artist: '手嶌葵',
album: 'ゲド戦記歌集',
cover: 'img/teru.jpg',
mp3: 'mp3/teru.mp3',
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