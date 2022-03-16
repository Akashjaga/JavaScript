let employees=[{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }
]
let createEmployee=((emp)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            employees.push(emp)
            let flag = true
            flag?resolve("success"):reject("failed")
        }, 3000)
    })
})

let getEmployee=(()=>{
    setTimeout(()=>{
        let rows =""
        employees.map((employee)=>{
            rows= rows +
            `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.sal}</td>
            </tr>`
        })
        document.getElementById('table_data').innerHTML=rows
    }, 1000)
})
createEmployee({ id: 103, name: "Priyanka", sal: 65000 }).then((msg)=>
{getEmployee()
    console.log(msg)
}).catch((err)=>{console.log(err)})