package com.zhogntai.driveserver;

import com.zhogntai.driveserver.config.ConfigBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import net.unicon.cas.client.configuration.EnableCasClient;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@EnableCasClient
@EnableConfigurationProperties({ConfigBean.class})
@ServletComponentScan(basePackages = {"com.zhogntai.driveserver.filter"})
public class DriveserverApplication {

    public static void main(String[] args) {
        SpringApplication.run(DriveserverApplication.class, args);
    }

}
