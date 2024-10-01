export default function ProjectsPage() {
    return (
      <section className="bg-white p-8 mt-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">Project 1</div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">Project 2</div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">Project 3</div>
        </div>
      </section>
    );
  }