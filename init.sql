-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.
CREATE DATABASE portfolio;
USE portfolio;
-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.

-- user Table Create SQL
CREATE TABLE user
(
    `user_idx`           INT             NOT NULL    AUTO_INCREMENT COMMENT '사용자 인덱스', 
    `user_id`            VARCHAR(45)     NOT NULL    COMMENT '사용자 아이디', 
    `user_pw`            VARCHAR(45)     NOT NULL    COMMENT '사용자 비밀번호', 
    `user_name`          VARCHAR(45)     NOT NULL    COMMENT '사용자 이름', 
    `user_height`        INT             NOT NULL    COMMENT '사용자 키', 
    `user_weight`        INT             NOT NULL    COMMENT '사용자 몸무게', 
    `user_email`         VARCHAR(320)    NOT NULL    COMMENT '사용자 이메일', 
    `user_affilication`  VARCHAR(45)     NULL        COMMENT '사용자 소속', 
    `user_birthplace`    VARCHAR(256)    NULL        COMMENT '사용자 출생지', 
    `user_birthday`      DATETIME        NOT NULL    COMMENT '사용자 출생년도', 
    `user_intro`         TEXT            NOT NULL    COMMENT '사용자 자기소개', 
    `create_at`          DATETIME        NOT NULL    COMMENT '생성 날짜', 
    `delete_at`          DATETIME        NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (user_idx)
);

ALTER TABLE user COMMENT '사용자';


-- file Table Create SQL
CREATE TABLE file
(
    `file_idx`   INT             NOT NULL    AUTO_INCREMENT COMMENT '파일 인덱스', 
    `file_name`  VARCHAR(256)    NOT NULL    COMMENT '파일 이름', 
    `file_path`  VARCHAR(256)    NOT NULL    COMMENT '파일 경로', 
    `file_url`   VARCHAR(256)    NOT NULL    COMMENT '파일 url', 
    `file_type`  VARCHAR(45)     NULL        COMMENT '파일 형식', 
    `create_at`  DATETIME        NOT NULL    COMMENT '생성 날짜', 
    `delete_at`  DATETIME        NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (file_idx)
);

ALTER TABLE file COMMENT '파일';


-- work Table Create SQL
CREATE TABLE work
(
    `work_idx`           INT            NOT NULL    AUTO_INCREMENT COMMENT '작품 인덱스', 
    `user_idx`           INT            NOT NULL    COMMENT '사용자 인덱스', 
    `work_name`          VARCHAR(45)    NOT NULL    COMMENT '작품 이름', 
    `file_idx`           INT            NOT NULL    COMMENT '작품 이미지', 
    `work_affilication`  VARCHAR(45)    NOT NULL    COMMENT '작품 소속', 
    `work_position`      VARCHAR(45)    NOT NULL    COMMENT '작품 포지션', 
    `work_skill`         VARCHAR(45)    NOT NULL    COMMENT '작품 기술', 
    `work_intro`         TEXT           NOT NULL    COMMENT '작품 소개', 
    `create_at`          DATETIME       NOT NULL    COMMENT '생성 날짜', 
    `delete_at`          DATETIME       NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (work_idx)
);

ALTER TABLE work COMMENT '작품';

