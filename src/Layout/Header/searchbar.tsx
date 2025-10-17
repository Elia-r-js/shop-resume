import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { useProductStore } from '../../store/productStore'

export default function Searchbar() {

    const {products,searchValue , setSearchValue} = useProductStore()

    const filtered = products.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <TextField
              size="small"
              sx={{ mt: "15px"}}
              placeholder="search..."
              
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
                      />
                    </svg>
                  </InputAdornment>
                ),
              }}
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}



            />
  )
}
