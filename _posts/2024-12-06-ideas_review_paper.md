---
layout: post
title: Ideas for the research paper
date: 2024-12-06 16:40:16
description: Meeting preparation and support
tags: [Computer Vision, Motion magnification, 3D Motion magnification, Calibration, Research]
categories: [meeting-support, meeting-preparation]
---

[3D Motion Magnification: Visualizing Subtle Motions with Time-Varying Neural Fields](https://3d-motion-magnification.github.io/)

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/11_2024/fork_3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

This approach is based on [NeRF](https://www.matthewtancik.com/nerf) and already supports the use of a single-camera. However there is room for improvement:

- NeRF requires lots of viewpoints.
- NeRF is computationally heavy - I can only use pre-trained weights on the author’s examples since the laptop doesn’t have enough graphical memory. The compute time is around 30 seconds per frame, even at the inference stage.
- NeRF needs the camera pose and orientation for each image in the training stage. Some authors use the [COLMAP](https://colmap.github.io/) tool to retrieve this information from the images. (COLMAP works similarly to the method I used to retrieve the camera’s pose). The authors of [3D Motion Magnification: Visualizing Subtle Motions with Time-Varying Neural Fields](https://3d-motion-magnification.github.io/) claim that, for real-world environments, the accuracy of these methods may not be enough for motion magnification since “inaccurate pose estimation would exacerbate the ambiguity between camera motion and scene motion, which could hinder magnifying subtle scene motions or lead to false motion magnification. Therefore, real-world data should be captured under conditions where accurate camera intrinsic and extrinsic parameters are accessible, either from reliable RGB-based SfM with textured surfaces in the scene, or from cameras that support 6-DoF tracking during capture”.
Since MotionScope does the motion magnification in 2D, the methodology would be different by avoiding the motion magnification on the fly, which may allow less accuracy.

Other approaches use multiple cameras to get the 3D displacement in a few points, not the entire image. In addition to that, they require prior camera calibration.

Possible review paper title: The use of multi-view systems on phase-based motion magnification

Possible paper structure:

- Introduction
- Phase-based motion magnification
- Multi-view systems
- Integration of Multi-view Systems and Phase-Based Motion Magnification
- Tests and results
- Conclusion

Main takeaways from the deliverables of the immersive week:

Research Questions:

- Is it more effective to combine multiple viewpoints to compute 3D motion magnification directly, or to first compute 2D motion magnification for each viewpoint and then combine them for 3D motion magnification?
- Does the latter approach reduce the need for highly accurate calibration?
- Can a single moving camera, synchronized across viewpoints, replace the use of multiple cameras for 3D motion magnification?
- Is it possible to perform 3D reconstruction using only a small number of viewpoints and without pre-calibrating the cameras?
- Is there a more effective way to present the results of 3D motion magnification?

Contributions:

- Improved Methodology for 3D Motion Magnification: By reducing calibration requirements, making the process more practical and accessible, and by using a single moving camera instead of multiple cameras, which could lower costs and simplify experimental setups.
- Efficient 3D Reconstruction with Minimal Viewpoints: By developing methods for accurate 3D reconstruction using fewer viewpoints, reducing hardware requirements and computational complexity, and exploring the potential to bypass pre-calibration, which could streamline the workflow and make the technology more user-friendly.
- Enhanced Visualization of Results: By proposing new ways to display 3D motion magnification results, such as interactive 3D meshes or point clouds, which could offer better insights and flexibility compared to traditional video-based outputs.