(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={form:"Input_form__k13rY",label:"Input_label__1ZR_J",description:"Input_description__1Wavh",input:"Input_input__3PpBn",button:"Input_button__DySIX"}},,,,,,,,function(t,e,n){t.exports={block:"PhoneList_block__3vKuk",title:"PhoneList_title__3eZ6n",list:"PhoneList_list__y6sLM"}},function(t,e,n){t.exports={item:"PhoneItem_item__sHY5T",text:"PhoneItem_text__3HCXV",button:"PhoneItem_button__1gZ-H"}},function(t,e,n){t.exports={conteiner:"Filter_conteiner__RyEEN",title:"Filter_title__1XWJx",input:"Filter_input__1mW5E"}},,,,,,,,function(t,e,n){},function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(13),i=n.n(r),o=(n(19),n(14)),s=n(4),l=n(5),u=n(6),m=n(8),b=n(7),d=(n(20),n(3)),h=n.n(d),p=n(26),j=n(1),f=n.n(j),_=n(0),v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(p.a)(),name:t.state.name,number:t.state.number};t.props.addContact(n),t.reset()},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.phone,a=this.state,c=a.name,r=a.number;return Object(_.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{className:f.a.label,children:[Object(_.jsx)("p",{className:f.a.description,children:e}),Object(_.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:this.handleChange})]}),Object(_.jsxs)("label",{className:f.a.label,children:[Object(_.jsx)("p",{className:f.a.description,children:n}),Object(_.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:r,onChange:this.handleChange})]}),Object(_.jsx)("button",{className:f.a.button,type:"submit",children:"add contact"})]})}}]),n}(a.Component);v.propType={title:h.a.string,addContact:h.a.func,phone:h.a.string};var C=v,O=n(9),x=n.n(O),g=n(10),N=n.n(g);var y=function(t){var e=t.id,n=t.name,a=t.number,c=t.removeContact;return Object(_.jsxs)("li",{className:N.a.item,children:[Object(_.jsx)("p",{children:n}),": ",Object(_.jsx)("p",{className:N.a.text,children:a}),Object(_.jsx)("button",{className:N.a.button,type:"button",onClick:function(){return c(e)},children:"Delete"})]})};var k=function(t){var e=t.title,n=t.filterContact,a=t.removeContact;return Object(_.jsxs)("section",{className:x.a.block,children:[Object(_.jsx)("h2",{className:x.a.title,children:e}),Object(_.jsx)("ul",{className:x.a.list,children:n().map((function(t){var e=t.id,n=t.name,c=t.number;return Object(_.jsx)(y,{id:e,name:n,number:c,removeContact:a},e)}))})]})},S=n(11),w=n.n(S);function I(t){var e=t.filter,n=t.onChange;return Object(_.jsxs)("div",{className:w.a.conteiner,children:[Object(_.jsx)("h3",{className:w.a.title,children:"Find contacts by name"}),Object(_.jsx)("input",{className:w.a.input,type:"text",name:"filter",value:e,onChange:n})]})}I.propType={value:h.a.string,onChange:h.a.func};var A=I,L=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.addContact=function(e){t.checkContact(e.name)?alert("".concat(e.name," is alredy in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(o.a)(n))}}))},t.checkContact=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.filterContact=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("h1",{className:"title",children:"Phonebook"}),Object(_.jsx)(C,{title:"Name",phone:"Number",addContact:this.addContact}),Object(_.jsx)(A,{filter:t,onChange:this.handleChange}),Object(_.jsx)(k,{filterContact:this.filterContact,title:"Contacts",removeContact:this.removeContact})]})}}]),n}(a.Component);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(L,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.608e60ee.chunk.js.map