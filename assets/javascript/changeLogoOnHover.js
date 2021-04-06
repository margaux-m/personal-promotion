const logoNavbar = document.getElementById('logo-navbar');
const logoFooter = document.getElementById('logo-footer');

const changeLogoSource = (event) => {
  if (event.currentTarget == logoNavbar) {
    event.currentTarget.setAttribute('src', 'assets/images/personal-promotion_logo-hover.svg');
  } else if (event.currentTarget == logoFooter) {
    event.currentTarget.setAttribute('src', 'assets/images/logo-footer-hover.svg');
  }
};

const resetLogoSource = (event) => {
  if (event.currentTarget == logoNavbar) {
    event.currentTarget.setAttribute('src', 'assets/images/personal-promotion_logo.svg');
  } else if (event.currentTarget == logoFooter) {
    event.currentTarget.setAttribute('src', 'assets/images/logo-footer.svg');
  }
};

const bindLogoToHover = (logo) => {
  logo.addEventListener('mouseover', changeLogoSource);
  logo.addEventListener('mouseout', resetLogoSource);

};

const changeLogoOnHover = () => {
  bindLogoToHover(logoNavbar);
  bindLogoToHover(logoFooter);
};

export { changeLogoOnHover };
