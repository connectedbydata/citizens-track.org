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

To enable this, **we’ve been running a co-design sprint over October 2026 to create a Community Assembly toolkit**, and we ran a series of events in September to feed into the toolkit design.

<div class="toolkit-cta-card">
  <div class="cta-badge">
    <i class="fa fa-users"></i> Coming soon
  </div>
  <h3 class="cta-heading">The Community Assembly Toolkit</h3>
  <p class="cta-intro">
    In November we will share the first draft of the Community Assembly Toolkit, to help you organise your own local dialogue on AI. We're working with our co-design cohort to create a flexible resource that can step groups through through learning, dialogue and action. 
  </p>
  <div class="cta-highlights">
    <div class="cta-highlight-item">
      <i class="fa fa-calendar-check-o"></i>
      <div><strong>Launching:</strong> mid-November 2026 <em>(rolling review)</em></div>
    </div>
    <div class="cta-highlight-item">
      <i class="fa fa-clock-o"></i>
      <div><strong>Containing:</strong> Workshop agendas, worksheets, facilitator guidance</div>
    </div>
    <div class="cta-highlight-item">
      <i class="fa fa-globe"></i>
      <div><strong>Translation ready:</strong> Localise the toolkit to deliver with your community </div>
    </div>
  </div>
  <div class="cta-action-area">
    <a href="/#subscribe" target="_blank" class="btn-apply">
      Get updates when the toolkit launches <i class="fa fa-external-link"></i>
    </a>
    
  </div>
</div>


## The Co-design Sprint

We know that many other people are also thinking about the design of resources like this, and that effective resources need to be adaptable to different cultural, linguistic and local contexts. That’s why we’ve been working with a fantastic cohort of collaborators to join us over October who can bring experience and expertise related to:

* Building critical AI literacy amongst non-experts; 
* Designing participation and deliberation activities;
* Current issues in AI governance;
* Facilitating community assemblies.

The sprint is taking the form of **five 90 minute online meetings** (weekly) **and asynchronous working** over the course of October, and we'll be sharing results soon.

### Workshop reports

We've run a series of online and in-person workshops in September and October in support of the co-design cohort.

<div class="toolkit-events-container" style="display: flex; flex-direction: column; gap: 24px; margin: 25px 0 35px;">
{% assign all_events = site.events | sort: 'date' | reverse  %}
{% for event in all_events %}
{% if event.path contains "2026-09-14" or event.path contains "2026-09-16" or event.path contains "2026-09-18" or event.path contains "2026-09-22" or event.path contains "2026-10-20" %}
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
        {% assign event_time = event.time %}
        {% if event_time == nil or event_time == "" %}
            {% assign time_check = event.date | date: "%H:%M" %}
            {% if time_check != "00:00" %}
                {% assign event_time = event.date | date: "%H:%M %Z" %}
            {% endif %}
        {% endif %}
        {% if event_time %}
        <div class="event-time-tag">
          <i class="fa fa-clock-o"></i> {{ event_time }}
        </div>
        {% endif %}
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
      {% if event.writeup %}
          <a href="{{ event.url | relative_url }}" target="_blank" class="btn btn-primary btn-sm event-register-btn">
             Read writeup
          </a>
      {% else %}
        {% if event.registration_link %}
          <a href="{{ event.registration_link }}" target="_blank" class="btn btn-primary btn-sm event-register-btn">
            <i class="fa fa-ticket"></i> Register
          </a>
          {% else %}
          <span class="text-muted" style="font-size: 13px; font-family: 'Parkinsans', Arial, sans-serif;">
            <i class="fa fa-clock-o"></i> Registration coming soon
          </span>
        {% endif %}
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