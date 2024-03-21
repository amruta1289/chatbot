import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Constants } from '../../app/shared/constants/constants';
// import { Constants } from '@Shared/constants/constants';

@Component({
  selector: 'app-loadchat',
  templateUrl: './loadchat.component.html',
  styleUrls: ['./loadchat.component.scss']
})
export class LoadchatComponent implements OnChanges {
  @Input() public message: any = null;
  @Input() public newchat: any = null;
  public step: string = ''; 
  public show: string = ''; 
  public common = Constants.dataImports;
  constructor() { }


  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);   
     if (this.newchat) {
      console.log(this.newchat);
    } else if (this.message &&
      this.message.length) {
      console.log(this.message);
    }
  }
  suggestedchat(str: any) {
    if (str === Constants.dataImports.newchat1) {
      this.message.push(Constants.dataImports.chat1);
      this.newchat = [];      
    } else if(str === Constants.dataImports.newchat2){
      this.message.push(Constants.dataImports.chat2);
      this.newchat = [];
    }else if(str === Constants.dataImports.newchat3){
      this.message.push(Constants.dataImports.chat3);
      this.newchat = [];
    }
    this.newchat = [];
  }

}
