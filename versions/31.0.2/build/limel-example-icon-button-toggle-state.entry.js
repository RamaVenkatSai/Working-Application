import{r as t,h as i}from"./index-9cbaf4f2.js";const e=class{constructor(i){t(this,i),this.isFavorite=!1,this.toggleFavorite=this.toggleFavorite.bind(this)}render(){return i("limel-icon-button",{label:this.isFavorite?"Remove Favorite":"Add Favorite",icon:this.isFavorite?"heart_filled":"heart_outlined",onClick:this.toggleFavorite})}toggleFavorite(){this.isFavorite=!this.isFavorite}};export{e as limel_example_icon_button_toggle_state}