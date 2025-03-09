---
layout: post
title: Simulating 2D motion magnification
date: 2025-02-14 16:40:16
description: Meeting support
tags: [Motion magnification, Simulation]
categories: [meeting-support]
---

## Velocity magnified

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/vel_ground_truth_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

Magnification using the known pixel shifts from the original video and magnifying the velocity of the pixels.

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/vel_synthetic_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

Magnification applied directly to the original video without knowing the ground truth of the pixel shifts using a simplified version of phase-based motion magnification.

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/vel_phase_magnified_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

## Shift magnified problem

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/shift_prob_ground_truth_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/shift_prob_synthetic_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/shift_prob_phase_magnified_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

## Shift magnified problem with velocity magnification

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/shift_vel_ground_truth_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/shift_vel_synthetic_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/shift_vel_phase_magnified_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

## Higher resolution

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/hd_ground_truth_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/hd_synthetic_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/02_2025/hd_phase_magnified_motion.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>