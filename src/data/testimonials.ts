export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Marcus & Denise Thompson",
    location: "Montclair, NJ",
    rating: 5,
    text: "Ingrid made our home buying experience seamless from start to finish. As first-time buyers in a competitive market, we were nervous, but Ingrid's expertise and calm demeanor put us at ease. She found us the perfect colonial in Upper Montclair that checked every box on our wishlist. We couldn't be happier with our new home.",
    date: "2024-11-15",
  },
  {
    id: "testimonial-2",
    name: "Robert Chen",
    location: "Short Hills, NJ",
    rating: 5,
    text: "Selling our family home of 25 years was an emotional process, but Ingrid handled everything with professionalism and sensitivity. Her staging recommendations and marketing strategy generated multiple offers within the first week. We sold well above asking price. I've already recommended her to three colleagues.",
    date: "2024-09-22",
  },
  {
    id: "testimonial-3",
    name: "Sarah Williams",
    location: "West Orange, NJ",
    rating: 5,
    text: "As a real estate investor, I've worked with many agents over the years. Ingrid stands out for her deep knowledge of the Northern New Jersey market and her ability to identify properties with strong appreciation potential. She helped me acquire two multi-family properties that are already performing above projections.",
    date: "2024-08-10",
  },
  {
    id: "testimonial-4",
    name: "David & Maria Santos",
    location: "Summit, NJ",
    rating: 5,
    text: "We relocated from out of state and Ingrid was instrumental in helping us understand the different communities in the area. She arranged virtual tours, provided detailed neighborhood guides, and was always available to answer our questions. The entire process was smooth and stress-free. We love our new home in Summit.",
    date: "2024-07-05",
  },
  {
    id: "testimonial-5",
    name: "Patricia Howard",
    location: "Maplewood, NJ",
    rating: 5,
    text: "Ingrid's negotiation skills are unmatched. She navigated a complex multi-offer situation on our behalf and secured our dream Tudor in Maplewood at a price that worked within our budget. Her attention to detail during the inspection and closing process saved us from potential issues. Truly a top-tier agent.",
    date: "2024-05-18",
  },
  {
    id: "testimonial-6",
    name: "James & Lisa Park",
    location: "Ridgewood, NJ",
    rating: 5,
    text: "Working with Ingrid to sell our home in Ridgewood was an exceptional experience. Her professional photography, virtual tours, and targeted marketing attracted qualified buyers immediately. She kept us informed at every stage and her pricing strategy was spot-on. The entire transaction closed in under 30 days.",
    date: "2024-03-28",
  },
] as const;
