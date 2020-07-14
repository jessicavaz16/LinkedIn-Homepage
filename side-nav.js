"use strict";

class SideNav {
  constructor() {
    this.showButtonEl = document.querySelector(".js-menu-show");
    this.hideButtonEl = document.querySelector(".side-nav__content");
    this.sideNavEl = document.querySelector(".js-side-nav");
    this.sideNavContainerEl = document.querySelector(".js-side-nav__container");

    this.showSideNav = this.showSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);
    this.startX = 0;
    this.currentX = 0;
    this.addEventListeners();
  }

  addEventListeners() {
    this.showButtonEl.addEventListener("click", this.showSideNav);
    this.hideButtonEl.addEventListener("click", this.hideSideNav);
    this.sideNavEl.addEventListener("click", this.hideSideNav);
  
  }

  
  

  showSideNav() {
    this.sideNavEl.classList.add("side-nav--animatable");
    this.sideNavEl.classList.add("side-nav--visible");
   
  }
  hideSideNav() {
    this.sideNavEl.classList.add("side-nav--animatable");
    this.sideNavEl.classList.remove("side-nav--visible");
    
  }
}

new SideNav();
