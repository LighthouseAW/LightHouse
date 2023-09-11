import Image from 'next/image';
import Link from "next/link";

export default function ProjectFeature({ project }) {
    const photoUrl = project?.project_photos?.length > 0 ? project.project_photos[0].photo_url : null;

    return (
        <div className="gap-4 p-6 bg-orange-300/75 p-4 rounded-lg z-20 m-4 relative">
            <div className="grid grid-cols-2 z-20">
                <div className="z-20">
                <Link href={`/projects/${project.id}`} className="font-semibold text-black text-xl mb-2 z-20 pb-2">
                    {project.name} →
                </Link>
                <div className="feature-image-container">
                    {photoUrl && (
                        <Image
                            src={`http://localhost:3000${photoUrl}`}
                            alt="Project Photo"
                            // layout="responsive"
                            width={300}
                            height={100}
                        />
                    )}
                    </div>
                </div>
                <div className="text-black text-center mt-2 z-20 pt-4">{project.subtitle}</div>
            </div>
            <div className="text-black text-center mt-2 z-20 relative pt-4">{project.blurb}</div>
        </div>
    );
}