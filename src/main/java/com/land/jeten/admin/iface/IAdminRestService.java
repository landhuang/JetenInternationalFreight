package com.land.jeten.admin.iface;

import com.land.jeten.mybatis.model.AdminModel;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping(value = "/admin")
public interface IAdminRestService {
  @RequestMapping(value = "/getSelectOptions", method = RequestMethod.POST)
  Map<String,Object> getSelectOptions();

  @RequestMapping(value = "/select", method = RequestMethod.POST)
  Map<String,Object> select(@ModelAttribute Map<String, Object> mapPara);

  @RequestMapping(value = "/insert", method = RequestMethod.POST)
  Map<String, Object> insert(@RequestBody AdminModel model);

  @RequestMapping(value = "/update", method = RequestMethod.POST)
  Map<String, Object> update(@RequestBody AdminModel model);

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  AdminModel getDetail(@PathVariable String id);

}