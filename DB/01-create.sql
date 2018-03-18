

use jetdb;


drop TABLE customerinfo;
CREATE TABLE customerinfo
(
   id        CHAR(36),
   name      CHAR(36),
   weixinid  CHAR(36),
   telphone  CHAR(36),
   address    CHAR(64),
   description   CHAR(64)
);