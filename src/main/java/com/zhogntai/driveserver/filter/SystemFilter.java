package com.zhogntai.driveserver.filter;


import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter(filterName = "authFilter", urlPatterns = "/*")
public class SystemFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        //指定允许其他域名访问
        String origin = request.getHeader("Origin");
        if(origin == null){
            origin = request.getHeader("Referer");
        }
        response.setHeader("Access-Control-Allow-Origin",origin);
        response.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,X-CSRF-TOKEN");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Allow-Credentials","true");
        System.out.println(request.getRequestURL());
        filterChain.doFilter(request, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
