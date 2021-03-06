import React, { Component } from 'react';
import Aux from '../../../hoc/Auks';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import classes from './Page.module.css';
import Fade from 'react-reveal/Fade';
import Button1 from '../../UI/Button/Button';
import Question from '../../UI/Question/Question';
import Navbar from 'react-bootstrap/Navbar';

let year,
	monthlyPay = 0;
class Page extends Component {
	state = {
		ID: 0,
		tuition: 0,
		Dtuition: 0,
		salary: 0,
		interest: 0,
		gradeLevel: ' ',
		grade: 1,
	};
	switchGradeHandler = (grade) => {
		let gradeLevel = ' ';
		if (grade === 2) gradeLevel = 'Your Freshman Year is Over!';
		this.setState({ gradeLevel: gradeLevel, grade: grade });
		this.changePageHandler(30);
	};
	continueGradeHandler = () => {
		let gradePage = -1;
		if (this.state.grade === 2) gradePage = 13;
		this.changePageHandler(gradePage);
	};
	changeGradeHandler = (grade) => {
		this.setState({ grade: grade });
		this.changePageHandler();
	};
	calculatePayTime = () => {
		alert("running");
		let salary = this.state.salary;
		let interest = this.state.interest;
		let loan = this.state.tuition;
		let sum = loan;
		let t = 0;
		while (loan > 0) {
			t += 1;
			loan *= 1 + interest;
			sum += loan * interest;
			loan -= salary * 0.15;
			salary *= 1.1;
		}
		year = t;
		monthlyPay = (sum / t / 12).toFixed(0);
	};
	componentDidMount = () => {
		if (this.state.ID === 25) {
			this.calculatePayTime();
		}
	};

