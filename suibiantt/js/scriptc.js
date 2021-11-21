(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
		
{
title: '谪仙',
artist: '叶里',
album: '',
cover: 'img/zhexian.jpg',
mp3: 'mp3/zhexian.mp3',
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
title: '星辰大海',
artist: '黃霄雲',
album: '',
cover: 'img/xingchengdahai.jpg',
mp3: '',
ogg: 'mp3/xingchengdahai.ogg'
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
title: '与君相依',
artist: '等什么君',
album: '',
cover: 'img/yujunxiangyidengshenmejun.jpg',
mp3: '',
ogg: 'mp3/yujunxiangyidengshenmejun.ogg'
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
title: '此生过半',
artist: '豆包',
album: '',
cover: 'img/cishengguobandoubao.jpg',
mp3: '',
ogg: 'mp3/cishengguobandoubao.ogg'
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
title: '不如 (女声翻唱)',
artist: '也可',
album: '',
cover: 'img/buruyeke.jpg',
mp3: '',
ogg: 'mp3/buruyeke.ogg'
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
title: '掠火之槍',
artist: '三無 x 祖婭納惜',
album: '',
cover: 'img/jinghuozhiqiangannwuzuyanaxi.jpg',
mp3: '',
ogg: 'mp3/jinghuozhiqiangannwuzuyanaxi.ogg'
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
title: '自娱自乐',
artist: '徐心愉',
album: '',
cover: 'img/ziyuzilexuxinyu.jpg',
mp3: '',
ogg: 'mp3/ziyuzilexuxinyu.ogg'
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
