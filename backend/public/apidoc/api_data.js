define({ "api": [
  {
    "type": "post",
    "url": "/user/add",
    "title": "添加用户",
    "description": "<p>添加用户</p>",
    "name": "addUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
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
            "field": "phone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>自我介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>性别（-1=&gt;保密 0=&gt;女 1=&gt;男）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应示例:",
          "content": "{\n     \"status\": 0,\n     \"data\":  \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "失败响应示例:",
          "content": "{\n    \"status\" : \"1\",\n    \"message\" : \"服务器正忙\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/user/add"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
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
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应示例:",
          "content": "{\n     \"status\": 0,\n     \"data\": {\n         \"_id\": \"465f4df34324\",\n         \"password\": \"dsfdsr334d4d\",\n         \"username\": \"admin\",\n         \"create_time\": 1547324343434,\n         \"_v\": 0,\n         \"role\": {\n             \"menus\": []\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "失败响应示例:",
          "content": "{\n    \"status\" : \"1\",\n    \"message\" : \"用户名或密码不正确\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
