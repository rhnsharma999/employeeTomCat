export class App {
  constructor() {
    this.message = 'Hello World!';
  }
  changeTitle(){
    if(this.name && this.city){
      this.message = "Hello" + this.name + ' from ' + this.city; 
    }
  }
  getDatabase(){
    
  }

}
  