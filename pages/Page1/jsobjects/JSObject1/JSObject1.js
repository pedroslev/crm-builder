export default {
async buscardatosclientes(){
		var valor= buscaDU.text;
		if (valor == "")
		{
			showAlert('Por favor indique el número de DU');
			return false;
		}
		//await CheckAgentIsLogged.run().then(async () => {
		//if (CheckAgentIsLogged.data[0].status) {
				await BuscaDatosClientes.run().then(() => {
					if(BuscaDatosClientes.data.length > 0) {
						showAlert('Se han cargado los datos del registro existente');
						tdoc.setValue(BuscaDatosClientes.data[0].TipoD);
						doc.setValue(BuscaDatosClientes.data[0].NumeroD)
						fnacimiento.setValue(BuscaDatosClientes.data[0].Nacimiento);
						localidad.setValue(BuscaDatosClientes.data[0].Localidad);
						provincia.setValue(BuscaDatosClientes.data[0].Provincia);
						estado.setValue(BuscaDatosClientes.data[0].Estado);
						escenario.setValue(BuscaDatosClientes.data[0].escenario);
						deudatotal.setValue(BuscaDatosClientes.data[0].DeudaTotal);
						diasmora.setValue(BuscaDatosClientes.data[0].Dias);
						}
						noexiste.setVisibility(false);
						}else {
							showAlert('No existen datos para el DU ingresado.');
							tdoc.setValue('');
							doc.setValue('')
							fnacimiento.setValue('');
							localidad.setValue('');
							provincia.setValue('');
							estado.setValue('');
							escenario.setValue('');
							deudatotal.setValue('');
							diasmora.setValue('');
							noexiste.setVisibility(true);
							}
						});
				//}else{
				//showModal("notLoggedIn");	
			//};
		//});
	},
}