(this.webpackJsonpecomapp=this.webpackJsonpecomapp||[]).push([[0],{43:function(t,e,c){},44:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c(0),a=c.n(o),r=c(18),i=c.n(r),s=(c(43),c(44),c(9)),d=c(3),l=c(10),u=c(22),j=c(13),h=c(14),b=c(16),p=c(15),O=c(11),x=c.n(O),f=function(t){Object(b.a)(c,t);var e=Object(p.a)(c);function c(t){var n;return Object(j.a)(this,c),(n=e.call(this,t)).getProducts=function(){x.a.get("http://localhost:3000").then((function(t){console.log("call api from frontend"),console.log(t.data.payload),n.setState({data:t.data.payload})}))},n.sortData=function(t,e){x.a.post("http://localhost:3000/sort",{keyName:t,keyValue:e}).then((function(t){console.log("call api from frontend"),console.log(t.data.payload),n.setState({data:t.data.payload})}))},n.deleteProduct=function(t){x.a.delete("http://localhost:3000/".concat(t)).then((function(t){console.log("delete ",t),alert("Delete success"),n.getProducts()})).catch((function(t){alert("Delete error")}))},n.addToCart=function(t){var e=n.state.cart,c=e;n.setState({cart:[].concat(Object(u.a)(e),[Object(l.a)(Object(l.a)({},t),{},{quantity:1})])}),c.map((function(e){e._id===t._id&&(e.quantity=e.quantity+1)})),console.log("new cart -- > ",c)},n.state={data:[{name:"priducn11dddvffgdgdd",disocunt:"20",price:"1000"}],columns:[{Name:"Name",accessor:"name"},{Price:"Price",accessor:"price"},{Discount:"Discount",accessor:"discount"}],edit:!1,cart:[]},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){var t=this,e=this.state,c=e.data,o=e.cart;return console.log("car t data values --\x3e ",this.state),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"View Product"}),Object(n.jsx)(s.b,{to:"/add",children:"Add Product"})," ",Object(n.jsx)("br",{}),Object(n.jsx)(s.b,{to:"/cart",children:"View Cart"}),Object(n.jsxs)("table",{children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"Product Name"}),Object(n.jsxs)("th",{children:["Price"," ",Object(n.jsx)("button",{onClick:function(){t.sortData("price",1)},children:"Sort asc"})," ",Object(n.jsx)("button",{onClick:function(){t.sortData("price",-1)},children:"Sort asc"})]}),Object(n.jsxs)("th",{children:["Discount",Object(n.jsx)("button",{onClick:function(){t.sortData("discount",1)},children:"Sort asc"})," ",Object(n.jsx)("button",{onClick:function(){t.sortData("discount",-1)},children:"Sort asc"})]})]}),Object(n.jsx)("tbody",{children:(null===c||void 0===c?void 0:c.length)&&c.map((function(e,c){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.price}),Object(n.jsx)("td",{children:e.discount}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return t.deleteProduct(e._id)},children:"Delete"})}),Object(n.jsx)("td",{children:Object(n.jsx)(s.b,{to:"/edit/".concat(e._id),children:"Update"})}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return t.addToCart(e)},children:"Add to Cart"})})]},e._id)}))})]}),Object(n.jsx)("h1",{children:"Your cart"}),Object(n.jsxs)("table",{children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Price"}),Object(n.jsx)("th",{children:"Discount"}),Object(n.jsx)("th",{children:"Quantity"})]}),Object(n.jsx)("tbody",{children:o.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:t.price}),Object(n.jsx)("td",{children:t.discount}),Object(n.jsx)("td",{children:t.quantity})]},t._id)}))})]})]})}}]),c}(o.Component),m=c(21),g=function(t){Object(b.a)(c,t);var e=Object(p.a)(c);function c(t){var n;return Object(j.a)(this,c),(n=e.call(this,t)).state={},n}return Object(h.a)(c,[{key:"render",value:function(){return console.log("proppsss   == > ",this.props.cart),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Your cart"})})}}]),c}(o.Component),v=Object(m.b)((function(t){return Object(l.a)({},t)}))(g);var y=function(t){Object(b.a)(c,t);var e=Object(p.a)(c);function c(t){var n;return Object(j.a)(this,c),(n=e.call(this,t)).reset=function(){n.setState({name:null,price:null,discount:null})},n.add=function(){var t=n.state,e=t.name,c=t.price,o=t.discount;x.a.post("http://localhost:3000",{name:e,price:c,discount:o}).then((function(t){console.log("call api from frontend"),console.log(t),alert("Product added success")})).catch((function(t){alert("Error while adding product")}))},n.update=function(){var t=n.state,e=t.name,c=t.price,o=t.discount;x.a.patch("http://localhost:3000/".concat(n.state.id),{name:e,price:c,discount:o}).then((function(t){console.log("call api from frontend"),console.log(t),alert("Product update success")})).catch((function(t){alert("Error while adding product")}))},n.state={name:null,price:null,discount:null,id:null},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=this;console.log("pathname=hjj==="),console.log(window.location.pathname);var e=window.location.pathname.split("/");console.log(e[2]);var c=e[2];"edit"===e[1]&&x.a.post("http://localhost:3000/product/".concat(c)).then((function(e){console.log("call api from frontend"),console.log(e.data);var c=e.data,n=c.name,o=c.price,a=c.discount,r=c._id;t.setState({name:n,price:o,discount:a,id:r})})).catch((function(t){console.log("error  ",t)}))}},{key:"render",value:function(){var t=this,e=this.state,c=e.name,o=e.price,a=e.discount;return Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{children:"Add Product"}),Object(n.jsx)(s.b,{to:"/",children:"View All products"}),Object(n.jsx)("br",{}),"Name"," ",Object(n.jsx)("input",{type:"text",value:c,onChange:function(e){return t.setState({name:e.target.value})}}),Object(n.jsx)("br",{}),"Price"," ",Object(n.jsx)("input",{type:"text",value:o,onChange:function(e){return t.setState({price:e.target.value})}}),Object(n.jsx)("br",{}),"Discount"," ",Object(n.jsx)("input",{type:"text",value:a,onChange:function(e){return t.setState({discount:e.target.value})}}),Object(n.jsx)("br",{}),"/add"===window.location.pathname?Object(n.jsx)("button",{onClick:this.add,children:"Add"}):Object(n.jsx)("button",{onClick:this.update,children:"Update"})]})}}]),c}(o.Component);var C=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",component:f,exact:!0}),Object(n.jsx)(d.a,{path:"/cart",component:v,exact:!0}),Object(n.jsx)(d.a,{path:"/edit/:id",component:y,exact:!0}),Object(n.jsx)(d.a,{path:"/add",component:y,exact:!0})]})})},D=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(e){var c=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),o(t),a(t),r(t)}))},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cart:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CART":return Object(l.a)(Object(l.a)({},t),{},{cart:[].concat(Object(u.a)(t.cart),[e.payload])});default:return t}},k=c(20),w=Object(k.b)(P);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m.a,{store:w,children:Object(n.jsx)(C,{})})}),document.getElementById("root")),D()}},[[68,1,2]]]);
//# sourceMappingURL=main.0e2411db.chunk.js.map