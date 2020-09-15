package techLog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/")
    public String main() {
        return "main";
    }
    
    @GetMapping("/test")
    public String test() {
        return "test";
    }
    
}
