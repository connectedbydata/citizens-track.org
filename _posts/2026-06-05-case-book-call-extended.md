---
layout: post
title: "Case Book call extended: mapping participatory projects about AI"
date: 2026-06-05 16:00:00 +0100
author: "Tim Davies"
author_url: "https://connectedbydata.org/people/tim-davies"
---

Over the last three weeks we’ve discovered over 50 examples of recent participatory public engagement involving over 18,000 participants from more than 20 countries sharing informed views on the future of Artificial Intelligence. We’ve heard about Citizens Assemblies and Juries, grassroots co-design, multi-country projects, online community projects and single-location deliberations. 

But we know we’ve only just scratched the surface. 

With just four weeks until we have the first public release of the PAVE Case Book of Participatory AI Voice and Engagement projects at the AI for Good Expo in Geneva, we need your help to identify examples of projects that demonstrate participatory, inclusive and impactful ways to bring citizen voices to the table in shaping AI. 

### **Nominate or submit a project to the case book**

[**Make your submission here**](https://forms.fillout.com/t/u7vQQNPRhpus).

It takes just a few minutes to nominate a case (just share a URL and a few brief details), and adding a full case entry should take no more than an hour if you have project reports or details to hand. 

As the map below shows, so far we’ve more examples from Europe and North America than from Africa, Asia and Latin America \- but we know a lot of that is down to our biases in terms of networks, language and prior knowledge. So, we particularly welcome help circulating the call for cases to networks in these parts of the world. s

We’re happy to accept submissions in any language (although we may have to rely on machine translation for some of our analysis for the first release in July).

![Map of participant locations, showing entries in 21 countries]({{site.baseurl}}/assets/posts/participants.png)

### **Expanding the frame: robotics, self-driving vehicles, smart cities & wider deliberations**

One of the things that’s become apparent from our early work is that much public participation about artificial intelligence is not always framed in terms of AI. 

We’re also interested in cases of participation and deliberation that generates messages that can speak to AI development and governance, which might also come from discussions about digital healthcare, robotics, self-driving cards, smart cities or many other topics. 

### **Visualising the case book**

We’ve also been experimenting over the last week with ways of display case book entries. Throughout the week of the AI for Good Expo we’ll have a booth with a large screen, table computers and printed materials, so we’re building out:

* **Public Voices Slideshow \-** a way of displaying recommendations and quotes from public deliberations across the world, and highlighting key features of the participatory processes that led to them.

* **Video Gallery** \- featuring subtitled films from participation projects. It’s been great to see many projects submitting videos from public engagement work, offering the chance to put the people affected by AI in the frame at Palexpo.

* **Case study browser** \- providing access to all the key details from the case book entries. 

You can see some of the early prototypes we’ve been building below. Over the next week we'll be working on adding some of the new PAVE branding and design to this, and iterating on ways to present material. 

<div class="post-gallery">
  <button class="gallery-thumb" data-full="{{ '/assets/posts/case.png' | relative_url }}" data-caption="Case study browser prototype">
    <img src="{{ '/assets/posts/thumbs/case.png' | relative_url }}" alt="Case study browser prototype" loading="lazy">
  </button>
  <button class="gallery-thumb" data-full="{{ '/assets/posts/slideshow.png' | relative_url }}" data-caption="Public Voices Slideshow prototype">
    <img src="{{ '/assets/posts/thumbs/slideshow.png' | relative_url }}" alt="Public Voices Slideshow prototype" loading="lazy">
  </button>
  <button class="gallery-thumb" data-full="{{ '/assets/posts/videos.png' | relative_url }}" data-caption="Video Gallery prototype">
    <img src="{{ '/assets/posts/thumbs/videos.png' | relative_url }}" alt="Video Gallery prototype" loading="lazy">
  </button>
</div>

<!-- Lightbox overlay -->
<div id="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
  <button id="lightbox-close" aria-label="Close lightbox">&times;</button>
  <figure>
    <img id="lightbox-img" src="" alt="">
    <figcaption id="lightbox-caption"></figcaption>
  </figure>
</div>

### **Preparing for the Expo**

We've also been planning other aspects of our Expo booth, with some of the main graphics already sent off to print, and furniture orders agreed. 

Over the next fortnight we'll be doing more work to make sure the PAVE booth acts as a vibrant hub for different groups working on citizen voice in AI. 

<div class="post-gallery post-gallery--square">
  <button class="gallery-thumb" data-full="{{ '/assets/posts/AI for Good 2026 Desk Light (print).png' | relative_url }}" data-caption="PAVE – Towards a Citizens' Track on AI: desk graphic for print">
    <img src="{{ '/assets/posts/thumbs/ai-for-good.png' | relative_url }}" alt="PAVE – Towards a Citizens' Track on AI: desk graphic for print" loading="lazy">
  </button>
  <button class="gallery-thumb" data-full="{{ '/assets/posts/expo.png' | relative_url }}" data-caption="AI for Good Expo booth render">
    <img src="{{ '/assets/posts/thumbs/expo.png' | relative_url }}" alt="AI for Good Expo booth render" loading="lazy">
  </button>

</div>


<style>
.post-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
  align-items: top;
}
.gallery-thumb {
  flex: 1 1 180px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.gallery-thumb:hover,
.gallery-thumb:focus-visible {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.22);
  outline: 2px solid #89afad;
  outline-offset: 2px;
}
.gallery-thumb img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: top;
  display: block;
}
.post-gallery--square .gallery-thumb {
  aspect-ratio: 1 / 1;
  flex: 1 1 200px;
}
.post-gallery--square .gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Lightbox */
#gallery-lightbox {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.88);
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(4px);
}
#gallery-lightbox.is-open {
  display: flex;
}
#gallery-lightbox figure {
  margin: 0;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
#lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 6px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
  object-fit: contain;
  animation: lb-fade-in 0.2s ease;
}
@keyframes lb-fade-in {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}
#lightbox-caption {
  color: #fff;
  font-size: 15px;
  text-align: center;
  opacity: 0.85;
  max-width: 600px;
}
#lightbox-close {
  position: fixed;
  top: 18px;
  right: 22px;
  background: rgba(255,255,255,0.12);
  border: none;
  color: #fff;
  font-size: 28px;
  line-height: 1;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;
}
#lightbox-close:hover {
  background: rgba(255,255,255,0.25);
}
</style>

<script>
(function() {
  var lightbox = document.getElementById('gallery-lightbox');
  var lbImg    = document.getElementById('lightbox-img');
  var lbCap    = document.getElementById('lightbox-caption');
  var lbClose  = document.getElementById('lightbox-close');

  function openLightbox(src, caption) {
    lbImg.src = src;
    lbImg.alt = caption;
    lbCap.textContent = caption;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('.gallery-thumb').forEach(function(btn) {
    btn.addEventListener('click', function() {
      openLightbox(btn.dataset.full, btn.dataset.caption);
    });
  });

  lbClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
})();
</script>
