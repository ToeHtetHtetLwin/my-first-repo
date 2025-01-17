import { Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  imports: [InputTextModule, ButtonModule, FormsModule, CardModule],
})
export class CreateComponent {
  public payload: any;
  value: string = '';

  constructor() {}

  ngOnInit(): void {}

}
