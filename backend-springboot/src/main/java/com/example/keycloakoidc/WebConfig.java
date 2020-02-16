package com.example.keycloakoidc;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    private final String[] allowedOrigins;
    private final long maxAge;

    WebConfig(
      @Value("${example.cors.allowed-origins:*}") final String[] allowedOrigins,
      @Value("${example.cors.max-age:3600}") final long maxAge
    ){
        this.allowedOrigins = allowedOrigins;
        this.maxAge = maxAge;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(final CorsRegistry registry) {
                registry.addMapping("/api/*")
                        .allowedOrigins(WebConfig.this.allowedOrigins)
                        .maxAge(WebConfig.this.maxAge);
            }
        };
    }
}
