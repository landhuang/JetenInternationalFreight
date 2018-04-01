package com.land.jeten.customer.impl;

import com.land.jeten.customer.iface.ICustomerRestService;
import com.land.jeten.customer.mapper.CustomerMapper;
import com.land.jeten.mybatis.model.CustomerModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;


@RestController
public class CustomerRestServiceImpl implements ICustomerRestService {

    @Autowired
    private CustomerMapper customerMapper;

    @Override
    public List<CustomerModel> getCustomerList(Map<String, Object> map) {
        List<CustomerModel> customerList = customerMapper.getAll();
        return customerList;
    }

    @Override
    public Map<String, Object> postCustomer(CustomerModel customer) {
        customer.setCustomerID("customerinfo"+UUID.randomUUID().toString());
        customerMapper.insert(customer);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        return map;
    }

    @Override
    public CustomerModel getCustomer(@PathVariable String customerID) {
        System.out.println("customerID:" + customerID + "]");
        CustomerModel customer = customerMapper.getOne(customerID);
        return customer;
    }

    @Override
    public Map<String, Object> putCustomer(@PathVariable String customerID, CustomerModel customer) {
        customerMapper.update(customer);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        return map;
    }

    @Override
    public Map<String, Object> deleteCustomer(@PathVariable String customerID) {
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        return map;
    }
}