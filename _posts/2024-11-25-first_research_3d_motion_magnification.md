---
layout: post
title: First research on 3D motion magnification
date: 2024-11-25 16:40:16
description: Meeting preparation and support
tags: [Computer Vision, Motion magnification, 3D Motion magnification]
categories: [meeting-support, meeting-preparation]
---

Works on 3D motion magnification

[3D Motion Magnification: Visualizing Subtle Motions with Time-Varying Neural Fields](https://3d-motion-magnification.github.io/)

<div class="col-sm mt-3 mt-md-0" style="text-align: center">
    {% include video.liquid path="assets/posts/vid/11_2024/fork_3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
</div>

This approach is based on [NeRF](https://www.matthewtancik.com/nerf) and already supports the use of a single-camera

Research gaps:

- NeRF requires lots of viewpoints.
- NeRF is computationally heavy - I can only use pre-trained weights on the author’s examples since the laptop doesn’t have enough graphical memory. The compute time is around 30 seconds per frame, even at the inference stage.
- NeRF needs the camera pose and orientation for each image in the training stage. Some authors use the [COLMAP](https://colmap.github.io/) tool to retrieve this information from the images. (COLMAP works similarly to the method I used to retrieve the camera’s pose). The authors of [3D Motion Magnification: Visualizing Subtle Motions with Time-Varying Neural Fields](https://3d-motion-magnification.github.io/) claim that, for real-world environments, the accuracy of these methods may not be enough for motion magnification since “inaccurate pose estimation would exacerbate the ambiguity between camera motion and scene motion, which could hinder magnifying subtle scene motions or lead to false motion magnification. Therefore, real-world data should be captured under conditions where accurate camera intrinsic and extrinsic parameters are accessible, either from reliable RGB-based SfM with textured surfaces in the scene, or from cameras that support 6-DoF tracking during capture”.
Since MotionScope does the motion magnification in 2D, the methodology would be different by avoiding the motion magnification on the fly, which may allow less accuracy.

The following methods don´t have a 3D graphical representation of the motion magnification. They present quantitative displacement results on convenient points (where it is possible to match the points between two viewpoints with reliability). All of them require camera calibration.

[Feasibility of extracting operating shapes using phase-based motion magnification technique and stereo-photogrammetry](https://doi.org/10.1016/j.jsv.2017.06.003)

- Improvement of the data quality
- 3D information

[3D mode shapes characterisation using phase-based motion magnification in large structures using stereoscopic DIC](https://doi.org/10.1016/j.ymssp.2018.02.006)

- Reduction of noise, allowing the capture of low-amplitude displacements

[Target-free 3D tiny structural vibration measurement based on deep learning and motion magnification](https://doi.org/10.1016/j.jsv.2022.117244)

- This method uses the Super Glue feature match algorithm to find the matches and then triangulate to get the 3D displacement.

Research gaps:

- Uncalibrated cameras
- Interactive results presentation - The idea is to generate a mesh/point cloud that we can observe from any perspective

Possible review paper title: The use of multi-view systems on phase-based motion magnification

Deliverables for the immersive week:

{% pdf "{{site.baseurl}}/assets/posts/pdf/11_2024/1_imersive_week.pdf" %}<br>

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

Para a sincronização podiam ser geradas mais imagens para completar o ciclo de vibração e garantir que os pontos estão no mesmo sitio em todos os pontos de vista, ajudando também na reconstrução 3D continua - combate o problema da subamostragem;

Perceber o trabalho por de trás do motion scope para perceber o que é que pode estar a faltar e replicar a metodologia do motion scope para conseguir sincronizar pontos de vista; Se não resolver tentar geração interpolada de imagens

Uma ideia - uma rede que crie um frame entre dois seguidos e depois chamar iterativamente

recusrive generative network

O que dar a rede?

Interpolation of sub-sampling (…) - começar por sinais e dps ir para coisas mais complexa

Tentar arranjar um simulador de vibrações para conseguir arranjar um ground truth - esta pode ser a primeira contribuição ao dar para sintetizar imagens

**Suma:  Simulador; interpolação de imagens; 3D motion magnification**