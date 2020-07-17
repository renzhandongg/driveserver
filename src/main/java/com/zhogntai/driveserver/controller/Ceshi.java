package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.common.entity.JsonResult;
import com.zhogntai.driveserver.common.utils.ResultTool;
import org.jasig.cas.client.authentication.AttributePrincipal;
import org.jasig.cas.client.util.AbstractCasFilter;
import org.jasig.cas.client.validation.Assertion;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
public class Ceshi {
    @RequestMapping("/mobileUrl/hello")
    public JsonResult getUsername(HttpServletResponse response, HttpServletRequest request){
        return ResultTool.success();
    }
}
