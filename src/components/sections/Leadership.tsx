import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

interface TeamMember { name: string; role: string; bio: string; }

const founders: TeamMember[] = [
  { name: "Rizwan Qaiser", role: "Founder", bio: "AI infrastructure builder. Founder of Autonomous Technologies. Building sovereign AI systems for Pakistan from Karachi." },
];

const openRoles = [
  { title: "Co-Founder / CEO", description: "A leader with deep networks in Pakistani government, academia, or international development. Someone who can open doors and rally institutional support." },
  { title: "Chief Research Officer", description: "An AI researcher with published work in multilingual NLP or foundation models. Lead the technical vision from fine-tuning to Zahin-1." },
  { title: "Head of Partnerships", description: "Build relationships with universities, government bodies, and international funders. Turn Zahin's mission into institutional commitments." },
];

function PersonCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-xl border border-deep-ink/10 p-6 hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-pakistan-green/10 flex items-center justify-center mb-4">
        <span className="text-2xl font-display font-bold text-pakistan-green">{member.name.charAt(0)}</span>
      </div>
      <h3 className="font-display text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-pakistan-green font-medium">{member.role}</p>
      <p className="mt-3 text-sm text-deep-ink/60 leading-relaxed">{member.bio}</p>
    </div>
  );
}

export default function Leadership() {
  return (
    <SectionWrapper id="leadership">
      <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">Leadership</p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">The people behind Zahin</h2>
      <p className="mt-6 text-lg text-deep-ink/60 max-w-2xl leading-relaxed">
        Zahin is bigger than any one person. We&apos;re assembling a founding team of leaders who believe Pakistan&apos;s AI future must be built by Pakistanis.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {founders.map((m) => <PersonCard key={m.name} member={m} />)}
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
