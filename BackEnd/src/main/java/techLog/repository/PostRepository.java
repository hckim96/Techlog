package techLog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import techLog.domain.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}