package com.zhogntai.driveserver.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.zhogntai.driveserver.common.utils.ResultTool;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class XtpDayDataControll {
    private static final org.slf4j.Logger LOGGER = org.slf4j.LoggerFactory.getLogger(XtpDayDataControll.class);
    @Value("${xtpUrl}")
    private  String xtpUrl;

    HttpClient client = HttpClients.createDefault();
    @CrossOrigin
    @RequestMapping("/api/xtpData")
    public JSONObject hexo() {
        JSONObject js = null;
        js = (JSONObject) JSON.toJSON(ResultTool.fail());
        try {
            HttpGet request = new HttpGet( xtpUrl+"reportDataDay");
            HttpResponse response = client.execute(request);
            String strResult = EntityUtils.toString(response.getEntity());
            js = JSON.parseObject(strResult);
            LOGGER.info("Request succeeded for xtpDayData (guji,liangrong,jingyongjin)");
            return js ;
        } catch (IOException e) {
            e.printStackTrace();
            LOGGER.error("Request errored for xtpDayData (guji,liangrong,jingyongjin)");
            return js;
        } catch (ParseException e) {
            e.printStackTrace();
            LOGGER.error("Request errored for xtpDayData (guji,liangrong,jingyongjin)");
            return js;
        }
    }

    @CrossOrigin
    @RequestMapping("/api/dayBusiness")
    public JSONObject getDayBusiness() throws IOException{
        JSONObject js = null;
        js = (JSONObject) JSON.toJSON(ResultTool.fail());
        try {
            HttpGet request = new HttpGet( xtpUrl+"reportBrhDay");
            HttpResponse response = client.execute(request);
            String strResult = EntityUtils.toString(response.getEntity());
            js = JSON.parseObject(strResult);
            LOGGER.info("Request succeeded for xtpDayData (Business)");
            return js ;
        } catch (IOException e) {
            e.printStackTrace();
            LOGGER.error("Request errored for xtpDayData (Business)");
            return js ;
        } catch (ParseException e) {
            e.printStackTrace();
            LOGGER.error("Request errored for xtpDayData (Business)");
            return js ;
        }
    }


    @CrossOrigin
    @RequestMapping("/mobileUrl/xtpData")
    public JSONObject getMobileUrlHexo() throws IOException {
        HttpGet request = new HttpGet( xtpUrl+"reportDataDay");
        HttpResponse response = client.execute(request);
        String strResult = EntityUtils.toString(response.getEntity());
        JSONObject js = JSON.parseObject(strResult);
        return js ;
    }

    @CrossOrigin
    @RequestMapping("/mobileUrl/dayBusiness")
    public JSONObject getMobileUrlDayBusiness() throws IOException{
        HttpGet request = new HttpGet( xtpUrl+"reportBrhDay");
        HttpResponse response = client.execute(request);
        String strResult = EntityUtils.toString(response.getEntity());
        JSONObject js = JSON.parseObject(strResult);
        return js ;
    }

}
