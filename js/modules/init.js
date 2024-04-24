 async function fetchEmployees() {
    const res = await fetch('../../data/employees.json');
    const employees = await res.json();
    return employees;
}

export { fetchEmployees };

