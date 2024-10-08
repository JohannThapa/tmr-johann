import { Component } from '@angular/core';
import { IdxHeaderComponent } from '../../components/index/idx-header/idx-header.component';
import { TextA1Component } from 'src/app/shared/components/texts/text-a1/text-a1.component';
import { BgA1Component } from 'src/app/shared/components/backgrounds/bg-a1/bg-a1.component';
import { TextA2Component } from 'src/app/shared/components/texts/text-a2/text-a2.component';
import { TECH_SKILLS, TECH_STACKS } from 'src/app/core/constants/tech-stacks';
import { CommonModule } from '@angular/common';
import { BubbleCardComponent } from 'src/app/shared/components/cards/bubble-card/bubble-card.component';
import { CustomImgComponent } from 'src/app/shared/components/images/custom-img/custom-img.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    BgA1Component,
    IdxHeaderComponent,
    TextA1Component,
    TextA2Component,
    BubbleCardComponent,
    CustomImgComponent,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  skillSet: string[] = TECH_SKILLS;
  techStacks: string[] = TECH_STACKS;
}
