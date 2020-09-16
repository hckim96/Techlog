package techLog.service;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import techLog.dto.UserDto;
import techLog.repository.UserRepository;

@AllArgsConstructor
@Service 
public class UserService {
    private UserRepository userRepository;

    @Transactional
    public Long signupUser(UserDto userDto){
        // TODO: check it's unique
        return userRepository.save(userDto.toEntity()).getId();
    }
    
    // @Transactional
    // public Long signinUser(HttpServletRequest request) {

    // }
}
