function add_tovar(){
    let tovar = {
        name:       document.getElementById('tovar_name').value,
        harakter:   document.getElementById('tovar_harakter').value,
        opis:       document.getElementById('tovar_opis').value,
        price:      document.getElementById('tovar_price').value,
        type:       document.getElementById('tovar_type').value,
        developer:      document.getElementById('tovar_developer').value
    }
    db.collection('all_tovars').doc().set(tovar).then(res=>{
        console.log('успішно додано')
        window.location.reload();
    })
}
function hide(){
    let block = document.getElementById('add_tovar');
    block.style.display = 'none';
}
function show(){
    let block = document.getElementById('add_tovar');
    block.style.display = 'block';
}

function drawTovar(object,nomer){
    let tbody = document.getElementById('tbody');
   
    tbody.innerHTML += `
    <tr>
                    <td>${object.name}</td>
                    <td>${object.opis}</td>
                    <td>${object.developer}</td>
                    <td>${object.price}</td>
                    <td>${object.type}</td>
                    <td><img width="100px" height="100px" src="${object.img}"</td>
                    <th><button onclick="get_one_tovar_from_fb('${object.id}')">Редагувати товар</button></th>
                    <th><button onclick="delTovar('${object.id}')">X</button></th>
                </tr>

    `
}

function getTovar_from_fb(){
    tbody.innerHTML = '';
    let index = 1;
    db.collection('all_tovars').get().then(res =>{
        res.forEach(doc =>{
            let one_tovar = doc.data();
            one_tovar.id = doc.id;
            drawTovar(one_tovar,index)
            index++
        })
    })
}
getTovar_from_fb()
function get_one_tovar_from_fb(id_tovara){
    db.collection('all_tovars').doc(id_tovara).get().then(res=>{
        let object_tovar = res.data();
        object_tovar.id = res.id;
        console.log(object_tovar.id)
            document.getElementById('tovar_name_edit').value             = object_tovar.name
            document.getElementById('tovar_mass_edit').value             = object_tovar.mass 
            document.getElementById('tovar_opis_edit').value             = object_tovar.opis
            document.getElementById('tovar_price_edit').value            = object_tovar.price
            document.getElementById('tovar_type_edit').value             = object_tovar.type
            document.getElementById('tovar_harakter_edit').value         = object_tovar.harakter
            document.getElementById('tovar_developer_edit').value        = object_tovar.developer
            document.getElementById('zberegti_zminu').addEventListener('click',function(){
               let tovar = {
                name:       document.getElementById('tovar_name_edit').value,
                harakter:   document.getElementById('tovar_harakter_edit').value,
                opis:       document.getElementById('tovar_opis_edit').value,
                price:      document.getElementById('tovar_price_edit').value,
                type:       document.getElementById('tovar_type_edit').value,
                developer:  document.getElementById('tovar_developer_edit').value
               }
               save_changes(object_tovar.id,tovar)
            })
        show('edit_tovar')
    })
}

function save_changes(argument,object){
    db.collection('all_tovars').doc().set().then(res=>{
        console.log('Збережено')
    })

}

function delTovar(id_v_bazi_dannih){
    db.collection('all_tovars').doc(id_v_bazi_dannih).delete().then(res=>{
        getTovar_from_fb()
    })
}
