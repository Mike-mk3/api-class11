
let contenidoProductos = document.getElementById("contenidoProductos");



fetch('https://dev4humans.com.mx/api/clases/productos', { method: "GET" })
    .then(Response => Response.json())
    .then(data => {
        console.log("la promesa se resolvio");
        const rawData = data;
        const productos = rawData.data.products;
        console.log(productos);
        productos.forEach(producto => {
            contenidoProductos.innerHTMLL = contenidoProductos.innerHTML + ` 
            <div class="col-md-12">
                <div class="card mb-3"
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${producto.thumbnail}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${producto.title} - $${producto.price}</h5>
                          <p class="card-text">${producto.description}</p>
                          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            `;
        });
    }).catch(error => console.log(error))