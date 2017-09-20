import {data} from './data'
import {fetcher} from './fetcher'
//import {HttpClient} from 'aurelia-http-client';
export class App {
  constructor() {
    this.message = 'Hello World!';
    this.data = []
    this.inputName = '';
    this.inputCity = '';
  }

  addData(){
    if(this.inputName && this.inputCity){
      this.data.push(new data(this.inputName,this.inputCity));
      this.inputName = '';
      this.inputCity = '';
    }
  
  }
  removeData(desc){
    let index = this.data.indexOf(desc);
    if(index != -1){
      this.data.splice(index,1);
    }
  }
  refreshData(){

  }
}
