import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.js";
import { Navbar } from "./Navbar.js";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/640px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg"
							cardTitle="Bob Dylan"
							cardDescription="Bob Dylan, born Robert Allen Zimmerman, May 24, 1941. Is an American singer-songwriter. Dylan has been an important figure, his songs from 1960-1964 became anthems for the civil rights and antiwar moments."
							buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTl9J7TbLa41_pYCIrG_Au-stfckmu_5pyA&usqp=CAU"
							cardTitle="Bob Marley"
							cardDescription="Robert Nesta Marley OM (6 February 1945 – 11 May 1981) was a Jamaican singer, songwriter, and musician. Bob was considered a Rastafar icon, he infused his music with a sense of spirituality."
							buttonUrl="https://en.wikipedia.org/wiki/Bob_Marley"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="data:image/jpeg;base64,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"
							cardTitle="Marilyn Monroe"
							cardDescription="Norma Jeane Mortenson; June 1, 1926 – August 4, 1962 was an American actress, model, and singer. Marilyn reached top-billed actress for a dacade and grossed $200 million by the time of her death in 19620. By 1953, Monroe was the most marketable Hollywood Star. "
							buttonUrl="https://en.wikipedia.org/wiki/Marilyn_Monroe"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_PxM_k2ro3vbwDEU8xn1QD4nAP6yyA1mXg&usqp=CAU"
							cardTitle="Michael Jackson"
							cardDescription="Michael Joseph Jackson was an American singer, songwriter, and dancer. Michael was one of the most significant cultural figures of the 20th century."
							buttonUrl="https://en.wikipedia.org/wiki/Michael_Jackson"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Builded with ❤️ using React.js - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;