import Navbar from '../components/navbar';
import Banner from '../components/banner';
import CourseCard from '../components/coursecard';
import hungergames from '../components/images/hunger-games.png';
import heartstopper from '../components/images/heartstopper.png';
import kpop from '../components/images/kpop.png';
import Footer from '../components/footer';
import '../App.css';

const Courses = () => {
    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
				<Banner></Banner>
			</header>
			
			<body className="homepage">
				<h1>Fanlink Courses</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui ac sapien pretium euismod. 
					Suspendisse egestas nibh non augue malesuada blandit. Vestibulum feugiat id sem a dictum. Vivamus 
					vel est feugiat, convallis libero nec, volutpat tellus. Sed ut risus scelerisque, malesuada ex eu, 
					tincidunt velit. </p>
				<div id="course-filters">
					<p>Ages:</p>
					<div id="filter-button">Select</div>
					<p>Times: </p>
					<div id="filter-button">Select</div>

				</div>
				<div>
					<CourseCard
						imagesrc={hungergames}
						mentorName="Abigail De Kosnik" 
						courseName="The Hunger Games and Dystopian YA"
						dates="June 16 to June 21, 2024"
						time="3:30 - 4:30 pm PST"
						ages="15-18"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui ac sapien pretium euismod. 
						Suspendisse egestas nibh non augue malesuada blandit. Vestibulum feugiat id sem a dictum. 
						Vivamus vel est feugiat, convallis libero." />
					<CourseCard
						imagesrc={heartstopper}
						mentorName="Abigail De Kosnik" 
						courseName="Heartstopper and Queer YA"
						dates="June 16 to June 21, 2024"
						time="3:30 - 4:30 pm PST"
						ages="15-18"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui ac sapien pretium euismod. 
						Suspendisse egestas nibh non augue malesuada blandit. Vestibulum feugiat id sem a dictum. 
						Vivamus vel est feugiat, convallis libero." />
					<CourseCard
						imagesrc={kpop}
						mentorName="Abigail De Kosnik" 
						courseName="KPOP"
						dates="June 16 to June 21, 2024"
						time="3:30 - 4:30 pm PST"
						ages="15-18"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui ac sapien pretium euismod. 
						Suspendisse egestas nibh non augue malesuada blandit. Vestibulum feugiat id sem a dictum. 
						Vivamus vel est feugiat, convallis libero." />
				</div>
			</body>
			<Footer></Footer>
		</div>

		
	  );
}

export default Courses;
