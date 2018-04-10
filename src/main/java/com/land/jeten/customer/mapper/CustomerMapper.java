package com.land.jeten.customer.mapper;

import com.land.jeten.mybatis.model.CustomerModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
public interface CustomerMapper {

    List<CustomerModel> getAll(Map<String,Object> mapPara);

    CustomerModel getOne(String customerID);

    void insert(CustomerModel customerModel);

    void update(CustomerModel customerModel);

    void delete(String customerID);

}