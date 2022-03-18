package com.squad55.spring.security.postgresql.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad55.spring.security.postgresql.dto.CourseDTO;
import com.squad55.spring.security.postgresql.security.services.CourseService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class CourseController {
	
	@Autowired
	private CourseService service;

	@GetMapping("courses")
	public Page<CourseDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	@GetMapping(value ="/courses{id}")
	public CourseDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
}
