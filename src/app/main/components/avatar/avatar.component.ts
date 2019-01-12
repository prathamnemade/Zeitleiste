import { Component, OnInit } from '@angular/core';
import { AvatarService } from './avatar.service';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  constructor(public avatarService:AvatarService) {

  }
  ngOnInit() {

    
  }

}
