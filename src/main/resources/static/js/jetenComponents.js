
const appSidebarDivID = new Vue({
  el: '#sidebarDivID',
  data: {
  },
  mounted() {
    this.navItemShow("userInfoComponents");
  },
  methods: {
    navItemShow: function (component){




      this.hideAllComponents();
      $("#"+component).show();
    },
    hideAllComponents: function(){
      $("#adminInfoComponents").hide();
      $("#userInfoComponents").hide();
      $("#customerInfoComponents").hide();
      $("#expressInfoComponents").hide();
    }
  }
});

const appUserInfoComponents = new Vue({
    el: "#userInfoComponents",
    data: {
      userObjectData: {
        useriD: "",
        fullName: "",
        nameCN: "",
        nameEN: "",
        weixinID: "",
        telphone: "",
        birthday: "",
        gender: "",
        description: "",
        insertTimestamp: "",
        insertUserID: "",
        updateTimestamp: "",
        updateUserID: ""
      },
      selectPara: {
        pageNo: "1",
        pageSize: "9"
      },
      pageNoList: ["1","2","3","4"],
      userListData: [],
      operatorType: "new"
    },
    filters: {
      filtersGender: function(value){

        if(value === "M"){
          value = "男";
        }else if(value === "F"){
          value = "女";
        }else{
          value = value;
        }
        return value;
      }
    },
    mounted() {
      this.getObjectList(this.selectPara.pageNo);
    },
    methods: {
      pagePreviousOnClick: function () {
        if(parseInt(appUserInfoComponents.pageNoList[0],10) != 1){//不可以再减1了
          this.pageNoList.filter(function(number,index){
              Vue.set(appUserInfoComponents.pageNoList,index,parseInt(number,10)-1);
          });
        }
      },
      pageNextOnClick: function () {
        this.pageNoList.filter(function(number,index){
          Vue.set(appUserInfoComponents.pageNoList,index,parseInt(number,10)+1);
        });
      },
      pageGoOnClick: function (PageNo,index) {
        if(index == 0 || index == 1){
          if(parseInt(appUserInfoComponents.pageNoList[0],10) != 1){//不可以再减1了
            appUserInfoComponents.pagePreviousOnClick();
          }
        }
        if(index == 2 || index == 3){
          appUserInfoComponents.pageNextOnClick();
        }
        this.getObjectList(PageNo);
      },
      getObjectList: function (PageNo) {
        this.selectPara.pageNo = PageNo;
        // this.selectPara.customerName = "test1";
        axios.post("/user/select",this.selectPara)
        .then(function (response) {
          if (response.status != 200) {
            return;
          } else {
            appUserInfoComponents.userListData = response.data.returnObject;
          }
        });
      },
      newObject: function () {
        $("#userObjectDiv").modal("show");
        appUserInfoComponents.userObjectData.useriD = "";
        appUserInfoComponents.userObjectData.fullName = "";
        appUserInfoComponents.userObjectData.nameCN = "";
        appUserInfoComponents.userObjectData.nameEN = "";
        appUserInfoComponents.userObjectData.weixinID = "";
        appUserInfoComponents.userObjectData.telphone = "";
        appUserInfoComponents.userObjectData.birthday = "";
        appUserInfoComponents.userObjectData.gender = "";
        appUserInfoComponents.userObjectData.description = "";
        appUserInfoComponents.userObjectData.insertTimestamp = "";
        appUserInfoComponents.userObjectData.insertUserID = "";
        appUserInfoComponents.userObjectData.updateTimestamp = "";
        appUserInfoComponents.userObjectData.updateUserID = "";
        $("#userObjectFormDateBirthday").val = "";
        newOrEdit = "new";
      },
      addOrUpdateObject: function () {
        this.userObjectData.birthday = $("#userObjectFormDateBirthday").val();
        if(newOrEdit == "new"){
          axios.post("/user/insert", this.userObjectData)
          .then(function (response) {
            if (response.status != 200) {
              return;
            } else {
              $("#userObjectDiv").modal("hide");
              appUserInfoComponents.getObjectList(appUserInfoComponents.selectPara.pageNo);
            }
          });
        }
        if(newOrEdit == "edit"){
          axios.post("/user/update", this.userObjectData)
          .then(function (response) {
            if (response.status != 200) {
              return;
            } else {
              $('#userObjectDiv').modal('hide');
              appUserInfoComponents.getObjectList(appUserInfoComponents.selectPara.pageNo);
            }
          });
        }
      },
      getObjectDetail: function (userID) {
        axios.get("/user/" + userID)
        .then(function (response) {
          if (response.status != 200) {
            return;
          } else {
            appUserInfoComponents.userObjectData = response.data;
            $("#userObjectDiv").modal("show");
          }
        });
        newOrEdit = "edit";
      }
    }
});



