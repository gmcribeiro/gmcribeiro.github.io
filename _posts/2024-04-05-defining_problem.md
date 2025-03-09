---
layout: post
title: Towards defining the problem
date: 2024-04-05 16:40:16
description: Meeting report
tags: [Problem]
categories: [meeting-report]
---

In this meeting, we talked about my problem and João's problem.

In my case, the MotionScope can't capture movements perpendicular to the camera's plane. This can also cause problems since this motion can be perceived as movement in other directions. In addition, the motion is calculated only in the camera plane, in pixels.

The idea is to capture more than one viewpoint, identify the points in each viewpoint, and associate correspondent points across all views. Knowing the correspondence of points, it may also be possible to compute the relative position of each camera (might need more references - study these possibilities). After computing both extrinsic and intrinsic parameters for each camera, the idea is to get the 3D movement of each point.