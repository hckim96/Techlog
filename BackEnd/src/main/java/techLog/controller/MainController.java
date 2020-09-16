package techLog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import techLog.dto.UserDto;
import techLog.service.UserService;

@Api(tags = {"1. Main"})
@RequestMapping(value = "/v1")
@Controller
@AllArgsConstructor
public class MainController {

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
    @PostMapping("/api/signup")
    public String doSignupUser(@ApiParam(value = "dto", required = false) UserDto userDto){
        userService.signupUser(userDto);
        return "redirect:/";
    }

}
