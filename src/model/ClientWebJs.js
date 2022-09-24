const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require("whatsapp-web.js");

class ClientWebJs {
  callback = null;

  constructor() {
    this.client = new Client({
      authStrategy: new LocalAuth()
    });

    this.client.on('qr', qr => {
      qrcode.generate(qr, { small: true });
    });


    this.client.initialize();
  }

  logger(message) {
    console.log(`#### Logger: ${JSON.stringify(message)} ####`)
  }

  async getContacts() {
    return await this.client.getContacts()
  }

  async sendMessage(id, message) {
    await this.client.sendMessage(id, message);
  }

  async servicePostOffice(messages, clients) {
    const contactsList = await this.getContacts();
    const users = contactsList.filter(c => clients.includes(c.number));
    this.logger(users);
    const sends = Promise.all(
      users.map(async u => {
        return await messages.forEach(async m => {
          setTimeout(async () => {
            await this.sendMessage(u.id._serialized, m.message);
          }, m.timeout);
        })
      })
    )

    return this.callback.status(200).json(sends);
  }


  async connect(callback, messages, clients) {
    this.client.on('ready', async () => {
      this.logger("Ready on")
      this.callback = callback;
      await this.servicePostOffice(messages, clients);

    });
  }

}

module.exports = ClientWebJs;