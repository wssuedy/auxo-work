const {
  Actor
} = require("cqrs");

module.exports = class Message extends Actor {
  constructor(data) {
    const {
      title,
      content,
      createTime
    } = data;
    super({
      title,
      content,
      createTime: Date.now()

    });
  }

  change(title, content) {
    this.$({
      title,
      content
    }) //¥产生事件
  }

  get updater() {
    return {
      change(json, event) {
        const {
          title,
          content
        } = event.data;
        return {
          title,
          content
        }
      }
    }
  }


}