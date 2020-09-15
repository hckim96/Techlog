package techLog.repository;

import org.springframework.data.repository.CrudRepository;

import techLog.domain.User;

public interface UserRepository extends CrudRepository<User, Long>{
    
}
