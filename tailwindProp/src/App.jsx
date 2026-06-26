import { useState } from 'react'
import TablePagination from "./component/TablePagination"
import './App.css'


function App() {

  const data = [
    { label: "Rajiv", status: "Active", role: "Developer", friend: "yes", count: "1" },
    { label: "Aarav", status: "Active", role: "Designer", friend: "no", count: "2" },
    { label: "Aditi", status: "Inactive", role: "Product Manager", friend: "yes", count: "3" },
    { label: "Akash", status: "Active", role: "QA Engineer", friend: "no", count: "4" },
    { label: "Ananya", status: "On Leave", role: "Data Analyst", friend: "yes", count: "5" },
    { label: "Arjun", status: "Active", role: "Developer", friend: "no", count: "6" },
    { label: "Asha", status: "Active", role: "HR Manager", friend: "yes", count: "7" },
    { label: "Bhavesh", status: "Inactive", role: "DevOps Engineer", friend: "no", count: "8" },
    { label: "Chitra", status: "Active", role: "Designer", friend: "yes", count: "9" },
    { label: "Deepak", status: "Active", role: "Developer", friend: "yes", count: "10" },
    { label: "Divya", status: "Inactive", role: "Scrum Master", friend: "no", count: "11" },
    { label: "Esha", status: "Active", role: "Content Writer", friend: "yes", count: "12" },
    { label: "Farhan", status: "On Leave", role: "Marketing Lead", friend: "no", count: "13" },
    { label: "Fatima", status: "Active", role: "Developer", friend: "yes", count: "14" },
    { label: "Gaurav", status: "Active", role: "Sales Executive", friend: "no", count: "15" },
    { label: "Geeta", status: "Inactive", role: "Support Specialist", friend: "yes", count: "16" },
    { label: "Hari", status: "Active", role: "Developer", friend: "no", count: "17" },
    { label: "Hina", status: "Active", role: "Designer", friend: "yes", count: "18" },
    { label: "Ishaan", status: "On Leave", role: "QA Engineer", friend: "no", count: "19" },
    { label: "Ishita", status: "Active", role: "Data Analyst", friend: "yes", count: "20" },
    { label: "Jatin", status: "Active", role: "Developer", friend: "no", count: "21" },
    { label: "Karan", status: "Inactive", role: "System Administrator", friend: "yes", count: "22" },
    { label: "Kavya", status: "Active", role: "Product Manager", friend: "no", count: "23" },
    { label: "Kunal", status: "Active", role: "DevOps Engineer", friend: "yes", count: "24" },
    { label: "Lata", status: "On Leave", role: "Designer", friend: "no", count: "25" },
    { label: "Manish", status: "Active", role: "Developer", friend: "yes", count: "26" },
    { label: "Meera", status: "Active", role: "Marketing Lead", friend: "yes", count: "27" },
    { label: "Nakul", status: "Inactive", role: "Sales Executive", friend: "no", count: "28" },
    { label: "Neha", status: "Active", role: "HR Manager", friend: "yes", count: "29" },
    { label: "Omkar", status: "Active", role: "Developer", friend: "no", count: "30" },
    { label: "Pooja", status: "On Leave", role: "Data Analyst", friend: "yes", count: "31" },
    { label: "Prateek", status: "Active", role: "Scrum Master", friend: "no", count: "32" },
    { label: "Priya", status: "Active", role: "Designer", friend: "yes", count: "33" },
    { label: "Qasim", status: "Inactive", role: "QA Engineer", friend: "no", count: "34" },
    { label: "Rahul", status: "Active", role: "Developer", friend: "yes", count: "35" },
    { label: "Riya", status: "Active", role: "Support Specialist", friend: "yes", count: "36" },
    { label: "Rohan", status: "On Leave", role: "System Administrator", friend: "no", count: "37" },
    { label: "Sakshi", status: "Active", role: "Content Writer", friend: "yes", count: "38" },
    { label: "Samir", status: "Active", role: "Developer", friend: "no", count: "39" },
    { label: "Shweta", status: "Inactive", role: "Product Manager", friend: "yes", count: "40" },
    { label: "Tarun", status: "Active", role: "DevOps Engineer", friend: "no", count: "41" },
    { label: "Trisha", status: "Active", role: "Designer", friend: "yes", count: "42" },
    { label: "Utkarsh", status: "On Leave", role: "Data Analyst", friend: "no", count: "43" },
    { label: "Vandana", status: "Active", role: "HR Manager", friend: "yes", count: "44" },
    { label: "Varun", status: "Active", role: "Developer", friend: "yes", count: "45" },
    { label: "Vidya", status: "Inactive", role: "Marketing Lead", friend: "no", count: "46" },
    { label: "Yash", status: "Active", role: "QA Engineer", friend: "yes", count: "47" },
    { label: "Zara", status: "Active", role: "Designer", friend: "no", count: "48" },
    { label: "Zoya", status: "On Leave", role: "Developer", friend: "yes", count: "49" },
    { label: "Aman", status: "Active", role: "Scrum Master", friend: "no", count: "50" }
  ]



  return (
   <>
   <TablePagination
      columns={columns}
      data={data}
      keyExtractor={(row) => row.label}
    />
   </>
  )
}

export default App
