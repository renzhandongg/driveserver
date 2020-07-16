package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.mapper.DeptMapper;
import com.zhogntai.driveserver.mapper.SeriesMapper;
import org.jasig.cas.client.authentication.AttributePrincipal;
import org.jasig.cas.client.util.AbstractCasFilter;
import org.jasig.cas.client.validation.Assertion;
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
public class DeptSeriesController {
    @Autowired
    DeptMapper deptMapper;
    @Autowired
    SeriesMapper seriesMapper;

    @CrossOrigin()
    @RequestMapping(value = "/getSeries", method = RequestMethod.GET)

    public Map getSeries(HttpServletResponse response, HttpServletRequest request) {
        Assertion assertion = (Assertion) request.getSession().getAttribute(AbstractCasFilter.CONST_CAS_ASSERTION);
        Map res = new HashMap();
        if(assertion!=null) {
            AttributePrincipal principal = assertion.getPrincipal();
            //设置响应头
            response.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:4000");
            response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
            response.setHeader("Access-Control-Allow-Credentials","true");

            //获取用户名
            String userName = principal.getName();
            if(!("").equals(userName))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                List series = new ArrayList();
                List<String> names = seriesMapper.getName();
                for (String name : names) {
                    Map map = new HashMap();
                    map.put("name", name);
                    List data = seriesMapper.getDate(name);
                    map.put("data", data);
                    series.add(map);
                }
                List xAxis = new ArrayList();
                String type = "category";
                List data = deptMapper.getNames(type);
                Map map = new HashMap();
                map.put("type", type);
                map.put("data", data);
                xAxis.add(map);

                res.put("xAxis", xAxis);
                res.put("series", series);
                res.put("username", userName);
            }
        }
        return res;
    }
}
