(this.webpackJsonpreactliveapp=this.webpackJsonpreactliveapp||[]).push([[0],{362:function(e,a,t){e.exports=t(817)},644:function(e,a,t){},645:function(e,a,t){},744:function(e,a,t){},751:function(e,a,t){},758:function(e,a,t){},773:function(e,a,t){},777:function(e,a,t){},817:function(e,a,t){"use strict";t.r(a);t(363),t(364),t(365),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(373),t(374),t(375),t(376),t(377),t(378),t(379),t(380),t(381),t(382),t(383),t(384),t(385),t(386),t(387),t(388),t(389),t(179),t(390),t(391),t(392),t(393),t(394),t(395),t(396),t(397),t(398),t(399),t(400),t(401),t(402),t(403),t(404),t(406),t(408),t(409),t(410),t(234),t(411),t(412),t(413),t(414),t(415),t(416),t(417),t(418),t(419),t(420),t(421),t(422),t(423),t(424),t(425),t(426),t(427),t(428),t(429),t(430),t(431),t(432),t(433),t(434),t(435),t(436),t(438),t(439),t(441),t(442),t(443),t(444),t(445),t(446),t(447),t(448),t(449),t(450),t(451),t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(462),t(463),t(464),t(465),t(466),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(475),t(476),t(477),t(478),t(294),t(479),t(480),t(296),t(481),t(482),t(483),t(484),t(297),t(485),t(486),t(487),t(488),t(489),t(490),t(491),t(492),t(493),t(494),t(495),t(496),t(497),t(498),t(499),t(500),t(501),t(502),t(503),t(504),t(505),t(506),t(507),t(508),t(509),t(510),t(512),t(513),t(514),t(515),t(516),t(517),t(518),t(519),t(520),t(521),t(522),t(523),t(524),t(525),t(526),t(527),t(528),t(529),t(530),t(531),t(532),t(533),t(534),t(535),t(536),t(537),t(538),t(539),t(540),t(541),t(542),t(543),t(544),t(242),t(545),t(546),t(547),t(548),t(549),t(550),t(551),t(553),t(554),t(555),t(556),t(557),t(558),t(559),t(560),t(562),t(563),t(564),t(565),t(566),t(567),t(568),t(569),t(570),t(571),t(572),t(573),t(574),t(575),t(576),t(577),t(578),t(579),t(580),t(581),t(582),t(583),t(584),t(585),t(586),t(588),t(589),t(590),t(591),t(592),t(593),t(594),t(595),t(596),t(597),t(598),t(599),t(600),t(601),t(602),t(603),t(604),t(605),t(606),t(607),t(608),t(609),t(610),t(611),t(612),t(613),t(614),t(615),t(616),t(617),t(618),t(619),t(621),t(622),t(623),t(624),t(625),t(626),t(627),t(628),t(629),t(630),t(631),t(632),t(633),t(634),t(635),t(636),t(638),t(308);var n=t(0),r=t.n(n),l=t(19),o=t.n(l),m=(t(643),t(644),t(823)),c=t(826),s=t(174),i=t(64),u=t(828),d=t(829),E=t(213),p=t(66),g=(t(645),function(e){return r.a.createElement("div",{id:"loginForm"},r.a.createElement(m.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(a){var t=localStorage.getItem("values"),n=JSON.parse(t),r=n.email,l=n.password;a.username===r&&a.password===l?localStorage.setItem("auhenticate",!0):E.b.error("Please Correct your Information"),a.username===r&&a.password===l&&e.history.push("/")}},r.a.createElement(m.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(c.a,{prefix:r.a.createElement(u.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(m.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(c.a,{prefix:r.a.createElement(d.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(s.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:"/"},"Forgot password")),r.a.createElement(m.a.Item,null,r.a.createElement(i.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement(p.b,{to:"./register"},"register now!"))))}),f=t(67),h=t(173),y=t(212),b=t(830),v=(t(744),h.a.Option),w={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},O={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},I=function(e){var a=m.a.useForm(),t=Object(f.a)(a,1)[0],n=r.a.createElement(m.a.Item,{name:"prefix",noStyle:!0},r.a.createElement(h.a,{style:{width:70}},r.a.createElement(v,{value:"86"},"+92"),r.a.createElement(v,{value:"87"},"+91")));return r.a.createElement("div",{id:"myForm"},r.a.createElement(m.a,Object.assign({},w,{form:t,name:"register",onFinish:function(a){localStorage.setItem("values",JSON.stringify(a)),localStorage.setItem("auhenticate",""),e.history.push("./login")},scrollToFirstError:!0}),r.a.createElement(m.a.Item,{name:"nickname",label:r.a.createElement("span",null,"Name\xa0",r.a.createElement(y.a,{title:"Your Origional Name"},r.a.createElement(b.a,null))),rules:[{required:!0,message:"Please input your Name!",whitespace:!0}]},r.a.createElement(c.a,null)),r.a.createElement(m.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(c.a,null)),r.a.createElement(m.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},r.a.createElement(c.a.Password,null)),r.a.createElement(m.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(c.a.Password,null)),r.a.createElement(m.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},r.a.createElement(c.a,{addonBefore:n,style:{width:"100%"}})),r.a.createElement(m.a.Item,Object.assign({name:"agreement",valuePropName:"checked"},O),"Do you have already Account! ",r.a.createElement(p.b,{to:"./login"},"Login")),r.a.createElement(m.a.Item,O,r.a.createElement(i.a,{type:"primary",htmlType:"submit"},"Register"))))},S=t(821),j=t(99),k=(t(751),S.a.Header),N=function(e){var a=localStorage.getItem("values"),t=JSON.parse(a);return r.a.createElement("div",null,r.a.createElement(S.a,{className:"layout"},r.a.createElement(k,null,r.a.createElement(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[e.value]},r.a.createElement(j.a.Item,{key:"1",style:{color:"white",fontWeight:"700",fontSize:"20px",marginRight:"65%"}},r.a.createElement(p.b,{to:"./"},t.nickname)),r.a.createElement(j.a.Item,{key:"2"},r.a.createElement(p.b,{to:"./"},"Home")),r.a.createElement(j.a.Item,{key:"3"},r.a.createElement(p.b,{to:"./userdetail"},"User Detail")),r.a.createElement(j.a.Item,{key:"4"},r.a.createElement(p.b,{to:"./logout"},"Logout"))))))},P=S.a.Footer,x=function(){return r.a.createElement("div",null,r.a.createElement(S.a,{className:"layout"},r.a.createElement(P,{style:{textAlign:"center",position:"fixed",width:"100%",zIndex:"100"}},"\xa92020 Developed by Azeem Aleem")))},T=t(825),C=t(831),D=(t(758),t(824)),F=h.a.Option,q=function(e){var a=m.a.useForm(),t=Object(f.a)(a,1)[0],n=function(a){e.sendData(a)};return r.a.createElement("div",null,r.a.createElement(m.a,{form:t,name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){t.resetFields();var a=e,r=JSON.parse(localStorage.getItem("previousData"))||[],l=r.some((function(e){return e.heading===a.heading}));if(l)return r;localStorage.setItem("previousData",JSON.stringify(r.concat(a))),l||n(a)}},r.a.createElement(m.a.Item,{name:"heading",rules:[{required:!0,message:"Please Write Task Heding!"}]},r.a.createElement(c.a,{placeholder:"Task Heading"})),r.a.createElement(m.a.Item,{name:"date",rules:[{required:!0,message:"Please select Date"}]},r.a.createElement(D.a,null)),r.a.createElement(m.a.Item,{name:"status",rules:[{required:!0,message:"Whats Status of your Task"}]},r.a.createElement(h.a,{showSearch:!0,style:{width:200},placeholder:"Status of Task",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(F,{value:"Pending"},"Pending"),r.a.createElement(F,{value:"Done"},"Done"),r.a.createElement(F,{value:"Not Started"},"Not Started yet"))),r.a.createElement(m.a.Item,null,r.a.createElement(i.a,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:e.action,onChange:e.sendData},"Add Task"))))},A=function(){Object(n.useEffect)((function(){var e=window.localStorage.getItem("previousData"),a=JSON.parse(e);a&&s(a)}),[]);var e=Object(n.useState)(!1),a=Object(f.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)([]),m=Object(f.a)(o,2),c=m[0],s=m[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"addTaskButton"},r.a.createElement(i.a,{type:"primary",onClick:function(){l(!0)}},"+ Add Task")),r.a.createElement(T.a,{title:"Put Your Task",visible:t,onCancel:function(){l(!1)},footer:null},r.a.createElement(q,{action:function(){l(!1)},sendData:function(e){var a=c.slice();a.push(e),s(a)}})),r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Heading of Task"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,c.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,e.heading),r.a.createElement("td",null,e.date.toString()),r.a.createElement("td",null,e.status),r.a.createElement("td",null,r.a.createElement(i.a,{danger:!0,onClick:function(){return function(e){var a=c.filter((function(a){return a.heading!==e}));s(a),localStorage.setItem("previousData",JSON.stringify(a))}(e.heading)}},"Delete")))})))))},J=t(827),L=(t(773),S.a.Content),H=function(){var e=Object(n.useState)("2"),a=Object(f.a)(e,1)[0];return r.a.createElement("div",{id:"home"},r.a.createElement(S.a,{className:"layout"},r.a.createElement(N,{value:a}),r.a.createElement(L,{style:{padding:"0 50px"}},r.a.createElement(J.a,{style:{margin:"16px 0"}},r.a.createElement(J.a.Item,null,"Home")),r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(A,null))),r.a.createElement(x,null)))},U=t(54),W=(t(776),t(777),function(){return localStorage.clear(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"logout"},r.a.createElement("div",{className:"text"},"YOU ARE LOGOUT NOW!",r.a.createElement("div",{className:"buttons"},r.a.createElement(i.a,{type:"primary",style:{margin:"1rem",width:"100px"}},r.a.createElement(p.b,{to:"/login"},"Login")),r.a.createElement(i.a,{type:"primary",style:{margin:"1rem",width:"100px"}},r.a.createElement(p.b,{to:"/register"},"Register"))))))}),z=t(209),B=t(210),R=t(211),V=t(214),Y=function(e){Object(V.a)(t,e);var a=Object(R.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props.component;return localStorage.getItem("auhenticate")?r.a.createElement(e,null):r.a.createElement(U.a,{to:{pathname:"/register"}})}}]),t}(n.Component),_=t(343),G=t(822),K=function(){var e=Object(n.useState)(!1),a=Object(f.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(!1),m=Object(f.a)(o,2),c=m[0],s=m[1],u=Object(n.useState)(""),d=Object(f.a)(u,2),E=d[0],p=d[1],g=Object(n.useState)(""),h=Object(f.a)(g,2),y=h[0],b=h[1],v=Object(n.useState)(""),w=Object(f.a)(v,2),O=w[0],I=w[1],S=Object(n.useState)(""),j=Object(f.a)(S,2),k=j[0],N=j[1];Object(n.useEffect)((function(){c&&setTimeout((function(){s(!1)}),1500)}),[c]);if(c)return r.a.createElement(_.BeatLoader,null);var P=function(){var e=localStorage.getItem("values"),a=JSON.parse(e);p(a.nickname),b(a.email),I(a.phone),N(a.password)},x=[{key:"1",name:E,email:y,phone:O,password1:k}];return r.a.createElement("div",null,r.a.createElement(G.a,{columns:[{title:"Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Phone",dataIndex:"phone"},{title:"Password",dataIndex:"password"}],dataSource:x,size:"small"}),r.a.createElement(i.a,{type:"primary",onClick:function(){s(!c),setTimeout((function(){s(!c),l(!t)}),1500),P()}},"View Details"))},M=S.a.Content,$=function(e){Object(V.a)(t,e);var a=Object(R.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={count:"3"},e}return Object(B.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(N,{value:this.state.count}),r.a.createElement(M,{style:{padding:"0 50px"}},r.a.createElement(J.a,{style:{margin:"16px 0"}},r.a.createElement(J.a.Item,null,"Home"),r.a.createElement(J.a.Item,null,"User Detail")),r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(K,null))),r.a.createElement(x,null)))}}]),t}(n.Component),Q=(t(816),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(U.d,null,r.a.createElement(Y,{path:"/",component:H,exact:!0}),r.a.createElement(U.b,{path:"/login",component:g}),r.a.createElement(U.b,{path:"/register",component:I}),r.a.createElement(U.b,{path:"/logout",component:W}),r.a.createElement(U.b,{path:"/userdetail",component:$}),r.a.createElement(U.a,{from:"/",exact:!0,to:"/home"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{basename:window.location.pathname||""},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[362,1,2]]]);
//# sourceMappingURL=main.41e841cb.chunk.js.map