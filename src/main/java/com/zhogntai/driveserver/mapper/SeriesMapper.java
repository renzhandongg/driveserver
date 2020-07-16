package com.zhogntai.driveserver.mapper;

import com.zhogntai.driveserver.dao.Series;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SeriesMapper {
    @Select("select id,deptid,name from series")
    Series getSeriesAll();
    @Select("select deptid from series where name = #{name}")
    List<Integer> getDate(String name);
    @Select("select name from series where name is not null and name !='' group by name")
    List<String> getName();
    @Select("select type from series where type is not null and type !='' group by type")
    List<String> getType();

}
