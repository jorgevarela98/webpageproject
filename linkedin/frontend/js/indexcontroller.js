var busquedasSugeridas =[
    {
        nombreBtn:"Ingenieria",
        reference:""
    },
    {
        nombreBtn:"Desarrollo Empresarial",
        reference:""
    },
    {
        nombreBtn:"Finanzas",
        reference:""
    },
    {
        nombreBtn:"Asistente Administrativo",
        reference:""
    },
    {
        nombreBtn:"Empleado de tienda",
        reference:""
    },
    {
        nombreBtn:"Servicio atencion a cliente",
        reference:""
    },
    {
        nombreBtn:"Operaciones",
        reference:""
    },
    {
        nombreBtn:"Tecnologia de la informacion",
        reference:""
    },
    {
        nombreBtn:"Marketing",
        reference:""
    },
    {
        nombreBtn:"Recursos humanos",
        reference:""
    },
    {
        nombreBtn:"Servicios sanitarios",
        reference:""
    },
    {
        nombreBtn:"Ventas",
        reference:""
    },
    {
        nombreBtn:"Gestion de programas y proyectos",
        reference:""
    },
    {
        nombreBtn:"Contabilidad",
        reference:""
    },
    {
        nombreBtn:"Arte y diseño",
        reference:""
    },
    {
        nombreBtn:"Servicios sociales y comunitarios",
        reference:""
    },
    {
        nombreBtn:"Consultoria",
        reference:""
    },
    {
        nombreBtn:"Educacion",
        reference:""
    },
    {
        nombreBtn:"Liderazgo",
        reference:""
    },
    {
        nombreBtn:"Juridico",
        reference:""
    },
    {
        nombreBtn:"Medio de Comunicación",
        reference:""
    },
    {
        nombreBtn:"Servicios militares y protección",
        reference:""
    },
    {
        nombreBtn:"Gestion de producto",
        reference:""
    },
    {
        nombreBtn:"Compras",
        reference:""
    },
    {
        nombreBtn:"Control de calidad",
        reference:""
    },
    {
        nombreBtn:"Bienes y raices",
        reference:""
    },
    {
        nombreBtn:"Investigación",
        reference:""
    },
    {
        nombreBtn:"Ayuda",
        reference:""
    },
    {
        nombreBtn:"Administración",
        reference:""
    }
];

var dropDownMenu =[
    {
        menuBtn:'Diseño Web',
        href:''
    },
    {
        menuBtn:'Imagen Digital & Fotografia',
        href:''
    },
    {
        menuBtn:'Competencias profesionales',
        href:''
    },
    {
        menuBtn:'IT',
        href:''
    },
    {
        menuBtn:'Marketing',
        href:''
    },
    {
        menuBtn:'Programación',
        href:''
    },
    {
        menuBtn:'Software Empresarial',
        href:''
    },
    {
        menuBtn:'Video & Audio',
        href:''
    },
    {
        menuBtn:'CAD',
        href:''
    },
    {
        menuBtn:'3D & Animación',
        href:''
    },
    {
        menuBtn:'Diseño & Ilustración',
        href:''
    }
];

function mainMenuGenerators(){
    suggestedSearchesGenerator();
    chooseMenuGenerator();
}
mainMenuGenerators();

    function suggestedSearchesGenerator(){
        document.getElementById('suggested-searches').innerHTML='';
        busquedasSugeridas.forEach(function(searches){
            document.getElementById('suggested-searches').innerHTML+=`
            <a id="suggestedsearch-btn" href="${searches.reference}"class="btn-design show-btn-border btn-dimensions">${searches.nombreBtn}</a>
            `;
        })
    }

    function chooseMenuGenerator(){
        document.getElementById('chooseMenuDropdown').innerHTML+='';
        dropDownMenu.forEach(function(dropdownbtns){
            document.getElementById('chooseMenuDropdown').innerHTML+=`
                <a class="dropdown-item choose-btns" href="${dropdownbtns.href}">${dropdownbtns.menuBtn}</a>
            `;
        })
    }

    function hideButtons(){

    }
