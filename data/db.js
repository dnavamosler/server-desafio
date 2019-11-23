import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

// Definir el schema de clientes
const clientesSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	emails: Array,
	empresa: String,
	edad: Number,
	tipo: String,
	pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes };
