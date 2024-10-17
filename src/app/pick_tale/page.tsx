import Link from "next/link";
import coachData from "@/app/data/coachData.json";
import type { CoachName } from "@/app/interfaces/CoachDetails";

const PickTale: React.FC = () => {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Pick a Tale</h1>
			<ul>
				{coachData.details.map((coach: CoachName) => (
					<li className="p-2 m-2" key={coach.name}>
						<Link href={`/pick_tale/${coach.url}`}>{coach.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PickTale;
