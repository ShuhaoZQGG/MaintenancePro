import axios from "axios";
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom"

export default function InventoryDelete(props) {

  window.scrollTo(0, 0);
  const location = useLocation()
  const inventoryData = location.state?.props

  const { setApplicationData } = props;
  const inventory_id = inventoryData.data._id
  console.log(inventory_id)

  const [submit, setSubmit] = useState(false)

  const handleDelete = (event) => {
    event.preventDefault()

    axios.post('http://localhost:3001/inventory/delete',
      { inventory_id: inventory_id },
      { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        axios.get('/inventory')
          .then((res) => setApplicationData(prev => ({
            ...prev, inventory: [...res.data]
          })))
        setSubmit(true)
      })
      .catch((e) => console.log(e))
  }

  return (
    <>
      {submit && <Navigate to="/inventory" />}

      {!submit &&
        <form
          className="card inventory-form"
          autoComplete="off"
        >
          <p> Are you sure you want to delete? </p>
          <Link to="/inventory">
            <button className="button is-info is-outlined danger">
              Cancel
            </button>
          </Link>

          <button
            className="button is-info is-outlined confirm"
            onClick={handleDelete}
          >
            Delete
          </button>


        </form>
      }
    </>
  )
}