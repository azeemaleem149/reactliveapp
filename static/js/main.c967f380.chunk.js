(this.webpackJsonpreactliveapp=this.webpackJsonpreactliveapp||[]).push([[0],{354:function(e,a,t){e.exports=t(800)},636:function(e,a,t){},637:function(e,a,t){},736:function(e,a,t){},789:function(e,a,t){},799:function(e,a,t){},800:function(e,a,t){"use strict";t.r(a);t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(365),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(373),t(374),t(375),t(376),t(377),t(378),t(379),t(380),t(381),t(174),t(382),t(383),t(384),t(385),t(386),t(387),t(388),t(389),t(390),t(391),t(392),t(393),t(394),t(395),t(396),t(398),t(400),t(401),t(402),t(223),t(403),t(404),t(405),t(406),t(407),t(408),t(409),t(410),t(411),t(412),t(413),t(414),t(415),t(416),t(417),t(418),t(419),t(420),t(421),t(422),t(423),t(424),t(425),t(426),t(427),t(428),t(430),t(431),t(433),t(434),t(435),t(436),t(437),t(438),t(439),t(440),t(441),t(442),t(443),t(444),t(445),t(446),t(447),t(448),t(449),t(450),t(451),t(452),t(454),t(455),t(456),t(457),t(458),t(460),t(461),t(462),t(463),t(464),t(465),t(466),t(467),t(468),t(469),t(470),t(282),t(471),t(472),t(284),t(473),t(474),t(475),t(476),t(285),t(477),t(478),t(479),t(480),t(481),t(482),t(483),t(484),t(485),t(486),t(487),t(488),t(489),t(490),t(491),t(492),t(493),t(494),t(495),t(496),t(497),t(498),t(499),t(500),t(501),t(502),t(504),t(505),t(506),t(507),t(508),t(509),t(510),t(511),t(512),t(513),t(514),t(515),t(516),t(517),t(518),t(519),t(520),t(521),t(522),t(523),t(524),t(525),t(526),t(527),t(528),t(529),t(530),t(531),t(532),t(533),t(534),t(535),t(536),t(231),t(537),t(538),t(539),t(540),t(541),t(542),t(543),t(545),t(546),t(547),t(548),t(549),t(550),t(551),t(552),t(554),t(555),t(556),t(557),t(558),t(559),t(560),t(561),t(562),t(563),t(564),t(565),t(566),t(567),t(568),t(569),t(570),t(571),t(572),t(573),t(574),t(575),t(576),t(577),t(578),t(580),t(581),t(582),t(583),t(584),t(585),t(586),t(587),t(588),t(589),t(590),t(591),t(592),t(593),t(594),t(595),t(596),t(597),t(598),t(599),t(600),t(601),t(602),t(603),t(604),t(605),t(606),t(607),t(608),t(609),t(610),t(611),t(613),t(614),t(615),t(616),t(617),t(618),t(619),t(620),t(621),t(622),t(623),t(624),t(625),t(626),t(627),t(628),t(630),t(296);var n=t(0),r=t.n(n),l=t(14),o=t.n(l),m=(t(635),t(636),t(805)),c=t(807),s=t(169),i=t(66),u=t(809),p=t(810),E=t(204),d=t(69),g=(t(637),function(e){return r.a.createElement("div",{id:"loginForm"},r.a.createElement(m.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(a){var t=localStorage.getItem("values"),n=JSON.parse(t),r=n.email,l=n.password;a.username===r&&a.password===l?localStorage.setItem("auhenticate",!0):E.b.error("Please Correct your Information"),a.username===r&&a.password===l&&e.history.push("/")}},r.a.createElement(m.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(c.a,{prefix:r.a.createElement(u.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(m.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(c.a,{prefix:r.a.createElement(p.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(s.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:"/"},"Forgot password")),r.a.createElement(m.a.Item,null,r.a.createElement(i.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement(d.b,{to:"./register"},"register now!"))))}),h=t(102),f=t(168),y=t(203),b=t(811),w=(t(736),f.a.Option),v={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},I={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},O=function(e){var a=m.a.useForm(),t=Object(h.a)(a,1)[0],n=r.a.createElement(m.a.Item,{name:"prefix",noStyle:!0},r.a.createElement(f.a,{style:{width:70}},r.a.createElement(w,{value:"86"},"+92"),r.a.createElement(w,{value:"87"},"+91")));return r.a.createElement("div",{id:"myForm"},r.a.createElement(m.a,Object.assign({},v,{form:t,name:"register",onFinish:function(a){localStorage.setItem("values",JSON.stringify(a)),localStorage.setItem("auhenticate",""),e.history.push("./login")},scrollToFirstError:!0}),r.a.createElement(m.a.Item,{name:"nickname",label:r.a.createElement("span",null,"Name\xa0",r.a.createElement(y.a,{title:"Your Origional Name"},r.a.createElement(b.a,null))),rules:[{required:!0,message:"Please input your Name!",whitespace:!0}]},r.a.createElement(c.a,null)),r.a.createElement(m.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(c.a,null)),r.a.createElement(m.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},r.a.createElement(c.a.Password,null)),r.a.createElement(m.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(c.a.Password,null)),r.a.createElement(m.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},r.a.createElement(c.a,{addonBefore:n,style:{width:"100%"}})),r.a.createElement(m.a.Item,Object.assign({name:"agreement",valuePropName:"checked"},I),"Do you have already Account! ",r.a.createElement(d.b,{to:"./login"},"Login")),r.a.createElement(m.a.Item,I,r.a.createElement(i.a,{type:"primary",htmlType:"submit"},"Register"))))},S=t(803),P=t(806),N=t(94),j=t(808),k=t(325),x=t(804),F=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(!1),m=Object(h.a)(o,2),c=m[0],s=m[1],u=Object(n.useState)(""),p=Object(h.a)(u,2),E=p[0],d=p[1],g=Object(n.useState)(""),f=Object(h.a)(g,2),y=f[0],b=f[1],w=Object(n.useState)(""),v=Object(h.a)(w,2),I=v[0],O=v[1],S=Object(n.useState)(""),P=Object(h.a)(S,2),N=P[0],j=P[1];Object(n.useEffect)((function(){c&&setTimeout((function(){s(!1)}),1500)}),[c]);if(c)return r.a.createElement(k.BeatLoader,null);var F=function(){var e=localStorage.getItem("values"),a=JSON.parse(e);d(a.nickname),b(a.email),O(a.phone),j(a.password)},A=[{key:"1",name:E,email:y,phone:I,password1:N}];return r.a.createElement("div",null,r.a.createElement(x.a,{columns:[{title:"Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Phone",dataIndex:"phone"},{title:"Password",dataIndex:"password"}],dataSource:A,size:"small"}),r.a.createElement(i.a,{type:"primary",onClick:function(){s(!c),setTimeout((function(){s(!c),l(!t)}),1500),F()}},"View Details"))},A=(t(789),S.a.Header),C=S.a.Content,L=S.a.Footer,T=function(){var e=function(){P.a.error({title:"Please Logout Before Access this Page",content:"You can't access this page before Logout"})},a=localStorage.getItem("values");JSON.parse(a);return r.a.createElement("div",null,r.a.createElement(S.a,{className:"layout"},r.a.createElement(A,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(N.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(N.a.Item,{key:"1",style:{color:"white",fontWeight:"700",fontSize:"20px"}},"Azeem Aleem"),r.a.createElement(N.a.Item,{key:"2"},r.a.createElement(d.b,{to:"./"},"Home")),r.a.createElement(N.a.Item,{key:"3",onClick:e}," Login"),r.a.createElement(N.a.Item,{key:"4",onClick:e},"Register"),r.a.createElement(N.a.Item,{key:"5"},r.a.createElement(d.b,{to:"./logout"},"Logout")))),r.a.createElement(C,{style:{padding:"0 50px"}},r.a.createElement(j.a,{style:{margin:"16px 0"}},r.a.createElement(j.a.Item,null,"Home"),r.a.createElement(j.a.Item,null,"List"),r.a.createElement(j.a.Item,null,"App")),r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(F,null))),r.a.createElement(L,{style:{textAlign:"center"}},"\xa92020 Developed by Azeem Aleem ")))},q=t(54),J=(t(798),t(799),function(){return localStorage.clear(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"logout"},r.a.createElement("div",{className:"text"},"YOU ARE LOGOUT NOW!",r.a.createElement("div",{className:"buttons"},r.a.createElement(i.a,{type:"primary",style:{margin:"1rem",width:"100px"}},r.a.createElement(d.b,{to:"/login"},"Login")),r.a.createElement(i.a,{type:"primary",style:{margin:"1rem",width:"100px"}},r.a.createElement(d.b,{to:"/register"},"Register"))))))}),z=t(342),B=t(343),R=t(346),U=t(351),W=function(e){Object(U.a)(t,e);var a=Object(R.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props.component;return localStorage.getItem("auhenticate")?r.a.createElement(e,null):r.a.createElement(q.a,{to:{pathname:"/login"}})}}]),t}(n.Component),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(q.d,null,r.a.createElement(W,{path:"/",component:T,exact:!0}),r.a.createElement(q.b,{path:"/login",component:g}),r.a.createElement(q.b,{path:"/register",component:O}),r.a.createElement(q.b,{path:"/logout",component:J}),r.a.createElement(q.a,{from:"/",exact:!0,to:"/navbar"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{basename:window.location.pathname||""},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[354,1,2]]]);
//# sourceMappingURL=main.c967f380.chunk.js.map