---
layout: post
title: Fringe projection and digital image correlation
date: 2025-07-17 00:40:16
description: Meeting support
tags: [Motion magnification, Fringe projection, DIC]
categories: [meeting-support]
---
## Phase-based motion magnification for the measurement of subtle 3D deformation maps with FP + 2D-DIC


<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/1-s2.0-S0263224122003840-gr1.jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>


<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/1-s2.0-S0888327019302377-gr2.jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>


## Motion magnification

Implementation of the MIT paper (Matlab) in Python - [GitHub](https://github.com/aloyisus/euler_vid_mag)

Other implementations:

- [Matlab (from the authors)](https://people.csail.mit.edu/nwadhwa/phase-video/video/)
- [PyTorch](https://github.com/itberrios/phase_based)


<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/07_2025/car_engine.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>


<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/07_2025/car_engine_out.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>



## Fringe projection

### Reference and object images

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/image_source_fringe.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

### Result in 3D

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/3d_fringe.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>


## Digital image correlation


<div class="col-sm mt-3 mt-md-0" style="width: 50%; margin: auto; text-align: center">
    {% include video.liquid path="assets/posts/vid/07_2025/dic_example.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/region_low_displacement.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/low_displacement.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>


<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/region_high_displacement.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
{% include figure.liquid loading="eager" path="assets/posts/img/07_2025/high_displacement.png" class="img-fluid rounded z-depth-1" zoomable=true%}
</div>