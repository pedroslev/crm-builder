export default {
	async CierraForm(){
							tdoc.setValue('');
							storeValue('idcli',undefined);
							storeValue('idclin',undefined);
							storeValue('nomb',undefined);
							storeValue('apell',undefined);
							BuscaDatosCliente.clear();
							buscaDU.setValue('');
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
							TablaTelefonos.run();
							TablaProductos.run();
							Categoria.clear();
							BuscaSubca.clear();
							MotivosNoPago.clear();
							MedioPago.clear();
							//Mail.setValue('');
							//CategoriaSel.selectedOptionLabel('');
							//comentarios.setValue('');
							//FechaPromesa.setValue();
							//MontoPago.setValue('');
							//MotivoNoPago.selectedOptionLabel('')
							//MedPago.selectedOptionLabel('')
							
					},
}	