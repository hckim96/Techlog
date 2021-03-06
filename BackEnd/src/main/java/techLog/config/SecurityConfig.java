package techLog.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;
import techLog.config.security.JwtAuthenticationFilter;
import techLog.config.security.JwtTokenProvider;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig  extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Override
    public void configure(WebSecurity web) throws Exception
    {
        web.ignoring().antMatchers("/css/**", "/js/**", "/img/**", "/lib/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic()
            .and()
                .authorizeRequests()
                .antMatchers("/v1/api/admin/**").hasRole("ADMIN")
                .antMatchers("/v1/api/user/**").hasRole("USER")
                .antMatchers("/**").permitAll()
            .and() 
                .exceptionHandling().accessDeniedPage("/user/denied")
            .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
            
                
        http.authorizeRequests().antMatchers("/h2-console/*").permitAll();
        http.csrf().disable();
        http.headers().frameOptions().disable();
    }
    // @Override
    // public void configure(AuthenticationManagerBuilder auth) throws Exception {
    //     // auth.userDetailsService(memberService).passwordEncoder(passwordEncoder());
    // }
}
