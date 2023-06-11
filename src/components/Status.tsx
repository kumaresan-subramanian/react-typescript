
type StatusProps = {
  status : 'loading' | 'error' | 'success';
}

export const Status = (props:StatusProps) => {
  let message;
  if(props.status === 'loading') message = 'Loading....';
  else if(props.status === 'success') message = 'Data fetched successfully';
  else if(props.status === 'error') message = 'Error fetching data';
  return (
    <div>
      <h2>Staus {message}</h2>
      <h2></h2>
    </div>
  )
}