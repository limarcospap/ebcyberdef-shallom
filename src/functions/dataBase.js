const mongoose = require("mongoose");
const env = require("../../config/.env");

mongoose.connect(env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'server_db'
});

const saidaSchema = new mongoose.Schema({
  ataque: String,
  situacao: String,
  maquinas: [String],
  notificacao_email: {
    asn: String,
    adm: String,
    email: String,
  },
  notificacao_telegram: {
    bot: String,
  },
});

module.exports = {
  Saida: mongoose.models.Saida || mongoose.model('Saida', saidaSchema)
}