import React from 'react'

function Alerts(props) {
    let firstCapital = (word) => {
        return(word.charAt(0).toUpperCase() + word.slice(1))
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{firstCapital(props.alert.type)}: </strong>{props.alert.msg}
    </div>
  )
}

export default Alerts