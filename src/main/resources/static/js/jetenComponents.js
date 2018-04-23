
const appSidebarDivID = new Vue({
  el: '#sidebarDivID',
  data: {
  },
  mounted() {
      $('#expressInfo').hide();
      $('#customerInfo').hide();
  },
  methods: {
    navItemShow: function (){
      $("#expressInfo").toggle();
      $("#customerInfo").toggle();
      $("#userInfoComponents").toggle();
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
