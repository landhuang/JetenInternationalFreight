package com.land.jeten.customer.impl;

import com.github.pagehelper.PageHelper;
import com.land.jeten.customer.iface.ICustomerRestService;
import com.land.jeten.customer.mapper.CustomerMapper;
import com.land.jeten.mybatis.model.CustomerModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
public class CustomerRestServiceImpl implements ICustomerRestService {

    private static String strTableName = "customerinfo";

    @Autowired
    private CustomerMapper customerMapper;

    @Override
    public Map<String, Object> selectCustomer(@RequestBody Map<String,Object> mapPara) {
        Object objPageSize  = mapPara.get("pageSize");
        Object objPageNo  = mapPara.get("pageNo");
        int pageNo= 1;
        if(objPageNo != null){
            pageNo =  Integer.parseInt(objPageNo.toString());
        }
        int pageSize= 1;
        if(objPageSize != null){
            pageSize =  Integer.parseInt(objPageSize.toString());
        }
        if (pageNo > 0) {
            PageHelper.startPage(pageNo,pageSize); // 设置分页，参数1=页数，参数2=每页显示条数
        }
        List<CustomerModel> customerList = customerMapper.getAll(mapPara);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", customerList);
        return map;
    }
    @Override
    public Map<String, Object> insertCustomer(@RequestBody CustomerModel customer) {
        customer.setCustomerID(strTableName+UUID.randomUUID().toString());
        customerMapper.insert(customer);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", customer);
        return map;
    }
    @Override
    public Map<String, Object> updateCustomer(@RequestBody CustomerModel customer) {
        customerMapper.update(customer);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", customer);
        return map;
    }
    @Override
    public CustomerModel getCustomer(@PathVariable String customerID) {
        System.out.println("customerID:" + customerID + "]");
        return customerMapper.getOne(customerID);
    }
}