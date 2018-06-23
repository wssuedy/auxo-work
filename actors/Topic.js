const {
  Actor
} = require("cqrs");

module.exports = class Topic extends Actor {
  constructor(data) {
    const {
      title,
      content
    } = data;
    super({
      title,
      content
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