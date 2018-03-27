package com.land.jeten.customer.impl;


import com.land.jeten.customer.iface.ICustomerRestService;
import com.land.jeten.customer.repository.CustomerRepository;
import com.land.jeten.example.domain.User;
import com.land.jeten.login.iface.ILoginRestService;
import com.land.jeten.login.repository.LoginUserRepository;
import com.land.jeten.vo.Customer;
import com.land.jeten.vo.LoginUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import java.util.*;

@RestController
public class CustomerRestServiceImpl implements ICustomerRestService {

    static Map<String, Customer> users = Collections.synchronizedMap(new HashMap<String, Customer>());

    @Autowired
    private ICustomerRestService customerService;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getCustomerList() {


        Pageable page = new PageRequest(0,10);

        Page<Customer> pageCustomer = customerRepository.findAll(page);

        System.out.println("查询总页数:"+pageCustomer.getTotalPages());
        System.out.println("查询总记录数:"+pageCustomer.getTotalElements());
        System.out.println("查询当前第几页:"+pageCustomer.getNumber()+1);
        System.out.println("查询当前页面的集合:"+pageCustomer.getContent());
        System.out.println("查询当前页面的记录数:"+pageCustomer.getNumberOfElements());
        System.out.println("查询当前页面的记录数:"+pageCustomer.getContent());

        List<Customer> list = pageCustomer.getContent();
        return list;
    }

    @Override
    public Map<String, Object> postCustomer(Customer customer) {
        customerRepository.save(customer);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        return map;
    }

    @Override
    public Customer getCustomer(@PathVariable int id) {
        System.out.println("id:" + id + "]");
        Customer customer = customerRepository.findOne(id);
        return customer;
    }

    @Override
    public Map<String, Object> putCustomer(@PathVariable int id, Customer customer) {
        customer.setId(id);
        customerRepository.save(customer);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        return map;
    }

    @Override
    public Map<String, Object> deleteCustomer(@PathVariable int id) {
        customerRepository.delete(id);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        return map;
    }

}