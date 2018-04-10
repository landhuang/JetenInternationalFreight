

const appCustomerInfo = new Vue({
        el: '#customerInfo',
        data: {
            products: [],
            customerObjData: {
              customerID: '',
              customerName: '',
              weixinid: '',
              telphone: '',
              address: '',
              description: ''
            },
            jsonMsg: {
              a: 'apple',
              b: 'orage',
              c: 'pear'
            },
            selectPara: {
              pageNo: '1',
              pageSize: '4'
            },
            pageNoList: ['1','2','3','4'],
            customerListData: [],
            message: {
                msg: 'Hello Vue.js!'
            },
            operatorType: "new"
        },
        mounted() {
            console.log("页面加载完成");
            this.customerList();
        },
        methods: {
            pagePreviousOnClick: function () {
              if(parseInt(appCustomerInfo.pageNoList[0],10) != 1){
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
              this.customerList(PageNo);
            },
            customerList: function (PageNo) {
//                var params = new URLSearchParams();
//                params.append('pageNo', 1);
//                params.append('customerName', "test");
//
//                axios.get('/customer/',params)
//                .then(function (response) {
//                    if (response.status != 200) {
//                        console.log("400:" + response.message + "]");
//                        return;
//                    } else {
//                        console.log("500:" + response.data + "]");
//                        appCustomerInfo.customerListData = response.data;
//                        console.log("[" + response.data + "]")
//                    }
//                });

                var mapPara = new URLSearchParams();
                mapPara.append('pageNo', 1);
                mapPara.append('customerName', "test");
                this.selectPara.pageNo = PageNo;
                // this.selectPara.customerName = "test1";
                axios.post('/customer/select',this.selectPara)
                .then(function (response) {
                    if (response.status != 200) {
                        console.log("400:" + response.message + "]");
                        return;
                    } else {
                        console.log("500:" + response.data + "]");
                        appCustomerInfo.customerListData = response.data.returnObject;
                        console.log("[" + response.data + "]")
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
                console.log("customerAdd....");
                var params = new URLSearchParams();
                // params.append('id', appCustomerInfo.customerObjData.id);
                params.append('customerName', appCustomerInfo.customerObjData.customerName);
                params.append('weixinID', appCustomerInfo.customerObjData.weixinID);
                params.append('telphone', appCustomerInfo.customerObjData.telphone);
                params.append('address', appCustomerInfo.customerObjData.address);
                params.append('description', appCustomerInfo.customerObjData.description);

                if(newOrEdit == "new"){
                  axios.post('/customer/', params)
                  .then(function (response) {
                      if (response.status != 200) {
                          alert("200:" + response.message + "]");
                          return;
                      } else {
                          alert("300:" + response.data.message + "]");
                          $('#customerObjDiv').modal('hide');
                          appCustomerInfo.customerList();
                      }
                  });                  
                }
                if(newOrEdit == "edit"){
                  axios.put('/customer/'+appCustomerInfo.customerObjData.customerID, params)
                  .then(function (response) {
                      if (response.status != 200) {
                          alert("200:" + response.message + "]");
                          return;
                      } else {
                          alert("300:" + response.data.message + "]");
                          $('#customerObjDiv').modal('hide');
                          appCustomerInfo.customerList();
                      }
                  });
                }
                
            },
            customerDetail: function (customerID) {
                console.log("customerID[" + customerID + "]");
                axios.get("/customer/" + customerID)
                .then(function (response) {
                    if (response.status != 200) {
                        console.log("customerData 400:" + response.message + "]");
                        return;
                    } else {
                        console.log("customerData 500:" + response.data + "]");
                        appCustomerInfo.customerObjData = response.data;
                        console.log("customerData[" + response.data + "]");
                        $('#customerObjDiv').modal('show');
                    }
                });
                newOrEdit = "edit";
            },
            customerEdit: function (customerID) {
                console.log("customerAdd....");
                var params = new URLSearchParams();
                // params.append('id', appCustomerInfo.customerObjData.id);
                params.append('customerName', appCustomerInfo.customerObjData.customerName);
                params.append('weixinID', appCustomerInfo.customerObjData.weixinID);
                params.append('telphone', appCustomerInfo.customerObjData.telphone);
                params.append('address', appCustomerInfo.customerObjData.address);
                params.append('description', appCustomerInfo.customerObjData.description);

                axios.put('/customer/'+customerID, params)
                .then(function (response) {
                    if (response.status != 200) {
                        alert("200:" + response.message + "]");
                        return;
                    } else {
                        alert("300:" + response.data.message + "]");
                        $('#customerObjDiv').modal('hide');
                        appCustomerInfo.customerList();
                    }
                });
            }
        }
    });
