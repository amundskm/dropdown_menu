const nav = () => {
var navbar = document.getElementsByClassName("navbar");
var navItem = document.getElementsByClassName("nav-item")

  const navbarStyle = () => {
    var i;
    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.display = "flex";
      navbar[i].style.fontFamily = "Helvetica Neue,Helvetica,Arial,sans-serif";
      navbar[i].style.fontSize = "14px";
      navbar[i].style.lineHeight = "1.5em";
      navbar[i].style.color = "#333";
      navbar[i].style.padding = "0 15px";
      navbar[i].style.borderTop = "0";
      navbar[i].style.borderColor = "#e7e7e7";
      navbar[i].style.backgroundColor = "#f8f8f8";
      navbar[i].style.height = "auto";
      navbar[i].style.width = "auto";
    }
  }

  const navItemStyle = () => {
    var i;
    for (i = 0; i < navItem.length; i++) {
      navItem[i].style.fontSize = "18px";
      navItem[i].style.backgroundColor = "transparent";
      navItem[i].style.padding = "0 15px";
      navItem[i].style.color = "#777";
      navItem[i].style.lineHeight = "2em";
      navItem[i].style.textDecoration = "none";
      navItem[i].style.boxSizing = "border-box";
    }
  }

  const navItemHover = () => {
    var i;
    for (i = 0; i < navItem.length; i++) {
      navItem[i].addEventListener("mouseover", hover);

    }
  }

  const hover = (e) => {
    e.target.style.backgroundColor = "#ddd";
    e.target.style.cursor = "pointer";
    e.target.addEventListener("mouseleave", mouseMove);
  }

  const mouseMove = (e) => {
    e.target.style.backgroundColor = "transparent";
  }

  navbarStyle();
  navItemStyle();
  navItemHover();

}

var setNav = nav();