const appAdminInfoComponents = new Vue({
    el: "#adminInfoComponents",
    data: {
      adminObjectData: {
        adminID: "",
        adminName: "",
        loginAlias: "",
        adminPassword: "",
        loginState: "",
        gender: "",
        description: "",
        insertTimestamp: "",
        insertUserID: "",
        updateTimestamp: "",
        updateUserID: ""
      },
      selectPara: {
        pageNo: "1",
        pageSize: "9"
      },
      pageNoList: ["1","2","3","4"],
      listData: [],
      operatorType: "new"
    },
    filters: {
      filtersLoginState: function(value){

        if(value === "normal"){
          value = "正常";
        }else{
          value = value;
        }
        return value;
      }
    },
    mounted() {
      this.getObjectList(this.selectPara.pageNo);
    },
    methods: {
      pagePreviousOnClick: function () {
        if(parseInt(appAdminInfoComponents.pageNoList[0],10) != 1){//不可以再减1了
          this.pageNoList.filter(function(number,index){
              Vue.set(appAdminInfoComponents.pageNoList,index,parseInt(number,10)-1);
          });
        }
      },
      pageNextOnClick: function () {
        this.pageNoList.filter(function(number,index){
          Vue.set(appAdminInfoComponents.pageNoList,index,parseInt(number,10)+1);
        });
      },
      pageGoOnClick: function (PageNo,index) {
        if(index == 0 || index == 1){
          if(parseInt(appAdminInfoComponents.pageNoList[0],10) != 1){//不可以再减1了
            appAdminInfoComponents.pagePreviousOnClick();
          }
        }
        if(index == 2 || index == 3){
          appAdminInfoComponents.pageNextOnClick();
        }
        this.getObjectList(PageNo);
      },
      getObjectList: function (PageNo) {
        this.selectPara.pageNo = PageNo;
        // this.selectPara.customerName = "test1";
        axios.post("/admin/select",this.selectPara)
        .then(function (response) {
          if (response.status != 200) {
            return;
          } else {
            appAdminInfoComponents.listData = response.data.returnObject;
          }
        });
      },
      newObject: function () {
        $("#adminObjectDiv").modal("show");
        appAdminInfoComponents.adminObjectData.adminID = "";
        appAdminInfoComponents.adminObjectData.adminName = "";
        appAdminInfoComponents.adminObjectData.loginAlias = "";
        appAdminInfoComponents.adminObjectData.adminPassword = "";
        appAdminInfoComponents.adminObjectData.loginState = "";
        appAdminInfoComponents.adminObjectData.description = "";
        appAdminInfoComponents.adminObjectData.insertTimestamp = "";
        appAdminInfoComponents.adminObjectData.insertUserID = "";
        appAdminInfoComponents.adminObjectData.updateTimestamp = "";
        appAdminInfoComponents.adminObjectData.updateUserID = "";
        newOrEdit = "new";
      },
      addOrUpdateObject: function () {
        if(newOrEdit == "new"){
          axios.post("/admin/insert", this.adminObjectData)
          .then(function (response) {
            if (response.status != 200) {
              return;
            } else {
              $("#adminObjectDiv").modal("hide");
              appAdminInfoComponents.getObjectList(appAdminInfoComponents.selectPara.pageNo);
            }
          });
        }
        if(newOrEdit == "edit"){
          axios.post("/admin/update", this.adminObjectData)
          .then(function (response) {
            if (response.status != 200) {
              return;
            } else {
              $('#adminObjectDiv').modal('hide');
              appAdminInfoComponents.getObjectList(appAdminInfoComponents.selectPara.pageNo);
            }
          });
        }
      },
      getObjectDetail: function (adminID) {
        axios.get("/admin/" + adminID)
        .then(function (response) {
          if (response.status != 200) {
            return;
          } else {
            appAdminInfoComponents.adminObjectData = response.data;
            $("#adminObjectDiv").modal("show");
          }
        });
        newOrEdit = "edit";
      }
    }
});


