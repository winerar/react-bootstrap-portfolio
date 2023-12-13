import Section from "../common/Section"
import { services } from "./../../constants"
import SectionHeader from "./SectionHeader"
import ServiceCard from "./ServiceCard"

const Services: React.FC = (): JSX.Element => {
	return (
		<Section id="services">
			<SectionHeader title="Services That I Provide" subtitle="Services" />
			<div className="row row-gap-4">
				{services.map((item, index) => (
					<ServiceCard index={index} {...item} key={index} />
				))}
			</div>
		</Section>
	)
}

export default Services
