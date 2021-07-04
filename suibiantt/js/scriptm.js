(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
		
{
title: '僕の戦争-Piano',
artist: 'Fonzi M - Melodies on Piano',
album: '',
cover: 'img/bokunosensoupiano.jpg',
mp3: 'mp3/bokunosensoupiano.mp3',
ogg: ''
},
{
title: '進撃の巨人」8曲12分メドレ-piano',
artist: 'Ru Piano Ru味春捲',
album: '',
cover: 'img/shingekinokiojin812.jpg',
mp3: 'mp3/shingekinokiojin812.mp3',
ogg: ''
},
{
title: '米津玄師「LOSER」-piano',
artist: 'よみぃ',
album: '',
cover: 'img/loserpiano.jpg',
mp3: 'mp3/loserpiano.mp3',
ogg: ''
},
{
title: 'This Game / ディスゲーム-piano',
artist: 'Pan Piano',
album: '',
cover: 'img/thisgamepiano.jpg',
mp3: 'mp3/thisgamepiano.mp3',
ogg: ''
},
{
title: '虹-piano',
artist: 'CANACANA',
album: '',
cover: 'img/nijipiano.jpg',
mp3: 'mp3/nijipiano.mp3',
ogg: ''
},
{
title: '『ADAMAS / LiSA』SAO アリシゼーション OP1-piano',
artist: 'Ru Piano Ru味春捲',
album: '',
cover: 'img/adamaspiano.jpg',
mp3: 'mp3/adamaspiano.mp3',
ogg: ''
},
{
title: 'FAIRY TAIL Main Theme -piano',
artist: 'Ru Piano Ru味春捲',
album: '',
cover: 'img/fairytailthemepiano.jpg',
mp3: 'mp3/fairytailthemepiano.mp3',
ogg: ''
},
{
title: 'Bach - Toccata and Fugue in D minor BWV 565 -piano',
artist: 'Paul Barton',
album: '',
cover: 'img/bachbmv565piano.jpg',
mp3: 'mp3/bachbmv565piano.mp3',
ogg: ''
},
{
title: '壊レタ世界ノ歌-piano',
artist: 'Ru Piano Ru味春捲',
album: '',
cover: 'img/kowaretasekainoutapiano.jpg',
mp3: 'mp3/kowaretasekainoutapiano.mp3',
ogg: ''
},
{
title: '木蘭の涙-piano (Start at 0:31)',
artist: 'ハラミちゃん',
album: '',
cover: 'img/murannonamipiano.jpg',
mp3: 'mp3/murannonamipiano.mp3',
ogg: ''
},
{
title: 'Can Can(이재형 편곡)-piano (Start at 0:12)',
artist: 'Unknown',
album: '',
cover: 'img/cancanpiano.jpg',
mp3: 'mp3/cancanpiano.mp3',
ogg: ''
},
{
title: 'Howl Moving Castle [OST - Theme Song]-Merry-Go-Round ',
artist: 'Joe Hisaishi',
album: '',
cover: 'img/merrygoround.jpg',
mp3: 'mp3/merrygoround.mp3',
ogg: ''
},
{
title: '白日-piano (Start at 0:38)',
artist: 'けいちゃん',
album: '',
cover: 'img/hakujitsupiano.jpg',
mp3: 'mp3/hakujitsupiano.mp3',
ogg: ''
},
{
title: 'もののけ姫 -piano',
artist: 'Pan Piano',
album: '',
cover: 'img/mononokehimepiano.jpg',
mp3: 'mp3/mononokehimepiano.mp3',
ogg: ''
},
{
title: 'ナルト疾風伝 OST「My Name」',
artist: 'Ru Piano Ru味春捲',
album: '',
cover: 'img/mynamepiano.jpg',
mp3: 'mp3/mynamepiano.mp3',
ogg: ''
},
{
title: 'いのちの名前 -violin & piano',
artist: '黃品舒 Kathie Violin & Linlin Piano 五分鐘鋼琴',
album: '',
cover: 'img/inochinonamaeviolinpiano.jpg',
mp3: 'mp3/inochinonamaeviolinpiano.mp3',
ogg: ''
},
{
title: '糸 -piano',
artist: 'よみぃ',
album: '',
cover: 'img/itopiano.jpg',
mp3: 'mp3/itopiano.mp3',
ogg: ''
},
{
title: '栄光の架橋-piano (Start at 0:41)',
artist: 'ハラミちゃん',
album: '',
cover: 'img/ekonokakehashipiano.jpg',
mp3: 'mp3/ekonokakehashipiano.mp3',
ogg: ''
},
{
title: '人気のアニメ曲 ライブパフォーマンス (5曲) -piano & violin',
artist: 'Ru Piano & Kathie Violin',
album: '',
cover: 'img/ninkianimekiyokupianoviolin.jpg',
mp3: 'mp3/ninkianimekiyokupianoviolin.mp3',
ogg: ''
},
{
title: 'Two Steps From Hell - 25 Tracks Best of All Time',
artist: 'Two Steps From Hell',
album: '',
cover: 'img/Two Steps From Hell - 25 Tracks Best of All Time.jpg',
mp3: '',
ogg: 'mp3/Two Steps From Hell - 25 Tracks Best of All Time.ogg'
},
{
title: '炎 x 紅蓮華 x 竈門炭治郎のうた -piano',
artist: 'けいちゃん',
album: '',
cover: 'img/honogurengekamadotanjironoutapiano.jpg',
mp3: 'mp3/honogurengekamadotanjironoutapiano.mp3',
ogg: ''
},
{
title: '「Sisters noise」とある科学の超電磁砲S OP1 -piano',
artist: 'Ru Piano Ru味春捲',
album: '',
cover: 'img/sistersnoisepiano.jpg',
mp3: 'mp3/sistersnoisepiano.mp3',
ogg: ''
},
{
title: '崩壊3rd 主題歌「崩壊世界の歌姬」ピアノ&バイオリン&ドラム - Piano x Violin x Drumstick x Electric Guitar',
artist: 'Ru Piano x Kathie x Drumstick',
album: '',
cover: 'img/honkaisekainohimepianoviolindrum.jpg',
mp3: 'mp3/honkaisekainohimepianoviolindrum.mp3',
ogg: ''
},
{
title: 'To Zanarkand - FinalFantasy X -piano',
artist: 'CANACANA',
album: '',
cover: 'img/tozanarkandpiano.jpg',
mp3: 'mp3/tozanarkandpiano.mp3',
ogg: ''
},
{
title: '約束のネバーランド OST「Isabella Lullaby / イザベラの唄 」 -violin',
artist: 'Kathie Violin',
album: '',
cover: 'img/isabellalullabyviolin.jpg',
mp3: 'mp3/isabellalullabyviolin.mp3',
ogg: ''
},
{
title: '"とある科学の超電磁砲T"「final phase」 -violin with bgm',
artist: 'ヲタリストAyasa',
album: '',
cover: 'img/finalphaseviolin.jpg',
mp3: 'mp3/finalphaseviolin.mp3',
ogg: ''
},
{
title: '一剪梅 -violin x piano with bgm',
artist: 'Kathie Violin 黃品舒',
album: '',
cover: 'img/yijianmeipianoviolin.jpg',
mp3: 'mp3/yijianmeipianoviolin.mp3',
ogg: ''
},
{
title: 'Fantasie Impromptu-Chopin -piano',
artist: 'CANACANA',
album: '',
cover: 'img/fantasieimpromptuchopinpiano.jpg',
mp3: 'mp3/fantasieimpromptuchopinpiano.mp3',
ogg: ''
},
{
title: '時代を越える想い -violin',
artist: 'Kathie Violin',
album: '',
cover: 'img/jidaikoeruomoiviolin.jpg',
mp3: 'mp3/jidaikoeruomoiviolin.mp3',
ogg: ''
},
{
title: 'koko（Instrumental） -piano',
artist: '坂本龍一',
album: 'UTAU',
cover: 'img/kokopiano.jpg',
mp3: 'mp3/kokopiano.mp3',
ogg: ''
},
{
title: 'LOVE PHANTOM -piano',
artist: 'ハラミちゃん',
album: '',
cover: 'img/lovephantompiano.jpg',
mp3: 'mp3/lovephantompiano.mp3',
ogg: ''
},
{
title: '六兆年と一夜物語 -piano',
artist: 'よみぃ',
album: '',
cover: 'img/roku chou-nen to ichiya monogataripiano.jpg',
mp3: 'mp3/roku chou-nen to ichiya monogataripiano.mp3',
ogg: ''
},
{
title: '夜的鋼琴曲 Melody of The Night 0-31 full version -piano',
artist: '石进',
album: '',
cover: 'img/melodyofnightpiano.jpg',
mp3: '',
ogg: 'mp3/melodyofnightpiano.ogg'
},
{
title: 'あなただけ見つめてる -piano',
artist: 'Ru Piano',
album: '',
cover: 'img/anatadakemitsumeterupiano.jpg',
mp3: 'mp3/anatadakemitsumeterupiano.mp3',
ogg: ''
},
{
title: '１００アニソンピアノメドレー 100 anime piano mix -piano',
artist: 'Ru Piano',
album: '',
cover: 'img/100animepiano.jpg',
mp3: 'mp3/100animepiano.mp3',
ogg: ''
},
{
title: 'メリッサ -piano',
artist: 'Animez',
album: '',
cover: 'img/merissapiano.jpg',
mp3: 'mp3/merissapiano.mp3',
ogg: ''
},
{
title: '残酷な天使のテーゼ -piano',
artist: 'Animez',
album: '',
cover: 'img/zankokunotenshinotezepiano.jpg',
mp3: 'mp3/zankokunotenshinotezepiano.mp3',
ogg: ''
},
{
title: 'River Flows in You X Canon in D (2016 release) -piano',
artist: 'Stevenc89',
album: '',
cover: 'img/riverflowsinyouxcanonindpiano.jpg',
mp3: 'mp3/riverflowsinyouxcanonindpiano.mp3',
ogg: ''
},
{
title: 'Street Piano XJAPAN 紅-KURENAI -piano',
artist: 'ハラミちゃん',
album: '',
cover: 'img/kurenaipiano.jpg',
mp3: 'mp3/kurenaipiano.mp3',
ogg: ''
},
{
title: '竈門炭治郎のうた -piano',
artist: 'ハラミちゃん',
album: '',
cover: 'img/kamadotanjironoutapiano.jpg',
mp3: 'mp3/kamadotanjironoutapiano.mp3',
ogg: ''
},
{
title: 'Fairy Tail妖精的尾巴 竹笛vs嗩吶',
artist: 'Ashengはsuonaです',
album: '',
cover: 'img/fairytailsuona.jpg',
mp3: 'mp3/fairytailsuona.mp3',
ogg: ''
},
{
title: '爱殇 (东宫 插曲) | 古筝',
artist: '玉面小嫣然',
album: '',
cover: 'img/aishangguzheng.jpg',
mp3: 'mp3/aishangguzheng.mp3',
ogg: ''
},
{
title: '王關',
artist: '神魔之塔',
album: '',
cover: 'img/wangguan.jpg',
mp3: 'mp3/wangguan.mp3',
ogg: ''
},
{
title: '雨碎江南 二胡',
artist: '柠露读乐Lemondew',
album: '',
cover: 'img/yusuijiangnanerhu.jpg',
mp3: 'mp3/yusuijiangnanerhu.mp3',
ogg: ''
},
{
title: '绿野仙踪 洞箫 x Piano',
artist: '陈悦',
album: '',
cover: 'img/lvyexianzong.jpg',
mp3: 'mp3/lvyexianzong.mp3',
ogg: ''
},
{
title: '天空之城 竹笛 with bgm',
artist: '董敏',
album: '',
cover: 'img/tiankongzhicheng.jpg',
mp3: 'mp3/tiankongzhicheng.mp3',
ogg: ''
},
{
title: '秦時明月 古琴 with bgm',
artist: '自得琴社',
album: '',
cover: 'img/qinshimingyueguqin.jpg',
mp3: 'mp3/qinshimingyueguqin.mp3',
ogg: ''
},
{
title: '權御天下 箏鼓和鳴',
artist: '墨韵教主',
album: '',
cover: 'img/quanyutianxiazhenggu.jpg',
mp3: 'mp3/quanyutianxiazhenggu.mp3',
ogg: ''
},
{
title: '十二鎮魂歌 古箏',
artist: '墨韵教主',
album: '',
cover: 'img/shierzhenghunquguzheng.jpg',
mp3: 'mp3/shierzhenghunquguzheng.mp3',
ogg: ''
},
{
title: 'Pirates of the Caribbean',
artist: 'Auckland Symphony Orchestra',
album: '',
cover: 'img/piratesofthecaribbean.jpg',
mp3: 'mp3/piratesofthecaribbean.mp3',
ogg: ''
},
{
title: 'Again - piano',
artist: 'Fonzi M',
album: '',
cover: 'img/againpiano.jpg',
mp3: 'mp3/againpiano.mp3',
ogg: ''
},
{
title: 'Sweet home Ending BGM',
artist: 'MZ',
album: '',
cover: 'img/sweethomeending.jpg',
mp3: 'mp3/sweethomeending.mp3',
ogg: ''
},
{
title: 'うっせぇわ-Ado -piano',
artist: 'CANACANA',
album: '',
cover: 'img/usseewapiano.jpg',
mp3: 'mp3/usseewapiano.mp3',
ogg: ''
},
{
title: 'ファイト！/中島みゆき -piano',
artist: 'ハラミちゃん',
album: '',
cover: 'img/huaitopiano.jpg',
mp3: 'mp3/huaitopiano.mp3',
ogg: ''
},
{
title: 'This Game -piano',
artist: 'Animenz Piano Sheets',
album: '',
cover: 'img/thisgamepiano.jpg',
mp3: 'mp3/thisgamepiano.mp3',
ogg: ''
},
{
title: '哀と悲 / 哀と愁 / 出陣 / My Name -piano',
artist: 'Ru Piano',
album: '',
cover: 'img/myname4rupiano.jpg',
mp3: 'mp3/myname4rupiano.mp3',
ogg: ''
},
{
title: '僕の戦争 Full ver -piano',
artist: 'CANACANA',
album: '',
cover: 'img/bokunosensoufullverpiano.jpg',
mp3: 'mp3/bokunosensoufullverpiano.mp3',
ogg: ''
},
{
title: 'パイレーツ・オブ・カリビアン 彼こそが海賊 -piano',
artist: 'Pan Piano',
album: '',
cover: 'img/karekosogakaizokkupiano.jpg',
mp3: 'mp3/karekosogakaizokkupiano.mp3',
ogg: ''
},
{
title: '千本桜 -piano & violin',
artist: 'Kathie Violin 黃品舒 x Ru Piano',
album: '',
cover: 'img/senbonsakuraviolinpiano.jpg',
mp3: '',
ogg: 'mp3/senbonsakuraviolinpiano.ogg'
},
{
title: 'The Most Classic EVANGELION Songs Piano Medley',
artist: 'Ru Piano',
album: '',
cover: 'img/mostclassicevangelonpiano.jpg',
mp3: '',
ogg: 'mp3/mostclassicevangelonpiano.ogg'
},
{
title: 'ONE PUNCH MAN Piano Medley',
artist: 'Ru Piano',
album: '',
cover: 'img/onepunchmanmedleyrupiano.jpg',
mp3: '',
ogg: 'mp3/onepunchmanmedleyrupiano.ogg'
},
{
title: 'Kamuras Song of Purification -piano',
artist: 'Ru Piano',
album: '',
cover: 'img/kamurassongrupiano.jpg',
mp3: '',
ogg: 'mp3/kamurassongrupiano.ogg'
},
{
title: '借りぐらしのアリエッティ -piano',
artist: 'Pan Piano',
album: '',
cover: 'img/karigurashinoarettipanpiano.jpg',
mp3: '',
ogg: 'mp3/karigurashinoarettipanpiano.ogg'
},
{
title: 'Rusty Nail live cover -piano',
artist: 'ハラミちゃん',
album: '',
cover: 'img/rustynailharami.jpg',
mp3: '',
ogg: 'mp3/rustynailharami.ogg'
},
{
title: 'ささきいさお  -piano',
artist: 'Pan Piano',
album: '',
cover: 'img/sasakiisaopanpiano.jpg',
mp3: '',
ogg: 'mp3/sasakiisaopanpiano.ogg'
},
{
title: '情熱大陸 cover -violin',
artist: '黃品舒',
album: '',
cover: 'img/jonetsudairikuhuangpinshu.jpg',
mp3: '',
ogg: 'mp3/jonetsudairikuhuangpinshu.ogg'
},
{
title: 'Beethoven Virus cover -violin',
artist: '친절한세영띠',
album: '',
cover: 'img/beethovenvirusseyoung.jpg',
mp3: '',
ogg: 'mp3/beethovenvirusseyoung.ogg'
},
{
title: 'Windy Hill',
artist: '羽肿',
album: '',
cover: 'img/windyhillyuzhong.jpg',
mp3: '',
ogg: 'mp3/windyhillyuzhong.ogg'
},
{
title: '盛世华章',
artist: 'Michal Cielecki',
album: '',
cover: 'img/shengshihuazhangmichalcielecki.jpg',
mp3: '',
ogg: 'mp3/shengshihuazhangmichalcielecki.ogg'
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
