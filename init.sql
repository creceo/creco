-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.
CREATE DATABASE free_board;
USE free_board;

-- user Table Create SQL
CREATE TABLE user
(
    `user_idx`   INT            NOT NULL    AUTO_INCREMENT COMMENT '회원식별번호', 
    `user_id`    VARCHAR(45)    NULL        COMMENT '회원아이디', 
    `user_pw`    VARCHAR(45)    NULL        COMMENT '회원비밀번호', 
    `create_at`  DATETIME       NULL        COMMENT '회원생성날짜', 
    `delete_at`  DATETIME       NULL        COMMENT '회원탈퇴날짜', 
    PRIMARY KEY (user_idx)
);

ALTER TABLE user COMMENT '회원';


-- post Table Create SQL
CREATE TABLE post
(
    `post_idx`       INT            NOT NULL    AUTO_INCREMENT COMMENT '글식별번호', 
    `post_subject`   VARCHAR(45)    NULL        COMMENT '글제목', 
    `post_contents`  VARCHAR(45)    NULL        COMMENT '글내용', 
    `user_idx`       INT            NULL        COMMENT '회원식별번호', 
    `create_at`      DATETIME       NULL        COMMENT '글생성날짜', 
    `delete_at`      DATETIME       NULL        COMMENT '글삭제날짜', 
    PRIMARY KEY (post_idx)
);

ALTER TABLE post COMMENT '글';

ALTER TABLE post ADD CONSTRAINT FK_post_user_idx_user_user_idx FOREIGN KEY (user_idx)
 REFERENCES user (user_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- comment Table Create SQL
CREATE TABLE comment
(
    `comment_idx`       INT            NOT NULL    AUTO_INCREMENT COMMENT '댓글식별번호', 
    `comment_contents`  VARCHAR(45)    NULL        COMMENT '댓글내용', 
    `user_idx`          INT            NULL        COMMENT '회원식별번호', 
    `post_idx`          INT            NULL        COMMENT '글식별번호', 
    `create_at`         DATETIME       NULL        COMMENT '댓글생성날짜', 
    `delete_at`         DATETIME       NULL        COMMENT '댓글삭제날짜', 
    PRIMARY KEY (comment_idx)
);

ALTER TABLE comment COMMENT '댓글';

ALTER TABLE comment ADD CONSTRAINT FK_comment_post_idx_post_post_idx FOREIGN KEY (post_idx)
 REFERENCES post (post_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE comment ADD CONSTRAINT FK_comment_user_idx_user_user_idx FOREIGN KEY (user_idx)
 REFERENCES user (user_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- image Table Create SQL
CREATE TABLE image
(
    `image_idx`   INT            NOT NULL    AUTO_INCREMENT COMMENT '이미지식별번호', 
    `image_name`  VARCHAR(45)    NULL        COMMENT '이미지이름', 
    `image_ext`   VARCHAR(45)    NULL        COMMENT '이미지확장자', 
    `image_path`  VARCHAR(45)    NULL        COMMENT '이미지경로', 
    `image_url`   VARCHAR(45)    NULL        COMMENT '이미지URL', 
    `post_idx`    INT            NULL        COMMENT '글식별번호', 
    `create_at`   DATETIME       NULL        COMMENT '이미지생성날짜', 
    `delete_at`   DATETIME       NULL        COMMENT '이미지삭제날짜', 
    PRIMARY KEY (image_idx)
);

ALTER TABLE image COMMENT '이미지';

ALTER TABLE image ADD CONSTRAINT FK_image_post_idx_post_post_idx FOREIGN KEY (post_idx)
 REFERENCES post (post_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


