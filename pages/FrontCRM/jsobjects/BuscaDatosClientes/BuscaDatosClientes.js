export default {
async buscardatosclientes(){
		var valor= buscaDU.text;
		
		//await CheckAgentIsLogged.run().then(async () => {
		//if (CheckAgentIsLogged.data[0].status) {
				await BuscaDatosCliente.run().then(() => {
					if(BuscaDatosCliente.data.length > 0) {
						//showAlert('Se han cargado los datos del registro existente');
						storeValue('idcli',BuscaDatosCliente.data[0].NumeroD);
						storeValue('idclin',BuscaDatosCliente.data[0].IdCliente);
						storeValue('nomb',BuscaDatosCliente.data[0].Nombre);
						storeValue('apell',BuscaDatosCliente.data[0].Apellido);
						tdoc.setValue(BuscaDatosCliente.data[0].TipoD);
						doc.setValue(BuscaDatosCliente.data[0].NumeroD)
						fnacimiento.setValue(BuscaDatosCliente.data[0].Nacimiento);
						localidad.setValue(BuscaDatosCliente.data[0].Localidad);
						provincia.setValue(BuscaDatosCliente.data[0].Provincia);
						estado.setValue(BuscaDatosCliente.data[0].Estado);
						escenario.setValue(BuscaDatosCliente.data[0].Escenario);
						deudatotal.setValue(BuscaDatosCliente.data[0].DeudaTotal);
						diasmora.setValue(BuscaDatosCliente.data[0].Dias);
						nombre.setValue(BuscaDatosCliente.data[0].Nombre);
						apellido.setValue(BuscaDatosCliente.data[0].Apellido);
						Mail.setValue(BuscaDatosCliente.data[0].Mail);
						Tel1.setValue(BuscaDatosCliente.data[0].Tel1);
						Tel2.setValue(BuscaDatosCliente.data[0].Tel2);
						Tel3.setValue(BuscaDatosCliente.data[0].Tel3);
						Tel4.setValue(BuscaDatosCliente.data[0].Tel4);
						//noexiste.setVisibility(false);
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
							Mail.setValue('');
							Tel1.setValue('');
							Tel2.setValue('');
							Tel3.setValue('');
							Tel4.setValue('');
							//noexiste.setVisibility(true);
							}
						});
				//}else{
				//showModal("notLoggedIn");	
			//};
		//});
	},
}