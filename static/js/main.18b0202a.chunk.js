(this["webpackJsonpyouth-finance-student-loan"]=this["webpackJsonpyouth-finance-student-loan"]||[]).push([[0],{16:function(e,t,a){e.exports={Button:"Button_Button__24JBt","options-hidden":"Button_options-hidden__2H7Do",hvrBackPulse:"Button_hvrBackPulse__2-1Lu"}},20:function(e,t,a){e.exports={Pages:"Pages_Pages__Ef-wK"}},21:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),o=a(8),i=a.n(o),c=(a(26),a(27),a(28),a(10)),u=a(11),s=a(12),m=a(13),d=function(e){return e.children},h=a(9),g=a(6),E=a.n(g),f=a(1),y=a.n(f),b=a(16),v=a.n(b),p=function(e){return r.a.createElement("button",{className:[v.a.Button,v.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},k=a(7),_=a.n(k),w=function(e){return r.a.createElement("div",{className:_.a.questionWrapper},r.a.createElement("div",{className:_.a.question},r.a.createElement("div",{className:_.a.borderTop}),r.a.createElement("div",{className:_.a.borderLeft}),r.a.createElement("div",{className:_.a.textLabel},r.a.createElement("p",null,e.children))),r.a.createElement("div",{className:_.a.borderRight}),r.a.createElement("div",{className:_.a.borderBottom}),r.a.createElement("div",{className:_.a.questionShadow}))},H=a(17),P=0,T=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ID:0,tuition:0,Dtuition:0,salary:0,interest:0},e.calculatePayTime=function(){for(var t=e.state.salary,a=e.state.interest,l=e.state.tuition,r=l,o=0;l>0;)o+=1,r+=(l*=1+a)*a,l-=.15*t,t*=1.1;n=o,P=(r/o/12).toFixed(0)},e.componentDidMount=function(){15==e.state.ID&&e.calculatePayTime()},e.changePageHandler=function(t){15==t&&e.calculatePayTime(),t>=0?e.setState({ID:t}):e.setState({ID:e.state.ID+1})},e.changeTuitionHandler=function(t,a){var n;n=Number(e.state.tuition+t),e.setState({tuition:n,salary:a}),e.changePageHandler()},e.changeInterestHandler=function(t){e.setState({interest:t}),e.changePageHandler()},e.handleChange=function(t){e.setState({Dtuition:t.target.value})},e.handleSubmit=function(t){var a=0;a=(e.state.ID,Number(e.state.tuition-e.state.Dtuition)),e.setState({tuition:a,Dtuition:0}),e.changePageHandler(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,r.a.createElement("div",{className:E.a.Page},r.a.createElement("div",{className:E.a.rascal},{0:r.a.createElement(d,null,r.a.createElement("h1",null,"Map My College"),r.a.createElement(p,{className:E.a.Button1,size:"lg",variant:"light",clicked:this.changePageHandler},r.a.createElement("b",null,"Start"))),1:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(w,null,"How much is your college tuition?"),r.a.createElement(h.a,{size:"lg",className:E.a.mb2},r.a.createElement(p,{variant:"light",clicked:function(){return e.changeTuitionHandler(6e4,65e3)}},"Bigwood University"," ",r.a.createElement("br",null),r.a.createElement("br",null),"Cost: $60000",r.a.createElement("br",null),"Average salary: $65000"),r.a.createElement(p,{variant:"light",clicked:function(){return e.changeTuitionHandler(45e3,5e4)}},"Middlerod College ",r.a.createElement("br",null),r.a.createElement("br",null),"Cost: $45000 ",r.a.createElement("br",null),"Average salary: $50000"),r.a.createElement(p,{variant:"light",clicked:function(){return e.changeTuitionHandler(25e3,45e3)}},"Smallcox University",r.a.createElement("br",null),r.a.createElement("br",null),"Cost: $25000",r.a.createElement("br",null),"Average salary: $45000")))),2:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0,cascade:!0,duration:1e3},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(w,null,"Which of the following is closest to your annual household income?")),r.a.createElement(h.a,{size:"lg",className:E.a.mb2},r.a.createElement(p,{variant:"light",clicked:function(){return e.changeTuitionHandler(-2500,e.state.salary)}},"$40,000"),r.a.createElement(p,{clicked:function(){return e.changeTuitionHandler(-1e4,e.state.salary)}},"$70,000"),r.a.createElement(p,{clicked:function(){return e.changeTuitionHandler(-25e3,e.state.salary)}},"$110,000"),r.a.createElement(p,{clicked:function(){return e.changeTuitionHandler(-5e4,e.state.salary)}},"$160,000"))))),3:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("div",null,r.a.createElement("h1",null,"According to your family income. You still have to borrow ",this.state.tuition," ","for college."),r.a.createElement("div",null,r.a.createElement(p,{clicked:this.changePageHandler},"Continue"))))),4:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"You applied for FAFSA and received the maximum amount of federal aid: 3500 dollars!!!"," ")),r.a.createElement(y.a,{bottom:!0,duration:1500},r.a.createElement(p,{clicked:function(){return e.changeTuitionHandler(-5250,e.state.salary)}},"Continue"))),5:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(w,null,"Make sure you apply for FAFSA for federal financial aid and CSS Profile for non-federal financial aid"," "),r.a.createElement("h5",null,"Both the CSS application and the FAFSA can be filed as early as October 1 and should be completed as soon as possible to take advantage of aid that is distributed on a first-come, first-served basis. All schools have their own deadlines in place for the CSS, but many require students to file the profile two weeks before the college's priority admission application deadline."),r.a.createElement(p,{clicked:function(){return e.changePageHandler(7)}},"Continue"))),7:r.a.createElement(d,null,this.state.tuition>0?r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(w,null,"You still need to pay $",this.state.tuition," ","for college"),r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("div",null,"The option left for you is student loan"),r.a.createElement(p,{clicked:this.changePageHandler},"Get Student Loans")))):r.a.createElement("h1",null,"Congrats!!!")),8:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(w,{style:{marginBottom:"5%"}}," ","The good thing about private loans is that they allow you to borrow as much as you need, while federal loans usually max out at around eight thousand dollars"),r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("h4",{style:{marginBottom:"0%"}},"Type of Interest?")),r.a.createElement(h.a,{className:E.a.mb2},r.a.createElement(p,{clicked:function(){return e.changeInterestHandler(.11*Math.random()+.05)},variant:"dark",size:"lg"},"Variable (Interest: 5%-15%/year)"),r.a.createElement(p,{clicked:function(){return e.changeInterestHandler(.09)},variant:"dark",size:"lg"},"Fixed (Interest: 9%/year)")))),9:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",null,r.a.createElement(w,{style:{marginBottom:"5%"}}," ","School is getting really difficult. all of your classes have so much homework, you begin to question your chosen major."))),r.a.createElement(y.a,{bottom:!0,cascade:!0,duration:1500},r.a.createElement("h3",null,"What do you choose to do?"),r.a.createElement(h.a,{className:E.a.mb2},r.a.createElement(p,{clicked:function(){return e.changePageHandler(11)},variant:"dark",size:"lg"},"STUDY HARDER"),r.a.createElement(p,{clicked:function(){return e.changeTuitionHandler(.5*e.state.tuition,e.state.salary)},variant:"dark",size:"lg"},"PICK A NEW MAJOR")))),10:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",{style:{width:"60%",margin:"auto",fontSize:"1.5625rem"}},"This might be difficult for you and extend your time in college. although sometimes it\u2019s worth it to follow your dreams, you definitely need to consider that you may spend over six years in college to get a new bachelor\u2019s degree\u2026 and that\u2019s even more loans you have to take out!"),r.a.createElement(p,{clicked:function(){return e.changePageHandler(12)},variant:"dark",size:"lg"},"Continue"))),11:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",null,"Good on you for not giving up! you study for five hours a day, and you ace the final exam. looks like you\u2019re still on track for a quick graduation."),r.a.createElement(p,{clicked:function(){return e.changePageHandler(12)},variant:"dark",size:"lg"},"Continue"))),12:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement(w,{style:{marginBottom:"5%"}}," ","While we process your approximated time\u2026 you just graduated, and your friends want to go out to eat at a fancy new restaurant. you know that you still have your monthly payment for student loans."),r.a.createElement(y.a,{bottom:!0,cascade:!0},r.a.createElement("h3",null,"What do you choose to do?")),r.a.createElement(h.a,{className:E.a.mb2},r.a.createElement(p,{clicked:function(){return e.changeTuitionHandler(50,e.state.salary)},variant:"dark",size:"lg"},"GO OUT TO EAT"),r.a.createElement(p,{clicked:function(){return e.changePageHandler(14)},variant:"dark",size:"lg"},"EAT INSTANT NOODLES")))),13:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",{style:{marginBottom:"5%"}},"Oh no! you just missed your first payment. you are charged a 200 dollar late fee"),r.a.createElement(y.a,{bottom:!0},r.a.createElement(p,{clicked:function(){return e.changePageHandler(15)},variant:"dark",size:"lg"},"Continue")))),14:r.a.createElement(d,null,r.a.createElement(y.a,{bottom:!0},r.a.createElement("h1",{style:{marginBottom:"5%"}},"Nice job! you are keeping up with the student loans. your friends said that the meal was not worth it, so you definitely lucked out."),r.a.createElement(y.a,{bottom:!0},r.a.createElement(p,{clicked:function(){return e.changePageHandler(15)},variant:"dark",size:"lg"},"Continue")))),15:r.a.createElement(y.a,{bottom:!0},r.a.createElement(d,null,r.a.createElement("h1",{style:{marginBottom:"5%"}},"Finally you got a job. You end up with $",(4*this.state.tuition*(1+this.state.interest)).toFixed(0)," ","to pay. Assuming your salary increase 10% per year and you pay 15% of your salary for the loan, according to the average salary of your college, you will need"," ",n," year to pay the loan. Monthly Payment: $",P)))}[this.state.ID])),this.state.ID>7&&15!=this.state.ID?r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",null,r.a.createElement(H.a,{bg:"dark",fixed:"bottom"},r.a.createElement(H.a.Brand,{href:"#home",style:{color:"white",align:"center",margin:"auto"}},"$",(2*this.state.tuition*(1+this.state.interest)).toFixed(0)," ","IN DEBT")))):r.a.createElement("div",null))}}]),a}(l.Component),S=a(20),N=a.n(S),B=function(){return r.a.createElement("div",{className:N.a.Pages},r.a.createElement(T,null))},C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(B,null))}}]),a}(l.Component);a(33);var x=function(){return r.a.createElement("div",{className:"App",style:{backgroundColor:" #f9f7e8"}},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={Page:"Page_Page__1C37e",rascal:"Page_rascal__2tLGC",mb2:"Page_mb2__XO8YA"}},7:function(e,t,a){e.exports={question:"Question_question__DuUoT",borderRight:"Question_borderRight__skh5f",borderBottom:"Question_borderBottom__3f2Rr",questionShadow:"Question_questionShadow__2Wxay",questionWrapper:"Question_questionWrapper__19ulM",borderTop:"Question_borderTop__2GFmf",borderLeft:"Question_borderLeft__OyiHz",textLabel:"Question_textLabel__ili2-"}}},[[21,1,2]]]);
//# sourceMappingURL=main.18b0202a.chunk.js.map