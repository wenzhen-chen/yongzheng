! function() {
	var citys = [
				{
					"0": "全国",
					"c": [{"1":"全国"}]
				}, 
				{
					"1": "北京",
					"c": [{"1":"北京"}]
				}, 
				{
					"2": "上海",
					"c": [{"1":"上海"}]
				}, 
				{
					"3": "天津",
					"c": [{"1":"天津"}]
				}, 
				{
					"4": "重庆",
					"c": [{"1":"重庆"}]
				}, 
				{
					"5": "河北",
					"c": [{
							"1": "唐山"
						  }, 
						  {
							"2": "沧州"
						  }, 
						  {
							"3": "廊坊"	
						  }, 
							{
								"4": "衡水"
								
							}, 
							{
								"5": "石家庄"
								
							}, 
							{
								"6": "邯郸"
								
							}, 
							{
								"7": "邢台"
								
							}, 
							{
								"8": "保定"
								
							}, 
							{
								"9": "张家口"
								
							}, 
							{
								"10": "承德"
								
							}, 
							{
								"11": "秦皇岛"
								
							}]
				}, {
					"6": "山西",
					"c": [{
						"1": "长治"
					
					}, {
						"2": "太原"
						
					}, {
						"3": "大同"
						
					}, {
						"4": "阳泉"
						
					}, {
						"5": "晋城"
						
					}, {
						"6": "朔州"
						
					}, {
						"7": "晋中"
						
					}, {
						"8": "忻州"
						
					}, {
						"9": "吕梁"
						
					}, {
						"10": "临汾"
						
					}, {
						"11": "运城"
						
					}]
			}, {
				"7": "河南",
				"c": [{
					"1": "商丘"
					
				}, {
					"2": "周口"
					
				}, {
					"3": "驻马店"
					
				}, {
					"4": "信阳"
					
				}, {
					"5": "郑州"
					
				}, {
					"6": "开封"
					
				}, {
					"7": "洛阳"
					
				}, {
					"8": "平顶山"
					
				}, {
					"9": "焦作"
					
				}, {
					"10": "鹤壁"
					
				}, {
					"11": "新乡"
					
				}, {
					"12": "安阳"
					
				}, {
					"13": "濮阳"
					
				}, {
					"14": "济源"
					
				}, {
					"15": "许昌"
					
				}, {
					"16": "漯河"
					
				}, {
					"17": "三门峡"
					
				}, {
					"18": "南阳"
					
				}]
			}, {
				"8": "辽宁",
				"c": [{
					"1": "沈阳"
					
				}, {
					"2": "大连"
					
				}, {
					"3": "鞍山"
					
				}, {
					"4": "抚顺"
					
				}, {
					"5": "本溪"
					
				}, {
					"6": "丹东"
					
				}, {
					"7": "锦州"
					
				}, {
					"8": "葫芦岛"
					
				}, {
					"9": "营口"
					
				}, {
					"10": "盘锦"
					
				}, {
					"11": "阜新"
					
				}, {
					"12": "辽阳"
					
				}, {
					"13": "朝阳"
					
				}, {
					"14": "铁岭"
					
				}]
			}, {
				"9": "吉林",
				"c": [{
					"1": "长春"
					
				}, {
					"2": "吉林"
					
				}, {
					"3": "四平"
					
				}, {
					"4": "通化"
					
				}, {
					"5": "白山"
					
				}, {
					"6": "松原"
					
				}, {
					"7": "白城"
				
				}, {
					"8": "延边州"
					
				}, {
					"9": "辽源"
					
				}]
			}, {
				"10": "黑龙江",
				"c": [{
					"1": "七台河"
					
				}, {
					"2": "黑河"
				
				}, {
					"3": "绥化"
					
				}, {
					"4": "大兴安岭地区"
					
				}, {
					"5": "哈尔滨"
					
				}, {
					"6": "齐齐哈尔"
					
				}, {
					"7": "鹤岗"
					
				}, {
					"8": "双鸭山"
					
				}, {
					"9": "鸡西"
					
				}, {
					"10": "大庆"
					
				}, {
					"11": "伊春"
					
					
				}, {
					"12": "牡丹江"
					
				}, {
					"13": "佳木斯"		
				}]
			}, {
				"11": "内蒙古",
				"c": [{
					"1": "呼和浩特"
					
				}, {
					"2": "包头"
					
				}, {
					"3": "乌海"
					
				}, {
					"4": "赤峰"
					
				}, {
					"5": "乌兰察布"
					
				}, {
					"6": "锡林郭勒盟"
					
				}, {
					"7": "呼伦贝尔"
					
				}, {
					"8": "鄂尔多斯"
					
				}, {
					"9": "巴彦淖尔"
					
				}, {
					"10": "阿拉善盟"
					
				}, {
					"11": "兴安盟"
					
				}, {
					"12": "通辽"
					
				}]
			}, {
				"12": "江苏",
				"c": [{
					"1": "南京"
					
				}, {
					"2": "徐州"
					
				}, {
					"3": "连云港"
					
				}, {
					"4": "淮安"
					
				}, {
					"5": "宿迁"
					
				}, {
					"6": "盐城"
					
				}, {
					"7": "扬州"
					
				}, {
					"8": "泰州"
					
				}, {
					"9": "南通"
					
				}, {
					"10": "镇江"
					
				}, {
					"11": "常州"
					
				}, {
					"12": "无锡"
					
				}, {
					"13": "苏州"			
				}]
			}, {
				"13": "山东",
				"c": [{
					"1": "东营"
					
				}, {
					"2": "潍坊"
					
					
				}, {
					"3": "烟台"
					
				}, {
					"4": "威海"
					
				}, {
					"5": "莱芜"
					
				}, {
					"6": "德州"
					
				}, {
					"7": "临沂"
					
				}, {
					"8": "聊城"
					
				}, {
					"9": "滨州"
					
				}, {
					"10": "菏泽"
					
				}, {
					"11": "日照"
					
				}, {
					"12": "济宁"
					
				}, {
					"13": "泰安"
					
				}, {
					"14": "济南"
					
				}, {
					"15": "青岛"
					
				}, {
					"16": "淄博"
					
				}, {
					"17": "枣庄"
					
				}]
			}, {
				"14": "安徽",
				"c": [{
					"1": "铜陵"
					
				}, {
					"2": "合肥"
					
				}, {
					"3": "淮南"
					
				}, {
					"4": "淮北"
					
				}, {
					"5": "芜湖"
					
				}, {
					"6": "蚌埠"
					
				}, {
					"7": "马鞍山"
					
				}, {
					"8": "安庆"
					
				}, {
					"9": "黄山"
					
				}, {
					"10": "滁州"
					
				}, {
					"11": "阜阳"
					
				}, {
					"12": "亳州"
					
				}, {
					"13": "宣城"
					
				}, {
					"14": "宿州"
					
				}, {
					"15": "池州"
					
				}, {
					"16": "六安"
					
				}]
			}, {
				"15": "浙江",
				"c": [{
					"1": "丽水"
					
				}, {
					"2": "台州"
					
				}, {
					"3": "舟山"
					
				}, {
					"4": "宁波"
					
				}, {
					"5": "杭州"
					
				}, {
					"6": "温州"
					
				}, {
					"7": "嘉兴"
					
				}, {
					"8": "湖州"
				}, {
					"9": "绍兴"
					
				}, {
					"10": "金华"
					
				}, {
					"11": "衢州"
					
				}]
			}, {
				"16": "福建",
				"c": [{
					"1": "福州"
					
				}, {
					"2": "厦门"
					
				}, {
					"3": "三明"
					
				}, {
					"4": "莆田"
					
				}, {
					"5": "泉州"
					
				}, {
					"6": "漳州"
					
				}, {
					"7": "南平"
					
				}, {
					"8": "龙岩"
					
				}, {
					"9": "宁德"
					
				}]
			}, {
				"17": "湖北",
				"c": [{
					"1": "神农架林区"
					
				}, {
					"2": "武汉"
					
				}, {
					"3": "潜江"
				
				}, {
					"4": "黄石"
					
				}, {
					"5": "襄阳"
					
				}, {
					"6": "十堰"
					
				}, {
					"7": "荆州"
					
				}, {
					"8": "宜昌"
					
				}, {
					"9": "孝感"
					
				}, {
					"10": "黄冈"
					
				}, {
					"11": "天门"
					
				}, {
					"12": "仙桃"
					
				}, {
					"13": "咸宁"
					
				}, {
					"14": "恩施州"
					
				}, {
					"15": "鄂州"
					
				}, {
					"16": "荆门"
					
				}, {
					"17": "随州"
					
				}]
			}, {
				"18": "湖南",
				"c": [{
					"1": "张家界"
					
				}, {
					"2": "郴州"
					
				}, {
					"3": "益阳"
					
					
				}, {
					"4": "永州"
					
				}, {
					"5": "怀化"
					
				}, {
					"6": "娄底"
					
				}, {
					"7": "湘西州"
					
				}, {
					"8": "长沙"
					
				}, {
					"9": "株洲"
				
				}, {
					"10": "湘潭"
					
				}, {
					"11": "衡阳"
					
				}, {
					"12": "邵阳"
					
				}, {
					"13": "岳阳"
					
				}, {
					"14": "常德"
					
				}]
			}, {
				"19": "广东",
				"c": [{
					"1": "广州"
					
				}, {
					"2": "深圳"
					
				}, {
					"3": "珠海"
					
				}, {
					"4": "汕头"
					
				}, {
					"5": "韶关"
					
				}, {
					"6": "河源"
					
				}, {
					"7": "梅州"
				
				}, {
					"8": "惠州"
					
				}, {
					"9": "汕尾"
					
				}, {
					"10": "东莞"
					
				}, {
					"11": "中山"
					
				}, {
					"12": "江门"
					
				}, {
					"13": "佛山"
					
				}, {
					"14": "阳江"
					
				}, {
					"15": "湛江"
					
				}, {
					"16": "茂名"
				}, {
					"17": "肇庆"
					
				}, {
					"18": "云浮"
					
				}, {
					"19": "清远"
					
				}, {
					"20": "潮州"
					
				}, {
					"21": "揭阳"
					
				}]
			}, {
				"20": "广西",
				"c": [{
					"1": "贺州"
					
				}, {
					"2": "百色"
					
				}, {
					"3": "河池"
					
				}, {
					"4": "崇左"
					
				}, {
					"5": "南宁"
					
				}, {
					"6": "柳州"
					
				}, {
					"7": "桂林"
					
				}, {
					"8": "梧州"
					
				}, {
					"9": "北海"
					
				}, {
					"10": "防城港"
					
				}, {
					"11": "钦州"
					
				}, {
					"12": "贵港"
					
				}, {
					"13": "玉林"
					
				}, {
					"14": "来宾"
					
				}]
			}, {
				"21": "江西",
				"c": [{
					"1": "南昌"
				
				}, {
					"2": "景德镇"
					
				}, {
					"3": "萍乡"
			
				}, {
					"4": "新余"
			
				}, {
					"5": "九江"
				
				}, {
					"6": "鹰潭"
			
				}, {
					"7": "上饶"
					
				}, {
					"8": "宜春"
					
				}, {
					"9": "抚州"
					
				}, {
					"10": "吉安"
				
				}, {
					"11": "赣州"
				
				}]
			}, {
				"22": "四川",
				"c": [{
					"1": "眉山"
				
				}, {
					"2": "资阳"
				
				}, {
					"3": "阿坝州"
					
				}, {
					"4": "甘孜州"
					
				}, {
					"5": "凉山州"
					
				}, {
					"6": "成都"
					
				}, {
					"7": "自贡"
		
				}, {
					"8": "攀枝花"
			
				}, {
					"9": "泸州"
			
				}, {
					"10": "绵阳"
			
				}, {
					"11": "德阳"
	
				}, {
					"12": "广元"
		
				}, {
					"13": "遂宁"
		
				}, {
					"14": "内江"
			
				}, {
					"15": "乐山"
					
				}, {
					"16": "宜宾"
					
				}, {
					"17": "广安"
				
				}, {
					"18": "南充"
				
				}, {
					"19": "达州"
			
				}, {
					"20": "巴中"
			
				}, {
					"21": "雅安"
				
				}]
			}, {
				"23": "海南",
				"c": [{
					"1": "琼海"
					
				}, {
					"2": "万宁"
					
				}, {
					"3": "海口"
				}, {
					"4": "东方"
			
				}, {
					"5": "三亚"
			
				}, {
					"6": "文昌"
					
				}, {
					"7": "五指山"

				}, {
					"8": "临高县"
			
				}, {
					"9": "澄迈县"
				
				}, {
					"10": "定安县"
				
				}, {
					"11": "屯昌县"
					
				}, {
					"12": "昌江县"
					
				}, {
					"13": "白沙县"
					
				}, {
					"14": "琼中县"
			
				}, {
					"15": "陵水县"
					
				}, {
					"16": "保亭县"
					
				}, {
					"17": "乐东县"
					
				}, {
					"18": "三沙"

				}, {
					"19": "儋州"
					
				}]
			}, {
				"24": "贵州",
				"c": [{
					"1": "贵阳"

				}, {
					"2": "六盘水"
	
				}, {
					"3": "遵义"
				
				}, {
					"4": "铜仁"
					
				}, {
					"5": "毕节"
				
				}, {
					"6": "安顺"
			
				}, {
					"7": "黔西南州"
				
				}, {
					"8": "黔东南州"
					
				}, {
					"9": "黔南州"
			
				}]
			}, {
				"25": "云南",
				"c": [{
					"1": "丽江"
					
				}, {
					"2": "文山州"

				}, {
					"3": "迪庆州"

				}, {
					"4": "红河州"

				}, {
					"5": "西双版纳州"

				}, {
					"6": "楚雄州"

				}, {
					"7": "大理州"

				}, {
					"8": "德宏州"

				}, {
					"9": "怒江州"

				}, {
					"10": "昆明"
		
				}, {
					"11": "曲靖"
				}, {
					"12": "玉溪"

				}, {
					"13": "昭通"
	
				}, {
					"14": "普洱"
	
				}, {
					"15": "临沧"

				}, {
					"16": "保山"

				}]
			}, {
				"26": "西藏",
				"c": [{
					"1": "那曲地区"
					
				}, {
					"2": "山南地区"
			
				}, {
					"3": "昌都地区"
					
				}, {
					"4": "日喀则地区"
					
				}, {
					"5": "阿里地区"
					
				}, {
					"6": "林芝地区"
					
				}, {
					"7": "拉萨"
					
				}]
			}, {
				"27": "陕西",
				"c": [{
					"1": "西安"
					
				}, {
					"2": "铜川"
					
				}, {
					"3": "宝鸡"
					
				}, {
					"4": "咸阳"
					
				}, {
					"5": "渭南"
					
				}, {
					"6": "延安"
					
				}, {
					"7": "汉中"
					
				}, {
					"8": "榆林"
				
				}, {
					"9": "商洛"
					
				}, {
					"10": "安康"
					
				}]
			}, {
				"28": "甘肃",
				"c": [{
					"1": "甘南州"
					
				}, {
					"2": "定西"
					
					
				}, {
					"3": "临夏州"
				
				}, {
					"4": "兰州"
					
				}, {
					"5": "金昌"
					
				}, {
					"6": "白银"
					
				}, {
					"7": "天水"
					
					
				}, {
					"8": "嘉峪关"
					
				}, {
					"9": "平凉"
				
				}, {
					"10": "庆阳"
					
				}, {
					"11": "陇南"
				
				}, {
					"12": "武威"
					
				}, {
					"13": "张掖"
					
				}, {
					"14": "酒泉"
					
				}]
			}, {
				"29": "青海",
				"c": [{
					"1": "西宁"
					
				}, {
					"2": "海东地区"
					
				}, {
					"3": "海北州"
					
				}, {
					"4": "黄南州"
				
				}, {
					"5": "海南州"
					
				}, {
					"6": "果洛州"
					
				}, {
					"7": "玉树州"
					
				}, {
					"8": "海西州"
					
				}]
			}, {
				"30": "宁夏",
				"c": [{
					"1": "银川"
					
				}, {
					"2": "石嘴山"
					
				}, {
					"3": "吴忠"
					
				}, {
					"4": "固原"
					
				}, {
					"5": "中卫"
					
				}]
			}, {
				"31": "新疆",
				"c": [{
					"1": "五家渠"
					
				}, {
					"2": "阿拉尔"
					
				}, {
					"3": "图木舒克"
					
				}, {
					"4": "乌鲁木齐"
					
				}, {
					"5": "克拉玛依"
					
				}, {
					"6": "石河子"
					
				}, {
					"7": "吐鲁番地区"
					
				}, {
					"8": "铁门关"
					
				}, {
					"9": "哈密地区"
					
				}, {
					"10": "和田地区"
					
				}, {
					"11": "阿克苏地区"
					
				}, {
					"12": "喀什地区"
					
				}, {
					"13": "克孜勒苏柯尔克孜自治州"
				
				}, {
					"14": "巴音郭楞州"
					
				}, {
					"15": "昌吉州"
					
				}, {
					"16": "博尔塔拉州"
					
				}, {
					"17": "伊犁州"
					
				}, {
					"18": "塔城地区"
					
				}, {
					"19": "阿勒泰地区"
					
				}]
			}, {
				"32": "台湾",
				"c": [{
					"1": "台湾"
					
				}]
			}, {
				"33": "港澳",
				"c": [{
					"1": "香港"
					
				}, {
					"2": "澳门"
					
				}]
			}];
	if (typeof define === "function") {
		define(citys)
	} else {
		window.Citys = citys
	}
}();