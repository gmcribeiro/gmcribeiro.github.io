---
layout: post
title: Improving 3D reconstruction
date: 2024-06-21 16:40:16
description: Meeting preparation and support
tags: [Computer Vision, Feature Matching, 3D Reconstruction]
categories: [meeting-support, meeting-preparation]
---



The idea of the previous meeting was to use more viewpoints, but the current “solution” is not robust enough. So, I worked more on studying ways to improve the robustness of each pipeline step.

### Quick concept recap

Knowing the fundamental matrix (obtained by knowing at least 8 matching points between 2 images), we can map a point of the first image to a line of the second image. The correspondent point, if present in the image, will be somewhere in that line.

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/05_2024/2024-05-2314-59-48-ezgif.com-video-to-mp4-converter.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="caption">
    This narrows the search to a 1D search, simplifying the problem considerably. Doing this to the entire image allows, with the intrinsic parameters and more processing, the creation of a 3D cloud. This process is called (not entirely sure) dense matching.
</div>

I started by trying to improve the “dense matching” algorithm since the matching algorithm in the 1D search is very simplistic and not robust enough. So, I started adapting the code to be compatible with feature-detection algorithms, which I believe will give much better results but take much more time to compute.

This leads to two options:

<!-- - Send the ROI of the image for the 1D search:

    {% raw %}
    <div class="col-sm mt-3 mt-md-0" style="text-align: center">
        {% include figure.liquid loading="eager" path="assets/posts/img/06_2024/Untitled - Frame 1(1).jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    {% endraw %}
     -->
<ul>
    <li>
        Send the ROI of the image for the 1D search:
        <div class="col-sm mt-3 mt-md-0" style="text-align: center">
        {% include figure.liquid loading="eager" path="assets/posts/img/06_2024/Untitled - Frame 1(1).jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
        </div>
        I could not figure out if the feature-detection algorithms ignore the black region or not, and that's the reason why there is an option 2
    </li>
    <li>
        The second option is more tricky. It involves sending a rectangular image to the feature-detection algorithm to ensure that only the ROI is analyzed. To achieve that, the first step is to rotate the image with the angle of inclination of the epipolar line resulting on the image of the window “Rotated image”; This way, the ROI is a rectangular section of the image, like in the window “Cropped to the window height”, removing the black regions.
        <div class="col-sm mt-3 mt-md-0" style="text-align: center">
            {% include figure.liquid loading="eager" path="assets/posts/img/06_2024/Screenshot_20240604_174243 (copy).png" class="img-fluid rounded z-depth-1" zoomable=true%}
        </div>
        
        I have some doubts about this method, starting with the fact that the epipolar line is not well defined (the thickness of the line is not 1 pixel—window “Section of the cropped image”). Worse than that, I don’t know if applying the feature-detection algorithm to the entire image with a very high number of keypoints and then applying the ROI only to the feature-match algorithm won't give similar results with less computational cost.
    </li>
</ul>

Eventually, I put these studies on hold and studied ways to find the common region between the two viewpoints. This will help in the future to solve the occlusions problem. ChatGPT and Bing chat gave me the following directions:

<ul>
    <li>
    “Traditional” approaches:
    <ul>
        <li>
            Estimate homography using feature detection and matching algorithms and use the homography to warp one image onto the other and find common regions. Here is an illustration of warping operation:<br>
            Image 1:
            <div class="col-sm mt-3 mt-md-0" style="text-align: center">
            {% include figure.liquid loading="eager" path="assets/posts/img/06_2024/img_0_1.png" class="img-fluid rounded z-depth-1" zoomable=true%}
            </div>
            Image 2:
            <div class="col-sm mt-3 mt-md-0" style="text-align: center">
            {% include figure.liquid loading="eager" path="assets/posts/img/06_2024/img_0_2.png" class="img-fluid rounded z-depth-1" zoomable=true%}
            </div>
            Aligned image 1:
            <div class="col-sm mt-3 mt-md-0" style="text-align: center">
            {% include figure.liquid loading="eager" path="assets/posts/img/06_2024/aligned image 1_screenshot_20.06.2024.png" class="img-fluid rounded z-depth-1" zoomable=true%}
            </div>
            The chat only suggests doing a bit-wise operation to find the common region, but that doesn’t make sense since the background is totally different. I kept this here because the object (a sheet of paper) gets a similar shape between the two images, and I could use that to identify and isolate the object.     
        </li>
        <li>
        Block Comparison: Basically, divide the image into small blocks and compare each block of image 1 to every block of image 2 and save the blocks with similarity bigger than a threshold
        </li>
    </ul>
    </li>
    <li>
    Machine learning: From the two chats, the suggestions were: Siamese networks, collaborative segmentation, stereo matching networks, image registration networks, and deep image matching. I didn’t explore these fields because I felt that I needed a deeper understanding of machine learning, and I started taking an online course on the subject.
    </li>

</ul>

During these studies, I had a problem with my computer: I neglected the updates and started not being able to install anything. I formatted the computer and took the opportunity to start working only on docker environments to prevent losing the dependencies of the code that I have in the event of having to format the computer again. When I tested the code, it was much slower in the C++ part. After building from source different versions of OpenCV, GCC an G++ I finally found the issue 🤦‍♂️:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
        {% include figure.liquid loading="eager" path="assets/posts/img/06_2024/2024-06-20-164316_hyprshot.png" class="img-fluid rounded z-depth-1" zoomable=true width='250' %}
</div>