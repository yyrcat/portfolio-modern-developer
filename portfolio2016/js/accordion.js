(function() {
  var accordionItems = document.querySelectorAll(".item-holder .accordion-list-item");

  function init() {
    for (var i = 0; i < accordionItems.length; i++) {
      accordionItems[i].className = 'accordion-list-item accordion--hide';
      var label = getFirstChildWithClassName(accordionItems[i], "accordion__toggle");
      label.onclick = toggleItem;
    }
  }

  function toggleItem() {
    var itemClass = this.parentNode.className;
    for (var i = 0; i < accordionItems.length; i++) {
      accordionItems[i].className = 'accordion-list-item accordion--hide';
      if (itemClass === "accordion-list-item accordion--hide") {
        this.parentNode.className = "accordion-list-item";
      }

    }
  }

  function getFirstChildWithClassName(element, className) {
    for (var i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].className === className)
        return element.childNodes[i];
    }

  }

  init();

})();
