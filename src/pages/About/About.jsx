import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <p className="text-sm font-semibold text-primary">About CourseMaster</p>
      <h1 className="page-heading mt-2">Learn skills that move you forward.</h1>
      <p className="mt-4 text-base-content/70 leading-relaxed">
        CourseMaster brings expert-led courses, quizzes, assignments, and live
        learning into one accessible digital classroom.
      </p>
      <Link to="/courses" className="btn btn-primary mt-8">
        Explore Courses
      </Link>
    </section>
  );
}
