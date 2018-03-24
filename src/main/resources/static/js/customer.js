const app = new Vue({
      		el: '#customerDiv',
      		data: {
      			products: [],
      			message: {
      				msg: 'Hello Vue.js!'
      			},
      			name:'',
      			weixinid:'',
      			telphone:'',
      			address:'',
      			description:''
      		},
      		methods: {
      			customerAdd: function () {
                      console.log("customerAdd....");
                      var params = new URLSearchParams();
      //                params.append('id', this.telphone);
                      params.append('name', this.name);
                      params.append('weixinid', this.weixinid);
                      params.append('telphone', this.telphone);
                      params.append('address', this.address);

                      axios.post('/customer/', params)
                      .then(function (response) {
                          if (response.status != 200) {
                              alert("200:"+response.message+"]");
                              return;
                          } else {
                              alert("300:"+response.data.message+"]");
                              $('#customerDiv').modal('hide')
                              customerListApp.customerList();
                          }
                          // 刷新列表
                          // this.getlist();
                      });
                  }
      		}
      	});

//
//const customerListApp = new Vue({
//		el: '#customListDiv',
//		data: {
//			customerListData: [],
//			message: {
//				msg: 'Hello Vue.js!'
//			}
////			name:'',
////			weixinid:'',
////			telphone:'',
////			address:'',
////			description:''
//		},
//		mounted(){
//            console.log("页面加载完成");
//            this.customerList();
//        },
//		methods: {
//		  customerList: function () {
//            console.log("customListDiv....");
//            var params = new URLSearchParams();
////                params.append('id', this.telphone);
//            params.append('name', this.name);
//            params.append('weixinid', this.weixinid);
//            params.append('telphone', this.telphone);
//            params.append('address', this.address);
//
//            axios.get('/customer/')
                 //            .then(function (response) {
                 //                if (response.status != 200) {
                 //                    console.log("400:"+response.message+"]");
                 //                    return;
                 //                } else {
                 //                    console.log("500:"+response.data+"]");
                 //                    this.customerListData = response.data;
                 ////                    $('#customerList').modal('hide')
                 //                    console.log("[" + response.data +"]")
                 //
                 //                }
                 //                // 刷新列表
                 //                // this.getlist();
                 //            });
//        },
//			customerAdd: function () {
//                console.log("customListDiv....");
//                var params = new URLSearchParams();
////                params.append('id', this.telphone);
//                params.append('name', this.name);
//                params.append('weixinid', this.weixinid);
//                params.append('telphone', this.telphone);
//                params.append('address', this.address);
//
//                axios.post('/customer/', params)
//                .then(function (response) {
//                    if (response.status != 200) {
//                        alert("200:"+response.message+"]");
//                        return;
//                    } else {
//                        alert("300:"+response.data.message+"]");
//                        $('#customerDiv').modal('hide')
//
//                    }
//                    // 刷新列表
//                    // this.getlist();
//                });
//            }
//		}
//	});



const customerListApp = new Vue({
		el: '#customerListDiv',
		data: {
			customerListData: [],
			message: {
				msg: 'Hello Vue.js!'
			}
		},
		mounted(){
            console.log("页面加载完成");
            this.customerList();
        },
		methods: {
		  customerList: function () {
            axios.get('/customer/')
             .then(function (response) {
                 if (response.status != 200) {
                     console.log("400:"+response.message+"]");
                     return;
                 } else {
                     console.log("500:"+response.data+"]");
                     customerListApp.customerListData = response.data;
                     console.log("[" + response.data +"]")
                 }
             });
          }
        }
	});