import{r as t,h as i}from"./index-a7da85d2.js";let a=class{constructor(i){t(this,i),this.text="cats",this.tabs=[{id:1,text:"Cats",icon:"black_cat",active:!0,iconColor:"var(--lime-dark-grey)"},{id:2,text:"Dogs",icon:"dog",iconColor:"var(--lime-blue)"},{id:3,text:"Birds",icon:"bird",iconColor:"var(--lime-red)"}],this.handleChange=t=>{this.text=t.detail.text,this.tabs=this.tabs.map((i=>i.id===t.detail.id?t.detail:i))}}render(){return[i("limel-tab-bar",{tabs:this.tabs,onChangeTab:this.handleChange,class:"has-tabs-with-equal-width"}),i("limel-example-value",{label:"Tab",value:this.text})]}};export{a as limel_example_tab_bar_with_equal_tab_width}