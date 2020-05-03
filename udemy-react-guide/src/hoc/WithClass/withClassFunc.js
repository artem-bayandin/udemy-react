import React from 'react'

const withClass = (WrappedComponent, className) => props => <div className={className}><WrappedComponent /></div>

export default withClass