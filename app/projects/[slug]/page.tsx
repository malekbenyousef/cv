import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { ReportView } from "./view";

export const revalidate = 60;

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
    return allProjects
        .filter((p) => p.published)
        .map((p) => ({
            slug: p.slug,
        }));
}

export default async function PostPage({ params }: Props) {
    const slug = params?.slug;
    const project = allProjects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} />
            <ReportView slug={project.slug} />

            <article className="container max-w-7xl px-4 py-16 mx-auto lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                <div className="lg:col-span-4 flex flex-col space-y-8">
                    {project.thinking && (
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
                                Things I learned
                            </h2>
                            <div className="w-10 h-1 bg-purple-400 mt-3 mb-6" />
                            <p className="text-zinc-700 leading-relaxed text-lg">
                                {project.thinking}
                            </p>
                        </div>
                    )}

                    {project.skills && project.skills.length > 0 && (
                        <>
                            <hr className="border-zinc-200" />
                            <div>
                                <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-6">
                                    Skills
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.skills.map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="px-3 py-1.5 text-sm font-medium text-purple-700 bg-purple-100 rounded-md"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="lg:col-span-8 prose prose-zinc prose-quoteless max-w-none">
                    <Mdx code={project.body.code} />
                </div>
                
            </article>
        </div>
    );
}
