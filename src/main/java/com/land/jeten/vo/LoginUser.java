package com.land.jeten.vo;


import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name="login")
@NamedQuery(name = "LoginUser.findByName", query = "select name,status from LoginUser u where u.name=?1")
public class LoginUser  implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private String id;

  @Column(name = "name",length=16,nullable=false)
  private String name;

  @Column(name = "password",length=16,nullable=false)
  private String password;

  @Column(name = "status",length=2,nullable=false)
  private String status;

  @Column(name = "message",length=64,nullable=false)
  private String message;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }


  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
