package com.land.jeten.customer.iface;

import com.land.jeten.mybatis.model.CustomerModel;
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
  List<CustomerModel> getCustomerList(Map<String, Object> map);

  @RequestMapping(value = "/", method = RequestMethod.POST)
  Map<String,Object> postCustomer(@ModelAttribute CustomerModel customer);

  @RequestMapping(value = "/{customerID}", method = RequestMethod.GET)
  CustomerModel getCustomer(@PathVariable String customerID);

  @RequestMapping(value="/{customerID}", method=RequestMethod.PUT)
  Map<String,Object> putCustomer(@PathVariable String customerID, @ModelAttribute CustomerModel customer);

  @RequestMapping(value="/{customerID}", method=RequestMethod.DELETE)
  Map<String,Object> deleteCustomer(@PathVariable String customerID);
}