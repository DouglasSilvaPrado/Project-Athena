package com.squad55.spring.security.postgresql.dto;

import com.squad55.spring.security.postgresql.models.Course;

public class CourseDTO {
	
	private Long id;
	private String name;
	private String description;
	private Integer duration;
	private String image;
	
	CourseDTO(){
		
	}

	public CourseDTO(Long id, String name, String description, Integer duration, String image) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.duration = duration;
		this.image = image;
	}
	
	public CourseDTO(Course course) {
		id = course.getId();
		name = course.getName();
		description = course.getDescription();
		duration = course.getDuration();
		image = course.getImage();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
	
	

}
