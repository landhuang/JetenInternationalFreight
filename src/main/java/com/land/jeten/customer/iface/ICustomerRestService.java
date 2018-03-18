package com.land.jeten.customer.iface;

import com.land.jeten.vo.Customer;
import com.land.jeten.vo.LoginUser;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RequestMapping(value = "/customer")
public interface ICustomerRestService {
  @RequestMapping(value = "/", method = RequestMethod.GET)
  List<Customer> getCustomerList();

  @RequestMapping(value = "/", method = RequestMethod.POST)
  String postCustomer(@ModelAttribute Customer customer);

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  Customer getCustomer(@PathVariable Long id);

  @RequestMapping(value="/{id}", method=RequestMethod.PUT)
  String putCustomer(@PathVariable Long id, @ModelAttribute Customer customer);

  @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
  String deleteCustomer(@PathVariable Long id);
}