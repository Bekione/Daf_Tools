import findFoodByBlood, {structurize} from './fetch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const FoodTable = ({bloodType}) => {
  var arr = findFoodByBlood(bloodType)
  var data = structurize(arr)

  var largestArr =[]
  largestArr = data[0]
  if(data[1].length > largestArr.length )
  largestArr = data[1]
  if(data[2].length > largestArr.length )
  largestArr = data[2]

  const style = {
    "& .MuiTableCell-head": {
        backgroundColor: "var(--clr-primary)",
        position: 'sticky',
        top: 0,
        left: 0
    },
    "& .MuiTableCell-root": {
      "&.MuiTableCell-body": {
        color: 'rgb(0,0,0,.85)',
        fontSize: '1rem'
      }
    }
  }
  return (
    <TableContainer component={Paper}  sx={{ maxHeight: 'calc(100vh - 200px)', borderRadius: '6px' }}>
      <Table sx={[style, {minWidth: 650, position: 'relative', transition: 'var(--transition-03)'} ]} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h2 className='column_title'><strong>Good</strong>&nbsp;<small>foods 4 you</small></h2></TableCell>
            <TableCell align="center"><h2 className='column_title'><strong>Bad</strong>&nbsp;<small>foods 4 you</small></h2></TableCell>
            <TableCell align="center"><h2 className='column_title'><strong>Normal</strong>&nbsp;<small>foods 4 you</small></h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (data[0].length !== 0) ?
            largestArr.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(even)': {backgroundColor: '#ddd'}, transition: 'all 0.3s ease' }}>
              <TableCell align="center">{data[0][index]}</TableCell>
              <TableCell align="center">{data[1][index]}</TableCell>
              <TableCell align="center">{data[2][index]}</TableCell>
            </TableRow>  
            ))
            :
            <TableRow>
                <TableCell></TableCell>
                <TableCell sx={{padding: 2, display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center' }}>
                    <p className='empty_msg'  >No blood type selected.</p>
                    <p className='empty_msg'>Food types based on your blood type will appear here.</p>
                </TableCell>
                <TableCell></TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FoodTable; 