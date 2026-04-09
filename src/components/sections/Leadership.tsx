import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}

const boardOfDirectors: TeamMember[] = [
  {
    name: "Rizwan Qaiser",
    role: "Founder & Chairman",
    bio: "20 years building technology platforms and go-to-market infrastructure across four continents. Founder & CEO of Autonomous Technologies. Previously led product and engineering at scale in fintech, ecommerce, and enterprise SaaS. Based in Karachi.",
    photo: "/images/team-rizwan.png",
    linkedin: "https://www.linkedin.com/in/rizwanqaiser1/",
  },
  {
    name: "Abdullah Abid",
    role: "Co-Founder & CTO",
    bio: "Pakistan's youngest certified Java engineer at age 10. Full-stack architect with deep expertise in AI infrastructure, distributed systems, and model deployment. Previously engineering lead at Crowdbotics (YC W18). Co-founded Memox, an AI sales automation platform.",
    photo: "/images/team-abdullah.png",
    linkedin: "https://www.linkedin.com/in/mabdullahabid/",
  },
];

const openRoles = [
  { title: "Chief Executive Officer", description: "A visionary leader with deep networks across Pakistani government, international development, and academia. Someone who can rally institutional support and represent Zahin on the world stage." },
  { title: "Chief Research Officer", description: "A published AI researcher with expertise in multilingual NLP, foundation models, or computational linguistics. Lead the technical vision from Gemma fine-tuning to Zahin-1." },
  { title: "Head of Partnerships & Development", description: "Build strategic relationships with universities, government bodies, corporate sponsors, and international funders. Turn Zahin's mission into institutional commitments and capital." },
];

function PersonCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-xl border border-deep-ink/10 p-6 hover:shadow-md transition-shadow">
      {member.photo ? (
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-pakistan-green/10 flex items-center justify-center mb-4">
          <span className="text-2xl font-display font-bold text-pakistan-green">{member.name.charAt(0)}</span>
        </div>
      )}
      <h3 className="font-display text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-pakistan-green font-medium">{member.role}</p>
      <p className="mt-3 text-sm text-deep-ink/60 leading-relaxed">{member.bio}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          className="mt-3 inline-block text-xs text-pakistan-green/60 hover:text-pakistan-green transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn &rarr;
        </a>
      )}
    </div>
  );
}

export default function Leadership() {
  return (
    <SectionWrapper id="leadership">
      <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">Leadership</p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">The people behind Zahin</h2>
      <p className="mt-6 text-lg text-deep-ink/60 max-w-2xl leading-relaxed">
        Zahin is bigger than any one person. We&apos;re assembling a founding team of builders, researchers, and leaders who believe Pakistan&apos;s AI future must be built by Pakistanis — not outsourced to Silicon Valley.
      </p>

      {/* Board of Directors */}
      <div className="mt-12">
        <h3 className="text-xs uppercase tracking-[0.3em] text-deep-ink/40 mb-6">Board of Directors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardOfDirectors.map((m) => <PersonCard key={m.name} member={m} />)}
        </div>
      </div>

      {/* Open leadership roles */}
      <div className="mt-16">
        <h3 className="text-xs uppercase tracking-[0.3em] text-pakistan-green mb-6">We&apos;re Looking For Founding Leaders</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openRoles.map((role) => (
            <div key={role.title} className="rounded-xl border-2 border-dashed border-pakistan-green/20 p-6 bg-pakistan-green/[0.02] hover:border-pakistan-green/40 transition-colors">
              <h3 className="font-display text-lg font-semibold text-pakistan-green">{role.title}</h3>
              <p className="mt-3 text-sm text-deep-ink/60 leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="mailto:founders@zahin.ai" variant="primary">Step Up — Lead With Us</Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
