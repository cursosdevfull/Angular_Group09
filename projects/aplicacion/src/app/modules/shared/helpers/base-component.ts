import { ILayout } from '../../../config/interfaces/layout.interface';
import { LayoutService } from '../../../config/services/layout.service';

export class BaseComponent {
  constructor(protected layoutService: LayoutService) {
    const options: ILayout = { header: true, menu: true };
    this.layoutService.settingConfiguration(options);
  }
}
