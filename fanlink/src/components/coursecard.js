import '../App.css';
export default function CourseCard(props) {
    return (
		<div id="course-card">
			<img src={props.imagesrc} alt="" width="240px"></img>
			<div id="course-info">
				<b> {props.mentorName} </b>
				<b> {props.courseName} </b>
				<b> {props.dates} </b>
				<b>Time: {props.time} </b>
				<b>Ages: {props.ages}</b>
				<p id="course-info"> {props.info} </p>
			</div>
			
		</div>
    )

}