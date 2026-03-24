import { Button } from '@/components/ui';
import { AGENT_INFO } from '@/lib/constants';

interface AgentContactCardProps {
  propertyMls?: string;
}

export default function AgentContactCard({ propertyMls }: AgentContactCardProps) {
  const contactHref = propertyMls
    ? `/contact?property=${propertyMls}`
    : '/contact';

  return (
    <div className="bg-white border border-brand-light-gray rounded-lg p-6 sticky top-28">
      {/* Agent info - hidden on mobile, shown on desktop */}
      <div className="hidden md:block">
        {/* Agent Photo Placeholder */}
        <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center mb-4">
          <span className="font-heading text-2xl text-brand-black">IJ</span>
        </div>

        <div className="text-center mb-6">
          <h3 className="font-heading text-xl text-brand-dark-gray">{AGENT_INFO.name}</h3>
          <p className="font-body text-sm text-brand-medium-gray mt-1">{AGENT_INFO.title}</p>
          <p className="font-body text-xs text-brand-medium-gray mt-0.5">{AGENT_INFO.brokerage}</p>
        </div>

        <div className="w-12 h-px bg-brand-black mx-auto mb-6" />
      </div>


      <div className="space-y-3 mb-6">
        <a
          href={`tel:${AGENT_INFO.phone}`}
          className="flex items-center gap-3 font-body text-sm text-brand-dark-gray hover:text-brand-black transition-colors"
        >
          <svg className="w-4 h-4 text-brand-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          {AGENT_INFO.phone}
        </a>
        <a
          href={`mailto:${AGENT_INFO.email}`}
          className="flex items-center gap-3 font-body text-sm text-brand-dark-gray hover:text-brand-black transition-colors"
        >
          <svg className="w-4 h-4 text-brand-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          {AGENT_INFO.email}
        </a>
      </div>

      <div className="space-y-3">
        <Button href={contactHref} variant="primary" className="w-full text-center justify-center">
          Schedule a Showing
        </Button>
        <Button href={`tel:${AGENT_INFO.phone}`} variant="outline" className="w-full text-center justify-center">
          Call Now
        </Button>
      </div>
    </div>
  );
}
