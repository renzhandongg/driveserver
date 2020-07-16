package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.mapper.DepartmentalExpenditureMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class DepartmentalExpenditure {
    @Autowired
    DepartmentalExpenditureMapper depExpMapper;

    @RequestMapping(value = "/depExp", method = RequestMethod.GET)
    @CrossOrigin()

    public Map<String , Object> getDEAll(){
        List<Map> series = depExpMapper.getSeries();
        List<String> xAxis = depExpMapper.getXAxis();
        Map<String,Object> map = new HashMap<String,Object>();
        Map<String,String> mapName = new HashMap<String,String>();
        mapName.put("percentage","支出百分比");
        mapName.put("expenditure","支出金额");
        mapName.put("budget","预算金额");


        for (String name : mapName.keySet()) {
            List<Integer> list = new ArrayList<>();
            for (int i = 0; i < series.size(); i++) {
                Map<String, Integer> map1 = series.get(i);

                for (String key : map1.keySet()) {
                    if (name.equals(key)) {
                        list.add(map1.get(key));
                    }
                }
            }
            map.put(name, list);
        }
        map.put("xAxis",xAxis);
        map.put("mapName",mapName);
        return map;
    }
}
