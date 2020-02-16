package com.example.keycloakoidc;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin(
        origins = {"http://localhost:4200"}, maxAge = 3600L)
@RestController
@RequestMapping("/api/greet")
public class GreetingController {

    private static String greet(final Principal principal, final String alternativName){
        return String.format("Hello %s!", principal == null || principal.getName() == null ? alternativName : principal.getName());
    }

    @GetMapping(value = "/user", produces = MediaType.TEXT_PLAIN_VALUE)
    ResponseEntity<String> greetUser(final Principal principal){
        return ResponseEntity.ok( greet(principal, "User") );
    }

    @GetMapping(value = "/admin", produces = MediaType.TEXT_PLAIN_VALUE)
    ResponseEntity<String> greetAdmin(final Principal principal) {
        return ResponseEntity.ok( greet(principal, "Admin") );
    }
}
