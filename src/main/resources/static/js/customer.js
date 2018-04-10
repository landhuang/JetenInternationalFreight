

const appCustomerInfo = new Vue({
        el: '#customerInfo',
        data: {
            customerObjData: {
              customerID: '',
              customerName: '',
              weixinid: '',
              telphone: '',
              address: '',
              description: ''
            },
            selectPara: {
              pageNo: '1',
              pageSize: '9'
            },
            pageNoList: ['1','2','3','4'],
            customerListData: [],
            operatorType: "new"
        },
        mounted() {
            this.customerList(this.selectPara.pageNo);
        },
        methods: {
            pagePreviousOnClick: function () {
              if(parseInt(appCustomerInfo.pageNoList[0],10) != 1){//不可以再减1了
                this.pageNoList.filter(function(number,index){
                    Vue.set(appCustomerInfo.pageNoList,index,parseInt(number,10)-1);                  
                });
              }
            },
            pageNextOnClick: function () {
              this.pageNoList.filter(function(number,index){
                Vue.set(appCustomerInfo.pageNoList,index,parseInt(number,10)+1);
              });
            },
            pageGoOnClick: function (PageNo,index) {
              if(index == 0 || index == 1){
                if(parseInt(appCustomerInfo.pageNoList[0],10) != 1){//不可以再减1了
                  appCustomerInfo.pagePreviousOnClick();
                }
              }
              if(index == 2 || index == 3){
                appCustomerInfo.pageNextOnClick();
              }
              
              this.customerList(PageNo);
            },
            customerList: function (PageNo) {
                this.selectPara.pageNo = PageNo;
                // this.selectPara.customerName = "test1";
                axios.post('/customer/select',this.selectPara)
                .then(function (response) {
                    if (response.status != 200) {
                        return;
                    } else {
                        appCustomerInfo.customerListData = response.data.returnObject;
                    }
                });
            },
            customerNew: function () {
              $('#customerObjDiv').modal('show');
              appCustomerInfo.customerObjData.customerID = "";
              appCustomerInfo.customerObjData.customerName = "";
              appCustomerInfo.customerObjData.weixinID = "";
              appCustomerInfo.customerObjData.telphone = "";
              appCustomerInfo.customerObjData.address = "";
              appCustomerInfo.customerObjData.description = "";
              newOrEdit = "new";
            },
            customerAdd: function () {
                if(newOrEdit == "new"){
                  axios.post('/customer/insert', this.customerObjData)
                  .then(function (response) {
                      if (response.status != 200) {
                          return;
                      } else {
                          $('#customerObjDiv').modal('hide');
                          appCustomerInfo.customerList(appCustomerInfo.selectPara.pageNo);
                      }
                  });                  
                }
                if(newOrEdit == "edit"){
                  axios.post('/customer/update', this.customerObjData)
                  .then(function (response) {
                      if (response.status != 200) {
                          return;
                      } else {
                          $('#customerObjDiv').modal('hide');
                          appCustomerInfo.customerList(appCustomerInfo.selectPara.pageNo);
                      }
                  });
                }
            },
            customerDetail: function (customerID) {
                axios.get("/customer/" + customerID)
                .then(function (response) {
                    if (response.status != 200) {
                        return;
                    } else {
                        appCustomerInfo.customerObjData = response.data;
                        $('#customerObjDiv').modal('show');
                    }
                });
                newOrEdit = "edit";
            }
        }
    });
