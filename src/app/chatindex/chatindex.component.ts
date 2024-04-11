import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Constants } from '../../app/shared/constants/constants';
import { ChatServiceService } from '../../app/services/chat-service.service';

@Component({
  selector: 'app-chatindex',
  templateUrl: './chatindex.component.html',
  styleUrls: ['./chatindex.component.scss'],
})
export class ChatindexComponent implements OnInit {
  public showicon: boolean = false;
  constructor(private readonly cdr: ChangeDetectorRef, private readonly chatService: ChatServiceService) { }
  public isChecked: boolean = true;
  public isDark = false;
  public common = Constants.dataImports;
  static readonly darkStyleName = Constants.dataImports.darkTheme;

  ngOnInit(): void {
    this.chatService.getdata().subscribe(result => {
      console.log(result);
    })
  }
  messages: string[] = [];
  currentMessage: string = '';
  newchat: string[] = [];
  sendMessage() {
    if (this.currentMessage.trim() === '') return;
    this.messages.push(this.currentMessage);
    console.log(this.messages);
    this.messages = [...this.messages];
    // this.chatService.sendMessage(this.currentMessage).subscribe(response => {
    //   this.messages.push(response.message); // Assuming response contains the bot's message
    // });
    this.cdr.detectChanges();
    this.currentMessage = '';
  }
  toggle() {
    if (this.showicon === true) {
      this.showicon = false;
    } else {
      this.showicon = true;
    }
  }
  craeteNewChat() {
    this.newchat = [];
    this.messages = [];
    this.newchat.push(Constants.dataImports.newChat);
    this.newchat = [...this.newchat];
    this.cdr.detectChanges();
  }
  public toggleDarkTheme() {
    if (this.isDark) {
      document.body.classList.remove(Constants.dataImports.darkTheme);
      document.body.classList.add(Constants.dataImports.lightTheme); // Remove darkMode
      this.isDark = false;
    } else {
      document.body.classList.add(Constants.dataImports.darkTheme); // Add darkMode
      document.body.classList.remove(Constants.dataImports.lightTheme);
      this.isDark = true;
    }
  }
}
