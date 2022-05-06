export default {
  actions: {
    clickButton() {
      const bitcoin = require('bitcoin');
      var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'rpc_rxcwalletdiscourse',
  pass: 'kuw05sqio7bcm8z96o7redv17xws1lw6xpd1qf33FISVITEZ'
});
    const karina =  client.getBalance('*', 1, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
      const url = this.siteSettings.custom_topic_button_url.replace('<TOPIC_ID>', this.get('topic.id')).replace('<USER_ID>', this.currentUser.id).replace('<USERNAME>', this.currentUser.username).replace('<TOPIC_TITLE>', this.get('topic.title')).replace('<TOPIC_SLUG>', this.get('topic.slug'));
      window.open(karina, '_blank');
    }
  }
};
