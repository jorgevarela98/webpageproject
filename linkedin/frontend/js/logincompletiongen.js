var region = [
    {
        departamento:'Atlántida',
        municipio:'La Ceiba',
        valor:'Atlantida,La Ceiba'
    },
    {
        departamento:'Colón',
        municipio:'Trujillo',
        valor:'Colón,Trujillo'
    },
    {
        departamento:'Comayagua',
        municipio:'Comayagua',
        valor:'Comayagua,Comayagua'
    },
    {
        departamento:'Copán',
        municipio:'Santa Rosa de Copán',
        valor:'Copán,Santa Rosa de Copán'
    },
    {
        departamento:'Cortés',
        municipio:'San Pedro Sula',
        valor:'Cortés,San Pedro Sula'
    },
    {
        departamento:'Choluteca',
        municipio:'Choluteca',
        valor:'Choluteca,Choluteca'
    },
    {
        departamento:'El Paraíso',
        municipio:'Yuscarán',
        valor:'El Paraíso,Yuscarán'
    },
    {
        departamento:'Francisco Morazán',
        municipio:'Tegucigalpa',
        valor:'Francisco Morazán,Tegucigalpa'
    },
    {
        departamento:'Gracias a Dios',
        municipio:'Puerto Lempira',
        valor:'Gracias a Dios,Puerto Lepira'
    },
    {
        departamento:'Intibucá',
        municipio:'La Esperanza',
        valor:'Intibucá,La Esperanza'
    },
    {
        departamento:'Islas de la Bahía',
        municipio:'Roatán',
        valor:'Islas de la Bahía,Roatán'
    },
    {
        departamento:'La Paz',
        municipio:'La Paz',
        valor:'La Paz,La Paz'
    },
    {
        departamento:'Lempira',
        municipio:'Gracias',
        valor:'Lempira,Gracias'
    },
    {
        departamento:'Ocotepeque',
        municipio:'Ocotepeque',
        valor:'Ocotepeque,Ocotepeque'
    },
    {
        departamento:'Olancho',
        municipio:'Juticalpa',
        valor:'Olancho,Juticalpa'
    },
    {
        departamento:'Santa Bárbara',
        municipio:'Santa Bárbara',
        valor:'Santa Bárbara,Santa Bárbara'
    },
    {
        departamento:'Valle',
        municipio:'Nacaome',
        valor:'Valle,Nacaome'
    },
    {
        departamento:'Yoro',
        municipio:'Yoro',
        valor:'Yoro,Yoro'
    }
]
function regionGenerator(){
    document.getElementById('departamento').innerHTML='';
    region.forEach(function(depto){
        document.getElementById('departamento').innerHTML+=`
            <option value="${depto.valor}"> ${depto.departamento}, ${depto.municipio}</option>
        `;
    })
}
regionGenerator();