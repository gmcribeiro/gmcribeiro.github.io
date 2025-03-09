---
layout: post
title: Testing LightGlue
date: 2024-10-11 16:40:16
description: Meeting preparation and support
tags: [Computer Vision, Feature Matching]
categories: [meeting-support, meeting-preparation]
---

In the last meeting, we concluded that I should research more state-of-the-art solutions that solve entirely or partially the problems of camera pose retrieval and 3D reconstruction. Another idea has been to explore ways to use learning to find the homography, camera position, etc. It turns out that it is all related, and it is what people have been doing.

So far, I have only explored feature matching, and, to be honest, I don't have the knowledge (yet) of machine learning to understand how these algorithms were made. I started a machine learning course, and I did 1/4 of the course. I paused that course because I realized that my knowledge of probabilities wasn't near enough to understand the machine learning concepts. So, I'm now doing a course about probabilities for machine learning.

I tried one detector-based algorithm - LightGlue - for feature match on very challenging scenarios (drastic viewpoint changes), but the results speak for themselves:

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/LightGlue_feature_match.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/LightGlue_feature_match_2.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/10_2024/LightGlue_feature_match_3.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>


There are still some errors, but this is a massive improvement compared to what I used.