package com.squad55.spring.security.postgresql.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squad55.spring.security.postgresql.models.Course;



public interface CourseRepository extends JpaRepository<Course, Long> {

}
