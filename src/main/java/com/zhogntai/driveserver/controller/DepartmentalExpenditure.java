package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.common.entity.JsonResult;
import com.zhogntai.driveserver.common.enums.ResultCode;
import com.zhogntai.driveserver.common.utils.ResultTool;
import com.zhogntai.driveserver.mapper.DepartmentalExpenditureMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Api(tags = "返回depexp表内容")
public class DepartmentalExpenditure {
    @Autowired
    DepartmentalExpenditureMapper depExpMapper;


    @RequestMapping(value = "/api/depExp", method = RequestMethod.GET,produces="application/json")
    @ApiOperation(value = "支出信息", notes = "获取当前用户支出信息")
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

    //通过id获得信息
    @RequestMapping(value = "/mobileUrl/getDataForID", method = RequestMethod.POST,produces="application/json")
    @ApiOperation(value = "根据单个id获得详细信息", notes = "获取当前用户详细信息")
    @ApiImplicitParam(name = "取个名字", value = "id",dataType = "String",required = true, paramType="query")
    public JsonResult getDataForID(HttpServletRequest request){
        Integer id = Integer.parseInt(request.getParameter("id"));
        Map<String,Object> map = depExpMapper.getDataForId(id);
        return ResultTool.success(map);
    }
}
