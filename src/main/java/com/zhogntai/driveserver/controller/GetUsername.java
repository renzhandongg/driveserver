package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.common.entity.JsonResult;
import com.zhogntai.driveserver.common.enums.ResultCode;
import com.zhogntai.driveserver.common.utils.ResultTool;
import org.jasig.cas.client.authentication.AttributePrincipal;
import org.jasig.cas.client.util.AbstractCasFilter;
import org.jasig.cas.client.validation.Assertion;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
public class GetUsername {
    @CrossOrigin
    @RequestMapping(value = "/api/getUsername", method = RequestMethod.GET)
    public JsonResult getUsername(HttpServletResponse response, HttpServletRequest request){
        Assertion assertion = (Assertion) request.getSession().getAttribute(AbstractCasFilter.CONST_CAS_ASSERTION);
        if(assertion!=null) {
            AttributePrincipal principal = assertion.getPrincipal();
            //获取用户名
            String userName = principal.getName();
            if(!("").equals(userName)){
                return ResultTool.success(userName);
            }
        }
        return ResultTool.fail();
    }
}
