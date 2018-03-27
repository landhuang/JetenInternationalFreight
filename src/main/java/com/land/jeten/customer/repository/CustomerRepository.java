package com.land.jeten.customer.repository;

import com.land.jeten.vo.Customer;
import com.land.jeten.vo.LoginUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

//public interface CustomerRepository extends Repository<Customer, Long>
//public interface CustomerRepository extends CrudRepository<Customer, Integer>
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Integer>
{
    List<Customer> findByNameAndId(String name, String id);

    @Query(value = "from Customer u where u.name=:name")
    List<Customer> findByName1(@Param("name") String name);

    @Query(value = "select * from #{#entityName} u where u.name=?1", nativeQuery = true)
    List<Customer> findByName2(String name);

    List<Customer> findByName(String name);


    @Query(value = "from Customer u where u.id=:id")
    Customer findOne(@Param("id") int id);
}