	changePageHandler = (pg) => {
		if (pg === 25) {
			this.calculatePayTime();
		}
		if (pg >= 0) {
			this.setState({ ID: pg });
		} else {
			this.setState({ ID: this.state.ID + 1 });
		}
	};
	changeTuitionHandler = (dt, salary) => {
		let newT = 0;
		newT = Number(this.state.tuition + dt);
		this.setState({
			tuition: newT,
			salary: salary,
		});
		this.changePageHandler();
	};
	changeInterestHandler = (interest) => {
		this.setState({
			interest: interest,
		});
		this.changePageHandler();
	};
	handleChange = (event) => {
		this.setState({ Dtuition: event.target.value });
	};
	render() {
		return (
			<Aux>
				<div className={classes.Page}>
					<div className={classes.rascal}>
						{
							{
								//start page
								0: (
									<Aux>
										<h1>Map My College</h1>
										<Button1
											className={classes.Button1}
											size="lg"
											variant="light"
											clicked={this.changePageHandler}
										>
											<b>Start</b>
										</Button1>
									</Aux>
								),
								//How much is your tuition?
								1: (
									<Aux>
										<Fade bottom>
											<Question>
												How much is your college
												tuition?
											</Question>
											<ButtonGroup
												size="lg"
												className={classes.mb2}
											>
												<Button1
													variant="light"
													clicked={() =>
														this.changeTuitionHandler(
															60000,
															65000
														)
													}
												>
													Bigwood University <br />
													<br />
													Cost: $60000
													<br />
													Average salary: $65000
												</Button1>
												<Button1
													variant="light"
													clicked={() =>
														this.changeTuitionHandler(
															45000,
															50000
														)
													}
												>
													Middlerod College <br />
													<br />
													Cost: $45000 <br />
													Average salary: $50000
												</Button1>
												<Button1
													variant="light"
													clicked={() =>
														this.changeTuitionHandler(
															25000,
															45000
														)
													}
												>
													Smallcox University
													<br />
													<br />
													Cost: $25000
													<br />
													Average salary: $45000
												</Button1>
											</ButtonGroup>
										</Fade>
									</Aux>
								),
								2: (
									<Aux>
										<Fade bottom cascade duration={1000}>
											<div>
												<div>
													<Question>
														Which of the following
														is closest to your
														annual household income?
													</Question>
												</div>
												{/* </Fade>
											<Fade bottom> */}
												<ButtonGroup
													size="lg"
													className={classes.mb2}
												>
													<Button1
														variant="light"
														clicked={() =>
															this.changeTuitionHandler(
																-2500,
																this.state
																	.salary
															)
														}
													>
														$40,000
													</Button1>

													<Button1
														clicked={() =>
															this.changeTuitionHandler(
																-10000,
																this.state
																	.salary
															)
														}
													>
														$70,000
													</Button1>
													<Button1
														clicked={() =>
															this.changeTuitionHandler(
																-25000,
																this.state
																	.salary
															)
														}
													>
														$110,000
													</Button1>
													<Button1
														clicked={() =>
															this.changeTuitionHandler(
																-50000,
																this.state
																	.salary
															)
														}
													>
														$160,000
													</Button1>
												</ButtonGroup>
											</div>
										</Fade>
									</Aux>
								),
								//Financial Aid/Merit Scholarship/Other
								3: (
									<Aux>
										<Fade bottom cascade>
											<div>
												<h1>
													According to your family
													income. You still have to
													borrow {this.state.tuition}{' '}
													for college.
												</h1>
												<div>
													<Button1
														clicked={
															this
																.changePageHandler
														}
													>
														Continue
													</Button1>
												</div>
											</div>
										</Fade>
									</Aux>
								),
								4: (
									<Aux>
										<Fade bottom>
											<h1>
												You applied for FAFSA and
												received the maximum amount of
												federal aid: 3500 dollars!!!{' '}
											</h1>
										</Fade>
										<Fade bottom duration={1500}>
											<Button1
												clicked={() =>
													this.changeTuitionHandler(
														-5250,
														this.state.salary
													)
												}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								5: (
									<Aux>
										<Fade bottom>
											<Question>
												Make sure you apply for FAFSA
												for federal financial aid and
												CSS Profile for non-federal
												financial aid{' '}
											</Question>
											<h5>
												Both the CSS application and the
												FAFSA can be filed as early as
												October 1 and should be
												completed as soon as possible to
												take advantage of aid that is
												distributed on a first-come,
												first-served basis. All schools
												have their own deadlines in
												place for the CSS, but many
												require students to file the
												profile two weeks before the
												college's priority admission
												application deadline.
											</h5>
											<Button1
												clicked={() =>
													this.changePageHandler()
												}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								//Financial Aid
								6: (
									<Aux>
										{this.state.tuition > 0 ? (
											<Aux>
												<Fade bottom>
													<Question>
														You still need to pay $
														{this.state.tuition} for
														college
													</Question>
													<Fade bottom cascade>
														<div>
															The option left for
															you is student loan
														</div>

														<Button1
															clicked={
																this
																	.changePageHandler
															}
														>
															Get Student Loans
														</Button1>
													</Fade>
												</Fade>
											</Aux>
										) : (
											<h1>Congrats!!!</h1>
										)}
									</Aux>
								),
								7: (
									<Aux>
										<Fade bottom>
											<Question
												style={{
													marginBottom: '5%',
												}}
											>
												{' '}
												The good thing about private
												loans is that they allow you to
												borrow as much as you need,
												while federal loans usually max
												out at around eight thousand
												dollars
											</Question>
											<Fade bottom cascade>
												<h4
													style={{
														marginBottom: '0%',
													}}
												>
													Type of Interest?
												</h4>
											</Fade>
											<ButtonGroup
												className={classes.mb2}
											>
												<Button1
													clicked={() =>
														this.changeInterestHandler(
															0.11 *
																Math.random() +
																0.05
														)
													}
													variant="dark"
													size="lg"
												>
													Variable (Interest:
													5%-15%/year)
												</Button1>
												<Button1
													clicked={() =>
														this.changeInterestHandler(
															0.09
														)
													}
													variant="dark"
													size="lg"
												>
													Fixed (Interest: 9%/year)
												</Button1>
											</ButtonGroup>
										</Fade>
									</Aux>
								),
								8: (
									<Aux>
										<Fade bottom>
											<Question>
												How much money do you want to
												spend on daily food?
											</Question>
										</Fade>
										<Fade bottom>
											<div>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															720,
															this.state.salary
														)
													}
												>
													Cup Noodle ($3)
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															2400,
															this.state.salary
														)
													}
												>
													Fried Chicken ($10)
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															7200,
															this.state.salary
														)
													}
												>
													Steak ($30)
												</Button1>
											</div>
										</Fade>
									</Aux>
								),
								9: (
									<Aux>
										<Fade bottom>
											<Question>
												How about taking a part time
												job?
											</Question>

											<div>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															0,
															this.state.salary
														)
													}
												>
													I am fine!
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															3 * -150,
															this.state.salary
														)
													}
												>
													Just a little
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															7 * -150,
															this.state.salary
														)
													}
												>
													Full on!
												</Button1>
											</div>
										</Fade>
									</Aux>
								),
								//9
								10: (
									<Aux>
										<Fade bottom>
											<div>
												<Question
													style={{
														marginBottom: '5%',
													}}
												>
													{' '}
													School is getting really
													difficult. all of your
													classes have so much
													homework, you begin to
													question your chosen major.
												</Question>
											</div>
										</Fade>
										<Fade bottom cascade duration={1500}>
											<h3>What do you choose to do?</h3>
											<ButtonGroup
												className={classes.mb2}
											>
												<Button1
													clicked={() =>
														this.changePageHandler(
															12
														)
													}
													variant="dark"
													size="lg"
												>
													STUDY HARDER
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															0.5 *
																this.state
																	.tuition,
															this.state.salary
														)
													}
													variant="dark"
													size="lg"
												>
													PICK A NEW MAJOR
												</Button1>
											</ButtonGroup>
										</Fade>
									</Aux>
								),
								11: (
									<Aux>
										<Fade bottom>
											<h1
												style={{
													width: '60%',
													margin: 'auto',

													fontSize: '1.5625rem',
												}}
											>
												This might be difficult for you
												and extend your time in college.
												although sometimes it’s worth it
												to follow your dreams, you
												definitely need to consider that
												you may spend over six years in
												college to get a new bachelor’s
												degree… and that’s even more
												loans you have to take out!
											</h1>
											<Button1
												clicked={() =>
													this.changePageHandler(13)
												}
												variant="dark"
												size="lg"
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								12: (
									<Aux>
										<Fade bottom>
											<h1>
												Good on you for not giving up!
												you study for five hours a day,
												and you ace the final exam.
												looks like you’re still on track
												for a quick graduation.
											</h1>
											<Button1
												clicked={() =>
													this.switchGradeHandler(2)
												}
												variant="dark"
												size="lg"
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								13: (
									<Aux>
										<Fade bottom>
											<Question
												style={{
													marginBottom: '5%',
												}}
											>
												{' '}
												What do you plan to do this
												summer
											</Question>

											<ButtonGroup
												className={classes.mb2}
											>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															-1500,
															this.state.salary
														)
													}
												>
													Get a Paid Internship
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															3000,
															this.state.salary +
																500
														)
													}
												>
													Take classes (Graduating
													Salary +$500)
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															0,
															this.state.salary
														)
													}
												>
													Chill
												</Button1>
											</ButtonGroup>
										</Fade>
									</Aux>
								),
								14: (
									<Aux>
										<Fade bottom>
											<h1>
												This year you get $4500 from
												FAFSA!!!
											</h1>
										</Fade>
										<Fade bottom>
											<Button1
												clicked={this.changePageHandler}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								15: (
									<Aux>
										<Fade bottom>
											<h1
												style={{
													marginTop: '-5%',
												}}
											>
												Your laptop broke as you fell
												down for chasing a morning
												class.
											</h1>
											<Fade bottom cascade>
												<h4>What kind do you want?</h4>
											</Fade>
											<Fade bottom>
												<div>
													<Button1
														clicked={() =>
															this.changeTuitionHandler(
																350,
																this.state
																	.salary
															)
														}
													>
														Surface Laptop 3 ($1400)
													</Button1>
													<Button1
														clicked={() =>
															this.changeTuitionHandler(
																250,
																this.state
																	.salary
															)
														}
													>
														thinkpad ($1000)
													</Button1>
													<Button1
														clicked={() =>
															this.changeTuitionHandler(
																150,
																this.state
																	.salary
															)
														}
													>
														used macbook air ($600)
													</Button1>
												</div>
											</Fade>
										</Fade>
									</Aux>
								),
								16: (
									<Aux>
										<Fade bottom>
											<h1>
												Your Sophomore Year is Over!
											</h1>
										</Fade>
										<Fade bottom>
											<Button1
												clicked={() =>
													this.changeGradeHandler(3)
												}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								17: (
									<Fade bottom>
										<Aux>
											<Fade bottom>
												<h1>
													This year you get $5500 from
													FAFSA!!!
												</h1>
											</Fade>
											<Fade bottom>
												<Button1
													clicked={
														this.changePageHandler
													}
												>
													Continue
												</Button1>
											</Fade>
										</Aux>
									</Fade>
								),
								18: (
									<Aux>
										<Fade bottom>
											<div>
												<Question
													style={{
														marginTop: '-5%',
													}}
												>
													Do you want to travel this
													winter break?
												</Question>
											</div>
										</Fade>
										<Fade bottom cascade duration={1500}>
											<ButtonGroup
												className={classes.mb2}
											>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															500,
															this.state.salary
														)
													}
												>
													Yes!
												</Button1>
												<Button1
													clicked={() =>
														this.changePageHandler(
															20
														)
													}
												>
													Maybe Next Time
												</Button1>
											</ButtonGroup>
										</Fade>
									</Aux>
								),
								19: (
									<Aux>
										<Fade bottom>
											<h1>
												You spend almost 2000 dollars
												going to Canada, but you get to
												see your friends.
											</h1>
										</Fade>
										<Fade bottom>
											<Button1
												clicked={() =>
													this.changePageHandler(21)
												}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								20: (
									<Aux>
										<Fade bottom>
											<h1>
												You spend your winter break
												studying and do well on the
												exams
											</h1>
										</Fade>
										<Fade bottom>
											<Button1
												clicked={() =>
													this.changePageHandler(21)
												}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								21: (
									<Aux>
										<Fade bottom>
											<h1>Your Junior Year is Over!</h1>

											<Button1
												clicked={() =>
													this.changeGradeHandler(4)
												}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								22: (
									<Aux>
										<Fade bottom>
											<Question
												style={{
													marginBottom: '5%',
												}}
											>
												{' '}
												What do you plan to do this
												summer?
											</Question>
										</Fade>
										<Fade bottom>
											<ButtonGroup
												className={classes.mb2}
											>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															-1500,
															this.state.salary
														)
													}
												>
													Get a Paid Internship
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															3000,
															this.state.salary +
																500
														)
													}
												>
													Take classes (Graduating
													Salary +$500)
												</Button1>
												<Button1
													clicked={() =>
														this.changeTuitionHandler(
															0,
															this.state.salary
														)
													}
												>
													Chill
												</Button1>
											</ButtonGroup>
										</Fade>
									</Aux>
								),
								23: (
									<Aux>
										<Fade bottom>
											<h1>
												This year you get $5500 from
												FAFSA!!!
											</h1>

											<Button1
												clicked={this.changePageHandler}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								24: (
									<Aux>
										<Fade bottom>
											<h1>Your Graduated!</h1>
										</Fade>
										<Fade bottom>
											<Button1
												clicked={()=>this.changePageHandler(25)}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
								25: (
									<Fade bottom>
										<Aux>
											<h2
												style={{
													marginBottom: '5%',
												}}
											>
												Finally you got a job. You end
												up with $
												{(
													this.state.tuition *
													4 *
													(1 + this.state.interest)
												).toFixed(0)}{' '}
												to pay. Assuming your salary
												increase 10% per year and you
												pay 15% of your salary for the
												loan, according to the average
												salary of your college, you will
												need {year} year to pay the
												loan. Monthly Payment: $
												{monthlyPay}
											</h2>
										</Aux>
									</Fade>
								),
								30: (
									<Aux>
										<Fade bottom>
											<h1>{this.state.gradeLevel}</h1>
										</Fade>
										<Fade bottom>
											<Button1
												clicked={
													this.continueGradeHandler
												}
											>
												Continue
											</Button1>
										</Fade>
									</Aux>
								),
							}[this.state.ID]
						}
					</div>
					{/* )} */}
				</div>
				{this.state.ID > 7 ? (
					<Fade bottom>
						<div>
							<Navbar bg="dark" fixed="bottom">
								<Navbar.Brand
									href="#home"
									style={{
										color: 'white',
										align: 'center',
										margin: 'auto',
									}}
								>
									$
									{(
										this.state.tuition *
										this.state.grade *
										(1 + this.state.interest)
									).toFixed(0)}{' '}
									IN DEBT
								</Navbar.Brand>
							</Navbar>
						</div>
					</Fade>
				) : (
					<div></div>
				)}
			</Aux>
		);
	}
}

export default Page;
