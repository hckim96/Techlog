package techLog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.AllArgsConstructor;
import techLog.dto.UserDto;
import techLog.service.UserService;

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
    @PostMapping("/api/signup")
    public String doSignupUser(UserDto userDto){
        userService.signupUser(userDto);
        return "redirect:/";
    }

}
