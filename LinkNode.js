class LinkNode {
  constructor(val) {
    this.val = val
    this.next = null
  }

  toString() {
    let res = []
    let node = this
    while(node) {
      res.push(node.val)
      node = node.next
    }
    return res
  }
}

/**
 * 反转链表
 * @param {LinkNode | null} node 
 */
function reverse(node) {
  if (node === null) return null
  let head = null
  while (node) {
    let temp = node.next
    node.next = head
    head = node
    node = temp
  }
  return head
}

const node1 = new LinkNode(1)
const node2 = new LinkNode(2)
const node3 = new LinkNode(3)

node1.next = node2
node2.next = node3
console.log(reverse(node1).toString())