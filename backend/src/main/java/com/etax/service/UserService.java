package com.etax.service;

import com.etax.model.User;
import com.etax.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String tin) throws UsernameNotFoundException {
        return userRepository.findByTin(tin)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with TIN: " + tin));
    }

    public boolean existsByTin(String tin) {
        return userRepository.existsByTin(tin);
    }

    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}