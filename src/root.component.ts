import {Component} from 'angular2/core'
import {HelloAngularComponent} from './hello-angular.component'

@Component({
  selector : 'root',
  template : '<hello-angular></hello-angular>',
  directives : [HelloAngularComponent]
})
export class RootComponent{
}
