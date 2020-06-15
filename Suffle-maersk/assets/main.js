(function () {
    document.getElementById("sort").onclick = sortContainer;
    document.getElementById("shuffle").onclick = shuffle;
  
    let list = document.getElementById("shuffleAndSort");
      function shuffle() {
      let nodes = list.children,
        i = 0;
      nodes = Array.prototype.slice.call(nodes);
      nodes = shufflecontainer(nodes);
  
      const fragment = document.createDocumentFragment();
      while (i < nodes.length) {
        fragment.appendChild(nodes[i]);
        ++i;
      }
      list.appendChild(fragment);
    }
  
    function sortContainer() {
      let items = list.childNodes;
      let itemsArr = [];
      for (let i in items) {
        if (items[i].nodeType == 1) {
          itemsArr.push(items[i]);
        }
      }
  
      itemsArr.sort((a, b) => {
        return a.innerHTML == b.innerHTML ? 0 : a.innerHTML > b.innerHTML ? 1 : -1;
      });
  
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < itemsArr.length; ++i) {
        fragment.appendChild(itemsArr[i]);
      }
      list.appendChild(fragment);
    }
  
  }());
  
  function shufflecontainer(items) {
    let shuffledItems = items.slice(0);
    let temp;
    let i = shuffledItems.length;
    let rand;
    while (--i) {
      rand = Math.floor(i * Math.random());
      temp = shuffledItems[rand];
      shuffledItems[rand] = shuffledItems[i];
      shuffledItems[i] = temp;
    }
    return shuffledItems;
  }