package techLog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import techLog.repository.UserRepository;

@SpringBootApplication
@EnableJpaAuditing
public class TechLogApplication {

	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(TechLogApplication.class, args);
	}

}
