const SKILLS = ["React", "React Native", "JavaScript", "Tailwind", "TypeScript", "HTML5"];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Yetenekler
        </h2>
        <ul
          className="flex flex-wrap gap-2 justify-center"
          role="list"
          aria-label="Beceri etiketleri"
        >
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
