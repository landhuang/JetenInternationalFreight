package com.land.jeten.admin.mapper;

import com.land.jeten.mybatis.model.AdminModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AdminMapper {

    List<AdminModel> getSelectOptionsAll();

    List<AdminModel> getAll(Map<String, Object> mapPara);

    AdminModel getOne(String id);

    void insert(AdminModel model);

    void update(AdminModel model);

    void delete(String id);

}