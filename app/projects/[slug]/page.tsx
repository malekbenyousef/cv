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
			<Header project={project}  />
			<ReportView slug={project.slug} />

			<article className="flex gap-16 px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
                <div>
                <h2 className="px-4">Things I learned along the way</h2>
                <p>{project.thinking}</p>
                </div>
			</article>
		</div>
	);
}
