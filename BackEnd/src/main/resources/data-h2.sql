insert into user (user_id, password, username, email, created_date, modified_date) values ('sample','{bcrypt}$2a$10$fpkqDBzgueZ5wKr.xtpHw.LLe7GxpdscBc4CUY95.71kJnf050Xxe','sample','sample@sample', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('sample1', 'sample', 'body', now(), now());
insert into post (title, author, body, created_date, modified_date ) values ('🐙 Github에서 협업하는 방법', 'sample', '토이 프로젝트를 진행할 때 가끔 깃헙을 처음 다루는 분이나, 깃헙에서 협업을 처음으로 하는 분들에게 어떤 식으로 깃헙을 사용하는지 설명을 하는 경우가 꽤 있었습니다. 이후 이러한 상황이 자주 일어날 것 같아 글로 남겨볼까 합니다.

💬 이 글은 Git이 익숙하다는 전제하에 작성되었습니다. 커밋, 푸시&풀, 브랜치, 체크아웃, 머지 등등의 개념은 아셔야 합니다. 만약 부족하다고 생각하시면 여기를 참고해보시면 좋을 것 같습니다. 또한 Velog에 좋은 글이 있어 같이 남겨봅니다.

🌊 Git Flow
Github의 기능들을 알아보기 이전에, Git 브랜치를 관리하는 전략 중 하나인 Git Flow를 알아볼까 합니다. Git을 많이 사용하셨다면 머지(merge-병합)과정에서 많은 충돌이 일어난다는 것을 아실 겁니다. 이러한 충돌을 최대한 피하고자 다양한 전략을 사용하는데, 그 중 한 전략이 Git Flow 입니다.



사실 위에 있는 사진보다 더욱 자세한 전략이 Git Flow이지만, 저는 이를 간략화한 버전을 자주 사용합니다. 주로 위와 같이 주 브랜치인 master와 develop 브랜치가 있고, 이 두 브랜치에 머지를 한다고 생각하면 쉽습니다.

master : 기준이 되는 브랜치로 실제 사용자가 보게 되는 서비스가 배포되어있는 브랜치입니다.
develop : 개발이 활발히 이뤄지는 브랜치로 기능을 구현한 브랜치는 항상 여기에 머지됩니다.
Git Flow에서 가장 중요한 점은, 브린치의 역할에 따라 무조건 지정된 브랜치에만 머지해야한다는 점입니다. 기능을 구현한 브랜치는 무조건 develop 브랜치에 머지해야 하고, develop 브랜치에 있는 기능들을 출시(배포)할 때에만 master 브랜치에 머지해야 한다는 것입니다. Git Flow를 사용하면서 개발할 때엔 다음과 같은 단계를 거쳐 머지합니다.

develop 브랜치에서 새로운 브랜치를 만듭니다 (그림 1) - master 브랜치에서 새로운 브랜치를 만들지 마세요!
커밋을 하며 개발을 진행하다가, 기능 구현이 끝나면 develop에 머지를 합니다 (그림 3)
만약 개발을 진행하다가 다른 팀원이 develop 브랜치에 머지를 했다면, 작업하기 전에 작업 중인 브랜치에 develop 브랜치를 머지해야 합니다. (그림 4) - 이는 추후 머지를 진행할 때 (그림 5) 충돌을 최소화하기 위해 미리 머지를 하는 것입니다.
충분히 개발이 진행되었다면, develop 브랜치를 master에 머지해 배포합니다. (그림 6)
여기에, 저는 추가로 한가지 규칙을 정해 충돌 가능성을 더욱 낮추고 있습니다. 한번 머지한 기능 브랜치는 재사용하지 않는다는 것입니다. 그림 2a와 3처럼 머지를 하고 또 머지를 하는 작업은 Git Flow에서 가능하지만 제가 협업을 할 땐 추천하지 않는 작업입니다.

저는 본격적으로 진행하는 프로젝트는 Git Flow, 좀 간략하게 진행하는 프로젝트는 Git Flow에서 develop 브랜치를 뺀 Github Flow를 사용합니다.

🐙 Github


이제 본격적으로 Github을 활용해볼까요? Github을 협업으로 사용하지 않으신 분들은 주로 Code 메뉴를 사용하셨을 텐데, 협업에서는 위 사진에서 빨간색 박스친 4가지 메뉴를 많이 사용합니다. 이를 하나씩 다뤄보고 어떤 순으로 협업에 사용되는지 알아봅시다.

📊 Project


프로젝트는 작업 현황과 진행도를 볼 수 있는 메뉴입니다. 뒤에서 소개할 이슈, PR(풀 리퀘스트)들을 하나의 작업으로 구분해 그 작업이 현재 어느 정도 진행되었는지 확인할 수 있습니다. 저의 경우에는 새로운 버젼을 준비하는 단위별로 프로젝트를 새로 만들어 모두 진행되었을 때 배포(master 브랜치에 머지)하는 식으로 프로젝트를 활용합니다. 또한, Github에서는 프로젝트에 대해서 자동화를 지원합니다. 이를 활용해 직접 작업을 Drag & Drop으로 옮기는 것이 아니라, 이슈나 PR의 진행률에 따라 자동으로 작업이 옮겨지게 할 수 있습니다.

💡 상단 이미지에 있는 화면을 Board라고 하는데, 마치 게시판에 메모를 붙이는 것처럼 순서가 저장됩니다. 저장되는 순서를 작업해야 하는 순서로 둘 수 있습니다.

⚠️ Issue


이슈는 작업을 정리하는 단위입니다. 작업은 기능 구현이 될 수도 있고, 버그 수정이 될 수 있습니다. 이슈가 더 자세하고 세밀할수록 더욱 체계화된 협업이 가능합니다. 이슈를 만들면 이슈를 열었다(open)라고 하고, 작업이 끝나 이슈를 정리하면 이슈를 닫았다(close)라고 말합니다.



이슈 세부화면을 통해 이슈의 구성요소를 짚어보겠습니다.

제목 옆에 있는 #2는 이슈번호입니다. 이 번호는 PR와 같이 사용하는 고유번호로, 프로젝트 어디에서든지 저 번호를 활용해 지금 하는 활동이 이 이슈와 관련되어 있다고 언급(mentioned)할 수 있습니다. 또한, 번호를 사용하면 이슈 세부화면에서도 어디서 언급되었는지 확인할 수 있습니다.
제목과 커멘트를 통해 이 이슈에서 해야하는 일을 작성할 수 있습니다. 특히 위와 같이 Checkbox를 사용하면 이 이슈의 진행도를 한눈에 확인할 수 있기 때문에 자주 사용되는 요소 중 하나입니다.
Assignees를 통해 이 이슈의 작업자, 책임자를 지정할 수 있습니다.
Labels를 통해 이슈를 분류할 수 있습니다. Github에서 기본적으로 제공되는 라벨을 사용해도 괜찮고, 라벨을 직접 만들수도 있습니다.
위에서 언급했듯, 프로젝트에 이슈를 등록할 수 있습니다. 또한, 자동화를 등록해 놓아서 좌측 하단을 보면 이슈가 닫힌 이후에 자동화에 의해 프로젝트에서 이슈가 이동했습니다.
이슈에서 중요한 점은 기능 브랜치를 이슈 단위로 생성한다는 것입니다. 가장 추천되는 작업방식은 브랜치 하나에 이슈 하나씩 처리하는 식으로 진행하는 것입니다. 이제 이슈에서 적어놓은 작업들을 다 진행했다고 하면, 바로 develop 브랜치에 머지하는 것일까요? 그건 아닙니다. 머지하기 전에 한 단계 절차를 거쳐야 하는데, 바로 Pull Request입니다.

📬 PR(Pull Request)

풀 리퀘스트, 줄여서 PR은 협업에서 가장 중요한 기능으로, 머지를 하기 전 확인을 받는 절차를 도와주는 메뉴입니다. 팀원에게 확인을 받을 수도 있고, 자동화된 절차에 의해 확인을 받을수 있습니다. 전자는 PR review를 통해, 후자는 Action에 의해 확인을 받을 수 있습니다. 위 화면을 보면 이슈 세부화면과 별 다를게 없고, 위에서 설명한 것과 같게 작동됩니다. 다만 우측에 Reviewers라는 탭이 추가된 것을 볼 수 있습니다. Reviewers를 통해 이 브랜치, 이 PR을 리뷰할 팀원을 지정할 수 있습니다. 리뷰어로 지정이 되면, 상단과 같이 Add your review 버튼을 눌러 리뷰를 시작할 수 있습니다.

💡 협업을 통해 프로젝트를 진행하는 경우, 한 개발자가 만든 코드는 나머지 팀원이 모두 다 코드를 이해하는 것이 좋습니다. 리뷰를 하는 이유 중 하나죠.



Reviewer로 지정된다면, 이 브랜치에 있는 코드에 커멘트를 남기며 코드를 리뷰할 수 있습니다. 이 코드를 왜 작성했는지, 이렇게 작성해도 되는 것인지, 잘 작동되는지 확인하며 코멘트를 남기면서 코드의 퀄리티를 높일 수 있습니다. 달아놓은 코멘트를 보고 이를 해결했다면, 코멘트 하단에 있는 Resolve conversation을 눌러 커멘트 진행사항을 정리할 수 있습니다.



또한, Github에서 제공하는 Suggestion 기능을 통해 어떻게 바뀌었으면 좋겠는지 제안할 수도 있습니다. Github에서는 제안한 코드와 원 코드 간 diff를 보여주며 어떻게 바꿔야 하는지 한눈에 볼 수 있습니다.



리뷰 화면에서 커멘트를 달고 리뷰를 마무리하려면, Review changes 버튼을 눌러 리뷰를 제출할 수 있습니다. 리뷰 총평을 커멘트를 달고 Submit review를 누르면 리뷰가 마무리되는데, 버튼 상단에 있는 Select Toggle을 통해 리뷰 상황을 표시할 수 있습니다.

Comment : 승인과 무관하게 일반적인 커멘트를 할 때 선택합니다.
Approve : Comment와 다르게 리뷰어가 승인을 하는 것으로, 머지해도 괜찮다는 의견을 보내는 것입니다.
Request changes : 말 그대로 변경을 요청하는 것으로, 승인을 거부하는 것을 말합니다. 머지하면 안된다는 의견을 보내는 것이기도 하죠.


이 리뷰 상황이 중요한 이유는 이 리뷰 상황에 따라 머지를 할지 하지 않을지 결정하는 확인절차 중 하나이기 때문입니다. 프로젝트 세팅에 들어가 보면 브랜치를 관리하는 설정이 있는데, Approve를 받아야지 머지를 할 수 있게 설정할 수 있습니다. 위는 1명의 Approve를 받으면 머지가 가능하게 되어있지만, 여러 명을 설정해 일정 개수 이상의 Approve를 받아야지 머지할 수 있게 설정할 수 있습니다.

💡 Draft PR이라는 기능이 있는데, 작업이 완료되기 전 임시로 PR을 올릴 수 있습니다. 원래대로 진행된다면 작업이 완료되기 전까지는 코드를 얼마나 했는지 확인하는 방법이 애매한데, Draft PR로 올려놓으면 작업이 완료되기 전 PR 페이지에 코드 현황을 확인할 수 있어 더욱 편리합니다!

🏃 Actions


위에서 언급했던 확인하는 절차 중 하나가 액션입니다. 최근 들어 CI/CD, Devops등 프로젝트를 체크, 배포하는 것의 자동화의 필요성이 증가하고 있는데, Github에서는 액션이라는 기능을 통해 자동화를 제공하고 있습니다. 예를 들어, 제가 진행 중인 React 프로젝트에선 ESLint가 지켜졌는지 확인하고, 테스트 코드를 돌리며 테스트가 통과하는지 확인하는 작업을 액션을 통해 진행합니다. PR에서 다뤘던 브랜치 설정 중 Require status checks to pass before merging 을 설정하면 액션을 통과해야지만 머지할 수 있게 설정할 수 있습니다.

📚 이 글에서 액션을 만드는 방법에 대해서 언급한다면 한 3페이지 더 나올 정도로 방대하므로 다루진 않겠습니다.

👨‍💻 협업하는 방법
이제, 제가 협업하는 방법에 대해 정리해보도록 하겠습니다.

기획할 때, 구현해야 할 기능들을 이슈에 등록해 정리합니다. (이슈를 등록할 때 프로젝트에 등록도 합니다)
작업을 시작하기 전에 이슈의 Assignee를 지정하고 시작합니다.
develop 브랜치에서 새로운 브랜치를 만들어 작업을 진행합니다.
작업하다가, develop 브랜치가 (다른 PR로) 업데이트가 되면 업데이트를 적용하기 위해 develop 브랜치를 머지해야합니다.
작업을 진행 중이거나 마칠 때 PR(또는 Draft PR)을 열어 팀원(또는 액션)에게 확인을 받습니다.
리뷰나 액션을 통해 충분히 확인되었다면 브랜치를 develop에 머지합니다.
이후 충분히 기능이 구현되어 develop에 머지된다면 develop을 master에 머지해 배포합니다.
💡 PR을 통해 머지가 된다면 PR 페이지에서 브랜치를 제거할지 물어보는 버튼이 있습니다. Git Flow에서 언급한 것 처럼, 한번 머지한 브랜치는 제거하는 것이 좋습니다. 앗, develop 브랜치는 제거하면 안되요!

제가 이 글에 적은 방식이 모범정답은 아닙니다. 상황에 따라 유동적으로 변경될 수 있고, 제가 사용하는 방식이 비효율적일 수 있습니다. 여러분의 의견을 댓글에 달아주시면 감사하겠습니다!', now(), now());