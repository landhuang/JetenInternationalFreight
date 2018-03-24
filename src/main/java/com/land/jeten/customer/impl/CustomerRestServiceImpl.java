package com.land.jeten.customer.impl;


import com.land.jeten.customer.iface.ICustomerRestService;
import com.land.jeten.customer.repository.CustomerRepository;
import com.land.jeten.login.iface.ILoginRestService;
import com.land.jeten.login.repository.LoginUserRepository;
import com.land.jeten.vo.Customer;
import com.land.jeten.vo.LoginUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;

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

//    List<Customer> customers = customerRepository.findByName1("admin");
//    List<Customer> customers = customerRepository.findAll();
    Iterable<Customer> iter = customerRepository.findAll();
    List<Customer> list = new ArrayList();
    iter.forEach(single ->{list.add(single);});
    System.out.println("loginUsers"+list.size());

    return list;
  }

//  @Override
//  public String postCustomer(Customer customer) {
//
//    customerRepository.save(customer);
//
//    List<Customer> customers = customerRepository.findByName1(customer.getName());
//
//    System.out.println("customers:"+customers.size()+"]");
//
//    return customers.get(0).getTelphone();
//  }

  @Override
  public Map<String,Object> postCustomer(Customer customer) {

    customerRepository.save(customer);


    Map<String,Object> map = new Hashtable<>();


    map.put("message","成功");


    return map;
  }

  @Override
  public Customer getCustomer(Long id) {
    return null;
  }

  @Override
  public String putCustomer(Long id, Customer customer) {
    return null;
  }

  @Override
  public String deleteCustomer(Long id) {
    return null;
  }

}