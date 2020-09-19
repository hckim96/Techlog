package techLog.controller;

import java.util.Collections;
import java.util.Map;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import techLog.config.security.JwtTokenProvider;
import techLog.domain.Post;
import techLog.domain.User;
import techLog.repository.PostRepository;
import techLog.repository.UserRepository;
import techLog.service.UserService;

@Api(tags = {"1. Main"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class MainController {
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    UserService userService;


    @GetMapping("/api/admin/test")
    @ResponseBody
    public String adminTest(Authentication auth) {
        return ((UserDetails )auth.getPrincipal()).getUsername();
    }
    @GetMapping("/api/user/test")
    @ResponseBody
    public String userTest(Authentication auth) {
        return ((UserDetails )auth.getPrincipal()).getUsername();
    }

    @GetMapping("/api/whoami")
    @ResponseBody
    public String whoami(Authentication auth) {
        if (auth.isAuthenticated()) {
            return ((UserDetails )auth.getPrincipal()).getUsername();
        } else {
            return "not authenticated";
        }
    }


    @ApiOperation(value = "signup", notes = "signup notes")
    @PostMapping("/api/signup")
    public Long sinup(@RequestBody Map<String, String> user){
        return userRepository.save(User.builder()
        .userId(user.get("userId"))
        .username(user.get("username"))
        .email(user.get("email"))
        .password(passwordEncoder.encode(user.get("password")))
        .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정
        .build()).getId();
    }
    @PostMapping("/api/signin")
    public String signin(@RequestBody Map<String, String> user) {
        User member = userRepository.findByUserId(user.get("userId"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 userId 입니다."));
        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }

    // @GetMapping("/api/isAuthenticated")
    // @ResponseBody 
    // public boolean isAuthenticated(Authentication authentication){
    //     return  authentication.isAuthenticated();
    //     // UserDetails userdetails = (UserDetails) authentication.getPrincipal();
    //     // return userdetails.getUsername();
    // }

    @PostMapping("/api/write")
    public Long write(@RequestBody Map<String, String> post) {
        return postRepository.save(Post.builder()
        .title(post.get("title"))
        .author(post.get("author"))
        .body(post.get("body"))
        .build()).getId();
    }




}
