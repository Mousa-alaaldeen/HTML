// fetch("smartphone.json")
// .then(response => response.json())
// .then(value=>value.forEach(value =>addPhone(value))
// .catch(error => console.error(error)));

//     function addPhone(value) {
//         const tableBody = document.getElementById('phoneTableBody');
//         const phoneRow = document.createElement('tr');

//         phoneRow .innerHTML = `
//         <tr>
//             <td>${value.id}</td>
//             <td>${value.brand}</td>
//             <td>${value.model}</td>
//             <td>${value.price}</td>
//         </tr>
//         `;

//         tableBody.appendChild(phoneRow );
//     }

const Uname=document.getElementById('name');
const age=document.getElementById('age');
const address=document.getElementById('address');
const email=document.getElementById('email');
const submit=document.getElementById('submit');
const tbody = document.getElementById('tbody');

// ================== create User ===================



let dataUsers;
if(localStorage.users!=null) ///عشان ما يحذف الداتا بس اعمل اعادة تحميل
{
    dataUsers=JSON.parse(localStorage.users);
    chowData();
}
else{
    dataUsers=[];
}
submit.onclick=function(){
    event.preventDefault(); 
    let newUser={
        Uname:Uname.value,
        age:age.value,
        address:address.value,
        email:email.value,
    }

    dataUsers.push(newUser);
    
    localStorage.setItem("users",JSON.stringify(dataUsers));

    // console.log( dataUsers);
    clearData();
    chowData();
    
}


// ================== clear ===================
function clearData(){
    Uname.value='';
    age.value='';
    address.value='';
    email.value='';

}
// ================== Read ===================
function chowData(){
    let user ='';

    for (let index = 0; index < dataUsers.length; index++) {
        user+=` <tr>
                            <td>${dataUsers[index].Uname}</td>
                            <td>${dataUsers[index].age}</td>
                            <td>${dataUsers[index].address}</td>
                            <td>${dataUsers[index].email}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" onclick="updateUser(0)">Update</button>
                                <button class="btn btn-danger btn-sm"  onclick="deleteUser(${index})">Delete</button>
                            </td>
                        </tr>`;
        // console.log(table);
        
        
    }
    table.innerHTML =user;

}
// ================== Delete ===================
function deleteUser(index){
    if (confirm('Are you sure you want to delete this user?')) {
        dataUsers.splice(index, 1); 
        localStorage.users=  JSON.stringify(dataUsers); 
        chowData();
    }
}