package com.land.jeten.user.iface;

import com.land.jeten.mybatis.model.UserModel;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping(value = "/user")
public interface IUserRestService {
  @RequestMapping(value = "/getSelectOptions", method = RequestMethod.POST)
  Map<String,Object> getSelectOptions();

  @RequestMapping(value = "/select", method = RequestMethod.POST)
  Map<String,Object> select(@ModelAttribute Map<String, Object> mapPara);

  @RequestMapping(value = "/insert", method = RequestMethod.POST)
  Map<String, Object> insert(@RequestBody UserModel model);

  @RequestMapping(value = "/update", method = RequestMethod.POST)
  Map<String, Object> update(@RequestBody UserModel model);

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  UserModel getDetail(@PathVariable String id);

}