---
layout: about
title: About
permalink: /
subtitle: PhD student at University of Aveiro

profile:
  align: right
  image: prof_pic.png
  image_circular: false

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

# announcements:
#   enabled: true # includes a list of news items
#   scrollable: true # adds a vertical scroll bar if there are more than 3 news items
#   limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---
## About me

My name is Gonçalo Ribeiro, and I am currently a PhD student in Mechanical Engineering at the University of Aveiro. If possible, I would study every scientific field, but as a mere human, I focus on computer vision, mechanical vibrations, and machine learning.

In 2023, I completed my master's degree in Mechanical Engineering at the University of Aveiro. My [master's thesis](http://hdl.handle.net/10773/40926) focused on perception for ADAS and ADS using single-task and multi-task neural networks.

## About this website

This website is a blog about my PhD. It is divided in the following parts:

- [Reports]({{ site.baseurl }}/reports/): This page contains reports related to meetings with my supervisors. It includes meeting summaries as well as preparatory and supporting documents, categorized accordingly. Tags are available to facilitate content filtering;

- [Timeline]({{ site.baseurl }}/timeline/): Under construction;

- [Projects]({{ site.baseurl }}/projects/): This page is similar to the reports page but is intended for more structured content. It may include information from multiple reports, compiled into a larger post. It focuses on completed work or research;

- [Publications]({{ site.baseurl }}/publications/): This page lists my past and upcoming PhD publications;

- [Repositories]({{ site.baseurl }}/repositories/): This page lists my repositories related to my academic work.

- [State of the art]({{ site.baseurl }}/sota/): In this page there are some state of the art techniques, methods and technologies in my PhD field;

- [Courses]({{ site.baseurl }}/courses/): This page is a compilation of useful sources to learn more about machine learning, computer vision, motion magnification and mechanical vibrations.

You can also search the website by clicking on the **Search** menu or pressing **Ctrl + k**.


## About my PhD

This page provides an overview of the problem that motivates this project and the strategy to solve it. Currently, the title of my PhD is **Identification techniques of operational vibration modes assisted by stereoscopy**.

#### Problem description

Most of the techniques currently available to identify operational vibration modes using video cameras rely only on one viewpoint. The problem is that the results could be badly interpreted with only one point of view since certain vibration modes look similar to others when projected to the camera's plane, causing “optical illusions.” The following GIF is a section of a motionscope output video.

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/problem_examples/motion_scope_drone_arm.gif" class="img-fluid rounded z-depth-1" width='100' %}
    </div>
</div>

In this image, it is possible to see that, if we didn't know what to expect, it would be tough to guess if the drone's arm is moving right and left or back and forth relative to the image plane.

The techniques available for 3D motion magnification have several limitations, such as:

- The need for very precise camera parameters, making offline calibration indispensable;
- (etc)

#### Constraints
- To avoid possible inconveniences and increase flexibility of use, avoid placing the camera in predefined locations or measuring its positions.
- The zoom and focus should be adjustable from position to position.
- The lighting conditions are constant.

### Objectives

The main goal of this project is to develop a system that can be parallel or integrated into MotionScope and allows the combination of two or more viewpoints to obtain the 3D displacement of each point so that it is possible to determine the vibration mode with certainty. To do this, it is necessary to accomplish the following objectives:

- Implementing or developing an algorithm to find corresponding points between images and track them
- Finding the intrinsic and extrinsic parameters of the camera(s) using the information about the corresponding points OR an alternative method that allows to determine the relative position of each camera
- Merging the equivalent points to get the 3D position and displacement
- Developing a tool to watch the results (maybe an animated 3D plot)
- (Optional) Wrap the points around a 3D model for a better interpretation of the results

### Research questions




