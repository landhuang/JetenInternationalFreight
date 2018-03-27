

const appCustomerInfo = new Vue({
        el: '#customerInfo',
        data: {
            products: [],
            customerObjData: {
              id: '',
              name: '',
              weixinid: '',
              telphone: '',
              address: '',
              description: ''
            },
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
            customerList: function () {
                axios.get('/customer/')
                .then(function (response) {
                    if (response.status != 200) {
                        console.log("400:" + response.message + "]");
                        return;
                    } else {
                        console.log("500:" + response.data + "]");
                        appCustomerInfo.customerListData = response.data;
                        console.log("[" + response.data + "]")
                    }
                });
            },
            customerNew: function () {
              $('#customerObjDiv').modal('show');
              appCustomerInfo.customerObjData.id = "";
              appCustomerInfo.customerObjData.name = "";
              appCustomerInfo.customerObjData.weixinid = "";
              appCustomerInfo.customerObjData.telphone = "";
              appCustomerInfo.customerObjData.address = "";
              appCustomerInfo.customerObjData.description = "";
              newOrEdit = "new";
            },
            customerAdd: function () {
                console.log("customerAdd....");
                var params = new URLSearchParams();
                // params.append('id', appCustomerInfo.customerObjData.id);
                params.append('name', appCustomerInfo.customerObjData.name);
                params.append('weixinid', appCustomerInfo.customerObjData.weixinid);
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
                  axios.put('/customer/'+appCustomerInfo.customerObjData.id, params)
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
            customerDetail: function (customerid) {
                console.log("customerid[" + customerid + "]");
                axios.get("/customer/" + customerid)
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
            customerEdit: function (customerid) {
                console.log("customerAdd....");
                var params = new URLSearchParams();
                // params.append('id', appCustomerInfo.customerObjData.id);
                params.append('name', appCustomerInfo.customerObjData.name);
                params.append('weixinid', appCustomerInfo.customerObjData.weixinid);
                params.append('telphone', appCustomerInfo.customerObjData.telphone);
                params.append('address', appCustomerInfo.customerObjData.address);
                params.append('description', appCustomerInfo.customerObjData.description);

                axios.put('/customer/'+customerid, params)
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
