"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import coachData from "../../../../data/coachData.json";

interface KeyFacts {
	born?: string;
	location: string;
}

interface CoachDetails {
	name: string;
	url: string;
	key_facts: KeyFacts;
}

const CoachDetailsPage: React.FC = () => {
	const { coach } = useParams();

	if (!coach) {
		return <div>Loading...</div>;
	}

	const coachDetails = coachData.details.find(
		(coachURL: CoachDetails) => coachURL.url === coach,
	);

	if (!coachDetails) {
		return <div>Coach not found</div>;
	}

	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">{coachDetails.name}</h1>
			<ul className="space-y-2">
				<li>{coachDetails.name}</li>
				{coachDetails.key_facts.born && <li>{coachDetails.key_facts.born}</li>}
				<li>{coachDetails.key_facts.location}</li>
				<li>
					<Link href={`/pick_tale/${coach}/Football`}>Football</Link>
				</li>
				<li>
					<Link href={`/pick_tale/${coach}/Culture`}>Culture</Link>
				</li>
			</ul>
		</div>
	);
};

export default CoachDetailsPage;
