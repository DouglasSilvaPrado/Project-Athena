package com.squad55.spring.security.postgresql.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad55.spring.security.postgresql.dto.CourseDTO;
import com.squad55.spring.security.postgresql.models.Course;
import com.squad55.spring.security.postgresql.repository.CourseRepository;



@Service
public class CourseService {
	
	@Autowired
	private CourseRepository repository;
	

	@Transactional(readOnly = true)
	public Page<CourseDTO> findAll(Pageable pageable) {
		Page<Course> result = repository.findAll(pageable);
		Page<CourseDTO> page = result.map(x -> new CourseDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public CourseDTO findById(Long id) {
		Course result = repository.findById(id).get();
		CourseDTO dto = new CourseDTO(result);
		return dto;
	}


}
