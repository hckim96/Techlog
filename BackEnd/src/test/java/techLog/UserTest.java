package techLog;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import techLog.domain.User;
import techLog.repository.UserRepository;

@SpringBootTest
public class UserTest {
    @Autowired
    UserRepository userRepository;

    @Test
    public void getUser(){
    User user = User.builder().userId("userId").userName("userName").email("email").password("password").build();
    userRepository.save(user);
    Iterable<User> userList =  userRepository.findAll();

    }
}
