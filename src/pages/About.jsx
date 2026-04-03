
// About.jsx
import React from "react";
import "./About.css";
import MemberCard from "../components/About/memberCard";

function About() {
  const teamMembers = [
    {
      image: `${import.meta.env.BASE_URL}IMG_3604.jpg`,
      name: "Uthpala Samarawikrama",
      role: "Content Creator",
      // description: "A visionary with decades of high-fashion editorial. Sofia leads The Atelier, bringing runway-quality storytelling to the wedding industry."
    },
    {
      image: `${import.meta.env.BASE_URL}IMG_0219.jpg`,
      name: "Madara Samarawikrama",
      role: "Content Creator",
      // description: "The logistical artist behind every frame aligns with Sofia's vision, mastering the balance between chaos and cinematic calm."
    },
    {
      image: `${import.meta.env.BASE_URL}IMG_3605.jpg`,
      name: "Pasanthi Athukorala",
      role: "Content Creator",
      // description: "With an eye for rhythm and visual detail, Elena weaves raw footage into elegant heirlooms that resonate across generations."
    },
    {
      image: `${import.meta.env.BASE_URL}IMG_3603.jpg`,
      name: "Minindu Nakandala",
      role: "Content Creator",
      // description: "With an eye for rhythm and visual detail, Elena weaves raw footage into elegant heirlooms that resonate across generations."
    }
  ];

  return (
    <div className="about">
      {/* Banner */}
      <section className="banner">
        <div className="banner-overlay">
          <h1 className="our-story-title">Our Story</h1>
          <p>Est. 2024</p>
        </div>
      </section>


      {/* Story Section */}
      <section className="story-section">
        <img src={`${import.meta.env.BASE_URL}wedding_moment.png`} alt="Wedding moment" />
        <div className="story-text">
          <h2>Capturing the Soul of the Moment</h2>
          <p>
            At The Wedding Story, we believe that the most profound memories aren’t
            just seen; they are felt. Our philosophy is rooted in the art of the
            Unseen — those fleeting, soulful instances that define the essence of
            your celebration.
          </p>
          <p>
            We’ve moved beyond traditional documentation. By blending editorial
            precision with emotional intimacy, we create a digital tapestry that
            mirrors the authentic heartbeat of your wedding day. It’s about the
            nervous exhale before the aisle, the quiet glance across a crowded
            room, and the raw joy that transcends the lens.
          </p>
          <p>
            Our commitment is to your legacy. We don’t just create content; we
            archive emotions in their purest, most high-fashion form.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>The Creative Minds</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <MemberCard 
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>Mobile-First Curation</h3>
          <p>
            Optimized for modern devices. Our content design philosophy fits the
            fine cinematic memories into smartphones and tablets.
          </p>
        </div>
        <div className="feature">
          <h3>Instant Delivery</h3>
          <p>
            Relive the magic instantly through high-fidelity, real-time digital
            previews of your celebration’s emotional touchpoints.
          </p>
        </div>
        <div className="feature">
          <h3>Editorial Polish</h3>
          <p>
            Every digital album undergoes our signature color grading and
            composition refinement for a cohesive aesthetic.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to archive your story?</h2>
        <p>
          Limited commissions available for 2025/2026. Let’s create something
          timeless.
        </p><br></br>
        <button>Inquire about your date</button>
      </section>
    </div>
  );
}

export default About;