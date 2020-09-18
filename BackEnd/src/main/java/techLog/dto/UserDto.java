package techLog.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import techLog.domain.User;

@Getter
@Setter
public class UserDto {
    private Long id;
    private String userId;
    private String username;
    private String password;
    private String email;

    public User toEntity() {
        return User.builder()
                    .userId(userId)
                    .username(username)
                    .password(password)
                    .email(email)
                    .build();
    }

    @Builder
    public UserDto(String userId, String username, String password, String email) {
        this.userId = userId;
        this.username = username;
        this.password = email;
        this.password = password;
    }

}