package techLog.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import techLog.domain.User;

public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUserId(String userId);
}
