package com.zhogntai.driveserver.mapper;

import com.zhogntai.driveserver.dao.DepartmentalExpenditure;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface DepartmentalExpenditureMapper {
    @Select("select * from departmentalExpenditure")
    List<DepartmentalExpenditure> getDEAll();

    @Select("select percentage,expenditure,budget from departmentalExpenditure")
    List<Map> getSeries();

    @Select("select xAxis from departmentalExpenditure")
    List<String> getXAxis();
}
