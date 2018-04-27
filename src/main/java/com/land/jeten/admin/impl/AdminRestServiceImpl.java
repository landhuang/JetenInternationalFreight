package com.land.jeten.admin.impl;


import com.github.pagehelper.PageHelper;
import com.land.jeten.StringUtils;
import com.land.jeten.mybatis.model.AdminModel;
import com.land.jeten.admin.iface.IAdminRestService;
import com.land.jeten.admin.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.util.*;


@RestController
public class AdminRestServiceImpl implements IAdminRestService {

    private static String strTableName = "userinfo";

    @Autowired
    private AdminMapper mapper;

    @Override
    public Map<String, Object> getSelectOptions() {
        Map<String, Object> map = new Hashtable<>();
        List<AdminModel> list = mapper.getSelectOptionsAll();
        map.put("message", "成功");
        map.put("returnObject", list);
        return map;
    }
    @Override
    public Map<String, Object> select(@RequestBody Map<String,Object> mapPara) {
        List<AdminModel> list = mapper.getAll(mapPara);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", list);
        return map;
    }
    @Override
    public Map<String, Object> insert(@RequestBody AdminModel model) {
        model.setAdminID(strTableName+UUID.randomUUID().toString());
        model.setInsertTimestamp(StringUtils.getCurrentTimeMillis());
        mapper.insert(model);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", model);
        return map;
    }
    @Override
    public Map<String, Object> update(@RequestBody AdminModel model) {
        model.setUpdateTimestamp(StringUtils.getCurrentTimeMillis());
        mapper.update(model);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", model);
        return map;
    }
    @Override
    public AdminModel getDetail(@PathVariable String id) {
        System.out.println("ID:" + id + "]");
        AdminModel model = mapper.getOne(id);
        return model;
    }
}