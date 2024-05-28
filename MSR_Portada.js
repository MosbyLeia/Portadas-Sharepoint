

$(document).ready(function () {
    
    getListaPersonalizada();
});
 
function getListaPersonalizada(){
   let urlLista = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Portada')/items?$select=ID,Title,Url&$filter=(Activo%20eq%20%27Sí%27)&$orderby=Orden%20asc";
    let selectorLista = $("#portada");
    let htmlLista = "";
 
    $.ajax({
        url: urlLista,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {

            data = data.d.results;
            $.each(data, function (index, value) {
                htmlLista = '<div class="col-12 col-md-6">'
                    + '<a href=" ' + value.Url + ' " class="panel panel-default" target="_blank">'
                    + '<div class="panel-body">'
                    + '<div class="media">'
                    + '<div class="media-left padding-20">'
                    + '<i class="icono-4x icono-arg-tramite text-primary  "></i>'
                    + '</div>'
                    + '<div class="media-body mt-3">'
                    + '<h3>' + value.Title + '</h3>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</a>'
                    + '</div>';
                selectorLista.append(htmlLista);


            });
        },

        error: function (data) {
            failure(data);
        }

    });
}


