package com.etax.controller;

import com.etax.model.User;
import com.etax.security.JwtTokenUtil;
import com.etax.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        Authentication auth = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.get("tin"),
                loginRequest.get("password")
            )
        );
        
        User user = (User) auth.getPrincipal();
        String token = jwtTokenUtil.generateToken(user);
        
        return ResponseEntity.ok(Map.of(
            "token", token,
            "tin", user.getTin(),
            "fullName", user.getFullName()
        ));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User newUser) {
        if (userService.existsByTin(newUser.getTin())) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "TIN already registered"));
        }

        User user = userService.createUser(newUser);
        String token = jwtTokenUtil.generateToken(user);

        return ResponseEntity.ok(Map.of(
            "token", token,
            "tin", user.getTin(),
            "fullName", user.getFullName()
        ));
    }
}