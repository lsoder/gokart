window.onscroll = () => {
    const nav = document.querySelector('header');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
  };