(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{1210:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-58a0884cbe6d75e485cff8307023eac9.png"},1211:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-70e74923840bc23495aab0e6bf961453.png"},1212:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/4-381f93e7c3e31527b3b94bce830e7f84.png"},1213:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/5-32be512fc220ea17d1a0be2929647f2c.png"},551:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return T})),t.d(n,"metadata",(function(){return E})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return L}));var r=t(2),N=t(6),a=(t(0),t(572)),T={id:"5.rbac",title:"RBAC\u6743\u9650\u7ba1\u7406\u6a21\u578b",hide_title:!0},E={unversionedId:"security_Oauth2_JWT/5.rbac",id:"security_Oauth2_JWT/5.rbac",isDocsHomePage:!1,title:"RBAC\u6743\u9650\u7ba1\u7406\u6a21\u578b",description:"RBAC\u6743\u9650\u7ba1\u7406\u6a21\u578b",source:"@site/docs/security_Oauth2_JWT/5.rbac.md",slug:"/security_Oauth2_JWT/5.rbac",permalink:"/docs/security_Oauth2_JWT/5.rbac",version:"current",sidebar:"someSidebar",previous:{title:"Session\u4f1a\u8bdd\u7ba1\u7406",permalink:"/docs/security_Oauth2_JWT/4.sessionCtrl"},next:{title:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650",permalink:"/docs/security_Oauth2_JWT/6.dynamicUserPerm"}},i=[{value:"RBAC\u6743\u9650\u7ba1\u7406\u6a21\u578b",id:"rbac\u6743\u9650\u7ba1\u7406\u6a21\u578b",children:[]},{value:"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u4e00\u4e2a\u89d2\u8272",id:"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u4e00\u4e2a\u89d2\u8272",children:[]},{value:"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u591a\u4e2a\u89d2\u8272",id:"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u591a\u4e2a\u89d2\u8272",children:[]},{value:"\u9875\u9762\u8bbf\u95ee\u6743\u9650\u4e0e\u64cd\u4f5c\u6743\u9650",id:"\u9875\u9762\u8bbf\u95ee\u6743\u9650\u4e0e\u64cd\u4f5c\u6743\u9650",children:[]},{value:"Ruoyi\u7684\u6743\u9650\u5206\u8868",id:"ruoyi\u7684\u6743\u9650\u5206\u8868",children:[{value:"\u7ec4\u7ec7\u90e8\u95e8\u8868",id:"\u7ec4\u7ec7\u90e8\u95e8\u8868",children:[]},{value:"\u83dc\u5355\u6743\u9650\u8868",id:"\u83dc\u5355\u6743\u9650\u8868",children:[]},{value:"\u89d2\u8272\u8868 | \u89d2\u8272\u83dc\u5355\u5173\u8054\u8868",id:"\u89d2\u8272\u8868--\u89d2\u8272\u83dc\u5355\u5173\u8054\u8868",children:[]},{value:"\u7528\u6237\u8868 | \u7528\u6237\u89d2\u8272\u5173\u7cfb\u8868",id:"\u7528\u6237\u8868--\u7528\u6237\u89d2\u8272\u5173\u7cfb\u8868",children:[]}]},{value:"\u63d2\u5165\u6570\u636e",id:"\u63d2\u5165\u6570\u636e",children:[]}],O={rightToc:i};function L(e){var n=e.components,T=Object(N.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},O,T,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"rbac\u6743\u9650\u7ba1\u7406\u6a21\u578b"},"RBAC\u6743\u9650\u7ba1\u7406\u6a21\u578b"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Role-Based Access Control")),Object(a.b)("p",{parentName:"blockquote"},"\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u7ba1\u7406"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u7528\u6237\uff1a\u7cfb\u7edf\u63a5\u53e3\u53ca\u8bbf\u95ee\u7684\u64cd\u4f5c\u8005"),Object(a.b)("li",{parentName:"ul"},"\u6743\u9650\uff1a\u80fd\u591f\u8bbf\u95ee\u67d0\u63a5\u53e3\u6216\u8005\u505a\u67d0\u64cd\u4f5c\u7684\u6388\u6743\u8d44\u683c"),Object(a.b)("li",{parentName:"ul"},"\u89d2\u8272\uff1a\u5177\u6709\u4e00\u7c7b\u76f8\u540c\u64cd\u4f5c\u6743\u9650\u7684\u7528\u6237\u7684\u603b\u79f0"))),Object(a.b)("h1",{id:"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u4e00\u4e2a\u89d2\u8272"},"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u4e00\u4e2a\u89d2\u8272"),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200722165657084",src:t(1210).default})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u7528\u6237\u6709\u4e00\u4e2a\u89d2\u8272"),Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u89d2\u8272\u6709\u591a\u4e2a\u6743\u9650"),Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u6743\u9650\u53ef\u4ee5\u5c5e\u4e8e\u591a\u79cd\u89d2\u8272")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6570\u636e\u5e93\u7ed3\u6784")),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200722170219053",src:t(1211).default})),Object(a.b)("h1",{id:"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u591a\u4e2a\u89d2\u8272"},"\u4e00\u4e2a\u7528\u6237\u62e5\u6709\u591a\u4e2a\u89d2\u8272"),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u7528\u6237\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u89d2\u8272"),Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u89d2\u8272\u5305\u542b\u591a\u4e2a\u7528\u6237"),Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u89d2\u8272\u6709\u591a\u79cd\u6743\u9650"),Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u6743\u9650\u5c5e\u4e8e\u591a\u4e2a\u89d2\u8272"))),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200722170709442",src:t(1212).default})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"sys_user\u662f\u7528\u6237\u4fe1\u606f\u8868\uff0c\u7528\u4e8e\u5b58\u50a8\u7528\u6237\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5982\uff1a\u7528\u6237\u540d\u3001\u5bc6\u7801")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"sys_role\u662f\u89d2\u8272\u4fe1\u606f\u8868\uff0c\u7528\u4e8e\u5b58\u50a8\u7cfb\u7edf\u5185\u6240\u6709\u7684\u89d2\u8272")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"sys_menu\u662f\u7cfb\u7edf\u7684\u83dc\u5355\u4fe1\u606f\u8868\uff0c\u7528\u4e8e\u5b58\u50a8\u7cfb\u7edf\u5185\u6240\u6709\u7684\u83dc\u5355\u3002\u7528id\u4e0e\u7236id\u7684\u5b57\u6bb5\u5173\u7cfb\u7ef4\u62a4\u4e00\u4e2a\u83dc\u5355\u6811\u5f62\u7ed3\u6784\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"sys_user_role\u662f\u7528\u6237\u89d2\u8272\u591a\u5bf9\u591a\u5173\u7cfb\u8868\uff0c\u4e00\u6761userid\u4e0eroleid\u7684\u5173\u7cfb\u8bb0\u5f55\u8868\u793a\u8be5\u7528\u6237\u5177\u6709\u8be5\u89d2\u8272\uff0c\u8be5\u89d2\u8272\u5305\u542b\u8be5\u7528\u6237\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"sys_role_menu\u662f\u89d2\u8272\u83dc\u5355(\u6743\u9650)\u5173\u7cfb\u8868\uff0c\u4e00\u6761roleid\u4e0emenuid\u7684\u5173\u7cfb\u8bb0\u5f55\u8868\u793a\u8be5\u89d2\u8272\u7531\u67d0\u83dc\u5355\u6743\u9650\uff0c\u8be5\u83dc\u5355\u6743\u9650\u53ef\u4ee5\u88ab\u67d0\u89d2\u8272\u8bbf\u95ee\u3002"))),Object(a.b)("h1",{id:"\u9875\u9762\u8bbf\u95ee\u6743\u9650\u4e0e\u64cd\u4f5c\u6743\u9650"},"\u9875\u9762\u8bbf\u95ee\u6743\u9650\u4e0e\u64cd\u4f5c\u6743\u9650"),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200722171007434",src:t(1213).default})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u9875\u9762\u8bbf\u95ee\u6743\u9650:")," \u6240\u6709\u7cfb\u7edf\u90fd\u662f\u7531\u4e00\u4e2a\u4e2a\u7684\u9875\u9762\u7ec4\u6210\uff0c\u9875\u9762\u518d\u7ec4\u6210\u6a21\u5757\uff0c\u7528\u6237\u662f\u5426\u80fd\u770b\u5230\u8fd9\u4e2a\u9875\u9762\u7684\u83dc\u5355\u3001\u662f\u5426\u80fd\u8fdb\u5165\u8fd9\u4e2a\u9875\u9762\u5c31\u79f0\u4e3a\u9875\u9762\u8bbf\u95ee\u6743\u9650\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u64cd\u4f5c\u6743\u9650\uff1a")," \u7528\u6237\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u4efb\u4f55\u52a8\u4f5c\u3001\u4ea4\u4e92\u90fd\u9700\u8981\u6709\u64cd\u4f5c\u6743\u9650\uff0c\u5982\u589e\u5220\u6539\u67e5\u7b49\u3002\u6bd4\u5982\uff1a\u67d0\u4e2a\u6309\u94ae\uff0c\u67d0\u4e2a\u8d85\u94fe\u63a5\u7528\u6237\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\uff0c\u662f\u5426\u5e94\u8be5\u770b\u89c1\u7684\u6743\u9650\u3002")),Object(a.b)("h1",{id:"ruoyi\u7684\u6743\u9650\u5206\u8868"},"Ruoyi\u7684\u6743\u9650\u5206\u8868"),Object(a.b)("h2",{id:"\u7ec4\u7ec7\u90e8\u95e8\u8868"},"\u7ec4\u7ec7\u90e8\u95e8\u8868"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u80fd\u6784\u5efa\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `sys_org` (\n    `id` INT(11) NOT NULL AUTO_INCREMENT,\n    `org_pid` INT(11) NOT NULL COMMENT '\u4e0a\u7ea7\u7ec4\u7ec7\u7f16\u7801',\n    `org_pids` VARCHAR(64) NOT NULL COMMENT '\u6240\u6709\u7684\u7236\u8282\u70b9id',\n    `is_leaf` TINYINT(4) NOT NULL COMMENT '0:\u4e0d\u662f\u53f6\u5b50\u8282\u70b9\uff0c1:\u662f\u53f6\u5b50\u8282\u70b9',\n    `org_name` VARCHAR(32) NOT NULL COMMENT '\u7ec4\u7ec7\u540d',\n    `address` VARCHAR(64) NULL DEFAULT NULL COMMENT '\u5730\u5740',\n    `phone` VARCHAR(13) NULL DEFAULT NULL COMMENT '\u7535\u8bdd',\n    `email` VARCHAR(32) NULL DEFAULT NULL COMMENT '\u90ae\u4ef6',\n    `sort` TINYINT(4) NULL DEFAULT NULL COMMENT '\u6392\u5e8f',\n    `level` TINYINT(4) NOT NULL COMMENT '\u7ec4\u7ec7\u5c42\u7ea7',\n    `status` TINYINT(4) NOT NULL COMMENT '0:\u542f\u7528,1:\u7981\u7528',\n    PRIMARY KEY (`id`)\n)\nCOMMENT='\u7cfb\u7edf\u7ec4\u7ec7\u7ed3\u6784\u8868'\nCOLLATE='utf8_general_ci'\nENGINE=InnoDB;\n")),Object(a.b)("h2",{id:"\u83dc\u5355\u6743\u9650\u8868"},"\u83dc\u5355\u6743\u9650\u8868"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u540c\u6837\u6784\u5efa\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `sys_menu` (\n    `id` INT(11) NOT NULL AUTO_INCREMENT,\n    `menu_pid` INT(11) NOT NULL COMMENT '\u7236\u83dc\u5355ID',\n    `menu_pids` VARCHAR(64) NOT NULL COMMENT '\u5f53\u524d\u83dc\u5355\u6240\u6709\u7236\u83dc\u5355',\n    `is_leaf` TINYINT(4) NOT NULL COMMENT '0:\u4e0d\u662f\u53f6\u5b50\u8282\u70b9\uff0c1:\u662f\u53f6\u5b50\u8282\u70b9',\n    `menu_name` VARCHAR(16) NOT NULL COMMENT '\u83dc\u5355\u540d\u79f0',\n    `url` VARCHAR(64) NULL DEFAULT NULL COMMENT '\u8df3\u8f6cURL',\n    `icon` VARCHAR(45) NULL DEFAULT NULL,\n    `icon_color` VARCHAR(16) NULL DEFAULT NULL,\n    `sort` TINYINT(4) NULL DEFAULT NULL COMMENT '\u6392\u5e8f',\n    `level` TINYINT(4) NOT NULL COMMENT '\u83dc\u5355\u5c42\u7ea7',\n    `status` TINYINT(4) NOT NULL COMMENT '0:\u542f\u7528,1:\u7981\u7528',\n    PRIMARY KEY (`id`)\n)\nCOMMENT='\u7cfb\u7edf\u83dc\u5355\u8868'\nCOLLATE='utf8_general_ci'\nENGINE=InnoDB;\n")),Object(a.b)("h2",{id:"\u89d2\u8272\u8868--\u89d2\u8272\u83dc\u5355\u5173\u8054\u8868"},"\u89d2\u8272\u8868 | \u89d2\u8272\u83dc\u5355\u5173\u8054\u8868"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `sys_role` (\n    `id` INT(11) NOT NULL AUTO_INCREMENT,\n    `role_name` VARCHAR(32) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u540d\u79f0(\u6c49\u5b57)',\n    `role_desc` VARCHAR(128) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u63cf\u8ff0',\n    `role_code` VARCHAR(32) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u7684\u82f1\u6587code.\u5982\uff1aADMIN',\n    `sort` INT(11) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u987a\u5e8f',\n    `status` INT(11) NULL DEFAULT NULL COMMENT '0\u8868\u793a\u53ef\u7528',\n    `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u89d2\u8272\u7684\u521b\u5efa\u65e5\u671f',\n    PRIMARY KEY (`id`)\n)\nCOMMENT='\u7cfb\u7edf\u89d2\u8272\u8868'\nCOLLATE='utf8_general_ci'\nENGINE=InnoDB;\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `sys_role_menu` (\n    `id` INT(11) NOT NULL AUTO_INCREMENT,\n    `role_id` INT(11) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272id',\n    `menu_id` INT(11) NOT NULL DEFAULT '0' COMMENT '\u6743\u9650id',\n    PRIMARY KEY (`id`)\n)\nCOMMENT='\u89d2\u8272\u6743\u9650\u5173\u7cfb\u8868'\nCOLLATE='utf8_general_ci'\nENGINE=InnoDB;\n")),Object(a.b)("h2",{id:"\u7528\u6237\u8868--\u7528\u6237\u89d2\u8272\u5173\u7cfb\u8868"},"\u7528\u6237\u8868 | \u7528\u6237\u89d2\u8272\u5173\u7cfb\u8868"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `sys_user` (\n    `id` INT(11) NOT NULL AUTO_INCREMENT,\n    `username` VARCHAR(64) NOT NULL DEFAULT '0' COMMENT '\u7528\u6237\u540d',\n    `password` VARCHAR(64) NOT NULL DEFAULT '0' COMMENT '\u5bc6\u7801',\n    `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u521b\u5efa\u65f6\u95f4',\n    `org_id` INT(11) NOT NULL COMMENT '\u7ec4\u7ec7id',\n    `enabled` INT(11) NULL DEFAULT NULL COMMENT '0\u65e0\u6548\u7528\u6237\uff0c1\u662f\u6709\u6548\u7528\u6237',\n    `phone` VARCHAR(16) NULL DEFAULT NULL COMMENT '\u624b\u673a\u53f7',\n    `email` VARCHAR(32) NULL DEFAULT NULL COMMENT 'email',\n    PRIMARY KEY (`id`)\n)\nCOMMENT='\u7528\u6237\u4fe1\u606f\u8868'\nCOLLATE='utf8_general_ci'\nENGINE=InnoDB;\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `sys_user_role` (\n    `id` INT(11) NOT NULL AUTO_INCREMENT,\n    `role_id` INT(11) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u81ea\u589eid',\n    `user_id` INT(11) NOT NULL DEFAULT '0' COMMENT '\u7528\u6237\u81ea\u589eid',\n    PRIMARY KEY (`id`)\n)\nCOMMENT='\u7528\u6237\u89d2\u8272\u5173\u7cfb\u8868'\nCOLLATE='utf8_general_ci'\nENGINE=InnoDB;\n")),Object(a.b)("h1",{id:"\u63d2\u5165\u6570\u636e"},"\u63d2\u5165\u6570\u636e"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u5b8c\u6574SQL\u811a\u672c"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"/*\nSQLyog Ultimate v12.5.0 (64 bit)\nMySQL - 5.7.30 : Database - oauth\n*********************************************************************\n*/\n\n/*!40101 SET NAMES utf8 */;\n\n/*!40101 SET SQL_MODE=''*/;\n\n/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;\n/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;\n/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;\n/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;\nCREATE DATABASE /*!32312 IF NOT EXISTS*/`oauth` /*!40100 DEFAULT CHARACTER SET latin1 */;\n\nUSE `oauth`;\n\n/*Table structure for table `sys_menu` */\n\nDROP TABLE IF EXISTS `sys_menu`;\n\nCREATE TABLE `sys_menu` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `menu_pid` int(11) NOT NULL COMMENT '\u7236\u83dc\u5355ID',\n  `menu_pids` varchar(64) NOT NULL COMMENT '\u5f53\u524d\u83dc\u5355\u6240\u6709\u7236\u83dc\u5355',\n  `is_leaf` tinyint(4) NOT NULL COMMENT '0:\u4e0d\u662f\u53f6\u5b50\u8282\u70b9\uff0c1:\u662f\u53f6\u5b50\u8282\u70b9',\n  `menu_name` varchar(16) NOT NULL COMMENT '\u83dc\u5355\u540d\u79f0',\n  `url` varchar(64) DEFAULT NULL COMMENT '\u8df3\u8f6cURL',\n  `icon` varchar(45) DEFAULT NULL,\n  `icon_color` varchar(16) DEFAULT NULL,\n  `sort` tinyint(4) DEFAULT NULL COMMENT '\u6392\u5e8f',\n  `level` tinyint(4) NOT NULL COMMENT '\u83dc\u5355\u5c42\u7ea7',\n  `status` tinyint(4) NOT NULL COMMENT '0:\u542f\u7528,1:\u7981\u7528',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='\u7cfb\u7edf\u83dc\u5355\u8868';\n\n/*Data for the table `sys_menu` */\n\ninsert  into `sys_menu`(`id`,`menu_pid`,`menu_pids`,`is_leaf`,`menu_name`,`url`,`icon`,`icon_color`,`sort`,`level`,`status`) values \n(1,0,'0',0,'\u7cfb\u7edf\u7ba1\u7406','',NULL,NULL,1,1,0),\n(2,1,'1',1,'\u7528\u6237\u7ba1\u7406','/sysuser',NULL,NULL,1,2,0),\n(3,1,'1',1,'\u65e5\u5fd7\u7ba1\u7406','/syslog','',NULL,2,2,0),\n(4,1,'1',1,'\u4e1a\u52a11','/biz1',NULL,NULL,3,2,0),\n(5,1,'1',1,'\u4e1a\u52a12','/biz2',NULL,NULL,4,2,0);\n\n/*Table structure for table `sys_org` */\n\nDROP TABLE IF EXISTS `sys_org`;\n\nCREATE TABLE `sys_org` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `org_pid` int(11) NOT NULL COMMENT '\u4e0a\u7ea7\u7ec4\u7ec7\u7f16\u7801',\n  `org_pids` varchar(64) NOT NULL COMMENT '\u6240\u6709\u7684\u7236\u8282\u70b9id',\n  `is_leaf` tinyint(4) NOT NULL COMMENT '0:\u4e0d\u662f\u53f6\u5b50\u8282\u70b9\uff0c1:\u662f\u53f6\u5b50\u8282\u70b9',\n  `org_name` varchar(32) NOT NULL COMMENT '\u7ec4\u7ec7\u540d',\n  `address` varchar(64) DEFAULT NULL COMMENT '\u5730\u5740',\n  `phone` varchar(13) DEFAULT NULL COMMENT '\u7535\u8bdd',\n  `email` varchar(32) DEFAULT NULL COMMENT '\u90ae\u4ef6',\n  `sort` tinyint(4) DEFAULT NULL COMMENT '\u6392\u5e8f',\n  `level` tinyint(4) NOT NULL COMMENT '\u7ec4\u7ec7\u5c42\u7ea7',\n  `status` tinyint(4) NOT NULL COMMENT '0:\u542f\u7528,1:\u7981\u7528',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='\u7cfb\u7edf\u7ec4\u7ec7\u7ed3\u6784\u8868';\n\n/*Data for the table `sys_org` */\n\ninsert  into `sys_org`(`id`,`org_pid`,`org_pids`,`is_leaf`,`org_name`,`address`,`phone`,`email`,`sort`,`level`,`status`) values \n(1,0,'0',0,'\u603b\u90e8','\u603b\u90e8\u5730\u5740','13322223333','zongbu@qq.com',1,1,1),\n(2,1,'1',0,'\u7814\u53d1\u90e8','\u7814\u53d1\u90e8\u5730\u5740','12222222222','yanfabu@qq.com',1,2,1),\n(3,2,'1,2',1,'\u7814\u53d1\u4e00\u90e8','\u7814\u53d1\u4e00\u90e8\u5730\u5740','12222222222','yanfayibu@qq.com',1,3,1),\n(4,2,'1,2',1,'\u7814\u53d1\u4e8c\u90e8','\u7814\u53d1\u4e8c\u90e8\u5730\u5740','13344443333','yanfaerbu@qq.com',2,3,1);\n\n/*Table structure for table `sys_role` */\n\nDROP TABLE IF EXISTS `sys_role`;\n\nCREATE TABLE `sys_role` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `role_name` varchar(32) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u540d\u79f0(\u6c49\u5b57)',\n  `role_desc` varchar(128) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u63cf\u8ff0',\n  `role_code` varchar(32) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u7684\u82f1\u6587code.\u5982\uff1aADMIN',\n  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u987a\u5e8f',\n  `status` int(11) DEFAULT NULL COMMENT '0\u8868\u793a\u53ef\u7528',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u89d2\u8272\u7684\u521b\u5efa\u65e5\u671f',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='\u7cfb\u7edf\u89d2\u8272\u8868';\n\n/*Data for the table `sys_role` */\n\ninsert  into `sys_role`(`id`,`role_name`,`role_desc`,`role_code`,`sort`,`status`,`create_time`) values \n(1,'\u7ba1\u7406\u5458','\u7ba1\u7406\u5458','admin',1,0,'2020-07-23 14:33:40'),\n(2,'\u666e\u901a\u7528\u6237','\u666e\u901a\u7528\u6237','common',2,0,'2020-07-23 14:34:11');\n\n/*Table structure for table `sys_role_menu` */\n\nDROP TABLE IF EXISTS `sys_role_menu`;\n\nCREATE TABLE `sys_role_menu` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272id',\n  `menu_id` int(11) NOT NULL DEFAULT '0' COMMENT '\u6743\u9650id',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='\u89d2\u8272\u6743\u9650\u5173\u7cfb\u8868';\n\n/*Data for the table `sys_role_menu` */\n\ninsert  into `sys_role_menu`(`id`,`role_id`,`menu_id`) values \n(1,1,2),\n(2,1,3),\n(3,2,4),\n(4,2,5);\n\n/*Table structure for table `sys_user` */\n\nDROP TABLE IF EXISTS `sys_user`;\n\nCREATE TABLE `sys_user` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `username` varchar(64) NOT NULL DEFAULT '0' COMMENT '\u7528\u6237\u540d',\n  `password` varchar(64) NOT NULL DEFAULT '0' COMMENT '\u5bc6\u7801',\n  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `org_id` int(11) NOT NULL COMMENT '\u7ec4\u7ec7id',\n  `enabled` int(11) DEFAULT NULL COMMENT '0\u65e0\u6548\u7528\u6237\uff0c1\u662f\u6709\u6548\u7528\u6237',\n  `phone` varchar(16) DEFAULT NULL COMMENT '\u624b\u673a\u53f7',\n  `email` varchar(32) DEFAULT NULL COMMENT 'email',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='\u7528\u6237\u4fe1\u606f\u8868';\n\n/*Data for the table `sys_user` */\n\ninsert  into `sys_user`(`id`,`username`,`password`,`create_time`,`org_id`,`enabled`,`phone`,`email`) values \n(1,'admin','123456','2020-07-23 11:16:13',1,1,'13333333333','1@qq.com'),\n(2,'user','123456','2020-07-23 11:16:37',2,1,'12222222222','2@qq.com');\n\n/*Table structure for table `sys_user_role` */\n\nDROP TABLE IF EXISTS `sys_user_role`;\n\nCREATE TABLE `sys_user_role` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '\u89d2\u8272\u81ea\u589eid',\n  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '\u7528\u6237\u81ea\u589eid',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='\u7528\u6237\u89d2\u8272\u5173\u7cfb\u8868';\n\n/*Data for the table `sys_user_role` */\n\ninsert  into `sys_user_role`(`id`,`role_id`,`user_id`) values \n(1,1,1),\n(2,2,2);\n\n/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;\n/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;\n/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;\n/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;\n")))}L.isMDXComponent=!0},572:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return o}));var r=t(0),N=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,N=function(e,n){if(null==e)return{};var t,r,N={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(N[t]=e[t]);return N}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(N[t]=e[t])}return N}var O=N.a.createContext({}),L=function(e){var n=N.a.useContext(O),t=n;return e&&(t="function"==typeof e?e(n):E(E({},n),e)),t},l=function(e){var n=L(e.components);return N.a.createElement(O.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return N.a.createElement(N.a.Fragment,{},n)}},c=N.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,T=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),l=L(t),c=r,o=l["".concat(T,".").concat(c)]||l[c]||s[c]||a;return t?N.a.createElement(o,E(E({ref:n},O),{},{components:t})):N.a.createElement(o,E({ref:n},O))}));function o(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,T=new Array(a);T[0]=c;var E={};for(var i in n)hasOwnProperty.call(n,i)&&(E[i]=n[i]);E.originalType=e,E.mdxType="string"==typeof e?e:r,T[1]=E;for(var O=2;O<a;O++)T[O]=t[O];return N.a.createElement.apply(null,T)}return N.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);