import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html',
})
export class AppMainComponent {

    rotateMenuButton: boolean;

    topbarMenuActive: boolean;

    overlayMenuActive: boolean;

    staticMenuDesktopInactive: boolean;

    staticMenuMobileActive: boolean;

    menuClick: boolean;

    topbarItemClick: boolean;

    configClick: boolean;

    activeTopbarItem: any;

    menuHoverActive: boolean;

    configActive: boolean;

    inlineMenuActive: boolean;

    inlineMenuClick: boolean;

    hideOverlayMenu: any;
isDesktop: any;
isMobile: any;
isTablet: any;

    constructor( private primengConfig: PrimeNGConfig, public app: AppComponent) {}

    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
      }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;

        this.hideOverlayMenu();

        event.preventDefault();
    }

    onMenuButtonClick(event) {
      this.menuClick = true;
      this.rotateMenuButton = !this.rotateMenuButton;
      this.topbarMenuActive = false;

      if (this.app.layoutMode === 'overlay' && (!this.isMobile() && !this.isTablet())) {
          this.overlayMenuActive = !this.overlayMenuActive;
      } else {
          if (this.isDesktop()) {
              this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
          } else {
              this.staticMenuMobileActive = !this.staticMenuMobileActive;
          }
      }

      event.preventDefault();
  }

    onTopbarItemClick(event, any) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === any) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = any;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event) {
      event.preventDefault();
  }



    isOverlay() {
        return this.app.layoutMode === 'overlay';
    }

    isHorizontal() {
        return this.app.layoutMode === 'horizontal';
    }

    isSlim() {
        return this.app.layoutMode === 'slim';
    }

    isStatic() {
        return this.app.layoutMode === 'static';
    }

}

function onTopbarMenuButtonClick(event: Event) {
throw new Error('Function not implemented.');
}

function onTopbarItemClick(event: Event,item: any) {
throw new Error('Function not implemented.');
}

function isStatic() {
throw new Error('Function not implemented.');
}

function isSlim() {
throw new Error('Function not implemented.');
}

function isHorizontal() {
throw new Error('Function not implemented.');
}

function isOverlay() {
throw new Error('Function not implemented.');
}
