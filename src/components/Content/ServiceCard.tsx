import React from "react"
import { IServiceCardProps } from "../../types"
import Card from "../common/Card"

const ServiceCard: React.FC<IServiceCardProps> = ({
	name,
	Icon,
	description,
	index = 0,
}): JSX.Element => {
	return (
		<Card className="col-lg-6 col-xl-4" index={index}>
			<div className="icon-container rounded-4">
				<Icon className="icon" />
			</div>
			<h5 className="mt-4 mb-2">{name}</h5>
			<p className="mb-0">{description}</p>
		</Card>
	)
}

export default ServiceCard
