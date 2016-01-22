import {Component} from 'angular2/core'

@Component({
  selector: 'hello-angular',
  template: '<h1> {{msg}} </h1>'
})
export class HelloAngularComponent {
   private msg = "Hello Angular";

   constructor() {
     setTimeout(() => {this.msg = "!!! Hello Angular !!!" }, 1000);
   }
}
