package com.zhogntai.driveserver.config;

import net.unicon.cas.client.configuration.CasClientConfigurerAdapter;
import net.unicon.cas.client.configuration.EnableCasClient;
import org.jasig.cas.client.authentication.AuthenticationFilter;
import org.jasig.cas.client.session.SingleSignOutFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CasConfiguration {
    @Value("${cas.server-login-url}")
    private String casServerLoginUrl;

    @Value("${cas.client-host-url}")
    private String casClientHostUrl;

    @Autowired
    ConfigBean configBean;

    /**
     * description:授权过滤器
     * ignoreUrlPatternType 使用CAS现成的正则表达式过滤策略
     */
    @Bean
    public FilterRegistrationBean filterAuthenticationRegistration() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new AuthenticationFilter());
        // 设定匹配的路径
        registration.addUrlPatterns("/api/*");
        Map<String,String> initParameters = new HashMap<String, String>();
        initParameters.put("casServerLoginUrl", casServerLoginUrl);
        initParameters.put("serverName", casClientHostUrl);
        // 忽略 /logoutSuccess 的路径
        registration.setInitParameters(initParameters);
        // 设定加载的顺序
        registration.addUrlPatterns("/mobileUrl/","/we/*");
        registration.setOrder(1);
        System.out.println("init filter");
        return registration;
    }

}
