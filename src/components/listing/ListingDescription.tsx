'use client';

import { useState } from 'react';

interface ListingDescriptionProps {
  description: string;
}

export default function ListingDescription({ description }: ListingDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = description.length > 500;
  const displayText = isLong && !isExpanded ? description.slice(0, 500) + '...' : description;

  if (!description) return null;

  return (
    <div className="mt-8">
      <h2 className="font-heading text-2xl text-brand-dark-gray mb-4">Description</h2>
      <div className="w-12 h-px bg-brand-black mb-6" />
      <p className="font-body text-brand-dark-gray/80 leading-relaxed whitespace-pre-line">
        {displayText}
      </p>
      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 font-body text-sm text-brand-black hover:text-brand-black transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}
