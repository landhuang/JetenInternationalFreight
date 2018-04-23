package com.land.jeten.user.mapper;

import com.land.jeten.mybatis.model.CustomerModel;
import com.land.jeten.mybatis.model.UserModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
public interface UserMapper {

    List<UserModel> getSelectOptionsAll();

    List<UserModel> getAll(Map<String, Object> mapPara);

    UserModel getOne(String id);

    void insert(UserModel model);

    void update(UserModel model);

    void delete(String id);

}