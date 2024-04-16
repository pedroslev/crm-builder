export default {
	async onLoad() {
		mitrol.formUrl= appsmith.URL.fullPath;
		let nroDoc = String(await mitrol.getUrlParams("nroDoc"));
		buscaDU.text = nroDoc;
		await onLoad.FetchContacts();
	},
	async FetchContacts() {
		await BuscaDatosClientes.buscardatosclientes();
	}
}