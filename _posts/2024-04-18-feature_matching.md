---
layout: post
title: Feature Matching
date: 2024-04-18 16:40:16
description: Meeting preparation and support
tags: [Computer Vision, Feature Matching]
categories: [meeting-support, meeting-preparation]
---

This week, I defined the problem and the objectives. In addition to that, I did the planning for the first stage of the project (see [Goals]({{ site.baseurl }}) and [Tasks]({{ site.baseurl }}/timeline)).

In terms of development itself, I tried something that I had studied before in SAVI (UA course): The SIFT algorithm (details: [Feature recognition and matching]({{ site.baseurl }}/courses/computer_vision/feature_matching/sift)). Using this algorithm, we get an array of features for n objects in the image. These features are based on the object's appearance at particular interest points and are invariant to image scale and rotation. They are also robust to changes in illumination, noise, and **minor changes in viewpoint**.

Using SIFT in two images, we get two arrays of features. These features are essentially vectors, and we can compute the distance between vectors from the two images. The correspondent objects between images have a small distance between feature vectors. The following image illustrates the results. Detected objects with unique features are marked with a circle, and the corresponding objects are connected with a line.

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/posts/img/04_2024/matches_example.png" class="img-fluid rounded z-depth-1" zoomable=true%}
        <em>Sift features = 1000 and David Lowe’s ratio = 30%</em>
    </div>
</div>
<br>

However, there is another problem with this… Most of the time, more than one object is very similar (thus, having a small distance between feature vectors) to the corresponding one. The following image shows this problem—there are incorrect correspondences between objects, but the objects are similar.

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/posts/img/04_2024/matches_example4(2).jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
        <em>Sift features = 1000 and without David Lowe's filtration.</em>
    </div>
</div>
<br>

There are various techniques to mitigate this issue. One that works very well is using the Lowe's ratio, which is the ratio between the best and second best correspondences for an object. Using this, we can reject the most ambiguous correspondences and keep the robust ones. Using this, most of the correspondences between objects from the previous image were rejected:

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/posts/img/04_2024/matches_example2.jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
        <em>Sift features = 1000 and David Lowe’s ratio = 30%</em>
    </div>
</div>
<br>

Increasing the number of objects gives us a good amount of valid correspondence.

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/posts/img/04_2024/matches_example3.jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
        <em>Sift features = 5000 and David Lowe’s ratio = 30%</em>
    </div>
</div>
<br>

However, SIFT has a big limitation, which is the change of viewpoint:

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/posts/img/04_2024/matches_example4(1)(4).png" class="img-fluid rounded z-depth-1" zoomable=true%}
        <em>Sift features = 40000 and David Lowe’s ratio = 30%</em>
    </div>
</div>
<br>