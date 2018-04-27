package com.land.jeten.mybatis;


import com.github.pagehelper.PageHelper;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@Aspect
public class MybatisPageHelperAspect {

  @Pointcut("execution(public * com.land.jeten.admin.impl.*.select*(..))")
  public void pageHelper(){}

  //环绕通知,环绕增强，相当于MethodInterceptor
  @Around("pageHelper()")
  public Object arround(ProceedingJoinPoint pjp) {
    System.out.println("方法环绕 pageHelper start.....");
    try {
      Object object  = pjp.getArgs()[0];
      Map<String,Object> mapPara = (Map<String,Object>)object;
      Object objPageSize  = mapPara.get("pageSize");
      Object objPageNo  = mapPara.get("pageNo");
      int pageNo= 1;
      if(objPageNo != null){
        pageNo =  Integer.parseInt(objPageNo.toString());
      }
      int pageSize= 1;
      if(objPageSize != null){
        pageSize =  Integer.parseInt(objPageSize.toString());
      }
      if (pageNo > 0) {
        PageHelper.startPage(pageNo,pageSize); // 设置分页，参数1=页数，参数2=每页显示条数
      }
      Object o =  pjp.proceed();
      System.out.println("方法环绕 pageHelper proceed，结果是 :" + o);
      return o;
    } catch (Throwable e) {
      e.printStackTrace();
      return null;
    }
  }
}
