define({ "api": [
  {
    "type": "GET",
    "url": "/appstore/detail",
    "title": "获取App信息",
    "group": "AppStore",
    "version": "0.0.1",
    "description": "<p>分页获取电子市场的App列表</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>Mac地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "package",
            "description": "<p>包名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?mac=8C:BE:BE:BD:EC:0E&package=com.tencent.tmgp.tstl",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "appVersionName",
            "description": "<p>应用版本名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "memo",
            "description": "<p>描述</p>"
          },
          {
            "group": "200",
            "type": "float",
            "optional": false,
            "field": "score",
            "description": "<p>应用分数</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "package",
            "description": "<p>应用包名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "versionCode",
            "description": "<p>应用版本号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "downCountDesc",
            "description": "<p>应用下载量描述</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>应用名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "downurl",
            "description": "<p>下载链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>应用icon链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "sizeDesc",
            "description": "<p>应用大小描述</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>应用大小</p>"
          },
          {
            "group": "200",
            "type": "float",
            "optional": false,
            "field": "stars",
            "description": "<p>星</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>应用包的md5值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\t\t\"appVersionName\": \"1.3.0.1\",\n\t\t\"memo\": \"端游原班人马匠心打造 金庸武学 原味再现\",\n\t\t\"score\": \"3.2\",\n\t\t\"package\": \"com.tencent.tmgp.tstl\",\n\t\t\"versionCode\": \"103\",\n\t\t\"downCountDesc\": \"5万次安装\",\n\t\t\"name\": \"天龙八部\",\n\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/4f/4ffc29ac60ac420696c1975a57ed14a4/com.tencent.tmgp.tstl.1705171547.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=interveneList&listId=37&position=1&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=58e8dece9aa8d5c050831440f15ae807%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A807136&encryptType=1\",\n\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/4ffc29ac60ac420696c1975a57ed14a4.png\",\n\t\t\"sizeDesc\": \"707.2M\",\n\t\t\"size\": 741534970,\n\t\t\"stars\": \"3.5\",\n\t\t\"md5\": \"1B0FA45A640AD928256CBD106E9982E0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/appstore_v2.java",
    "groupTitle": "AppStore",
    "name": "GetAppstoreDetail"
  },
  {
    "type": "GET",
    "url": "/appstore/list",
    "title": "电子市场分类列表",
    "group": "AppStore",
    "version": "0.0.1",
    "description": "<p>分页获取电子市场的App列表，目前我们电子市场被分为四类（学习，社交，办公，其他）;</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "current",
            "description": "<p>当前页面</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>设备的mac地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>应用类别（参数包括study , sociality , offices , other）;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?current=1&size=4&mac_address=a2:02&category=study",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "current",
            "description": "<p>当前页面</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>应用总数</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "records",
            "description": "<p>appVersionName应用版本名称，memo描述，score应用分数，package包名，versionCode应用版本Code，downCountDesc应用下载量描述，name应用名称，downurl下载链接，icon应用图标，sizeDesc应用大小描述，size应用大小，stars星，md5应用包的md5值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"records\": [\n    {\n\t\t\t\t\"appVersionName\": \"1.3.0.1\",\n\t\t\t\t\"memo\": \"端游原班人马匠心打造 金庸武学 原味再现\",\n\t\t\t\t\"score\": \"3.2\",\n\t\t\t\t\"package\": \"com.tencent.tmgp.tstl\",\n\t\t\t\t\"versionCode\": \"103\",\n\t\t\t\t\"downCountDesc\": \"5万次安装\",\n\t\t\t\t\"name\": \"天龙八部\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/4f/4ffc29ac60ac420696c1975a57ed14a4/com.tencent.tmgp.tstl.1705171547.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=interveneList&listId=37&position=1&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=58e8dece9aa8d5c050831440f15ae807%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A807136&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/4ffc29ac60ac420696c1975a57ed14a4.png\",\n\t\t\t\t\"sizeDesc\": \"707.2M\",\n\t\t\t\t\"size\": 741534970,\n\t\t\t\t\"stars\": \"3.5\",\n\t\t\t\t\"md5\": \"1B0FA45A640AD928256CBD106E9982E0\"\n\t\t\t}, {\n\t\t\t\t\"appVersionName\": \"1.2.3\",\n\t\t\t\t\"memo\": \"探索地牢，收集武器，爆战小怪兽\",\n\t\t\t\t\"score\": \"4.5\",\n\t\t\t\t\"package\": \"yuanqiqishi.game.huawei\",\n\t\t\t\t\"versionCode\": \"609\",\n\t\t\t\t\"downCountDesc\": \"115万次安装\",\n\t\t\t\t\"name\": \"元气骑士\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/f4/f48f7360cad74ed9a073f0e84dce2bed/yuanqiqishi.game.huawei.1705111858.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=interveneList&listId=37&position=2&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=58e8dece9aa8d5c050831440f15ae807%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A807136&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/f48f7360cad74ed9a073f0e84dce2bed.png\",\n\t\t\t\t\"sizeDesc\": \"32.9M\",\n\t\t\t\t\"size\": 34506827,\n\t\t\t\t\"stars\": \"4.5\",\n\t\t\t\t\"md5\": \"90E10ED6030377D9FDCE8D834141F72F\"\n\t\t\t}\n  ],\n  \"total\": 2,\n  \"size\": 4,\n  \"current\": 1,\n  \"searchCount\": true,\n  \"pages\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/appstore_v2.java",
    "groupTitle": "AppStore",
    "name": "GetAppstoreList"
  },
  {
    "type": "GET",
    "url": "/appstore/recommend",
    "title": "电子市场推荐页",
    "group": "AppStore",
    "version": "0.0.1",
    "description": "<p>电子市场推荐页 : 包含广告条，推荐应用列表，应用卡片。</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>Mac地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?mac=8C:BE:BE:BD:EC:0E",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>页面名称</p>"
          },
          {
            "group": "200",
            "type": "JSONArray",
            "optional": false,
            "field": "bannerlist",
            "description": "<p>广告列表，包含name(名称)，icon(广告图片路径);</p>"
          },
          {
            "group": "200",
            "type": "JSONArray",
            "optional": false,
            "field": "layoutData",
            "description": "<p>页面布局数据</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "dataListType",
            "description": "<p>数据布局类型，暂时有两种1：以app列表的形式，2：以卡片的形式；</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "layoutName",
            "description": "<p>数据布局名称，同上。暂时有horizontallist，horizontalcard；</p>"
          },
          {
            "group": "200",
            "type": "JSONArray",
            "optional": false,
            "field": "list",
            "description": "<p>appVersionName应用版本名称，memo描述，score应用分数，package包名，versionCode应用版本Code，downCountDesc应用下载量描述，name应用名称，downurl下载链接，icon应用图标，sizeDesc应用大小描述，size应用大小，stars星，md5应用包的md5值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\t\n\t\"name\": \"推荐\",\n\t\"bannerlist\": [{\n\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/e3f300d859b4435cbcb6ecae00e9a042/1495088590600_1080x684.jpg\",\n\t\t\"name\": \"作业帮\"\n\t},{\n\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/c0a050fcf4464b2ca199fda4ae94e0ab/1495032248512_1080x684.png\",\n\t\t\"name\": \"天龙八部\"\n\t}, {\n\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/0c51b48e628c474bbbbba189f3d23506/1494577728760_1080x684.png\",\n\t\t\"name\": \"付费精品\"\n\t}, {\n\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/4f3a7f44e6d845f8b9d6f2ec6049a3bd/1494647342134_1080x684.png\",\n\t\t\"name\": \"适合妈妈玩的游戏都在这了\"\n\t}, {\n\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/92b267f13e64449d9a797d6aa6a47642/1494576365155_1080x684.png\",\n\t\t\"name\": \"有道云笔记\"\n\t}, {\n\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/8d01f37f3b3e4de4a3e8b4755f40e396/1494811085912_1080x684.png\",\n\t\t\"name\": \"我爱你\"\n\t}],\n\t\"layoutData\": [{\n\t\t\t\"name\": \"推荐应用\",\n\t\t\t\"dataListType\": 1,\n\t\t\t\"layoutName\": \"horizontallist\",\n\t\t\t\"list\": [{\n\t\t\t\t\"appVersionName\": \"7.5.0\",\n\t\t\t\t\"memo\": \"看视频直播网红明星上微博\",\n\t\t\t\t\"score\": \"4.7\",\n\t\t\t\t\"package\": \"com.sina.weibo\",\n\t\t\t\t\"versionCode\": \"3371\",\n\t\t\t\t\"downCountDesc\": \"13.2亿次安装\",\n\t\t\t\t\"name\": \"微博\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/52/522110c8bbf745b0afb6768c59291b3c/com.sina.weibo.1705121527.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=HiAd&listId=2&position=1&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=54d1dca28f48856c14947aa2f7353c27%3BcdrInfo%3A20170518165243aps15057695%5E%7BopType%7D%5E18750%5EC7166%5E2%5E1%5E2a74fad8d97011e292cf101b543e3aa5%5E17263%5E39ca7404dde3fc0458e03bf84ed0a0decefdb7397f1ad5f661ae79d679835a24%5E%5EU0NFOn5TUkM6Mn5PTDp-U0w6flBUOn5UOn5QTDo1%5E2017-05-18+16%3A52%3A43%5E1%5E%E8%8D%A3%E8%80%807%5E0.002449%5E0%5E6.79%5E6.79%5E3.34981%5E900086000000000827%5E20358%5E%5E%5E%5E7.2.3%5E1495097561980%5E0%3BisAdTag%3A0%3B%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A7120&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/522110c8bbf745b0afb6768c59291b3c.png\",\n\t\t\t\t\"sizeDesc\": \"60.7M\",\n\t\t\t\t\"size\": 63665004,\n\t\t\t\t\"stars\": \"5.0\",\n\t\t\t\t\"md5\": \"F5D2A866B8961BE7E30A992DFDA9E973\"\n\t\t\t}, {\n\t\t\t\t\"appVersionName\": \"8.5.0\",\n\t\t\t\t\"memo\": \"搜题快准，名师辅导，高效提分！\",\n\t\t\t\t\"score\": \"4.6\",\n\t\t\t\t\"package\": \"com.baidu.homework\",\n\t\t\t\t\"versionCode\": \"284\",\n\t\t\t\t\"downCountDesc\": \"1.4亿次安装\",\n\t\t\t\t\"name\": \"作业帮\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/ac/ac5447fa37c843b1ba7b7f2763e5da19/com.baidu.homework.1705172142.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=interveneList&listId=2&position=3&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=54d1dca28f48856c14947aa2f7353c27%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A7120&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/ac5447fa37c843b1ba7b7f2763e5da19.png\",\n\t\t\t\t\"sizeDesc\": \"40.1M\",\n\t\t\t\t\"size\": 42012429,\n\t\t\t\t\"stars\": \"5.0\",\n\t\t\t\t\"md5\": \"BDE6DAE3307640E48711B04DE0F95C5D\"\n\t\t\t}, {\n\t\t\t\t\"appVersionName\": \"7.3.2\",\n\t\t\t\t\"memo\": \"携程在手，说走就走\",\n\t\t\t\t\"score\": \"4.5\",\n\t\t\t\t\"package\": \"ctrip.android.view\",\n\t\t\t\t\"versionCode\": \"151\",\n\t\t\t\t\"downCountDesc\": \"4.7亿次安装\",\n\t\t\t\t\"name\": \"携程旅行\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/97/97d4d76bbef64ed2ae3161057f35a545/ctrip.android.view.1704270947.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=HiAd&listId=2&position=4&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=54d1dca28f48856c14947aa2f7353c27%3BcdrInfo%3A20170518165243aps15057698%5E%7BopType%7D%5E13351%5EC5157%5E2%5E6%5E1a3d639edc9511e292cf101b543e3aa5%5E17263%5E39ca7404dde3fc0458e03bf84ed0a0decefdb7397f1ad5f661ae79d679835a24%5E%5EU0NFOn5TUkM6Mn5PTDp-U0w6flBUOn5UOn5QTDo1%5E2017-05-18+16%3A52%3A43%5E1%5E%E8%8D%A3%E8%80%807%5E0.000584%5E0%5E13.5%5E13.5%5E11.86918%5E900086000000034654%5E20358%5E%5E%5E%5E7.2.3%5E1495097561980%5E0%3BisAdTag%3A0%3B%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A7120&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/97d4d76bbef64ed2ae3161057f35a545.png\",\n\t\t\t\t\"sizeDesc\": \"50.7M\",\n\t\t\t\t\"size\": 53159774,\n\t\t\t\t\"stars\": \"4.5\",\n\t\t\t\t\"md5\": \"B8AC40C8124ADF4A1B826E72902A78FF\"\n\t\t\t}, {\n\t\t\t\t\"appVersionName\": \"6.0.3\",\n\t\t\t\t\"memo\": \"唯品会-欢乐颂2独家电商 同款热卖\",\n\t\t\t\t\"score\": \"4.2\",\n\t\t\t\t\"package\": \"com.achievo.vipshop\",\n\t\t\t\t\"versionCode\": \"663\",\n\t\t\t\t\"downCountDesc\": \"4.1亿次安装\",\n\t\t\t\t\"name\": \"唯品会\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/e0/e05147cfc4f0403a97c7763b4a3b1712/com.achievo.vipshop.1705170942.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=HiAd&listId=2&position=5&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=54d1dca28f48856c14947aa2f7353c27%3BcdrInfo%3A20170518165243aps15057699%5E%7BopType%7D%5E18605%5EC9136%5E2%5E8%5E3b538373dc9b11e292cf101b543e3aa5%5E17263%5E39ca7404dde3fc0458e03bf84ed0a0decefdb7397f1ad5f661ae79d679835a24%5E%5EU0NFOn5TUkM6Mn5PTDp-U0w6flBUOn5UOn5QTDo1%5E2017-05-18+16%3A52%3A43%5E1%5E%E8%8D%A3%E8%80%807%5E0.000559%5E0%5E12.4%5E12.4%5E9.9034%5E900086000000020151%5E20358%5E%5E%5E%5E7.2.3%5E1495097561980%5E0%3BisAdTag%3A0%3B%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A7120&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/e05147cfc4f0403a97c7763b4a3b1712.png\",\n\t\t\t\t\"sizeDesc\": \"33.9M\",\n\t\t\t\t\"size\": 35512336,\n\t\t\t\t\"stars\": \"4.5\",\n\t\t\t\t\"md5\": \"4F509F107E2CA190CC3F00A686EA44EB\"\n\t\t\t}, {\n\t\t\t\t\"appVersionName\": \"7.0\",\n\t\t\t\t\"memo\": \"学习、工作、出国必备翻译&词典软件\",\n\t\t\t\t\"score\": \"4.9\",\n\t\t\t\t\"package\": \"com.baidu.baidutranslate\",\n\t\t\t\t\"versionCode\": \"67\",\n\t\t\t\t\"downCountDesc\": \"1799万次安装\",\n\t\t\t\t\"name\": \"百度翻译\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/6d/6d73a14521894533a363df29b4a17d9d/com.baidu.baidutranslate.1705170002.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=interveneList&listId=2&position=6&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=54d1dca28f48856c14947aa2f7353c27%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A7120&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/6d73a14521894533a363df29b4a17d9d.png\",\n\t\t\t\t\"sizeDesc\": \"44.9M\",\n\t\t\t\t\"size\": 47062373,\n\t\t\t\t\"stars\": \"5.0\",\n\t\t\t\t\"md5\": \"0366E7D227A07A55335594FCB140F808\"\n\t\t\t}]\n\t}, {\n\t\t\t\"dataListType\": 1,\n\t\t\t\"name\": \"精品上新\",\n\t\t\t\"layoutName\": \"horizontallist\",\n\t\t\t\"list\": [{\n\t\t\t\t\"appVersionName\": \"1.3.0.1\",\n\t\t\t\t\"memo\": \"端游原班人马匠心打造 金庸武学 原味再现\",\n\t\t\t\t\"score\": \"3.2\",\n\t\t\t\t\"package\": \"com.tencent.tmgp.tstl\",\n\t\t\t\t\"versionCode\": \"103\",\n\t\t\t\t\"downCountDesc\": \"5万次安装\",\n\t\t\t\t\"name\": \"天龙八部\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/4f/4ffc29ac60ac420696c1975a57ed14a4/com.tencent.tmgp.tstl.1705171547.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=interveneList&listId=37&position=1&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=58e8dece9aa8d5c050831440f15ae807%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A807136&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/4ffc29ac60ac420696c1975a57ed14a4.png\",\n\t\t\t\t\"sizeDesc\": \"707.2M\",\n\t\t\t\t\"size\": 741534970,\n\t\t\t\t\"stars\": \"3.5\",\n\t\t\t\t\"md5\": \"1B0FA45A640AD928256CBD106E9982E0\"\n\t\t\t}, {\n\t\t\t\t\"appVersionName\": \"1.2.3\",\n\t\t\t\t\"memo\": \"探索地牢，收集武器，爆战小怪兽\",\n\t\t\t\t\"score\": \"4.5\",\n\t\t\t\t\"package\": \"yuanqiqishi.game.huawei\",\n\t\t\t\t\"versionCode\": \"609\",\n\t\t\t\t\"downCountDesc\": \"115万次安装\",\n\t\t\t\t\"name\": \"元气骑士\",\n\t\t\t\t\"downurl\": \"http://appdlc.hicloud.com/dl/appdl/application/apk/f4/f48f7360cad74ed9a073f0e84dce2bed/yuanqiqishi.game.huawei.1705111858.apk?sign=c9d81011e610010520007000@7ED2A239A80FA54D27BEFAACCC1AB7F3&cno=4010001&source=interveneList&listId=37&position=2&hcrId=0D855BF76D854F5ABD8EF2C81BCF46AA&extendStr=58e8dece9aa8d5c050831440f15ae807%3BserviceType%3A0%3Bisshake%3A0%3Bs%3A1495097561980%3Btrace%3A1cb9d75a1107447d87d331218b025093%3BlayoutId%3A807136&encryptType=1\",\n\t\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/application/icon144/f48f7360cad74ed9a073f0e84dce2bed.png\",\n\t\t\t\t\"sizeDesc\": \"32.9M\",\n\t\t\t\t\"size\": 34506827,\n\t\t\t\t\"stars\": \"4.5\",\n\t\t\t\t\"md5\": \"90E10ED6030377D9FDCE8D834141F72F\"\n\t\t\t}]\n\t}, {\n\t\t\"dataListType\": 2,\n\t\t\"layoutName\": \"horizontalcard\",\n\t\t\"list\": [{\n\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/8f57ef18d7044f60b1b48c25f74a8bc3/1486609524763_80x160.png\",\n\t\t\t\"landscapeIcon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/8f57ef18d7044f60b1b48c25f74a8bc3/1486609524771_900x240.png\"\n\t\t}, {\n\t\t\t\"icon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/19d93e53ddba4d86894e2401830cec84/1494387687018_80x160.png\",\n\t\t\t\"landscapeIcon\": \"http://appimg.hicloud.com/hwmarket/files/entranceIcon/19d93e53ddba4d86894e2401830cec84/1494387687025_900x240.png\"\n\t\t}]\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/appstore_v2.java",
    "groupTitle": "AppStore",
    "name": "GetAppstoreRecommend"
  },
  {
    "type": "GET",
    "url": "/appwhitelist",
    "title": "获取应用白名单",
    "group": "Apps",
    "version": "0.0.1",
    "description": "<p>获取应用白名单</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>Mac地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "registration_code",
            "description": "<p>注册码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "school_code",
            "description": "<p>学校编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "grade",
            "description": "<p>年级</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "class",
            "description": "<p>班级</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "parent_phone1",
            "description": "<p>家长电话1</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "parent_phone2",
            "description": "<p>家长电话2</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?mac=8C:BE:BE:BD:EC:0E&registration_code=501112&school_code=47&grade=47&class=4711&parent_phone1=10086",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>错误码:0代表无错误,1代表有错误;</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "school_code",
            "description": "<p>返回学校编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "grade",
            "description": "<p>返回年级（可选）</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "class",
            "description": "<p>返回班级（可选）</p>"
          },
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "appwhitelist",
            "description": "<p>返回班级</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "\t{\n\t\t\"code\":\"0\",\n\t\t\"msg\":\"获取成功\",\n     \"school_code\": 47,\n     \"grade\": 3,\n     \"class\": 2,\n\t\t\"appwhitelist\":[ \"com.android.camera2\", \"com.android.settings\", \"com.softwinner.update\" ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/app.java",
    "groupTitle": "Apps",
    "name": "GetAppwhitelist"
  },
  {
    "type": "GET",
    "url": "/devicemanagement",
    "title": "获取设备管理信息",
    "group": "DeviceManagement",
    "version": "0.0.1",
    "description": "<p>获取设备管理信息，如是否禁用相机，是否禁用蓝牙等。</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>Mac地址；</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?mac=a2:02",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disalbe_camera",
            "description": "<p>是否禁用Camera，1：禁用，2：启用；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disable_bluetooth",
            "description": "<p>是否禁用Bluetooth，1：禁用，2：启用；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disable_usb",
            "description": "<p>是否禁用USB，1：禁用，2：启用；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disable_gps",
            "description": "<p>是否禁用GPS，1：禁用，2：启用；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disable_use",
            "description": "<p>是否禁止平板使用，1：禁用，2：启用；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disable_sd",
            "description": "<p>是否禁用SD，1：禁用，2：启用；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disable_sim",
            "description": "<p>是否禁用SIM卡，1：禁用，2：启用；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "disable_reset",
            "description": "<p>是否禁用恢复出厂设置，1：禁用，2：启用；</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "\t{\n\t\t\"disalbe_camera\":1,\n\t\t\"disable_bluetooth\":1,\n     \"disable_usb\":0,\n     \"disable_gps\": 1,\n     \"disable_use\": 0,\n     \"disable_sd\": 0,\n     \"disable_sim\": 0,\n     \"disable_reset\": 1\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/devicemanagement.java",
    "groupTitle": "DeviceManagement",
    "name": "GetDevicemanagement"
  },
  {
    "type": "GET",
    "url": "/wallpaper",
    "title": "获取设备壁纸",
    "group": "DeviceManagement",
    "version": "0.0.1",
    "description": "<p>获取设备管理信息，如是否禁用相机，是否禁用蓝牙等。</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>Mac地址；</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?mac=a2:02",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "wallpaper_url",
            "description": "<p>壁纸的Url；</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\t\"wallpaper_url\":\"http://183.2.192.166/appimg.hicloud.com/hwmarket/files/application/icon144/4ffc29ac60ac420696c1975a57ed14a4.png?mkey=5c46c894db85dec8&f=d6e8&cip=219.133.248.61&proto=http\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/devicemanagement.java",
    "groupTitle": "DeviceManagement",
    "name": "GetWallpaper"
  },
  {
    "type": "POST",
    "url": "/device/reg",
    "title": "注册设备",
    "group": "Devies",
    "version": "0.0.1",
    "description": "<p>注册该设备到管理后台，其中Mac地址，注册码，学校编号必填；</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>Mac地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "registration_code",
            "description": "<p>注册码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "school_code",
            "description": "<p>学校编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "stu_no",
            "description": "<p>学生学号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "grade",
            "description": "<p>年级</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "class",
            "description": "<p>班级</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "parent_phone1",
            "description": "<p>家长电话1</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "parent_phone2",
            "description": "<p>家长电话2</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n  \"mac\": \"8C:BE:BE:BD:EC:0E\",\n  \"registration_code\": 501112,\n  \"school_code\": 47,\n  \"stu_no\": 47,\n  \"grade\": 47,\n  \"class\": 4711,\n  \"parent_phone1\": 10086,\n  \"parent_phone2\": 10086\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0 代表无错误 1代表有错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":\"0\",\"msg\":\"注册成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/device.java",
    "groupTitle": "Devies",
    "name": "PostDeviceReg"
  },
  {
    "type": "GET",
    "url": "/wblist/list",
    "title": "获取网络白名单或黑名单",
    "group": "Netwrok",
    "version": "0.0.1",
    "description": "<p>依据设备Mac地址，获取网络白名单；</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>Mac地址；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "current",
            "description": "<p>当前页；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页数量；</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "w_or_b",
            "description": "<p>白名单或者黑名单1：白名单，2：黑名单；</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?current=1&size=4&mac=a2:02&w_or_b=1",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>错误码:0代表无错误,1代表有错误;</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>状态信息信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "school_code",
            "description": "<p>返回学校编号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "grade",
            "description": "<p>返回年级（可选）</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "class",
            "description": "<p>返回班级（可选）</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>应用总数</p>"
          },
          {
            "group": "200",
            "type": "JSONArray",
            "optional": false,
            "field": "list",
            "description": "<p>白名单或黑名单列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "\t{\n\t\t\"code\":\"0\",\n\t\t\"msg\":\"获取成功\",\n     \"school_code\": 47,\n     \"grade\": 3,\n     \"class\": 2,\n     \"size\": 4,\n     \"total\": 3,\n\t\t\"list\":[ \"www.baidu.com\", \"www.google.com\", \"www.hupu.com\" ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/network.java",
    "groupTitle": "Netwrok",
    "name": "GetWblistList"
  }
] });
