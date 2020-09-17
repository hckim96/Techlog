package techLog.controller;

import java.util.Map;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import techLog.config.security.JwtTokenProvider;
import techLog.domain.User;
import techLog.dto.UserDto;
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
    
    UserService userService;

    @GetMapping("/api")
    public String main(){
        return "main";
    }

    // @GetMapping("/signin")
    // @ResponseBody
    // public String signinPage(){
    //     return "signin success";
    // }
    @ApiOperation(value = "signup", notes = "signup notes")
    @ApiImplicitParams({
        @ApiImplicitParam(name = "userId", value = "아이디", required = true, paramType = "query"),
        @ApiImplicitParam(name = "password", value = "아이디", required = true, paramType = "query"),
        @ApiImplicitParam(name = "email", value = "아이디", required = true, paramType = "query"),
        @ApiImplicitParam(name = "userName", value = "아이디", required = true, paramType = "query"),
    })
    @PostMapping("/api/signup")
    public Long doSignupUser(UserDto userDto){
        return userService.signupUser(userDto);
    }
    @PostMapping("/api/signin")
    public String login(@RequestBody Map<String, String> user) {
        User member = userRepository.findByUserId(user.get("userId"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 E-MAIL 입니다."));
        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }
}
