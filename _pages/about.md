---
layout: about
title: about
permalink: /
subtitle: PhD student at University of Aveiro

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<!-- Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them. -->

## About my PhD

This page provides an overview of the problem that motivates this project and the strategy to solve it. Currently, the title of my PhD is **Identification techniques of operational vibration modes assisted by stereoscopy**.

#### Problem description

Most of the techniques currently available to identify operational vibration modes using video cameras rely only on one viewpoint. The problem is that the results could be badly interpreted with only one point of view since certain vibration modes look similar to others when projected to the camera's plane, causing “optical illusions.” The following GIF is a section of a motionscope output video.

<div class="row mt-3" style="text-align: center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/problem_examples/motion_scope_drone_arm.gif" class="img-fluid rounded z-depth-1" width='100' style="margin:auto; display:block;" %}
    </div>
</div>

In this image, it is possible to see that, if we didn't know what to expect, it would be tough to guess if the drone's arm is moving right and left or back and forth relative to the image plane.