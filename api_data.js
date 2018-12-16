define({ "api": [
  {
    "type": "GET",
    "url": "/applist",
    "title": "获取App列表",
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
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>当前是第几页</p>"
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
            "field": "page",
            "description": "<p>当前是第几页</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "pages",
            "description": "<p>总共多少页</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页多少数据</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "has_next",
            "description": "<p>是否有下一页数据</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "has_prev",
            "description": "<p>是否有前一页数据</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>总共多少数据</p>"
          },
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "applist",
            "description": "<p>package_name包名，title应用名，version版本号，app_type应用类型，update_time应用更新的时间，depscription应用的描述;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{  \n\"page\": 1,\n\"pages\": 3,\n\"per_page\": 10,\n\"has_next\": true,\n\"has_prev\": false,\n\"total\": 27,\n\"applist\": [\n\t{ \"package_name\":\"cn.alauncher.application\" , \"title\":\"launcher\" , \"version\":\"v1.0\" , \"app_type\":\"学习工具\" , \"update_time\":\"2018.11.11\" , \"description\":\"xxxx\"}, \n\t{ \"package_name\":\"com.landscape.schoolexandroid\" , \"title\":\"点点作业\" , \"version\":\"34\" , \"app_type\":\"学习工具\" , \"update_time\":\"2018.11.11\" , \"description\":\"xxxx\"}, \n\t{ \"package_name\":\"com.clovsoft.smartclass.teacher\" , \"title\":\"易课\" , \"version\":\"233\" , \"app_type\":\"学习工具\" , \"update_time\":\"2018.11.11\" , \"description\":\"xxx\"}, ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/appstore.java",
    "groupTitle": "AppStore",
    "name": "GetApplist"
  },
  {
    "type": "GET",
    "url": "/applist",
    "title": "获取App列表",
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
            "field": "package_name",
            "description": "<p>应用的包名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?package_name=cn.alauncher.application",
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
            "field": "url",
            "description": "<p>下载链接</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "is_silent",
            "description": "<p>是否静默安装</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>apk大小，以kb为单位</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{  \n\"url\": \"http://xxxxxxx\",\n\"is_silent\": false,\n\"size\": 330234\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/appstore.java",
    "groupTitle": "AppStore",
    "name": "GetApplist"
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
    "type": "PUT",
    "url": "/device",
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
          "content": "{\n  \"mac\": \"8C:BE:BE:BD:EC:0E\",\n  \"registration_code\": 501112,\n  \"school_code\": 47,\n  \"grade\": 47,\n  \"class\": 4711,\n  \"parent_phone1\": 10086,\n  \"parent_phone2\": 10086\n}",
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
    "name": "PutDevice"
  },
  {
    "type": "GET",
    "url": "/blacklist",
    "title": "获取网络黑名单",
    "group": "Netwrok",
    "version": "0.0.1",
    "description": "<p>依据班级信息，学校编码，获取网络白名单；</p>",
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
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n  \"mac\": \"8C:BE:BE:BD:EC:0E\",\n  \"school_code\": 47,\n  \"grade\": 3,\n  \"class\": 2,\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "\t{\n\t\t\"code\":\"0\",\n\t\t\"msg\":\"获取成功\",\n     \"school_code\": 47,\n     \"grade\": 3,\n     \"class\": 2,\n\t\t\"whitelist\":[ \"www.baidu.com\", \"www.google.com\", \"www.hupu.com\" ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/network.java",
    "groupTitle": "Netwrok",
    "name": "GetBlacklist"
  },
  {
    "type": "GET",
    "url": "/whitelist",
    "title": "获取网络白名单",
    "group": "Netwrok",
    "version": "0.0.1",
    "description": "<p>依据班级信息，学校编码，获取网络白名单；</p>",
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
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n  \"mac\": \"8C:BE:BE:BD:EC:0E\",\n  \"school_code\": 47,\n  \"grade\": 3,\n  \"class\": 2,\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "\t{\n\t\t\"code\":\"0\",\n\t\t\"msg\":\"获取成功\",\n     \"school_code\": 47,\n     \"grade\": 3,\n     \"class\": 2,\n\t\t\"whitelist\":[ \"www.baidu.com\", \"www.google.com\", \"www.hupu.com\" ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/network.java",
    "groupTitle": "Netwrok",
    "name": "GetWhitelist"
  },
  {
    "type": "GET",
    "url": "/users/:id",
    "title": "获取用户信息",
    "group": "Users",
    "version": "0.0.1",
    "description": "<p>获取用户信息</p>",
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
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>简介</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "recommendCode",
            "description": "<p>我的推荐码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "idCardNo",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "memberState",
            "description": "<p>会员状态 0普通用户 1VIP 2账户冻结</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>家庭住址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>账户现金</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"\",\n  \"name\": \"真实姓名\",\n  \"mobile\": 15808544477,\n  \"birthday\": \"1990-03-05\",\n  \"email\": \"slocn@gamil.com\",\n  \"summary\": \"简介\",\n  \"recommendCode\": \"我的推荐码\",\n  \"idCardNo\": \"身份证号\",\n  \"memberState\": 1,\n  \"address\": \"家庭住址\",\n  \"money\": \"30.65\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/user.java",
    "groupTitle": "Users",
    "name": "GetUsersId"
  },
  {
    "type": "",
    "url": "hra.com.broadcast",
    "title": "注册用户",
    "group": "Users",
    "version": "0.0.1",
    "description": "<p>用于注册用户</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户账户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vip",
            "defaultValue": "0",
            "description": "<p>是否注册Vip身份 0 普通用户 1 Vip用户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "recommend",
            "description": "<p>邀请码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "?account=sodlinken&password=11223344&mobile=13739554137&vip=0&recommend=",
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
    "filename": "myapp/user.java",
    "groupTitle": "Users",
    "name": "HraComBroadcast"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "用户登录",
    "group": "Users",
    "version": "0.0.1",
    "description": "<p>用于用户登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "?userName=张三&password=11223344",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>0 代表无错误 1代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":\"0\",\"msg\":\"登录成功\",\"userId\":\"fe6386d550bd434b8cd994b58c3f8075\"}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/user.java",
    "groupTitle": "Users",
    "name": "PostLogin"
  },
  {
    "type": "POST",
    "url": "/users/:id",
    "title": "修改(完善)用户信息",
    "group": "Users",
    "version": "0.0.1",
    "description": "<p>修改(完善)用户信息</p>",
    "parameter": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "summary",
            "description": "<p>简介</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "idCardNo",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>家庭住址</p>"
          }
        ]
      }
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
          "content": "{\"code\":\"0\",\"msg\":\"修改成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/user.java",
    "groupTitle": "Users",
    "name": "PostUsersId"
  }
] });
