---
layout: post
title: ATOM experiments
date: 2024-04-03 16:40:16
description: Meeting preparation and support
tags: [ATOM, ROS, Simulation]
categories: [meeting-support, meeting-preparation]
---

I started the week by trying to clarify the roots of the problem that I’m trying to solve with Professor Rui Moreira. The issue is that MotionScope licenses aren’t available before Easter, so I’ll have to wait to explore the software and understand the problem. Meanwhile, I continued watching some online courses related to the basics of mechanical vibrations and machine learning and exploring the calibration of cameras.

For camera calibration, I thought of finding a way to get the “ground truth” first to evaluate the quality of the camera calibration system that I will implement or develop. For that, I’ve been exploring [**ATOM**](https://github.com/lardemua/atom), a set of calibration tools for robotic applications developed and maintained by teachers, researchers, and students of the University of Aveiro. This might be an overkill solution, but it is safer to use a tool that is well-understood by the LAR community. Thus, getting support is easier than using other available solutions or developing something from scratch.

Since ATOM is a ROS-based application, it runs on Ubuntu 20.04, which is beginning to become outdated. I used Docker to install ATOM to avoid using an old Linux distro directly on my computer and to prevent future problems. This allows the use of ATOM in other operating systems, even Windows.

The [ATOM documentation](https://lardemua.github.io/atom_documentation/) provides examples ([A](https://lardemua.github.io/atom_documentation/examples/), [B](https://github.com/lardemua/atom/tree/noetic-devel/atom_examples)), one of which is the use of [two RGB cameras](https://github.com/lardemua/atom/tree/noetic-devel/atom_examples/rrbot). There are also RGB-D examples that might be useful for João.


<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/posts/img/Screenshot_20240402_140350.png" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/posts/img/Screenshot_20240402_140637.png" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

In the [ATOM paper](https://doi.org/10.1016/j.eswa.2022.118000), some works related to the calibration of RGB cameras are mentioned. Some of these works are related to calibration without checkerboards (in the case of ATOM would be useful for online calibration) but “Patternless calibration approaches have the advantage of operating continuously if necessary, but loose in accuracy and robustness when compared to offline, one shot procedures. As such, offline calibrations are still the most commonly used.”. I will read those works to see how these calibrations are done.

For the calibration of RGB cameras, ATOM detects the points using a pattern in both cameras—this is done for a set of “collections” (data from all sensors at the same time). Then, with a user guess for an approximated position and orientation of the cameras, it reprojects the pattern points. Then, it starts an optimization process to minimize the error between the points of the pattern and the reprojected points.