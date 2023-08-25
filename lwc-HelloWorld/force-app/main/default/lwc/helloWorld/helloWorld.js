import { LightningElement } from 'lwc';


export default class HelloWorld extends LightningElement {
  greeting = 'World';

  
  connectedCallback() {
    debugger;
   //console.log('::::'+ this.template.querySelectorAll('.mycustmCls'));
   console.log(';test****');
  }
  changeHandler(event) {
      this.greeting = event.target.value;
      let testVr = this.template.querySelector('lightning-input');
      console.log('::::***'+ testVr);
  }

  renderedCallback() {
    console.log('This is renderedcallback');
    const elmnt = this.template.querySelector('lightning-input');
    console.log('elmnt::', elmnt);
    console.log('Query Selector : ' ,this.template.querySelector('lightning-input'));
 }
}