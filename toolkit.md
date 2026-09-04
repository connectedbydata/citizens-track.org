---
layout: page
title: "Creating a Toolkit for Community Assemblies on AI"
permalink: /toolkit/
---

Community assemblies provide space for public dialogue on AI. There are many forms of community assembly. We are focussing on a model that generally involves:

* 🕐 **4 - 16 hours** of participation (Usually over 1 - 2 days)
* 👥 **Intentional invitations**: aiming for diversity, usually involving 15 - 50 people
* 📚 **A structured agenda** and learning materials
* 💬 **One or more discussion modules**, often with common questions
* 📝 **Structured feedback activities** to share individual and consensus views and actions

Over the coming months, the Citizens’ Track on AI aims to support community assemblies across the world that can feed into the next UN Global Dialogue on AI Governance, the 2027 Geneva AI Summit, and local and national AI governance processes. 

To enable this, **we’re running a co-design sprint over October 2026 to create a Community Assembly toolkit**, and a series of events in September to feed into the toolkit design.

<div class="toolkit-cta-card">
  <div class="cta-badge">
    <i class="fa fa-users"></i> Cohort Applications Open
  </div>
  <h3 class="cta-heading">Apply to join the October Co-Design Sprint</h3>
  <p class="cta-intro">
    Help shape an open, globally adaptable toolkit for community assemblies on AI. We're seeking a diverse cohort of 10–15 practitioners, educators, deliberative designers, and community facilitators to co-create the resource over five weekly online sessions and asynchronous collaboration.
  </p>
  <div class="cta-highlights">
    <div class="cta-highlight-item">
      <i class="fa fa-calendar-check-o"></i>
      <div><strong>Deadline:</strong> 25th Sept 2026 <em>(rolling review)</em></div>
    </div>
    <div class="cta-highlight-item">
      <i class="fa fa-clock-o"></i>
      <div><strong>Commitment:</strong> 2–6 hrs/week across October</div>
    </div>
    <div class="cta-highlight-item">
      <i class="fa fa-globe"></i>
      <div><strong>Format:</strong> 5 weekly online calls + async drafting</div>
    </div>
  </div>
  <div class="cta-action-area">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSetV2DYnT9ZRv1EiU0UPleI6QTQQAPUh3cYO6YG2N3-q0Ul1g/viewform?usp=dialog" target="_blank" class="btn-apply">
      Apply to Join the Cohort <i class="fa fa-external-link"></i>
    </a>
    <p class="cta-note">Participation is free. Spaces are limited to maintain a collaborative cohort.</p>
  </div>
</div>

Building on learning from the [Global Citizens' Assembly](https://globalassemblies.org/en/), and the [Assemblis Community Assembly Guide](https://assemblis.org/en/about/guide/), we're aiming to create a resource that contains: 

* Practical guidance on running a community assembly;
* Accessible and adaptable modules to support deliberation on topics related to AI with diverse public participation groups;
* Suggested activities to capture and document group feedback.

We hope this will result in a ready-to-use resource for anyone who wants to organise their own community assembly on AI, supporting:

* Capacity building  
* Critical AI literacy; and   
* Democratic dialogue 

about future social impacts of artificial intelligence and emerging technologies. 

## Join the first co-design sprint

We know that many other people are also thinking about the design of resources like this, and that effective resources need to be adaptable to different cultural, linguistic and local contexts. That’s why we’re inviting a cohort to join us over October who can bring experience and expertise related to:

* Building critical AI literacy amongst non-experts; 
* Designing participation and deliberation activities;
* Current issues in AI governance;
* Facilitating community assemblies.

The sprint will take the form of **five 90 minute online meetings** (weekly) **and asynchronous working** over the course of the month. 

Participants are expected to give 2 - 6 hours a week to their participation, and to draft, review or suggest ideas and materials in between calls. 

As this is part of the early start-up phase of the Citizens Track on AI, we are not in a position to offer funding to sprint participants. 

We are offering this as a free programme, designed to also be of value to participants who may be working on critical AI literacy and capacity building, developing and planning their own community engagement and learning activities around AI, or interested in facilitating community assemblies on AI in the future. 

We are seeking to involve approximately 10 - 15 participants in the design sprint, representing a broad geographic and sectoral spread of organisations, backgrounds and networks. Apply using the link above. 

To provide an opportunity to find out more, and also invite a larger number of people to input, we are holding a series of ‘briefing and workshop sessions’ in September, both online and in-person.

### Join a briefing and design workshop session 

We're running a series of online and in-person workshops in September ahead of the co-design cohort.

<div class="toolkit-events-container" style="display: flex; flex-direction: column; gap: 24px; margin: 25px 0 35px;">
{% assign all_events = site.events | sort: 'date' %}
{% for event in all_events %}
{% if event.path contains "2026-09-14" or event.path contains "2026-09-16" or event.path contains "2026-09-18" %}
  <div class="event-card">
    <div class="event-card-header">
      <div class="event-date-badge">
        <span class="event-month">{{ event.date | date: "%b" }}</span>
        <span class="event-day">{{ event.date | date: "%d" }}</span>
      </div>
      <div class="event-header-details">
        <div class="event-full-date">
          <i class="fa fa-calendar-o"></i> {{ event.date | date: "%A, %B %d, %Y" }}
        </div>
        {% if event.location %}
        <div class="event-location-tag">
          <i class="fa fa-map-marker"></i> {{ event.location }}
        </div>
        {% endif %}
      </div>
    </div>
    <div class="event-card-body">
      <h3 class="event-title" style="margin-top: 0;">
        <a href="{{ event.url | relative_url }}">{{ event.title }}</a>
      </h3>
      <p class="event-excerpt" style="margin-bottom: 0;">
        {{ event.excerpt | strip_html }}
      </p>
    </div>
    <div class="event-card-footer">
      <a href="{{ event.url | relative_url }}" class="event-details-link">
        View Details <i class="fa fa-arrow-right"></i>
      </a>
      {% if event.registration_link %}
      <a href="{{ event.registration_link }}" target="_blank" class="btn btn-primary btn-sm event-register-btn">
        <i class="fa fa-ticket"></i> Register
      </a>
      {% else %}
      <span class="text-muted" style="font-size: 13px; font-family: 'Outfit', sans-serif;">
        <i class="fa fa-clock-o"></i> Registration coming soon
      </span>
      {% endif %}
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

## Use the toolkit 

<div class="toolkit-cta-secondary">
  <div class="secondary-content">
    <h4>Want to use the toolkit to run your own Community Assembly?</h4>
    <p>Sign up to receive the toolkit when it launches, get access to organizer guidance, and connect with the global Citizens’ Track network.</p>
  </div>
  <a href="/#subscribe" class="btn-secondary-action">
    Register Interest <i class="fa fa-arrow-right"></i>
  </a>
</div>