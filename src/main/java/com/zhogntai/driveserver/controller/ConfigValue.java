package com.zhogntai.driveserver.controller;

import com.zhogntai.driveserver.config.ConfigBean;
import net.sf.json.JSONObject;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ConfigValue {
    private static final org.slf4j.Logger LOGGER = org.slf4j.LoggerFactory.getLogger(ConfigValue.class);
//    @Value("${com.dudu.name}")
//    private  String name;
//    @Value("${com.dudu.want}")
//    private  String want;
//
//    @RequestMapping("/hello" )
//    public String hexo(){
//        return name+","+want;
//    }
    @Autowired
    ConfigBean configBean;

    @RequestMapping("/hello")
    public String hexo() throws IOException {
//        HttpClient client = HttpClients.createDefault();
//        HttpGet request = new HttpGet( configBean.getLocaltionIp() + "/mapData");
//        HttpResponse response = client.execute(request);
//        String strResult = EntityUtils.toString(response.getEntity());

//        JSONObject json_test = JSONObject.fromObject();
//        System.out.println(configBean.getLocaltionIp());
//        return json_test;
        LOGGER.error("ERROR 级别日志");
        LOGGER.warn("WARN 级别日志");
        LOGGER.info("INFO 级别日志");
        LOGGER.debug("DEBUG 级别日志");
        LOGGER.trace("TRACE 级别日志");
        return "success" ;
    }
}
