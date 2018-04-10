package com.land.jeten.customer.iface;

import com.land.jeten.mybatis.model.CustomerModel;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping(value = "/customer")
public interface ICustomerRestService {
  @RequestMapping(value = "/select", method = RequestMethod.POST)
  Map<String,Object> selectCustomer(@ModelAttribute Map<String,Object> mapPara);

  @RequestMapping(value = "/insert", method = RequestMethod.POST)
  Map<String, Object> insertCustomer(@RequestBody CustomerModel customer);

  @RequestMapping(value = "/update", method = RequestMethod.POST)
  Map<String, Object> updateCustomer(@RequestBody CustomerModel customer);

  @RequestMapping(value = "/{customerID}", method = RequestMethod.GET)
  CustomerModel getCustomer(@PathVariable String customerID);

}