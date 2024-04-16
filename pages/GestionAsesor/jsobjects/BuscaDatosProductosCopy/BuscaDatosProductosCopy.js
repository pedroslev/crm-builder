export default {
async buscarproductos(){
	BuscaDatosCliente.run()
	if(BuscaDatosCliente.data.length > 0) {
						showAlert('Si existen datos para el DU ingresado.');
						}else {
						showAlert('No existen datos para el DU ingresado.');
						}	
		},
}