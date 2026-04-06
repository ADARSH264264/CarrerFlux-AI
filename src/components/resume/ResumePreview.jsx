export default function ResumePreview({ sections }) {
  return (
    <div className="glass rounded-[32px] p-6">
      <div className="rounded-[28px] bg-white p-6 text-slate-900">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-2xl font-bold">Adarsh Gaud</h3>
          <p className="mt-1 text-sm text-slate-600">Frontend Developer • React.js • Tailwind CSS</p>
        </div>
        <div className="mt-5 space-y-4">
          {sections.map((section) => (
            <div key={section}>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{section}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                High-impact placeholder content for {section.toLowerCase()} goes here. This area is ready for form binding later.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
