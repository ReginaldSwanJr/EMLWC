import { LightningElement, api,track } from 'lwc';
 
export default class HelloWorld extends LightningElement {
  @api recordId;
   
  @track log = [];
  @track apiOutput;
  changeHandler(event) {
    this.greeting = event.target.value;
  }
 
  async handleButtonClick(event){
    this.reset();
    const toolKit = this.refs.lwcToolKitApi;
    let result;
    switch (event.target.value) {
      case 'getConversationLog':
        result = await toolKit.getConversationLog(this.recordId);
        for(let i=0;i<result.messages.length;i++){
          var msg = {
              type:result.messages[i].type,
              content:result.messages[i].content,
              name:result.messages[i].name,
              timestamp:result.messages[i].timestamp
          }
          this.log.push(JSON.stringify(msg));
        }
        break;
      case 'sendTextMessage':
        result = await toolKit.sendTextMessage(this.recordId, { text: 'Text from toolkit' });
        break;
      case 'setAgentInput':
        result = await toolKit.setAgentInput(this.recordId,{ text: 'Inserting from toolkit' });
        break;
      case 'endConversation':
        result = await toolKit.endConversation(this.recordId);
        break;
    }
    if(result){
      this.apiOutput = event.target.value + " sucess";
    } else {
      this.apiOutput = event.target.value + " failed";
    }
 
  }
 
  reset(){
    this.log = [];
    this.apiOutput='';
  }
 
}