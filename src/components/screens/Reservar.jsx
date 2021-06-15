import React, { useState } from "react";
import { buttonBlue, matteBlue } from "../../config/styles";
import { useForm } from "react-hook-form";
import Footer from "../Footer";
import { useIsDesktop, useIsTablet } from "../../hooks/useMedia";
export default function Reservar() {
	const isDesktop = useIsDesktop();
	const isTablet = useIsTablet();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => console.log(data);
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					width: "90%",
					marginTop: 10,
					color: matteBlue,
				}}
			>
				<form
					style={
						isDesktop
							? styles.formContainer
							: isTablet
							? styles.formContainerTablet
							: styles.formContainerMobile
					}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h2>Pida cita con nosotros</h2>
					<div style={{ width: "100%", marginTop: 15 }}>
						<label>Nombre</label>
						<input
							type="text"
							name="name"
							{...register("name")}
							style={styles.input}
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label>Apellidos</label>
						<input
							type="text"
							name="secondName"
							{...register("secondName")}
							style={styles.input}
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label>Cédula</label>
						<input
							type="text"
							name="id"
							{...register("id")}
							style={styles.input}
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label>Correo electrónico</label>
						<input
							type="email"
							name="email"
							{...register("email")}
							style={styles.input}
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label>Teléfono</label>
						<input
							type="text"
							name="phone"
							required
							{...register("phone")}
							style={styles.input}
						/>
					</div>
					<div
						style={{ width: "100%", display: "flex", flexDirection: "column" }}
					>
						<label>Servicio</label>
						<select
							name="services"
							style={styles.input}
							required
							{...register("services")}
						>
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>
					</div>
					<div
						style={{ width: "100%", display: "flex", flexDirection: "column" }}
					>
						<label>Fecha</label>
						<input
							type="date"
							name="date"
							required
							style={styles.input}
							value={date}
							min={date}
							{...register("date")}
							max="2022-12-31"
							onChange={e => setDate(e.target.value)}
						/>
					</div>
					{/* <input name="date" placeholder="Fecha" required style={styles.input} ref = {register}/> */}
					<div style={{ width: "100%" }}>
						<label>Comentarios</label>
						<textarea
							type="text-area"
							name="comments"
							{...register("comments")}
							style={styles.inputObser}
						/>
					</div>
					<input type="submit" style={styles.btn} />
				</form>
			</div>
			<Footer />
		</div>
	);
}

const formContainerBasic = {
	margin: "3rem auto 0",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginBottom: "2rem",
};
const styles = {
	formContainer: {
		...formContainerBasic,
		width: "30%",
	},
	formContainerMobile: {
		width: "80%",
		...formContainerBasic,
	},
	formContainerTablet: {
		width: "60%",
		...formContainerBasic,
	},

	input: {
		marginBottom: "1.5rem",
		padding: "0 0.5rem",
		width: "100%",
		height: "2rem",
		border: "0.4px solid lightgrey",
		borderRadius: "4px",
		boxSizing: "border-box",
	},
	inputObser: {
		marginBottom: "1.2rem",
		padding: "0 0.5rem",
		marginBottom: "3rem",
		width: "100%",
		border: "0.4px solid lightgrey",
		height: "4rem",
		borderRadius: "4px",
		boxSizing: "border-box",
	},
	btn: {
		backgroundColor: buttonBlue,
		color: "white",
		border: "none",
		borderRadius: 5,
		padding: 10,
		fontSize: 20,
		width: "50%",
	},
};
