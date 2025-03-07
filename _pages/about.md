---
layout: about
title: About
permalink: /
subtitle: PhD student at University of Aveiro

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

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




