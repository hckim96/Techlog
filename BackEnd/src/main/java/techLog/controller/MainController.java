package techLog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.AllArgsConstructor;
import techLog.dto.UserDto;
import techLog.service.UserService;

@Controller
@AllArgsConstructor
public class MainController {

    UserService userService;

    @GetMapping("/")
    @ResponseBody
    public String main(){
        return "main page";
    }

    @GetMapping("/signup")
    public String signupPage(){
        return "signup";
    }
    @PostMapping("/signup")
    public String doSignupUser(UserDto userDto){
        userService.signupUser(userDto);
        return("redirect:/");
    }

}
