export default class AlaraTabs {
  constructor(tabs) {
    let tabBar = tabs[0].children[0]
    let panelCount = tabs[0].children.length
    let tabCount = tabBar.children.length
    let buttons = []
    let panels = []
    for (var i = 0; i < tabCount; i++) {
      buttons.push(tabBar.children[i])
    }
    for (var i = 1; i < panelCount; i++) {
      panels.push(tabs[0].children[i])
    }
    let tab = buttons[0].getAttribute('data-panel')
    this.tabs = buttons
    this.panels = panels
    this.setActive(tab)
  }
  setActive(tab) {
    this.tabs.filter((obj) => {
      return obj.querySelector('data-panel=["' + tab + '"]')
    })
    // tab.classList.add('active')
    console.log(tab)
  }
}


