package com.zhogntai.driveserver.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "com.zhongtai")
public class ConfigBean {
    private String name;
    private String want;
    private String webOriginHref;
    private String mobileOriginHref;

    public String getWebOriginHref() {
        return webOriginHref;
    }

    public void setWebOriginHref(String webOriginHref) {
        this.webOriginHref = webOriginHref;
    }

    public String getMobileOriginHref() {
        return mobileOriginHref;
    }

    public void setMobileOriginHref(String mobileOriginHref) {
        this.mobileOriginHref = mobileOriginHref;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWant() {
        return want;
    }

    public void setWant(String want) {
        this.want = want;
    }
}
