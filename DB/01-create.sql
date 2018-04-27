use jetdb;
CREATE TABLE jetdb.login
(
   id        INT             NOT NULL AUTO_INCREMENT,
   loginname                 CHAR(16),
   password                  CHAR(16),
   status                    CHAR(2),
   message                   CHAR(64),
   PRIMARY KEY (id)
);
alter table login modify column id int auto_increment not null, add primary key(id);

drop TABLE IF EXISTS admininfo;
-- 管理员信息
CREATE TABLE admininfo
(
   adminid                CHAR(48)    COMMENT '管理员信息主键ID',            -- adminID
   adminname              CHAR(48)    COMMENT '管理员姓名',                  -- adminName
   loginalias             CHAR(48)    COMMENT '登录别名',                    -- loginAlias
   adminpassword               CHAR(48)    COMMENT '密码',                         -- adminPassword
   loginstate             CHAR(12)    COMMENT '登录状态:normal ',             -- loginState
   description            CHAR(64)    COMMENT '备注',                         -- description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table admininfo add primary key(adminid);

drop TABLE IF EXISTS userinfo;
-- 用户信息
CREATE TABLE userinfo
(
   userid                 CHAR(48)    COMMENT '用户信息主键ID',            -- userID
   fullname               CHAR(48)    COMMENT '全名',                      -- fullName
   namecn                 CHAR(48)    COMMENT '中文名',                    -- nameCN
   nameen                 CHAR(48)    COMMENT '英文名',                    -- nameEN
   weixinid               CHAR(48)    COMMENT '微信号',                    -- weixinID
   telphone               CHAR(36)    COMMENT '电话号码',                  -- telphone
   birthday               CHAR(10)    COMMENT '生日',                      -- birthday
   gender                 CHAR(1)     COMMENT '性别 F 女 M 男',            -- gender
   description            CHAR(64)    COMMENT '备注',                      -- description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table userinfo add primary key(userid);

drop TABLE IF EXISTS companyinfo;
-- 公司信息
CREATE TABLE companyinfo
(
   companyid              CHAR(48)    COMMENT '公司信息主键ID',            -- companyID
   userid                 CHAR(48)    COMMENT '用户信息主键ID',           -- useriD
   companyname            CHAR(64)    COMMENT '全名',                      -- fullName
   companynamecn          CHAR(128)   COMMENT '中文名',                    -- companynamecn
   companynameen          CHAR(128)   COMMENT '英文名',                    -- companynameen
   address                CHAR(255)   COMMENT '地址',                      -- address
   description            CHAR(64)    COMMENT '备注',                      --  description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',           -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',       -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',           -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'        -- updateUserID
);
alter table companyinfo add primary key(companyid);


drop TABLE IF EXISTS customerinfo;
-- 客户信息
CREATE TABLE customerinfo
(
   customerid             CHAR(48)    COMMENT '客户主键ID',                -- customerID
   customername           CHAR(48)    COMMENT '客户名称',                  -- customerName
   weixinid               CHAR(48)    COMMENT '微信号',                    -- weixinID
   telphone               CHAR(36)    COMMENT '电话号码',                  -- telphone
   country                CHAR(128)   COMMENT '所在国家',                  -- country
   address                CHAR(255)   COMMENT '地址',                      -- address
   description            CHAR(64)    COMMENT '备注',                      -- description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',       -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',           -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'        -- updateUserID
);
alter table customerinfo  add primary key(customerid);

drop TABLE IF EXISTS addressinfo;
-- 客户收货地址
CREATE TABLE addressinfo
(
   addressid              CHAR(48)    COMMENT '客户收货地址主键ID',         -- addressID
   customerid             CHAR(48)    COMMENT '客户主键ID',                 -- customerID
   country                CHAR(128)   COMMENT '国家',                       -- country
   address1               CHAR(128)   COMMENT '地址1',                      -- address1
   address2               CHAR(128)   COMMENT '地址2',                      -- address2
   address3               CHAR(128)   COMMENT '地址3',                      -- address3
   address4               CHAR(128)   COMMENT '地址4',                      -- address4
   address5               CHAR(128)   COMMENT '地址5',                      -- address5
   description            CHAR(64)    COMMENT '备注',                      --  description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table addressinfo  add primary key(addressid);

drop TABLE IF EXISTS expressinfo;
-- 快递信息
CREATE TABLE expressinfo
(
   expressid              CHAR(48)    COMMENT '快递主键ID',                  -- expressID
   customerid             CHAR(48)    COMMENT '客户主键ID',                  -- customerID
   expressname            CHAR(36)    COMMENT '快递公司名称',                -- expressName
   expresstype            CHAR(36)    COMMENT '货物类型',                    -- expressType
   expressnumber          CHAR(36)    COMMENT '快递单号',                    -- expressNumber
   goodsitem              CHAR(2)     COMMENT '快递件数',                    -- goodsItem
   goodsamount            CHAR(8)     COMMENT '货物金额',                    -- goodsAmount
   description            CHAR(64)    COMMENT '备注',                        -- description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table expressinfo  add primary key(expressid);

drop TABLE IF EXISTS customeraffiliation;
-- 公司和客户关系，表示客户归属于哪个公司
CREATE TABLE customeraffiliation
(
   customeraffiliationid  CHAR(48)    COMMENT '公司和用户关系主键ID',      -- customerAffiliationID
   companyid              CHAR(48)    COMMENT '公司主键ID',                -- companyID
   customerid             CHAR(48)    COMMENT '客户主键ID',                -- customerID
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table customeraffiliation add primary key(customeraffiliationid);

drop TABLE IF EXISTS useraffiliation;
-- 公司和用户关系，表示用户归属于哪个公司
CREATE TABLE useraffiliation
(
   useraffiliationid      CHAR(48)    COMMENT '公司和用户关系主键ID',      -- useraffiliationID
   companyid              CHAR(48)    COMMENT '公司主键ID',                -- companyID
   userid                 CHAR(48)    COMMENT '用户主键ID',                -- useriD
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table useraffiliation add primary key(useraffiliationid);

drop TABLE IF EXISTS merchandiserinfo;
-- 跟单员
CREATE TABLE merchandiserinfo
(
   merchandiserid         CHAR(48)    COMMENT '跟单员主键ID',               -- merchandiserID
   userid                 CHAR(48)    COMMENT '用户主键ID',                 -- useriD
   groupinfo              CHAR(36)    COMMENT '分组',                       -- groupInfo
   description            CHAR(64)    COMMENT '备注',                       -- description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table merchandiserinfo add primary key(merchandiserid);

drop TABLE IF EXISTS seatransportinfo;
-- 空运单
CREATE TABLE seatransportinfo
(
   seatransportid         CHAR(48)    COMMENT '主键ID',                    -- seaTransportID
   merchandiserid         CHAR(48)    COMMENT '主键ID',                    -- merchandiserID
   customerid             CHAR(48)    COMMENT '客户主键ID',               -- customerID
   issensitivecargo       CHAR(1)    COMMENT '是否敏感货 1 是 0 否',    -- isSensitiveCargo
   weight                 CHAR(12)    COMMENT '重量',                      -- weight
   width                  CHAR(12)    COMMENT '长',                        -- width
   depth                  CHAR(12)     COMMENT '宽',                        -- depth
   height                 CHAR(12)     COMMENT '高',                        -- height
   volume                 CHAR(12)    COMMENT '体积',                      -- volume
   seatransportno         CHAR(12)    COMMENT '海运单号',                  -- seaTransportNo
   destinationcountry     CHAR(128)     COMMENT '目的地国家',                -- destinationCountry
   address                CHAR(255)    COMMENT '地址',                      -- address
   description            CHAR(64)    COMMENT '备注',                       -- description
   inserttimestamp        CHAR(17)    COMMENT '数据插入时间戳',            -- insertTimestamp
   insertuserid           CHAR(48)    COMMENT '插入用户信息主键ID',        -- insertUserID
   updatetimestamp        CHAR(17)    COMMENT '数据更新时间戳',            -- updateTimestamp
   updateuserid           CHAR(48)    COMMENT '更新用户信息主键ID'         -- updateUserID
);
alter table seatransportinfo  add primary key(seatransportid);

