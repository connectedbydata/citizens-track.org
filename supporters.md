---
layout: archive
title: Supporters
permalink: /supporters/
description: "Organizations, institutions, and networks supporting the Citizens' Track on AI."
---

<section class="supporters-section" style="padding: 60px 0 100px; background-color: #fdfcfc;">
    <div class="container">
        <!-- Intro & Call to action -->
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center" style="margin-bottom: 45px;">
                <p class="lead" style="font-size: 19px; line-height: 1.7; color: #242a38; margin-bottom: 25px;">
                    The Citizens' Track on AI is supported by a growing global coalition of civil society organisations, research institutions, deliberative practitioners, and community networks committed to citizen participation and democratic governance of AI.
                </p>
                <div style="margin-top: 20px;">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDPVcBTkAEHh_ETHUBiZu2TZoDQJDy8X_FaDfcQ2W756ycfA/viewform?usp=header"
                        target="_blank" rel="noopener" class="btn btn-primary btn-xl">
                        Become a Supporter
                    </a>
                </div>
            </div>
        </div>

        <!-- Supporters Cards Grid -->
        <div class="row supporters-grid">
            {% for partner in site.data.partners %}
            {% assign has_valid_url = false %}
            {% if partner.url and partner.url != "#" and partner.url != "" %}
                {% assign has_valid_url = true %}
            {% endif %}
            
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" style="margin-bottom: 30px;">
                <div class="supporter-card">
                    <div class="supporter-logo-box">
                        {% if has_valid_url %}
                        <a href="{{ partner.url }}" target="_blank" rel="noopener" title="{{ partner.name }} (opens in new tab)">
                            <img src="{{ partner.logo | relative_url }}" alt="{{ partner.name }} logo" class="supporter-card-logo{% if partner.invert_on_light %} invert-dark{% endif %}">
                        </a>
                        {% else %}
                        <img src="{{ partner.logo | relative_url }}" alt="{{ partner.name }} logo" class="supporter-card-logo{% if partner.invert_on_light %} invert-dark{% endif %}">
                        {% endif %}
                    </div>
                    <div class="supporter-info">
                        <h3 class="supporter-name">
                            {% if has_valid_url %}
                            <a href="{{ partner.url }}" target="_blank" rel="noopener" title="{{ partner.name }} (opens in new tab)">
                                {{ partner.name }}
                                <i class="fa fa-external-link supporter-link-icon" aria-hidden="true"></i>
                            </a>
                            {% else %}
                            {{ partner.name }}
                            {% endif %}
                        </h3>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>

        <!-- Alphabetical Supporter Directory -->
        <div class="row" style="margin-top: 50px;">
            <div class="col-lg-10 col-lg-offset-1">
                <div class="supporter-directory-card">
                    <h2 class="supporter-directory-title">
                        <i class="fa fa-list-ul" style="color: #89afad; margin-right: 10px;"></i>
                        All Supporters
                    </h2>
                    <hr class="supporter-directory-divider">
                    {% assign sorted_partners = site.data.partners | sort_natural: 'name' %}
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="supporter-directory-list">
                                {% assign total_count = sorted_partners.size %}
                                {% assign half_count = total_count | divided_by: 2 | plus: 1 %}
                                {% for partner in sorted_partners %}
                                {% if forloop.index <= half_count %}
                                <li>
                                    {% if partner.url and partner.url != "#" and partner.url != "" %}
                                    <a href="{{ partner.url }}" target="_blank" rel="noopener">
                                        {{ partner.name }}
                                    </a>
                                    {% else %}
                                    <span>{{ partner.name }}</span>
                                    {% endif %}
                                </li>
                                {% endif %}
                                {% endfor %}
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="supporter-directory-list">
                                {% for partner in sorted_partners %}
                                {% if forloop.index > half_count %}
                                <li>
                                    {% if partner.url and partner.url != "#" and partner.url != "" %}
                                    <a href="{{ partner.url }}" target="_blank" rel="noopener">
                                        {{ partner.name }}
                                    </a>
                                    {% else %}
                                    <span>{{ partner.name }}</span>
                                    {% endif %}
                                </li>
                                {% endif %}
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom CTA -->
        <div class="row" style="margin-top: 60px;">
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <div class="supporter-cta-box">
                    <h3 style="font-family: 'Outfit', sans-serif; font-weight: 700; color: #242a38; margin-top: 0; margin-bottom: 12px;">
                        Join Our Network of Supporters
                    </h3>
                    <p style="color: #4a5568; margin-bottom: 20px; font-size: 15px;">
                        If your organization is interested in collaborating on participatory AI initiatives or backing the Citizens' Track, we would love to connect.
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDPVcBTkAEHh_ETHUBiZu2TZoDQJDy8X_FaDfcQ2W756ycfA/viewform?usp=header"
                        target="_blank" rel="noopener" class="btn btn-default btn-xl" style="background-color: #242a38; color: white; border: none;">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
