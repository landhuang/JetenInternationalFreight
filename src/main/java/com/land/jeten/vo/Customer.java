package com.land.jeten.vo;


import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name="customerinfo")
@NamedQuery(name = "Customer.findByName", query = "select id,name,weixinid,telphone,address,description from Customer u where u.name=?1")
public class Customer implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

    @Column(name = "name",length=36,nullable=false)
  private String name;

  @Column(name = "weixinid",length=36,nullable=false)
  private String weixinid;

  @Column(name = "telphone",length=36,nullable=false)
  private String telphone;

  @Column(name = "address",length=64,nullable=false)
  private String address;

  @Column(name = "description",length=64,nullable=false)
  private String description;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getWeixinid() {
    return weixinid;
  }

  public void setWeixinid(String weixinid) {
    this.weixinid = weixinid;
  }

  public String getTelphone() {
    return telphone;
  }

  public void setTelphone(String telphone) {
    this.telphone = telphone;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
