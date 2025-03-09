---
layout: post
title: LightGlue on 3D reconstruction
date: 2024-10-25 16:40:16
description: Meeting preparation and support
tags: [Computer Vision, Feature Matching, 3D Reconstruction]
categories: [meeting-support, meeting-preparation]
---

The current “final” goal can be divided into two parts:

"<span style="color:DodgerBlue">Identification techniques of operational vibration modes with MotionScope</span> <span style="color:MediumSeaGreen; font-weight:bold;">assisted by stereoscopy</span>".





From the beginning, I’ve been focusing on the “<span style="color:MediumSeaGreen; font-weight:bold;">assisted by stereoscopy</span>” to create a 3D representation from 2D images. The 3D representation is essential for easier visualization of the magnified motion of the objects. 

Initial question: <span style="color:MediumSeaGreen; font-weight:bold;">How can we create a 3D representation from 2D images?</span>

1 - Stereo-based techniques (including multi-view)

- Accurately calibrated cameras
- Dense feature matching  across images captured from slightly different viewing angles
- Triangulation to recover the 3D coordinates of the image pixels.

2- Structure from Motion

- This recovers 3D structure by analyzing the motion of the camera and the changes in the images - The only way that I see that this could work is as an auxiliary solution to get more information about the object in the study and about the new camera position and parameters while moving from viewpoint A to viewpoint B.

3 - Shape-from-Silhouette

- It reconstructs the 3D shape using the silhouettes of objects from multiple views. This solution was first published in 1994 and is generally used to generate rough, undetailed 3D models quickly. I could try it to see how good the results are and check if this technique is helpful for this application, as it is also used in the loss function of some deep-learning models

4 - Photometric Stereo

- Uses variations in shading to infer the 3D shape of objects - I don’t think this is a good path to follow since motion scope relies on the quality of the light source, conflicting with this technique.

5 - Learning-based

- There are multiple approaches with learning-based techniques, such as:
    - 3D reconstruction problem as a recognition problem
    - Multi-tasked neural networks - This allows for better generalization of feature recognition
    - End-to-end 3D reconstruction - eliminating the need to design multiple handcrafted stages
    - Single and multi-image 3D reconstruction
    - Depth estimation
    - Disparity maps
    - Feature matching
- Some don’t require intrinsic or extrinsic parameters


<span style="color:MediumSeaGreen; font-weight:bold;">How can we evaluate 3D representations and compare different methods?</span>

<span style="color:MediumSeaGreen; font-weight:bold;">Are there good enough solutions?</span>

<span style="color:MediumSeaGreen; font-weight:bold;">Can I combine some techniques to improve the results for our use case?</span>


Until now, what I have done is a 3D reconstruction using uncalibrated stereo, which is similar to **Stereo-based techniques** but with an additional step of “calibration” in the beginning:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/Untitled-Frame-3.svg" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

In the previous meeting, I showed a promising algorithm for feature-matching, the LightGlue. My idea was to use this algorithm (or something similar) for the “Camera calibration”.

A small change in viewpoint:
Results with SIFT:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/sift_easy_matching.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>


<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/2024-10-24-182342_hyprshot.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

Results with LightGlue:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/lightglue_easy_matching.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/lightglue_easy.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

A more significant change in viewpoint:

Results with SIFT:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/sift_hard_matching.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/sift_hard.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

Results with LightGlue:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/lightglue_hard_matching.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/lightglue_hard.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

Finally, with a big viewpoint change:

SIFT:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/sift_hardest_matching.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

There are not enough matching points to compute camera poses and 3D reconstruction

LightGlue:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/lightglue_hardest_matching.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

Something went wrong with the camera poses with lightglue, but I haven’t figured out the issue yet.

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/lightglue_hardest.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

Since this new kind of feature-matching algorithm can find so many matches, I wonder if I could use this matching for the “dense matching” part… It would need more viewpoints but would be much lighter computationally. I could also use the epipolar lines to validate the results of the feature-matching…

Although there seem to be many feature matches, there are very few for a 3D representation. Dense matching is still needed.

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/2024-10-25-105955_hyprshot.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

Métricas

Criar outliers artificiais para robustez

automatizar a definição da dificuldade

Gazebo