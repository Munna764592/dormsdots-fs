const tags = [
  // Graphic Design
  "Logo Design",
  "Business Cards & Stationery",
  "Illustration",
  "Pattern Design",
  "Brochure Design",
  "Flyer Design",
  "Presentation Design",

  // Digital Marketing
  "Social Media Marketing",
  "SEO",
  "Content Marketing",
  "Email Marketing",
  "Video Marketing",
  "Influencer Marketing",

  // Writing & Translation
  "Articles & Blog Posts",
  "Translation",
  "Creative Writing",
  "Proofreading & Editing",
  "Resume Writing",
  "Technical Writing",

  // Video & Animation
  "Video Editing",
  "Short Video Ads",
  "Logo Animation",
  "3D Product Animation",

  // Music & Audio
  "Podcast Editing",
  "Sound Design",
  "Audiobook Production",

  // Programming & Tech
  "Web Development",
  "WordPress",
  "E-Commerce Development",
  "Mobile App Development",
  "Game Development",
  "Data Analysis",
  "Database Design",
  "DevOps",

  // Business
  "Market Research",
  "Business Plans",
  "Project Management",
  "Presentations",

  // Lifestyle
  "Online Tutoring",
  "Gaming",
  "Fitness Lessons",
  "Cooking Lessons",
  "Craft Lessons"
];

export default function RelatedTags() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-[#404145] mb-8">
          According to your desire interests
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="relative px-6 py-3 bg-gradient-to-tr from-blue-200 via-white to-blue-200 text-gray-700 rounded-full transition-all duration-300 ease-in-out">
              <div className="absolute inset-0 w-full h-full rounded-full bg-white opacity-50 blur-xl"></div>
              <span className="relative">{tag}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
