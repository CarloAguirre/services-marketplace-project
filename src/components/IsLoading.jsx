import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import '../assets/css/loading.css'
export const IsLoading = () => {
  
    return (
    <div className='loading-wrapper row align-items-center'>
      <Button variant="dark button" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>           
    </div>
  )

  } 