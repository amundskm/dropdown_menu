const dropdownClick = () => {
  var dropMenu = document.getElementsByClassName("dropdown-click");
  var dropItems = document.getElementsByClassName("dropdown-item");

  const dropEventListener = () => {
     var i;
     for (i = 0; i < dropMenu.length; i++) {
       dropMenu[i].addEventListener("click", toggleMenu);
     }

   }

   const wrapDropdownItems = () => {
     var i;
      for (i = 0; i < dropMenu.length; i++) {
         var children = dropMenu[i].getElementsByClassName("dropdown-item");
         wrapper = document.createElement("DIV");
         wrapper.className = "dropdown-menu";
         styleWrapper(wrapper);
         dropMenu[i].appendChild(wrapper);
         var j;
         for (j = 0; j < children.length; j++) {
           wrapper.appendChild(children[0]);
         }
       }
   }

   const styleWrapper = (wrap) => {
     wrap.style.display = "none";
     wrap.style.position = "absolute"
     wrap.style.backgroundColor = "#f1f1f1";
     wrap.style.minWidth = "160px";
     wrap.style.overflow = "auto";
     wrap.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
     wrap.style.zIndex = "1";
   }

   const styleDropdownItems = () => {
     var i;
     for (i = 0; i < dropItems.length; i++) {
       dropItems[i].style.display= "block"
       dropItems[i].style.position= "relative"

     }
   }

   const toggleMenu = () => {
     var wrap = document.getElementsByClassName("dropdown-menu");
     for (i = 0; i < wrap.length; i++) {
       (wrap[0].style.display === "none") ? (wrap[0].style.display = "block") : (wrap[0].style.display = "none")
     }
   }

   dropEventListener();
   wrapDropdownItems();
   styleDropdownItems();
 }

var setDrop = dropdownClick();
