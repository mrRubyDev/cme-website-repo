import React from "react";
import puerta from "../../puerta.jpeg";

export default function AboutUs() {
	return (
		<div style={styles.container}>
			<div style={styles.introductionContainer}>
				<h2 style={{ marginBottom: 10, color: "#1888ff" }}>
					Nos mueve tu salud.
				</h2>
				<p>
					Por eso en el centro CME, disponemos de los mejores equipos y
					especialistas de Montevideo, para poder asegurar que recibes el mejor
					tratamiento y que te dejamos en las mejores manos. Disponemos de
					especialistas en sistema linfático, pediatría, otorrinología y
					fisioterápia.
					<br />
					Blablablablablablablablabababal, blabalbl abl ablablabl balbalbalbal
					balbl a Blablablablablablablablabababal, blabalbl abl ablablabl
					balbalbalbal balbl a Blablablablablablablablabababal, blabalbl abl
					ablablabl balbalbalbal balbl a Blablablablablablablablabababal,
					blabalbl abl ablablabl balbalbalbal balbl a
					Blablablablablablablablabababal, blabalbl abl ablablabl balbalbalbal
					balbl a Blablablablablablablablabababal, blabalbl abl ablablabl
					balbalbalbal balbl a
				</p>
			</div>
			<div style={styles.textPicContainer}>
				<div style={styles.picture}>
					<img
						src={puerta}
						alt="CME"
						style={{ width: "100%", height: "60vh" }}
					/>
				</div>
				<div style={styles.text}>
					<h3 style={{ marginBottom: 10, color: "#1888ff" }}>
						Nuestros inicios
					</h3>
					<p>
						CME siglas de Centro de Medicina y Especialidades es una clínica
						Médica que nació en Agosto de 1986, como solución edilicia para un
						grupo de Médicos y Especialistas que no contaban con Consultorio
						propio, a los efectos que pudieran atender a sus pacientes. Comenzó
						con una estructura limitada, con seis consultorios, equipados para
						la función asistencial y una funcionaria administrativa. El núcleo
						inicial se fue agrandando, por lo cual las necesidades locativas
						fueron mayores, y fue necesario adaptar la planta baja y luego
						construir dos plantas en el fondo de la vieja casona de Acevedo Díaz
						1024.
					</p>
					<br />
					<p>
						Lentamente pasó a ser el Consultorio Colectivo de CASMU de mayor
						tamaño e importancia, que luego de la centralización de la
						Institución ahora quedan pocos Profesionales de la misma. Pero el
						sector privado aumentó en forma significativa, para dar una solución
						a muchos pacientes que demandan su atención y se están creando
						diversos centros de atención médica.
					</p>
					<br />
					<p>
						Años más tarde se adquirió la casa vecina, que se identifica con el
						número 1020 de la misma calle, donde se construyó un sector Privado,
						con consultorios, Gimnasio de Fisioterapia, Laboratorio de Anatomía
						Patológica, Laboratorio de Análisis Clínicos, Centro de Estudios
						Urodinámicos, Odontología, Exámenes de Papanicolau y Colposcopía,
						Servicio de Ecografía, Eco y otros Servicios de Diagnóstico.-
					</p>
				</div>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	textPicContainer: {
		marginTop: 20,
		width: "80vw",
		display: "flex",
	},
	introductionContainer: {
		marginTop: 20,
		width: "80vw",
		display: "flex",
		flexDirection: "column",
	},
	picture: {
		width: "50%",
		height: "50vh",
	},
	text: {
		marginLeft: 15,
		width: "50%",
	},
};
