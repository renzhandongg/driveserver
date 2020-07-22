package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.common.entity.JsonResult;
import com.zhogntai.driveserver.common.enums.ResultCode;
import com.zhogntai.driveserver.common.utils.ResultTool;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.jasig.cas.client.authentication.AttributePrincipal;
import org.jasig.cas.client.util.AbstractCasFilter;
import org.jasig.cas.client.validation.Assertion;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@Api(tags = "返回用户名称")
public class GetUsername {
    private static final org.slf4j.Logger LOGGER = org.slf4j.LoggerFactory.getLogger(GetUsername.class);

    @CrossOrigin
    @RequestMapping(value = "/api/getUsername", method = RequestMethod.GET,produces="application/json")
    @ApiOperation(value = "获取用户信息", notes = "获取当前登录用户信息")

    public JsonResult getUsername(HttpServletResponse response, HttpServletRequest request){
        Assertion assertion = (Assertion) request.getSession().getAttribute(AbstractCasFilter.CONST_CAS_ASSERTION);
        if(assertion!=null) {
            AttributePrincipal principal = assertion.getPrincipal();
            //获取用户名
            String userName = principal.getName();
            if(!("").equals(userName)){
                return ResultTool.success(userName);
            }
            LOGGER.error("Username not obtained");
        }
        LOGGER.error("CAS Not logged in");
        return ResultTool.fail();
    }
}
