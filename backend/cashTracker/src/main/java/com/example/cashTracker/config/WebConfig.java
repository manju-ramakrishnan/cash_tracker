package com.example.cashTracker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // Indicates that this class provides Spring configuration
public class WebConfig implements WebMvcConfigurer {

    @SuppressWarnings("null") // Suppress warnings for the unused parameter
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Configure CORS settings
        registry.addMapping("/**") // Allow CORS requests to all endpoints
                .allowedOrigins("http://localhost:3000") // Allow requests from this origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Specify allowed HTTP methods
                .allowedHeaders("*") // Allow all headers
                .allowCredentials(true); // Allow credentials such as cookies to be sent
    }
}
