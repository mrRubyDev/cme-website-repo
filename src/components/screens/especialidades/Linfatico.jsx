import React from "react";
import General from "../../General";
import { rose } from "../../../config/styles";

export default function Linfatico() {
	return (
		<div>
			<General
				title="Linfatico"
				title2="Title 2"
				header={"?????"}
				header2={"Header2"}
				paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati voluptatem explicabo facilis eius quis, voluptatibus eum ex libero placeat sapiente esse, nisi officia ea. Totam consequatur iste voluptates perspiciatis?"
				paragraph2={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati voluptatem explicabo facilis eius quis, voluptatibus eum ex libero placeat sapiente esse, nisi officia ea. Totam consequatur iste voluptates perspiciatis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati voluptatem explicabo facilis eius quis, voluptatibus eum ex libero placeat sapiente esse, nisi officia ea. Totam consequatur iste voluptates perspiciatis?
				
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati voluptatem explicabo facilis eius quis, voluptatibus eum ex libero placeat sapiente esse, nisi officia ea. Totam consequatur iste voluptates perspiciatis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati voluptatem explicabo facilis eius quis, voluptatibus eum ex libero placeat sapiente esse, nisi officia ea. Totam consequatur iste voluptates perspiciatis?"
				`}
				secondColor={rose}
			/>
		</div>
	);
}
