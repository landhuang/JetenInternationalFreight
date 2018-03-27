package com.land.jeten.customer.iface;

import com.land.jeten.vo.Customer;
import com.land.jeten.vo.LoginUser;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Map;

@RequestMapping(value = "/customer")
public interface ICustomerRestService {
  @RequestMapping(value = "/", method = RequestMethod.GET)
  List<Customer> getCustomerList();

  @RequestMapping(value = "/", method = RequestMethod.POST)
  Map<String,Object> postCustomer(@ModelAttribute Customer customer);

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  Customer getCustomer(@PathVariable int id);

  @RequestMapping(value="/{id}", method=RequestMethod.PUT)
  Map<String,Object> putCustomer(@PathVariable int id, @ModelAttribute Customer customer);

  @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
  Map<String,Object> deleteCustomer(@PathVariable int id);
}