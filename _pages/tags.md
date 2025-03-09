---
layout: page
title: Tag list
permalink: /tags/
---

[Return to Reports]({{ site.baseurl }}/reports/)

<ul>
{% for tag in site.tags %}
  <li><a href="{{ site.baseurl }}/reports/tag/{{ tag[0] | downcase }}/">{{ tag[0] }}</a></li>
{% endfor %}
</ul>

<!-- <ul>
{% for tag in site.tags | sort %}
  <li><a href="{{ site.baseurl }}/reports/{{ tag[0] }}/">{{ tag[0] }}</a></li>
{% endfor %}
</ul> -->



<!-- {% for tag in site.tags %}

[{{ tag[0] }}]({{ site.baseurl }}/reports/tag/{{ tag[0] }}/)

{% endfor %} -->

<!-- {{ site.tags }} -->