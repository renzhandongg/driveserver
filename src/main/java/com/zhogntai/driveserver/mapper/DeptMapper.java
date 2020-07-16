package com.zhogntai.driveserver.mapper;

import com.zhogntai.driveserver.dao.Dept;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface DeptMapper {
    @Select("select id,name from dept")
    Dept getDeptAll();

    @Select("select d.name from dept d inner join series s on d.id = s.deptid where s.type = #{type}")
    List<String> getNames(String type);


}
