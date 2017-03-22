var customFunctions = require('./customfunctions.js');
var bkurl = require('./bkurl.js').bkurl;
var request=require('request');
var cheerio = require('cheerio');
var BkSitesStats = require('./lib/models/mongoModel.js').BkSitesStats;
var cookie='loyal-user=%7B%22date%22%3A%222017-03-12T09%3A47%3A05.662Z%22%2C%22isLoyal%22%3Afalse%7D; _vwo_uuid_v2=FF7DA6E60B629D171DF4988DA4E66265|63df1ffde940c4f2af1557098a986f30; sc_is_visitor_unique=rx8617147.1489312026.AA2F747754534F8C3FBAD1FEB0D3C2AF.1.1.1.1.1.1.1.1.1; _pk_id.1.fd33=8b5c4d980c69685d.1489312026.1.1489312026.1489312026.; _pk_ses.1.fd33=*; user_num=nowset; _ga=GA1.2.126853716.1489312026; D_SID=109.205.248.173:YGZhKuvnyX4vPxbOH0niwIc703iM0kDiZr9rRgtUsiI; D_IID=1B7AB422-1576-3A64-A898-2EB8D91A13C3; D_UID=237D6510-C475-3FB1-A7FD-B28763FDB266; D_ZID=7A6141AD-C7C5-3794-818B-2269BEC4117F; D_ZUID=47888A67-A150-317F-9C3F-D492473938CC; D_HID=BDE2132C-80DE-3AEB-B3D4-E50C2688AE91; _bizo_bzid=e0ce46b1-862f-4a31-a452-4c667bf96e92; _bizo_cksm=E1333301732F9697; _mkto_trk=id:891-VEY-973&token:_mch-similarweb.com-1489312027151-31525; _bizo_np_stats=155%3D961%2C; _we_wk_ss_lsf_=true; bi-sid-v2=xFkCgDxZzVCa4nwx5fls.1583920029654; intercom-id-e74067abd037cecbecb0662854f02aee12139f95=7858b270-fd74-4564-9773-a9ad7806d88f; PRUM_EPISODES=s=1489312086446&r=https%3A//www.similarweb.com/website/leon.ru';
var step = 0;


bkurl.resources.forEach((resource)=>{
	
	var headers = {
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		//'Accept-Encoding': 'gzip, deflate, sdch, br',
		//'Cookie': cookie,
		'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,sr;q=0.2',
		'Upgrade-Insecure-Requests': '1',
		'Referrer': resource.url
	};

	var options = {
			url:resource.url,
			headers:headers
	}; 
		
	request(options, (err, res, body)=>{
	  if(err){console.log(err);}
	  else{ 
		let $ = cheerio.load(body);
		let data = {};
		data.site=resource.site;
		data.parser='similarweb';
		data.rank = $('.rankingItem-value.js-countable').data('value');
		data.totalVisits = $('.engagementInfo-valueNumber.js-countValue').html();
		data.visitTime = $('.engagementInfo-valueNumber.js-countValue').eq(1).html();
		data.pagesPerVisit = $('.engagementInfo-valueNumber.js-countValue').eq(2).html();
		data.bounceRate = $('.engagementInfo-valueNumber.js-countValue').eq(3).html();
		data.trafficSource = {};
		data.trafficSource.direct = $('.trafficSourcesChart-value').eq(0).html();
		data.trafficSource.referrals = $('.trafficSourcesChart-value').eq(1).html();
		data.trafficSource.search = $('.trafficSourcesChart-value').eq(2).html();
		data.trafficSource.social = $('.trafficSourcesChart-value').eq(3).html();
		data.trafficSource.mail = $('.trafficSourcesChart-value').eq(4).html();
		console.log(data);
		if(data.rank !== undefined) var bkStat = new BkSitesStats({stats: data}).save(()=>{
																	step++;
																	if(step === bkurl.resources.length) process.exit();
																});
	  }
	}); 

	
});


setTimeout(()=>{
	process.exit();
}, 1000 * 60 * 5);