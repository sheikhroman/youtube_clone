import {  Stack } from '@mui/material';
import { categories } from '../utils/constains';


const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection:{md:'column'},
    }}>
      {categories.map((category) => (
        <button className="category-btn"
          onClick={()=>setSelectedCategory(category.name)}
          style={{
            backgroundColor: category.name === selectedCategory && '#FC1503',
            color: '#FFF'
          }}
        key = {category.name}
        >
          <spand style={{color: category.name === selectedCategory ? '#FFF' : 'red', marginRight:'15px'}}>{ category.icon}</spand>
          <spand style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{ category.name}</spand>
            </button>
          ))}
    </Stack>
  )
}

export default Sidebar