import{r as t,h as i}from"./index-a55db97c.js";const e=class{constructor(i){t(this,i),this.handleFormChange=t=>{this.props=Object.assign({},t.detail)},this.schema=void 0,this.props={title:"",description:"This is my very nice [type]",type:"tip"}}componentWillLoad(){const t=Object.assign({},this.schema.properties);this.schema=Object.assign(Object.assign({},this.schema),{properties:t,lime:{layout:{type:"grid"}}})}render(){var t,e,o,s;const l=null===(e=null===(t=this.props)||void 0===t?void 0:t.description)||void 0===e?void 0:e.replace("[type]",null!==(s=null===(o=this.props)||void 0===o?void 0:o.type)&&void 0!==s?s:"");return[i("limel-admonition",Object.assign({},Object.assign(Object.assign({},this.props),{description:l}))),this.renderForm()]}renderForm(){return i("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},i("limel-form",{schema:this.schema,value:this.props,onChange:this.handleFormChange}))}};export{e as limel_example_admonition_composite}