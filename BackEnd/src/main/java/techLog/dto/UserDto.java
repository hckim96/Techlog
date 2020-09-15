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
    private String userName;
    private String password;
    private String email;

    public User toEntity() {
        return User.builder()
                    .userId(userId)
                    .userName(userName)
                    .password(password)
                    .email(email)
                    .build();
    }

    @Builder
    public UserDto(String userId, String userName, String password, String email) {
        this.userId = userId;
        this.userName = userName;
        this.password = email;
        this.password = password;
    }

}