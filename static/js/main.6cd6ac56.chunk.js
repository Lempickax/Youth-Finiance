(this["webpackJsonpyouth-finance-student-loan"]=this["webpackJsonpyouth-finance-student-loan"]||[]).push([[0],{16:function(e,t,a){e.exports={Button:"Button_Button__38P3z","options-hidden":"Button_options-hidden__2PX3Y",hvrBackPulse:"Button_hvrBackPulse__2Px17"}},20:function(e,t,a){e.exports={Pages:"Pages_Pages__2PCqg"}},21:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),o=a(9),c=a.n(o),i=(a(26),a(27),a(28),a(10)),u=a(11),m=a(12),s=a(13),d=function(e){return e.children},h=a(8),E=a(6),g=a.n(E),f=a(1),y=a.n(f),b=a(16),v=a.n(b),k=function(e){return r.a.createElement("button",{className:[v.a.Button,v.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},p=a(7),H=a.n(p),T=function(e){return r.a.createElement("div",{className:H.a.questionWrapper},r.a.createElement("div",{className:H.a.question},r.a.createElement("div",{className:H.a.borderTop}),r.a.createElement("div",{className:H.a.borderLeft}),r.a.createElement("div",{className:H.a.textLabel},r.a.createElement("p",null,e.children))),r.a.createElement("div",{className:H.a.borderRight}),r.a.createElement("div",{className:H.a.borderBottom}),r.a.createElement("div",{className:H.a.questionShadow}))},_=a(17),P=0,w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ID:0,tuition:0,Dtuition:0,salary:0,interest:0,gradeLevel:" ",grade:1},e.switchGradeHandler=function(t){var a=" ";2===t&&(a="Your Freshman Year is Over!"),e.setState({gradeLevel:a,grade:t}),e.changePageHandler(30)},e.continueGradeHandler=function(){var t=-1;2===e.state.grade&&(t=13),e.changePageHandler(t)},e.changeGradeHandler=function(t){e.setState({grade:t}),e.changePageHandler()},e.calculatePayTime=function(){for(var t=e.state.salary,a=e.state.interest,l=e.state.tuition,r=l,o=0;l>0;)o+=1,r+=(l*=1+a)*a,l-=.15*t,t*=1.1;n=o,P=(r/o/12).toFixed(0)},e.componentDidMount=function(){25===e.state.ID&&e.calculatePayTime()},e.changePageHandler=function(t){25===t&&e.calculatePayTime(),t>=0?e.setState({ID:t}):e.setState({ID:e.state.ID+1})},e.changeTuitionHandler=function(t,a){var n;n=Number(e.state.tuition+t),e.setState({tuition:n,salary:a}),e.changePageHandler()},e.changeInterestHandler=function(t){e.setState({interest:t}),e.changePageHandler()},e.handleChange=function(t){e.setState({Dtuition:t.target.value})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,r.a.createElement("div",{className:g.a.Page},r.a.createElement("div",{className:g.a.rascal},{0:r.a.createElement(d,null,r.a.createElement("h1",null,"Map My College"),r.a.createElement(k,{className:g.a.Button1,size:"lg",variant:"light",clicked:this.changePageHandler},r.a.createElement("b",null,"Start"))),1:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,null,"How much is your college tuition?"),r.a.createElement(h.a,{size:"lg",className:g.a.mb2},r.a.createElement(k,{variant:"light",clicked:function(){return e.changeTuitionHandler(6e4,65e3)}},"Bigwood University ",r.a.createElement("br",null),r.a.createElement("br",null),"Cost: $60000",r.a.createElement("br",null),"Average salary: $65000"),r.a.createElement(k,{variant:"light",clicked:function(){return e.changeTuitionHandler(45e3,5e4)}},"Middlerod College ",r.a.createElement("br",null),r.a.createElement("br",null),"Cost: $45000 ",r.a.createElement("br",null),"Average salary: $50000"),r.a.createElement(k,{variant:"light",clicked:function(){return e.changeTuitionHandler(25e3,45e3)}},"Smallcox University",r.a.createElement("br",null),r.a.createElement("br",null),"Cost: $25000",r.a.createElement("br",null),"Average salary: $45000")))),2:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0,cascade:!0,duration:1e3},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(T,null,"Which of the following is closest to your annual household income?")),r.a.createElement(h.a,{size:"lg",className:g.a.mb2},r.a.createElement(k,{variant:"light",clicked:function(){return e.changeTuitionHandler(-2500,e.state.salary)}},"$40,000"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-1e4,e.state.salary)}},"$70,000"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-25e3,e.state.salary)}},"$110,000"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-5e4,e.state.salary)}},"$160,000"))))),3:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("div",null,r.a.createElement("h1",null,"According to your family income. You still have to borrow ",this.state.tuition," ","for college."),r.a.createElement("div",null,r.a.createElement(k,{clicked:this.changePageHandler},"Continue"))))),4:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"You applied for FAFSA and received the maximum amount of federal aid: 3500 dollars!!!"," ")),r.a.createElement(y.a,{bottom:!0,duration:1500},r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-5250,e.state.salary)}},"Continue"))),5:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,null,"Make sure you apply for FAFSA for federal financial aid and CSS Profile for non-federal financial aid"," "),r.a.createElement("h5",null,"Both the CSS application and the FAFSA can be filed as early as October 1 and should be completed as soon as possible to take advantage of aid that is distributed on a first-come, first-served basis. All schools have their own deadlines in place for the CSS, but many require students to file the profile two weeks before the college's priority admission application deadline."),r.a.createElement(k,{clicked:function(){return e.changePageHandler()}},"Continue"))),6:r.a.createElement(d,null,this.state.tuition>0?r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,null,"You still need to pay $",this.state.tuition," for college"),r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("div",null,"The option left for you is student loan"),r.a.createElement(k,{clicked:this.changePageHandler},"Get Student Loans")))):r.a.createElement("h1",null,"Congrats!!!")),7:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,{style:{marginBottom:"5%"}}," ","The good thing about private loans is that they allow you to borrow as much as you need, while federal loans usually max out at around eight thousand dollars"),r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("h4",{style:{marginBottom:"0%"}},"Type of Interest?")),r.a.createElement(h.a,{className:g.a.mb2},r.a.createElement(k,{clicked:function(){return e.changeInterestHandler(.11*Math.random()+.05)},variant:"dark",size:"lg"},"Variable (Interest: 5%-15%/year)"),r.a.createElement(k,{clicked:function(){return e.changeInterestHandler(.09)},variant:"dark",size:"lg"},"Fixed (Interest: 9%/year)")))),8:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,null,"How much money do you want to spend on daily food?")),r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",null,r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(720,e.state.salary)}},"Cup Noodle ($3)"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(2400,e.state.salary)}},"Fried Chicken ($10)"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(7200,e.state.salary)}},"Steak ($30)")))),9:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,null,"How about taking a part time job?"),r.a.createElement("div",null,r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(0,e.state.salary)}},"I am fine!"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-450,e.state.salary)}},"Just a little"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-1050,e.state.salary)}},"Full on!")))),10:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",null,r.a.createElement(T,{style:{marginBottom:"5%"}}," ","School is getting really difficult. all of your classes have so much homework, you begin to question your chosen major."))),r.a.createElement(y.a,{bottom:!0,cascade:!0,duration:1500},r.a.createElement("h3",null,"What do you choose to do?"),r.a.createElement(h.a,{className:g.a.mb2},r.a.createElement(k,{clicked:function(){return e.changePageHandler(12)},variant:"dark",size:"lg"},"STUDY HARDER"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(.5*e.state.tuition,e.state.salary)},variant:"dark",size:"lg"},"PICK A NEW MAJOR")))),11:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",{style:{width:"60%",margin:"auto",fontSize:"1.5625rem"}},"This might be difficult for you and extend your time in college. although sometimes it\u2019s worth it to follow your dreams, you definitely need to consider that you may spend over six years in college to get a new bachelor\u2019s degree\u2026 and that\u2019s even more loans you have to take out!"),r.a.createElement(k,{clicked:function(){return e.changePageHandler(13)},variant:"dark",size:"lg"},"Continue"))),12:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"Good on you for not giving up! you study for five hours a day, and you ace the final exam. looks like you\u2019re still on track for a quick graduation."),r.a.createElement(k,{clicked:function(){return e.switchGradeHandler(2)},variant:"dark",size:"lg"},"Continue"))),13:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,{style:{marginBottom:"5%"}}," ","What do you plan to do this summer"),r.a.createElement(h.a,{className:g.a.mb2},r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-1500,e.state.salary)}},"Get a Paid Internship"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(3e3,e.state.salary+500)}},"Take classes (Graduating Salary +$500)"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(0,e.state.salary)}},"Chill")))),14:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"This year you get $4500 from FAFSA!!!")),r.a.createElement(y.a,{bottom:!0},r.a.createElement(k,{clicked:this.changePageHandler},"Continue"))),15:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",{style:{marginTop:"-5%"}},"Your laptop broke as you fell down for chasing a morning class."),r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("h4",null,"What kind do you want?")),r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",null,r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(350,e.state.salary)}},"Surface Laptop 3 ($1400)"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(250,e.state.salary)}},"thinkpad ($1000)"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(150,e.state.salary)}},"used macbook air ($600)"))))),16:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"Your Sophomore Year is Over!")),r.a.createElement(y.a,{bottom:!0},r.a.createElement(k,{clicked:function(){return e.changeGradeHandler(3)}},"Continue"))),17:r.a.createElement(y.a,{bottom:!0},r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"This year you get $5500 from FAFSA!!!")),r.a.createElement(y.a,{bottom:!0},r.a.createElement(k,{clicked:this.changePageHandler},"Continue")))),18:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",null,r.a.createElement(T,{style:{marginTop:"-5%"}},"Do you want to travel this winter break?"))),r.a.createElement(y.a,{bottom:!0,cascade:!0,duration:1500},r.a.createElement(h.a,{className:g.a.mb2},r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(500,e.state.salary)}},"Yes!"),r.a.createElement(k,{clicked:function(){return e.changePageHandler(20)}},"Maybe Next Time")))),19:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"You spend almost 2000 dollars going to Canada, but you get to see your friends.")),r.a.createElement(y.a,{bottom:!0},r.a.createElement(k,{clicked:function(){return e.changePageHandler(21)}},"Continue"))),20:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"You spend your winter break studying and do well on the exams")),r.a.createElement(y.a,{bottom:!0},r.a.createElement(k,{clicked:function(){return e.changePageHandler(21)}},"Continue"))),21:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"Your Junior Year is Over!"),r.a.createElement(k,{clicked:function(){return e.changeGradeHandler(4)}},"Continue"))),22:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(T,{style:{marginBottom:"5%"}}," ","What do you plan to do this summer?")),r.a.createElement(y.a,{bottom:!0},r.a.createElement(h.a,{className:g.a.mb2},r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(-1500,e.state.salary)}},"Get a Paid Internship"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(3e3,e.state.salary+500)}},"Take classes (Graduating Salary +$500)"),r.a.createElement(k,{clicked:function(){return e.changeTuitionHandler(0,e.state.salary)}},"Chill")))),23:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"This year you get $5500 from FAFSA!!!"),r.a.createElement(k,{clicked:this.changePageHandler},"Continue"))),24:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"Your Graduated!")),r.a.createElement(y.a,{bottom:!0},r.a.createElement(k,{clicked:this.changePageHandler},"Continue"))),25:r.a.createElement(y.a,{bottom:!0},r.a.createElement(d,null,r.a.createElement("h2",{style:{marginBottom:"5%"}},"Finally you got a job. You end up with $",(4*this.state.tuition*(1+this.state.interest)).toFixed(0)," ","to pay. Assuming your salary increase 10% per year and you pay 15% of your salary for the loan, according to the average salary of your college, you will need ",n," year to pay the loan. Monthly Payment: $",P))),30:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,this.state.gradeLevel)),r.a.createElement(y.a,{bottom:!0},r.a.createElement(k,{clicked:this.continueGradeHandler},"Continue")))}[this.state.ID])),this.state.ID>7?r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",null,r.a.createElement(_.a,{bg:"dark",fixed:"bottom"},r.a.createElement(_.a.Brand,{href:"#home",style:{color:"white",align:"center",margin:"auto"}},"$",(this.state.tuition*this.state.grade*(1+this.state.interest)).toFixed(0)," ","IN DEBT")))):r.a.createElement("div",null))}}]),a}(l.Component),C=a(20),S=a.n(C),B=function(){return r.a.createElement("div",{className:S.a.Pages},r.a.createElement(w,null))},N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(B,null))}}]),a}(l.Component);a(33);var $=function(){return r.a.createElement("div",{className:"App",style:{backgroundColor:" #f9f7e8"}},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={Page:"Page_Page__PURLd",rascal:"Page_rascal__2-ddX",mb2:"Page_mb2__1F1Um"}},7:function(e,t,a){e.exports={question:"Question_question__3lI9D",borderRight:"Question_borderRight__2jeXX",borderBottom:"Question_borderBottom__CBLdY",questionShadow:"Question_questionShadow__1kHEU",questionWrapper:"Question_questionWrapper__3Yjvp",borderTop:"Question_borderTop__2wDn5",borderLeft:"Question_borderLeft__v5BTQ",textLabel:"Question_textLabel__1OCi0"}}},[[21,1,2]]]);
//# sourceMappingURL=main.6cd6ac56.chunk.js.map