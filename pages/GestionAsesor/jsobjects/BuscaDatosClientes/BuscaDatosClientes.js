export default {
	async buscardatosclientes(){
		var valor= buscaDU.text;

		//await CheckAgentIsLogged.run().then(async () => {
		//if (CheckAgentIsLogged.data[0].status) {
			await BuscaDatosCliente.run().then(async () => {
				if(BuscaDatosCliente.data.length > 0) {
					console.log(BuscaDatosCliente.data)
					//showAlert('Se han cargado los datos del registro existente');
					await storeValue('idcli',BuscaDatosCliente.data[0].NroDoc);
					await storeValue('idclin',BuscaDatosCliente.data[0].IdCliente);
					await storeValue('nomb',BuscaDatosCliente.data[0].Nombre);
					await storeValue('apell',BuscaDatosCliente.data[0].Apellido);
					await tdoc.setValue(BuscaDatosCliente.data[0].TipoDoc);
					await doc.setValue(BuscaDatosCliente.data[0].NroDoc)
					await fnacimiento.setValue(BuscaDatosCliente.data[0].Nacimiento);
					await localidad.setValue(BuscaDatosCliente.data[0].Localidad);
					await provincia.setValue(BuscaDatosCliente.data[0].Provincia);
					await estado.setValue(BuscaDatosCliente.data[0].EstadoDesc);
					await escenario.setValue(BuscaDatosCliente.data[0].EscenarioDesc);
					await deudatotal.setValue(BuscaDatosCliente.data[0].DeudaTotal);
					await diasmora.setValue(BuscaDatosCliente.data[0].DiasDeMora);
					await nombre.setValue(BuscaDatosCliente.data[0].NombreCliente);
					await apellido.setValue(BuscaDatosCliente.data[0].ApellidoCliente);
					//Mail.setValue(BuscaDatosCliente.data[0].Mail);
					//noexiste.setVisibility(false);
					TablaTelefonos.run();
					TablaProductos.run();	
					Categoria.run();
					BuscaSubca.run();
					MotivosNoPago.run();
					MedioPago.run();
				}else {
					//showAlert('No existen datos para el DU ingresado.');
					tdoc.setValue('');
					doc.setValue('')
					fnacimiento.setValue('');
					localidad.setValue('');
					provincia.setValue('');
					estado.setValue('');
					escenario.setValue('');
					deudatotal.setValue('');
					diasmora.setValue('');
					nombre.setValue('');
					apellido.setValue('');
					deudatotal.setValue('');
					diasmora.setValue('');
					escenario.setValue('');
					//Mail.setValue('');
					//noexiste.setVisibility(true);
				}
			});
			//}else{
			//showModal("notLoggedIn");	
			//};
			//});

	},
}