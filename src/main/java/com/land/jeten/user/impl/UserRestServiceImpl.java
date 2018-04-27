package com.land.jeten.user.impl;


import com.github.pagehelper.PageHelper;
import com.land.jeten.StringUtils;
import com.land.jeten.mybatis.model.UserModel;
import com.land.jeten.user.iface.IUserRestService;
import com.land.jeten.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.util.*;


@RestController
public class UserRestServiceImpl implements IUserRestService {

    private static String strTableName = "userinfo";

    @Autowired
    private UserMapper mapper;

    @Override
    public Map<String, Object> getSelectOptions() {
        Map<String, Object> map = new Hashtable<>();
        List<UserModel> list = mapper.getSelectOptionsAll();
        map.put("message", "成功");
        map.put("returnObject", list);
        return map;
    }
    @Override
    public Map<String, Object> select(@RequestBody Map<String,Object> mapPara) {
        List<UserModel> list = mapper.getAll(mapPara);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", list);
        return map;
    }
    @Override
    public Map<String, Object> insert(@RequestBody UserModel model) {
        model.setUserID(strTableName+UUID.randomUUID().toString());
        model.setInsertTimestamp(StringUtils.getCurrentTimeMillis());
        mapper.insert(model);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", model);
        return map;
    }
    @Override
    public Map<String, Object> update(@RequestBody UserModel model) {
        model.setUpdateTimestamp(StringUtils.getCurrentTimeMillis());
        mapper.update(model);
        Map<String, Object> map = new Hashtable<>();
        map.put("message", "成功");
        map.put("returnObject", model);
        return map;
    }
    @Override
    public UserModel getDetail(@PathVariable String id) {
        System.out.println("ID:" + id + "]");
        return mapper.getOne(id);
    }
}