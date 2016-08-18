export function createNavNode(displayName, link, children, hash) {
  return {
    displayName,
    link,
    hash,
    children,
  }
}

class NavNodes {
  constructor() {
    this.nodes = [
      createNavNode('General', 'general', [
        createNavNode('Colors', '/general#colors', null, 'colors'),
        createNavNode('Type', '/general#type', null, 'type'),
      ]),
      createNavNode('Layout', 'layout'),
    ]
  }
}

export default new NavNodes()