const appCustomerInfoComponents = new Vue({
    el: "#customerInfoComponents",
    data: {
      customerObjectData: {
        customerID: "",
        customerName: "",
        weixinID: "",
        telphone: "",
        country: "",
        address: "",
        description: "",
        insertTimestamp: "",
        insertUserID: "",
        updateTimestamp: "",
        updateUserID: ""
      },
      selectPara: {
        pageNo: "1",
        pageSize: "9"
      },
      pageNoList: ["1","2","3","4"],
      listData: [],
      operatorType: "new"
    },
    filters: {
      filtersCountry: function(value){

        if(value === "MYS"){
          value = "马来西亚";
        }else if(value === "SGP"){
          value = "新加坡";
        }else if(value === "USA"){
          value = "美国";
        }else{
          value = value;
        }
        return value;
      }
    },
    mounted() {
      this.getObjectList(this.selectPara.pageNo);
    },
    methods: {
      pagePreviousOnClick: function () {
        if(parseInt(appCustomerInfoComponents.pageNoList[0],10) != 1){//不可以再减1了
          this.pageNoList.filter(function(number,index){
              Vue.set(appCustomerInfoComponents.pageNoList,index,parseInt(number,10)-1);
          });
        }
      },
      pageNextOnClick: function () {
        this.pageNoList.filter(function(number,index){
          Vue.set(appCustomerInfoComponents.pageNoList,index,parseInt(number,10)+1);
        });
      },
      pageGoOnClick: function (PageNo,index) {
        if(index == 0 || index == 1){
          if(parseInt(appCustomerInfoComponents.pageNoList[0],10) != 1){//不可以再减1了
            appCustomerInfoComponents.pagePreviousOnClick();
          }
        }
        if(index == 2 || index == 3){
          appCustomerInfoComponents.pageNextOnClick();
        }
        this.getObjectList(PageNo);
      },
      getObjectList: function (PageNo) {
        this.selectPara.pageNo = PageNo;
        // this.selectPara.customerName = "test1";
        axios.post("/customer/select",this.selectPara)
        .then(function (response) {
          if (response.status != 200) {
            return;
          } else {
            appCustomerInfoComponents.listData = response.data.returnObject;
          }
        });
      },
      newObject: function () {
        $("#customerObjectDiv").modal("show");
        appCustomerInfoComponents.customerObjectData.customerID = "";
        appCustomerInfoComponents.customerObjectData.customerName = "";
        appCustomerInfoComponents.customerObjectData.weixinID = "";
        appCustomerInfoComponents.customerObjectData.telphone = "";
        appCustomerInfoComponents.customerObjectData.country = "";
        appCustomerInfoComponents.customerObjectData.address = "";
        appCustomerInfoComponents.customerObjectData.description = "";
        appCustomerInfoComponents.customerObjectData.insertTimestamp = "";
        appCustomerInfoComponents.customerObjectData.insertUserID = "";
        appCustomerInfoComponents.customerObjectData.updateTimestamp = "";
        appCustomerInfoComponents.customerObjectData.updateUserID = "";
        newOrEdit = "new";
      },
      addOrUpdateObject: function () {
        if(newOrEdit == "new"){
          axios.post("/customer/insert", this.customerObjectData)
          .then(function (response) {
            if (response.status != 200) {
              return;
            } else {
              $("#customerObjectDiv").modal("hide");
              appCustomerInfoComponents.getObjectList(appCustomerInfoComponents.selectPara.pageNo);
            }
          });
        }
        if(newOrEdit == "edit"){
          axios.post("/customer/update", this.customerObjectData)
          .then(function (response) {
            if (response.status != 200) {
              return;
            } else {
              $('#customerObjectDiv').modal('hide');
              appCustomerInfoComponents.getObjectList(appCustomerInfoComponents.selectPara.pageNo);
            }
          });
        }
      },
      getObjectDetail: function (customerID) {
        axios.get("/customer/" + customerID)
        .then(function (response) {
          if (response.status != 200) {
            return;
          } else {
            appCustomerInfoComponents.customerObjectData = response.data;
            $("#customerObjectDiv").modal("show");
          }
        });
        newOrEdit = "edit";
      }
    }
});
