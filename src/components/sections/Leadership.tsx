import SectionWrapper from "@/components/ui/SectionWrapper";

interface TeamMember { name: string; role: string; bio: string; }

const founders: TeamMember[] = [
  { name: "Rizwan Qaiser", role: "Founder", bio: "AI infrastructure builder. Founder of Autonomous Technologies. Building sovereign AI systems for Pakistan from Karachi." },
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
        Zahin is led by engineers and researchers who believe Pakistan deserves its own seat at the AI table.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {founders.map((m) => <PersonCard key={m.name} member={m} />)}
      </div>
    </SectionWrapper>
  );
}
