import { Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Directive({
  selector: '[roles-allowed]',
})
export class RolesAllowedDirective {
  @Input('roles-allowed') rolesAllowed: string[] = [];
  hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authUseCase: AuthUseCase
  ) {}

  ngOnInit() {
    this.execute();
  }

  execute() {
    const isUserLogged = this.authUseCase.isAuthenticated;
    const rolesUser = this.authUseCase.getRoles();

    const isUserAuthorized = rolesUser.some((roleUser) =>
      this.rolesAllowed.includes(roleUser)
    );

    if (isUserAuthorized && isUserLogged && !this.hasView) {
      if (!this.hasView) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
