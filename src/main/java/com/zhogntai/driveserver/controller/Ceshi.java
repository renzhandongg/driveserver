package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.common.entity.JsonResult;
import com.zhogntai.driveserver.common.utils.ResultTool;
import com.zhogntai.driveserver.dao.Series;
import io.swagger.annotations.*;
import org.jasig.cas.client.authentication.AttributePrincipal;
import org.jasig.cas.client.util.AbstractCasFilter;
import org.jasig.cas.client.validation.Assertion;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@Api(tags = "测试端口")
public class Ceshi {
    @RequestMapping(value = "/mobileUrl/hello", method = RequestMethod.GET, produces = "application/json")
    public JsonResult getUsername(HttpServletResponse response, HttpServletRequest request) {
        return ResultTool.success();
    }

    @RequestMapping(value = "/api/hello", method = RequestMethod.POST, produces = "application/json")
    public Series getC(HttpServletResponse response, HttpServletRequest request,Series ser) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", 1);
        map.put("ceshi", "测试");
//        return ResultTool.success(map);
        return ser;
    }


    @ApiOperation(value = "获取用户详细信息", notes = "根据url的id来获取用户详细信息")
    @RequestMapping(value = "/api/getSeriesID/{id}", method = RequestMethod.GET, produces = "application/json")
    @ApiImplicitParam(name = "user", value = "用户详细实体user", required = true, dataType = "User")
    public Series getSeries(@PathVariable(value = "id") String id){
        return new Series(1,2,id);
    }
}
