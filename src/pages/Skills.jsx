export default function Skills() {
  return (
    <div className="p-8 text-2xl">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <p className="mb-4">
        Here are some of the skills I have acquired over the years:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>JavaScript and TypeScript</li>
        <li>React and Redux</li>
        <li>Node.js and Express</li>
        <li>HTML5 and CSS3</li>
        <li>Responsive Web Design</li>
        <li>RESTful APIs</li>
        <li>Git and Version Control</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-12 mb-4">📊 Skill Proficiency</h2>
          <div className="space-y-6">

            {/* React */}
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">React</span>
                <span className="text-sm font-medium text-blue-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>

            {/* Node.js */}
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Node.js</span>
                <span className="text-sm font-medium text-green-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
            </div>

            {/* Tailwind CSS */}
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Tailwind CSS</span>
                <span className="text-sm font-medium text-cyan-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-cyan-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </div>

            {/* MongoDB */}
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">MongoDB</span>
                <span className="text-sm font-medium text-emerald-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '70%' }}></div>
                </div>
            </div>

          </div>
    </div>
  );
}