ALTER TABLE work ADD CONSTRAINT FK_work_user_idx_user_user_idx FOREIGN KEY (user_idx)
 REFERENCES user (user_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE work ADD CONSTRAINT FK_work_file_idx_file_file_idx FOREIGN KEY (file_idx)
 REFERENCES file (file_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- post Table Create SQL
CREATE TABLE post
(
    `post_idx`       INT            NOT NULL    AUTO_INCREMENT COMMENT '게시글 인덱스', 
    `user_idx`       INT            NOT NULL    COMMENT '사용자 인덱스', 
    `post_category`  VARCHAR(45)    NOT NULL    COMMENT '게시글 카테고리', 
    `post_name`      VARCHAR(45)    NOT NULL    COMMENT '게시글 이름', 
    `post_contents`  TEXT           NOT NULL    COMMENT '게시글 내용', 
    `post_tag`       VARCHAR(45)    NULL        COMMENT '게시글 태그', 
    `update_at`      DATETIME       NOT NULL    COMMENT '수정 날짜', 
    `create_at`      DATETIME       NOT NULL    COMMENT '생성 날짜', 
    `delete_at`      DATETIME       NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (post_idx)
);

ALTER TABLE post COMMENT '게시글';

ALTER TABLE post ADD CONSTRAINT FK_post_user_idx_user_user_idx FOREIGN KEY (user_idx)
 REFERENCES user (user_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- user_profile Table Create SQL
CREATE TABLE user_profile
(
    `user_profile_idx`       INT         NOT NULL    AUTO_INCREMENT COMMENT '약력 인덱스', 
    `user_idx`               INT         NOT NULL    COMMENT '사용자 인덱스', 
    `file_idx`               INT         NOT NULL    COMMENT '약력 아이콘', 
    `user_profile_start_at`  DATETIME    NULL        COMMENT '약력 시작 시기', 
    `user_profile_end_at`    DATETIME    NOT NULL    COMMENT '약력 종료 시기', 
    `user_profile_contents`  TEXT        NULL        COMMENT '약력 내용', 
    `create_at`              DATETIME    NOT NULL    COMMENT '생성 날짜', 
    `delete_at`              DATETIME    NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (user_profile_idx)
);

ALTER TABLE user_profile COMMENT '사용자 약력';

ALTER TABLE user_profile ADD CONSTRAINT FK_user_profile_user_idx_user_user_idx FOREIGN KEY (user_idx)
 REFERENCES user (user_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE user_profile ADD CONSTRAINT FK_user_profile_file_idx_file_file_idx FOREIGN KEY (file_idx)
 REFERENCES file (file_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- user_skill Table Create SQL
CREATE TABLE user_skill
(
    `user_skill_idx`       INT         NOT NULL    AUTO_INCREMENT COMMENT '사용자 기술 인덱스', 
    `user_idx`             INT         NOT NULL    COMMENT '사용자 인덱스', 
    `file_idx`             INT         NOT NULL    COMMENT '사용자 기술 아이콘', 
    `user_skill_contents`  TEXT        NULL        COMMENT '사용자 기술 내용', 
    `user_skill_level`     INT         NOT NULL    COMMENT '사용자 기술 수준', 
    `create_at`            DATETIME    NOT NULL    COMMENT '생성 날짜', 
    `delete_at`            DATETIME    NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (user_skill_idx)
);

ALTER TABLE user_skill COMMENT '사용자 기술';

ALTER TABLE user_skill ADD CONSTRAINT FK_user_skill_user_idx_user_user_idx FOREIGN KEY (user_idx)
 REFERENCES user (user_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE user_skill ADD CONSTRAINT FK_user_skill_file_idx_file_file_idx FOREIGN KEY (file_idx)
 REFERENCES file (file_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- work_detail Table Create SQL
CREATE TABLE work_detail
(
    `work_detail_idx`           INT            NOT NULL    AUTO_INCREMENT COMMENT '작품 상세 인덱스', 
    `work_idx`                  INT            NOT NULL    COMMENT '작품 인덱스', 
    `work_detail_skill`         VARCHAR(45)    NOT NULL    COMMENT '작품 상세 기술', 
    `work_detail_contents`      TEXT           NOT NULL    COMMENT '작품 상세 내용', 
    `work_detail_contribution`  INT            NOT NULL    COMMENT '작품 상세 기여도', 
    `create_at`                 DATETIME       NOT NULL    COMMENT '생성 날짜', 
    `delete_at`                 DATETIME       NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (work_detail_idx)
);

ALTER TABLE work_detail COMMENT '작품 상세';

ALTER TABLE work_detail ADD CONSTRAINT FK_work_detail_work_idx_work_work_idx FOREIGN KEY (work_idx)
 REFERENCES work (work_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- comment Table Create SQL
CREATE TABLE comment
(
    `comment_idx`       INT            NOT NULL    AUTO_INCREMENT COMMENT '댓글 인덱스', 
    `comment_contents`  TEXT           NOT NULL    COMMENT '댓글 내용', 
    `comment_name`      VARCHAR(45)    NOT NULL    COMMENT '댓글 이름', 
    `comment_email`     VARCHAR(45)    NOT NULL    COMMENT '댓글 이메일', 
    `post_idx`          INT            NOT NULL    COMMENT '게시글 인덱스', 
    `comment_pw`        VARCHAR(45)    NOT NULL    COMMENT '댓글 비밀번호', 
    `create_at`         DATETIME       NOT NULL    COMMENT '생성 날짜', 
    `delete_at`         DATETIME       NULL        COMMENT '삭제 날짜', 
    PRIMARY KEY (comment_idx)
);

ALTER TABLE comment COMMENT '댓글';

ALTER TABLE comment ADD CONSTRAINT FK_comment_post_idx_post_post_idx FOREIGN KEY (post_idx)
 REFERENCES post (post_idx)  ON DELETE RESTRICT ON UPDATE RESTRICT;


