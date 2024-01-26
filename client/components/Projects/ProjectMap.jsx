import Image from 'next/image';
import Link from "next/link";

export default function ProjectMap({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6 mt-20">
            {projects.map((project, index) => {
                const photoToken = project.project_photos[0].photo_token;
                const photoUrl = `https://lighthouseaw.onrender.com${project.project_photos[0].photo_url}?token=${photoToken}`;
                return (
                    <div key={index} className="bg-slate-300/70 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 flex flex-col justify-center items-center z-20">
                    <Link href={`/projects/${project.slug}`} className=" underline font-semibold text-black text-lg mb-2 text-center">{project.name}</Link>
                        <div className="image-container">
                            <Image src={photoUrl} alt="Project Photo" layout="responsive" width={300} height={300} />
                        </div>
                    <div className="text-black text-center mt-2">{project.subtitle}</div>
                    <Link href={`/projects/${project.slug}`} className=" font-semibold text-black text-lg text-center">Learn More →</Link>
                </div>
            )})}
        </div>
    )
}