import { FiDownload } from 'react-icons/fi';
export default function Resume() {
  return (
    <div className="p-8 text-2xl min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p className="mb-4">
        Here is a brief overview of my professional experience and skills.
      </p>
      <p>
        You can download my resume as a PDF file from the link below:
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
        {/* View in new tab */}
        <a
            href="/Jay_Mangukiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
        >
            👁️ View Resume
        </a>

        {/* Download directly */}
        <a
            href="./portfolio/public/Jay_Mangukiya_Resume.pdf"
            download
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
        >
            📄 Download Resume
        </a>
     </div>
     <div className="mt-10">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🧑‍💼 Experience</h2>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li><strong>Internship:</strong> data anaylitics Intern at IBM Tech – built responsive UIs</li>
        <li><strong>Freelance:</strong> Created websites for local businesses using React,Nodejs,Mongodb,Tailwind</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">🎓 Education</h2>
      <p className="text-base">
        B.E. in Computer Engineering, Gujarat Technological University (2022–2026)
      </p>
    </div>

    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🚀 Key Skills</h2>
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">React</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Tailwind CSS</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Node.js</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">MongoDB</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Git & GitHub</span>
      </div>
    </div>



    </div>
  );
}