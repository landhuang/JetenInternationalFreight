package com.land.jeten.customer.mapper;

import com.land.jeten.mybatis.model.CustomerModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
public interface CustomerMapper {

    List<CustomerModel> getAll();

    CustomerModel getOne(String customerID);

    void insert(CustomerModel customerModel);

    void update(CustomerModel customerModel);

    void delete(String customerID);

}